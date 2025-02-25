export type TTaskUCog =
	| 'Real-World Image Super-Resolution-Large'
	| 'Real-World Image Super-Resolution-Medium'
	| 'Grayscale Image Denoising'
	| 'Color Image Denoising'
	| 'JPEG Compression Artifact Reduction';

export type TProcessTypeCog = 'generate' | 'upscale' | 'generate-and-upscale';

export type TSchedulerNameCog = 'K_LMS' | 'K_EULER' | 'K_EULER_ANCESTRAL' | 'PNDM';

export type TModelNameCog =
	| 'Stable Diffusion v1.5'
	| 'Stable Diffusion v1.5 Inpaint'
	| 'Openjourney'
	| 'Arcane Diffusion'
	| 'Ghibli Diffusion'
	| 'Mo-Di Diffusion'
	| 'Redshift Diffusion';

export type TOutputImageExtCog = 'png' | 'jpg';
