<script lang="ts">
	export let locale: Locales;
	export { classes as class };
	let classes = 'w-6 h-6';
</script>

{#if locale === 'en'}
	<svg
		class={classes}
		width="512"
		height="512"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
	>
		<path fill="#012169" d="M0 0h512v512H0z" />
		<path
			fill="#FFF"
			d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
		/>
		<path
			fill="#C8102E"
			d="m184 324 11 34L42 512H0v-3l184-185zm124-12 54 8 150 147v45L308 312zM512 0 320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z"
		/>
		<path fill="#FFF" d="M176 0v512h160V0H176zM0 176v160h512V176H0z" />
		<path fill="#C8102E" d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z" />
	</svg>
{:else if locale === 'tr'}
	<svg
		class={classes}
		width="512"
		height="512"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
	>
		<g fill-rule="evenodd">
			<path fill="#e30a17" d="M0 0h512v512H0z" />
			<path
				fill="#fff"
				d="M348.8 264c0 70.6-58.3 127.9-130.1 127.9s-130.1-57.3-130.1-128 58.2-127.8 130-127.8S348.9 193.3 348.9 264z"
			/>
			<path
				fill="#e30a17"
				d="M355.3 264c0 56.5-46.6 102.3-104.1 102.3s-104-45.8-104-102.3 46.5-102.3 104-102.3 104 45.8 104 102.3z"
			/>
			<path
				fill="#fff"
				d="m374.1 204.2-1 47.3-44.2 12 43.5 15.5-1 43.3 28.3-33.8 42.9 14.8-24.8-36.3 30.2-36.1-46.4 12.8-27.5-39.5z"
			/>
		</g>
	</svg>
{:else if locale === 'de'}
	<svg
		class={classes}
		width="512"
		height="512"
		xmlns="http://www.w3.org/2000/svg"
		id="flag-icons-de"
		viewBox="0 0 512 512"
	>
		<path fill="#ffce00" d="M0 341.3h512V512H0z" />
		<path d="M0 0h512v170.7H0z" />
		<path fill="#d00" d="M0 170.7h512v170.6H0z" />
	</svg>
{:else if locale === 'ru'}
	<svg
		class={classes}
		width="512"
		height="512"
		xmlns="http://www.w3.org/2000/svg"
		id="flag-icons-ru"
		viewBox="0 0 512 512"
	>
		<g fill-rule="evenodd" stroke-width="1pt">
			<path fill="#fff" d="M0 0h512v512H0z" />
			<path fill="#0039a6" d="M0 170.7h512V512H0z" />
			<path fill="#d52b1e" d="M0 341.3h512V512H0z" />
		</g>
	</svg>
{:else if locale === 'es'}
	<svg
		class={classes}
		width="512"
		height="512"
		viewBox="0 0 512 512"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M0 0H512V512H0V0Z" fill="#AA151B" />
		<path d="M0 128H512V384H0V128Z" fill="#F1BF00" />
	</svg>
{:else if locale === 'hi'}
	<svg
		class={classes}
		width="512"
		height="512"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		id="flag-icons-in"
		viewBox="0 0 512 512"
	>
		<path fill="#f93" d="M0 0h512v170.7H0z" />
		<path fill="#fff" d="M0 170.7h512v170.6H0z" />
		<path fill="#128807" d="M0 341.3h512V512H0z" />
		<g transform="translate(256 256) scale(3.41333)">
			<circle r="20" fill="#008" />
			<circle r="17.5" fill="#fff" />
			<circle r="3.5" fill="#008" />
			<g id="d">
				<g id="c">
					<g id="b">
						<g id="a" fill="#008">
							<circle r=".9" transform="rotate(7.5 -8.8 133.5)" />
							<path d="M0 17.5.6 7 0 2l-.6 5L0 17.5z" />
						</g>
						<use xlink:href="#a" width="100%" height="100%" transform="rotate(15)" />
					</g>
					<use xlink:href="#b" width="100%" height="100%" transform="rotate(30)" />
				</g>
				<use xlink:href="#c" width="100%" height="100%" transform="rotate(60)" />
			</g>
			<use xlink:href="#d" width="100%" height="100%" transform="rotate(120)" />
			<use xlink:href="#d" width="100%" height="100%" transform="rotate(-120)" />
		</g>
	</svg>
{:else if locale === 'fr'}
	<svg
		class={classes}
		width="512"
		height="512"
		viewBox="0 0 512 512"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="170" height="512" fill="#002654" />
		<rect x="342" width="170" height="512" fill="#CE1126" />
		<rect x="170" width="172" height="512" fill="white" />
	</svg>
{:else if locale === 'zh-Hans'}
	<svg
		class={classes}
		width="512"
		height="512"
		viewBox="0 0 512 512"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M0 0h512v512H0V0Z" fill="#EE1C25" />
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="m236.58 33.05 17.25 8.45 12.14-14.17-1.2 19.53 18.33 8.97-19.08 3.28-1.1 17.8-9.58-15.96-18.94 3.25 12.28-14.34-10.1-16.81Zm-31.78 71.91-48.43 31.34 17.71 53.14-48.4-33.28-51.44 33.28 21.06-54.16-44.1-30.32h55.9L128 51.2l17.92 53.76h58.88Zm103.69-12.24-12.62-14.51 2.76 19.43-16.9 8.44 18.73 4.37 2.62 18.45 7.94-15.98 18.86 4.4-13.4-15.4 8.71-17.54-16.7 8.34Zm-1.92 59.81 5.6 18.4 18.66-.78-15.12 12.45 5.94 19.55-15.42-11.73-13.78 11.35 5.14-17.92-15.31-11.64 18.88-.8 5.41-18.88Zm-42.5 72.22 1.94-19.12-12.27 15.31-17.7-6.54 9.61 16.64-11.64 14.53 17.07-5.15 9.7 16.76 2.06-20.3 18.74-5.66-17.51-6.47Z"
			fill="#FF0"
		/>
	</svg>
{:else if locale === 'ko'}
	<svg
		class={classes}
		width="512"
		height="512"
		viewBox="0 0 512 512"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path fill="#fff" d="M0 0h512v512H0z" />
		<path
			d="M255.974 255.992c-17.236 25.846-52.162 32.824-78.007 15.588-25.846-17.237-32.824-52.162-15.587-78.008l.062-.093a112.497 112.497 0 0 1 155.952-31.082 112.501 112.501 0 0 1 31.175 156.015l-93.595-62.42Z"
			fill="#CD2E3A"
		/>
		<path
			d="M255.974 255.992c-17.236 25.846-52.162 32.824-78.007 15.588-25.838-17.232-32.82-52.141-15.603-77.985a112.504 112.504 0 0 0 31.19 155.992 112.497 112.497 0 0 0 156.015-31.175 56.249 56.249 0 1 0-93.595-62.42Z"
			fill="#0047A0"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="m399.019 166.262 28.609 42.898 15.599-10.404-28.609-42.897-15.599 10.403Zm-5.202-7.8 15.599-10.403-28.609-42.898-15.599 10.404 28.609 42.897Zm-5.21-58.502 62.42 93.595 15.599-10.404-62.42-93.595-15.599 10.404Zm57.209 35.092 28.609 42.898 15.599-10.404-28.609-42.897-15.599 10.403Zm-5.202-7.8 15.6-10.403-28.61-42.898-15.599 10.404 28.609 42.897Zm-356.218-53.3-62.42 93.594 15.599 10.404 62.42-93.595-15.6-10.404Zm23.398 15.605-62.42 93.594 15.6 10.404 62.419-93.595-15.599-10.403Zm23.399 15.605-62.42 93.594 15.6 10.404 62.419-93.595-15.599-10.403Zm358.78 239.276-28.609 42.898-15.599-10.404 28.609-42.897 15.599 10.403Zm-23.398-15.605-28.61 42.898-15.599-10.404 28.609-42.897 15.6 10.403Zm-33.811 50.697-15.599-10.403-28.61 42.898 15.6 10.403 28.609-42.898Zm10.412-66.302-28.609 42.898-15.599-10.404 28.609-42.897 15.599 10.403Zm-33.811 50.697-15.599-10.403-28.609 42.898 15.599 10.403 28.609-42.898Zm46.797 31.21-15.599-10.403-28.609 42.898 15.599 10.403 28.609-42.898ZM84.447 438.033l-62.42-93.595 15.599-10.403 62.42 93.595-15.6 10.403Zm23.399-15.605-28.61-42.898 15.6-10.403 28.609 42.898-15.599 10.403Zm-18.212-61.101-15.6 10.404-28.608-42.898 15.599-10.403 28.609 42.897Zm41.61 45.496-62.42-93.595 15.6-10.403 62.419 93.595-15.599 10.403Z"
			fill="#000"
		/>
	</svg>
{:else if locale === 'pt-br'}
	<svg
		class={classes}
		width="512"
		height="512"
		viewBox="0 0 512 512"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H512V512H0V0Z" fill="#229E45" />
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M261.4 405.4L491.2 256.2L260 106.6L29.2998 256.6L261.3 405.4H261.4Z"
			fill="#F8E509"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M361.5 256C361.904 269.02 359.687 281.989 354.98 294.136C350.273 306.283 343.173 317.359 334.101 326.708C325.029 336.056 314.17 343.486 302.17 348.555C290.17 353.624 277.274 356.229 264.247 356.216C251.22 356.202 238.329 353.57 226.339 348.477C214.35 343.383 203.507 335.931 194.454 326.564C185.401 317.197 178.323 306.106 173.642 293.949C168.96 281.793 166.769 268.82 167.2 255.8C168.035 230.574 178.65 206.662 196.799 189.122C214.948 171.582 239.207 161.79 264.447 161.816C289.687 161.842 313.926 171.684 332.039 189.262C350.152 206.839 360.717 230.773 361.5 256Z"
			fill="#2B49A3"
		/>
	</svg>
{:else if locale === 'pt-pt'}
	<svg
		class={classes}
		width="512"
		height="512"
		viewBox="0 0 512 512"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M205 0h307v512H205V0Z" fill="red" />
		<path d="M0 0h205v512H0V0Z" fill="#060" />
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M208 142h3v2c35 2 66 20 86 48 3 1 4 3 6 6 0 0 0 0 0 0l-1 1 2 3 4 5-2 1c6 12 10 27 11 41 2 2 2 3 2 5l-2 2h0v3c2 2 2 3 2 5l-2 1c-1 14-5 28-11 41v4c-1 1-1 3-3 3l-7 10c1 2 0 3-1 4h-1l-3 1a113 113 0 0 1-80 40v3h-3v-2h-7v2h-2v-3c-36-2-67-20-87-48l-2-1c-1-1-2-2-1-3l-3-5c-2 0-2-1-3-2l1-2c-7-13-11-27-12-43h-1c0-2-1-4 1-5v-5c-2 0-1-2-1-3h0l1-2c1-12 4-24 8-35v-3c0-2 1-3 2-3l6-10c-1-3 0-4 1-6l4-1c19-27 50-45 86-47v-2h2v1h7v-1Zm-50 66-25-11c22-5 44-6 66-6v19l-41-2Zm101 58-39-25a256 256 0 0 1 86 16c-16 5-32 7-47 9Zm38 30-24-20c11-1 21-3 32-6l-8 26ZM139 179c17-14 38-22 60-24v24c-22 0-45 1-66 6l6-6Zm-34 63 4-17 16 12-20 5Zm-1 13v2a251 251 0 0 0 69 11l-34-22a292 292 0 0 0-35 9Zm11 46c-5-10-8-20-10-32a424 424 0 0 0 90 12l4 2v5a285 285 0 0 0-84 13Zm7 12c25 6 51 9 77 10v-23c-24 0-48 3-69 9-3 0-10 1-8 4Zm11 14c17 4 40 8 66 8v22c-23-1-51-13-66-30Zm143 0c-18 17-41 28-65 30v-21c22-1 44-3 65-9Zm19-116c5 9 7 20 9 32-29-11-62-14-93-14v-7a416 416 0 0 0 84-11Zm-6-11s0 0 0 0c-26-7-52-9-78-9v19a408 408 0 0 0 78-10Zm-13-15c-19-19-43-28-65-30v24c22 0 44 1 65 6Zm-65 115v23c17 0 35-2 52-5l-34-17-18-1Z"
			fill="#FF0"
			stroke="#000"
			stroke-width=".7"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M137 268a67 67 0 0 0 20 48 67 67 0 0 0 115-47v-91H137v90Z"
			fill="#fff"
			stroke="#000"
			stroke-width=".8"
		/>
		<path
			d="M140 269a64 64 0 0 0 19 45 65 65 0 0 0 105-21c4-7 5-16 5-24v-88H140v88m103-62v62a38 38 0 0 1-11 27c-7 7-17 12-27 12-11 0-20-5-28-12-7-7-11-17-11-27v-62h77Z"
			fill="red"
		/>
		<path
			d="M140 269a64 64 0 0 0 19 45 65 65 0 0 0 105-21c4-7 5-16 5-24v-88H140v88m103-62v62a38 38 0 0 1-11 27c-7 7-17 12-27 12-11 0-20-5-28-12-7-7-11-17-11-27v-62h77Z"
			stroke="#000"
			stroke-width=".6"
		/>
	</svg>
{/if}
