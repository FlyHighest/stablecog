<script lang="ts">
	import { page } from '$app/stores';
	import NoBgButton from '$components/buttons/NoBgButton.svelte';
	import IconBrain from '$components/icons/IconBrain.svelte';
	import IconBubbles from '$components/icons/IconBubbles.svelte';
	import IconChatBubbleCancel from '$components/icons/IconChatBubbleCancel.svelte';
	import IconChevronDown from '$components/icons/IconChevronDown.svelte';
	import IconHeight from '$components/icons/IconHeight.svelte';
	import IconScale from '$components/icons/IconScale.svelte';
	import IconSeed from '$components/icons/IconSeed.svelte';
	import IconSteps from '$components/icons/IconSteps.svelte';
	import IconWidth from '$components/icons/IconWidth.svelte';
	import TabBar from '$components/tabBars/TabBar.svelte';
	import TabLikeDropdown from '$components/tabBars/TabLikeDropdown.svelte';
	import TabLikeInput from '$components/tabBars/TabLikeInput.svelte';
	import TabLikeRangeInput from '$components/tabBars/TabLikeRangeInput.svelte';
	import LL from '$i18n/i18n-svelte';
	import { tooltip } from '$ts/actions/tooltip';
	import {
		availableModelIdDropdownItems,
		availableSchedulerIdDropdownItems,
		guidanceScaleMax,
		guidanceScaleMin,
		heightTabs,
		inferenceStepsTabs,
		maxFreePixelSteps,
		maxPromptLength,
		maxSeed,
		widthTabs
	} from '$ts/constants/main';
	import {
		guidanceScaleTooltip,
		heightTooltip,
		inferenceStepsTooltip,
		modelTooltip,
		negativePromptTooltip,
		schedulerTooltip,
		seedTooltip,
		widthTooltip
	} from '$ts/constants/tooltips';
	import { mLogAdvancedMode } from '$ts/helpers/loggers';
	import { advancedMode, advancedModeApp } from '$ts/stores/advancedMode';
	import {
		generationGuidanceScale,
		generationHeight,
		generationInferenceSteps,
		generationModelId,
		generationSchedulerId,
		generationSeed,
		generationWidth,
		negativePromptInputValue
	} from '$ts/stores/generationSettings';
	import { isTouchscreen } from '$ts/stores/isTouchscreen';
	import { currentServer } from '$ts/stores/serverHealth';
	import { windowWidth } from '$ts/stores/window';

	export let isCheckComplete: boolean;
	export let formElement: HTMLFormElement;
	export let disabled = false;
	export let calculateDistance = true;
	export let container: HTMLDivElement | undefined = undefined;
	export let containerTopMinDistance = 0;
	export let containerBottomMinDistance = 0;

	$: isInferenceStepsValid = (s: string) => {
		return Number(s) * Number($generationHeight) * Number($generationWidth) < maxFreePixelSteps;
	};

	$: logProps = {
		'SC - Plan': $page.data.tier
	};
</script>

