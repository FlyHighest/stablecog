import { STRIPE_SIGNING_SECRET_TEST } from '$env/static/private';
import { stripe } from '$ts/constants/stripe';
import { supabaseAdmin } from '$ts/constants/supabaseAdmin';
import type { RequestHandler } from '@sveltejs/kit';
import Stripe from 'stripe';

const cryptoProvider = Stripe.createSubtleCryptoProvider();

export const POST: RequestHandler = async (event) => {
	console.log('Stripe webhook - Request received - /api/stripe/webhooks');
	const signature = event.request.headers.get('Stripe-Signature');
	if (!signature) return new Response('No signature', { status: 400 });

	const body = await event.request.text();

	let receivedEvent;
	try {
		receivedEvent = await stripe.webhooks.constructEventAsync(
			body,
			signature,
			STRIPE_SIGNING_SECRET_TEST,
			undefined,
			cryptoProvider
		);
	} catch (err) {
		console.log('Stripe webhook - Error constructing event: ', (err as Error).message);
		return new Response((err as Error).message, { status: 400 });
	}

	console.log(`Stripe webhook - Event received: ${receivedEvent.id}`);

	const requestOptions =
		receivedEvent.request && receivedEvent.request.idempotency_key
			? {
					idempotencyKey: receivedEvent.request.idempotency_key
			  }
			: {};

	let retrievedEvent;
	try {
		retrievedEvent = await stripe.events.retrieve(receivedEvent.id, requestOptions);
	} catch (err) {
		return new Response((err as Error).message, { status: 400 });
	}

	const subscription = retrievedEvent.data.object;
	// @ts-ignore
	const customerId = subscription.customer;
	// @ts-ignore
	const productId = subscription.plan?.product;
	if (customerId && productId)
		console.log(`Stripe webhook - Customer ID: ${customerId} - Product: ${productId}`);

	switch (retrievedEvent.type) {
		case 'customer.subscription.deleted':
			await supabaseAdmin
				.from('user')
				.update({
					subscription_tier: 'FREE'
				})
				.match({ stripe_customer_id: customerId });
			break;
		case 'customer.subscription.updated':
			const prod = await stripe.products.retrieve(productId);
			await supabaseAdmin
				.from('user')
				.update({
					subscription_tier: prod.name.toUpperCase()
				})
				.match({ stripe_customer_id: customerId });
			break;
		default:
			console.log(`Stripe webhook - Unhandled retrievedEvent type ${retrievedEvent.type}`);
	}

	return new Response(JSON.stringify({ id: retrievedEvent.id, status: 'ok' }), { status: 200 });
};
