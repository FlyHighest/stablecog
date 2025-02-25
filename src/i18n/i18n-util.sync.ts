// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters'
import type { Locales, Translations } from './i18n-types'
import { loadedFormatters, loadedLocales, locales } from './i18n-util'

import de from './de'
import en from './en'
import es from './es'
import fr from './fr'
import hi from './hi'
import ko from './ko'
import pt_br from './pt-br'
import pt_pt from './pt-pt'
import ru from './ru'
import tr from './tr'
import zh_Hans from './zh-Hans'

const localeTranslations = {
	de,
	en,
	es,
	fr,
	hi,
	ko,
	'pt-br': pt_br,
	'pt-pt': pt_pt,
	ru,
	tr,
	'zh-Hans': zh_Hans,
}

export const loadLocale = (locale: Locales): void => {
	if (loadedLocales[locale]) return

	loadedLocales[locale] = localeTranslations[locale] as unknown as Translations
	loadFormatters(locale)
}

export const loadAllLocales = (): void => locales.forEach(loadLocale)

export const loadFormatters = (locale: Locales): void =>
	void (loadedFormatters[locale] = initFormatters(locale))