<div class="w-full flex flex-wrap items-start justify-center px-2px py-4 gap-4">
	{#if $advancedModeApp && $currentServer.features?.map((f) => f.name).includes('negative_prompt')}
		<TabLikeInput
			disabled={!isCheckComplete || disabled}
			class="w-full md:w-172 max-w-full order-1"
			placeholder={$LL.Home.NegativePromptInput.Placeholder()}
			type="text"
			bind:value={$negativePromptInputValue}
			max={maxPromptLength}
			{formElement}
		>
			<div
				slot="title"
				use:tooltip={$negativePromptTooltip}
				class="p-3.5 flex items-center justify-center"
			>
				<IconChatBubbleCancel class="w-6 h-6 text-c-on-bg/25" />
			</div>
		</TabLikeInput>
	{/if}
	<TabBar
		{disabled}
		class="w-full md:w-84 max-w-full order-2"
		tabs={widthTabs}
		bind:value={$generationWidth}
		name="Width"
		hideSelected={!isCheckComplete}
	>
		<div slot="title" use:tooltip={$widthTooltip} class="p-3.5 flex items-center justify-center">
			<IconWidth class="w-6 h-6 text-c-on-bg/25" />
		</div>
	</TabBar>
	<TabBar
		{disabled}
		class="w-full md:w-84 max-w-full order-2"
		tabs={heightTabs}
		bind:value={$generationHeight}
		name="Height"
		hideSelected={!isCheckComplete}
	>
		<div slot="title" use:tooltip={$heightTooltip} class="p-3.5 flex items-center justify-center">
			<IconHeight class="w-6 h-6 text-c-on-bg/25" />
		</div>
	</TabBar>
	{#if $currentServer.lastHealthStatus === 'unknown' || $currentServer.features
			?.map((f) => f.name)
			.includes('model')}
		<TabLikeDropdown
			class="w-full md:w-84 max-w-full {$advancedModeApp ? 'order-1' : 'order-2'}"
			{calculateDistance}
			{container}
			{containerTopMinDistance}
			{containerBottomMinDistance}
			bind:value={$generationModelId}
			{disabled}
			items={$availableModelIdDropdownItems}
			name="Model"
		>
			<div slot="title" use:tooltip={$modelTooltip} class="p-3.5 flex items-center justify-center">
				<IconBrain class="w-6 h-6 text-c-on-bg/25" />
			</div>
		</TabLikeDropdown>
	{/if}
	{#if $advancedModeApp}
		<TabLikeRangeInput
			{disabled}
			class="w-full md:w-84 max-w-full order-2"
			bind:value={$generationGuidanceScale}
			min={guidanceScaleMin}
			max={guidanceScaleMax}
		>
			<div
				slot="title"
				use:tooltip={$guidanceScaleTooltip}
				class="p-3.5 flex items-center justify-center"
			>
				<IconScale class="w-6 h-6 text-c-on-bg/25" />
			</div>
		</TabLikeRangeInput>
		<TabBar
			{disabled}
			class="w-full md:w-84 max-w-full order-2"
			tabs={inferenceStepsTabs}
			isValid={isInferenceStepsValid}
			validityDependsOn={[$generationHeight, $generationWidth]}
			bind:value={$generationInferenceSteps}
			name="Steps"
			hideSelected={!isCheckComplete}
		>
			<div
				slot="title"
				use:tooltip={$inferenceStepsTooltip}
				class="p-3.5 flex items-center justify-center"
			>
				<IconSteps class="w-6 h-6 text-c-on-bg/25" />
			</div>
		</TabBar>
		{#if $currentServer.lastHealthStatus === 'unknown' || $currentServer.features
				?.map((f) => f.name)
				.includes('scheduler')}
			<TabLikeDropdown
				class="w-full md:w-84 max-w-full order-2"
				{calculateDistance}
				{container}
				{containerTopMinDistance}
				{containerBottomMinDistance}
				{disabled}
				bind:value={$generationSchedulerId}
				items={$availableSchedulerIdDropdownItems}
				name="Scheduler"
			>
				<div
					slot="title"
					use:tooltip={$schedulerTooltip}
					class="p-3.5 flex items-center justify-center"
				>
					<IconBubbles class="w-6 h-6 text-c-on-bg/25" />
				</div>
			</TabLikeDropdown>
		{/if}
		<TabLikeInput
			disabled={!isCheckComplete || disabled}
			class="w-full md:w-84 max-w-full order-2"
			placeholder={$LL.Home.SeedInput.Placeholder()}
			bind:value={$generationSeed}
			type="number"
			max={maxSeed}
			{formElement}
		>
			<div slot="title" use:tooltip={$seedTooltip} class="p-3.5 flex items-center justify-center">
				<IconSeed class="w-6 h-6 text-c-on-bg/25" />
			</div>
		</TabLikeInput>
	{/if}
	<div class="w-full flex items-center justify-center order-last -mb-2 md:mb-0">
		<NoBgButton
			hoverFrom={$advancedModeApp ? 'bottom' : 'top'}
			onClick={() => {
				const val = !$advancedModeApp;
				mLogAdvancedMode(val === true ? 'On' : 'Off', logProps);
				advancedModeApp.set(val);
				advancedMode.set(val);
			}}
		>
			<div
				class="max-w-full min-w-0 overflow-hidden flex items-center gap-2 text-sm transition-none px-1"
			>
				<div
					class="-ml-1 w-5 h-5 flex-shrink-0 transform transition {$advancedModeApp
						? 'rotate-180'
						: 'rotate-0'}"
				>
					<IconChevronDown
						class="w-full h-full transition text-c-on-bg/25 {!$isTouchscreen
							? 'group-hover:text-c-primary'
							: ''}"
					/>
				</div>
				<p
					class="flex-shrink whitespace-nowrap overflow-hidden overflow-ellipsis text-c-on-bg/25 transition {!$isTouchscreen
						? 'group-hover:text-c-primary'
						: ''}"
				>
					{$advancedModeApp ? $LL.Shared.LessOptionsTitle() : $LL.Shared.MoreOptionsTitle()}
				</p>
			</div>
		</NoBgButton>
	</div>
</div>
