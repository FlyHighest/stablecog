import type { BaseTranslation } from '../i18n-types';

const fr: BaseTranslation = {
	Language: 'Langue',
	Home: {
		GenerateButton: 'Générer',
		PromptInput: {
			Placeholder: "Portrait d'un chat par Van Gogh"
		},
		WidthTabBar: {
			Title: 'Largeur',
			Paragraph: "La largeur de l'image."
		},
		HeightTabBar: {
			Title: 'Hauteur',
			Paragraph: "La hauteur de l'image."
		},
		InferenceStepsTabBar: {
			Title: "Nombre d'itérations",
			Paragraph: "Le nombre d'itérations utilisé pour générer (diffuser) l'image."
		},
		GuidanceScaleSlider: {
			Title: 'Degré de supervision',
			Paragraph:
				"A quel point l'image doit respecter la description textuelle. Une valeur plus élevée donnera une image plus proche de la description."
		},
		NegativePromptInput: {
			Title: 'Description négative',
			Placeholder: 'Description négative',
			Paragraph:
				"Supprime ce que vous ne voulez pas voir dans l'image. L'opposé de la description textuelle."
		},
		SeedInput: {
			Title: 'Graine aléatoire (seed)',
			Placeholder: 'Graine aléatoire',
			Paragraph:
				"Permet d'obtenir des résultats reproductibles. Une même graine avec la même description textuelle et les mêmes options génèrent la même image."
		},
		ModelDropdown: {
			Title: 'Modèle',
			Paragraph: "Le modèle IA qui sera utilisé pour générer l'image."
		},
		SchedulerDropdown: {
			Title: 'Programmateur',
			Paragraph:
				"Choisit une manière particulière de générer (diffuser) l'image. Cela peut changer radicalement l'image générée. Certaines nécessitent moins d'étapes pour produire de bons résultats."
		},
		SubmitToGalleryQuestion: {
			Title: 'Soumettre les images générées à la galerie ?',
			Paragraph: 'Vous pourrez modifier vos préférences dans les paramètres.'
		}
	},
	History: {
		GenerationsTitle: 'Images générées',
		GenerationsMaxSavedCountWarning: '{count:number} dernières uniquement',
		NoGenerationsYet: "Vous n'avez encore généré aucune image."
	},
	Live: {
		GenerationsTitle: 'Images générées',
		TotalDurationTitle: 'Durée totale',
		UpscalesTitle: 'Images upscalées',
		GenerationTooltip: {
			CountryTitle: 'Pays',
			Type: {
				Title: 'Type',
				Generation: 'Image générée',
				Upscale: 'Image upscalée'
			},
			DimensionsTitle: 'Dimensions',
			StepsTitle: 'Itérations',
			ScaleTitle: 'Degré',
			DurationTitle: 'Durée',
			Status: {
				Title: 'Statut',
				Started: 'Démarré',
				Succeeded: 'Succès',
				Failed: 'Échec'
			},
			Server: {
				Title: 'Serveur',
				Default: 'Défaut',
				Custom: 'Personnalisé'
			},
			UnknownTitle: 'Inconnu'
		},
		WaitingTitle: "En attente de génération d'images",
		DurationStatusUnknown: 'Inconnu'
	},
	Navbar: {
		HomeTab: 'Accueil',
		HistoryTab: 'Historique',
		GalleryTab: 'Galerie',
		LiveTab: 'Live'
	},
	Settings: {
		Title: 'Paramètres',
		SwitchServerButton: 'Changer de serveur',
		SubmitToGalleryToggle: 'Soumettre à la galerie',
		AdvancedModeToggle: 'Mode avancé',
		AdvancedOptionsDropdown: 'Options avancées',
		AdvancedDropdown: 'Avancé',
		GenerationSettingsButton: 'Paramètres de génération',
		GenerationSettingsTitle: 'Paramètres de génération',
		DarkModeToggle: 'Mode sombre'
	},
	GenerationFullscreen: {
		DownloadButton: 'Télécharger',
		DoneButtonState: 'Terminé !',
		CopyPromptButton: 'Copier la description',
		CopyNegativePromptButton: 'Copier la description négative',
		CopiedButtonState: 'Copié !',
		RerollButton: 'Relancer',
		RegenerateButton: 'Regénérer',
		GenerateButton: 'Générer',
		UpscaleButton: 'Upscaler',
		UpscaleTabBar: {
			UpscaledTitle: 'Upscalé',
			OriginalTitle: 'Original'
		},
		Dimensions: {
			Title: 'Dimensions'
		},
		Duration: {
			Title: 'Durée'
		}
	},
	SetServerModal: {
		SetServerTitle: 'Définir le serveur',
		SwitchServerTitle: 'Changer de serveur',
		Paragraph: 'Le serveur sera utilisé pour générer des images.',
		SetButton: 'Définir',
		DefaultButton: 'Défaut'
	},
	Blog: {
		Title: 'Publications du blog',
		TitleAlt: 'Blog',
		BackToBlogButton: 'Retour au blog'
	},
	Redirect: {
		RedirectingToTitle: 'Redirection vers {name:string}'
	},
	Shared: {
		StartGeneratingTitle: 'Commencez à générer de superbes images !',
		StartGeneratingButton: 'Commencer à générer',
		JoinUsTitle: 'Rejoignez-nous',
		GoHomeButton: "Retour à l'accueil",
		SwitchToDefaultServerButton: 'Basculer vers le serveur par défaut',
		ShareButton: 'Partager',
		ShareOnButton: 'Partager sur {name:string}',
		YesButton: 'Oui',
		NoButton: 'Non',
		EnableButton: 'Activer',
		DisableButton: 'Désactiver',
		AddButton: 'Ajouter',
		CopyLinkButton: 'Copier le lien',
		CopyButton: 'Copier',
		DeleteButton: 'Supprimer',
		ServerUrlInput: {
			Placeholder: 'URL du serveur'
		},
		LoadingTitle: 'Chargement en cours',
		LoadingParagraph: 'Chargement en cours...',
		LoginButton: 'Se connecter',
		LogoutButton: 'Se déconnecter',
		EmailInput: {
			Placeholder: 'Email'
		},
		PasswordInput: {
			Placeholder: 'Mot de passe'
		},
		ModelOptions: {
			'048b4aa3-5586-47ed-900f-f4341c96bdb2': {
				realName: 'Stable Diffusion 1.5',
				simpleName: 'Général'
			},
			'8acfe4c8-751d-4aa6-8c3c-844e3ef478e0': {
				realName: 'Openjourney',
				simpleName: 'Art numérique 3D'
			},
			'36d9d835-646f-4fc7-b9fe-98654464bf8e': {
				realName: 'Arcane Diffusion',
				simpleName: 'Bande dessinée 3D'
			},
			'48a7031d-43b6-4a23-9f8c-8020eb6862e4': {
				realName: 'Ghibli Diffusion',
				simpleName: 'Anime'
			},
			'790c80e1-65b1-4556-9332-196344389572': {
				realName: 'Mo-Di Diffusion',
				simpleName: 'Film animé'
			},
			'eaa438e1-dbf9-48fd-be71-206f0f257617': {
				realName: 'Redshift Diffusion',
				simpleName: '3D Render'
			}
		},
		SchedulerOptions: {
			'55027f8b-f046-4e71-bc51-53d5448661e0': {
				realName: 'LMS'
			},
			'6fb13b76-9900-4fa4-abf8-8f843e034a7f': {
				realName: 'Euler'
			},
			'af2679a4-dbbb-4950-8c06-c3bb15416ef6': {
				realName: 'Euler A.'
			}
		},
		UnknownTitle: 'Inconnu',
		MoreOptionsTitle: "Plus D'Options",
		LessOptionsTitle: "Moins D'Options",
		TryAgainButton: 'Try Again'
	},
	Error: {
		SomethingWentWrong: "Une erreur s'est produite :(",
		NSFW: 'Contenu NSFW détecté, essayez une autre requête :(',
		ServerSeemsOffline:
			'Le serveur semble hors ligne. Vous pouvez rafraîchir la page ou définir un autre serveur à partir des paramètres.',
		ServerSetNotWorking: "Ce serveur n'est pas compatible ou ne répond pas.",
		NotFound: 'Introuvable',
		SupabaseNotFoundCantListen:
			"Instance Supabase introuvable. Impossible d'écouter le flux d'images générées.",
		InvalidEmail: 'Enter a valid email.',
		PasswordTooShort: 'Password must be at least 8 characters.',
		SomethingWentWrongTryAgain: 'Something went wrong, try again.'
	},
	Admin: {
		AdminPanelTitle: 'Administration',
		DeleteButton: 'Supprimer',
		ApproveButton: 'Approuver',
		NoGenerationsToReview: 'Aucune image à approuver.',
		ServersButton: 'Serveurs',
		GalleryButton: 'Galerie'
	},
	SignUp: {
		PageTitle: 'Sign Up',
		PageParagraph: 'Sign up to become a pro member. Unlock the full potential of Stablecog.',
		PageTitleConfirm: 'Confirm',
		PageParagraphConfirm:
			"We've emailed you a 6-digit code. Enter it below to confirm your account.",
		SignUpButton: 'Sign Up',
		ConfirmButton: 'Confirm',
		AlreadyHaveAnAccountTitle: 'Already have an account?',
		LoginInsteadButton: 'Login instead',
		SixDigitCodeInput: {
			Placeholder: '6-Digit Code'
		}
	},
	Login: {
		PageTitle: 'Login',
		PageParagraph: 'Start using Stablecog with all features that are available to your account.',
		DontHaveAnAccountTitle: "Don't have an account?",
		SignUpInsteadButton: 'Sign up instead'
	},
	Pro: {
		PageTitle: 'Become a Pro',
		PageParagraph:
			"Unlock all features of Stablecog and support the project. Without the pro members, Stablecog wouldn't be able to stay completely open-source and offer free generations to everyone.",
		ProPlanTitle: 'Pro',
		Features: {
			FullSpeed: 'Full speed without set limits',
			ImageDimensions: 'Different image dimensions',
			Upscale: 'Upscale images',
			Steps: 'Different inference steps',
			MoreModels: 'More models',
			MoreSchedulers: 'More schedulers',
			SavedToCloud: 'Generations saved to the cloud',
			Upcoming: 'All upcoming features',
			CommercialUse: 'Commercial Use'
		},
		Soon: '(soon)',
		Month: '/month',
		BecomeProButton: 'Become a Pro',
		Success: {
			PageTitle: 'Thanks for becoming a pro!',
			PageParagraph:
				'You now have access to everything Stablecog has to offer. If you have any questions, reach out to us on {platform:string}.'
		},
		Cancel: {
			PageTitle: "You've cancelled",
			PageParagraph:
				"You've cancelled the subscription process. If it was a mistake, you can try again."
		}
	},
	Account: {
		PageTitle: 'Account',
		ManageSubscriptionButton: 'Manage Subscription',
		ManageAccountButton: 'Manage Account',
		MyAccountButton: 'My Account',
		SubscriptionPlanTitle: 'Plan'
	}
};
export default fr;
