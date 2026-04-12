let _lang = localStorage.getItem('lang') || 'sk'

function getLang() { return _lang }

function t(key) {
  return TRANSLATIONS[_lang]?.[key] ?? TRANSLATIONS.sk[key] ?? key
}

function setLang(lang) {
  _lang = lang
  localStorage.setItem('lang', lang)
  document.documentElement.lang = lang === 'cz' ? 'cs' : lang === 'sk' ? 'sk' : lang === 'hu' ? 'hu' : lang
  applyTranslations()
  // re-render calculator if on index page
  if (typeof aktualizujLabely === 'function') aktualizujLabely()
  if (typeof vypocitaj === 'function') vypocitaj()
  // update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang)
  })
  // update page title — use data-title-key on <html> if present, else default pageTitle
  const titleKey = document.documentElement.dataset.titleKey || 'pageTitle'
  document.title = t(titleKey)
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n)
  })
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml)
  })
  // active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === _lang)
  })
}

function pluralYear(n) {
  if (_lang === 'en') return n === 1 ? 'year' : 'years'
  if (_lang === 'cz') return n === 1 ? 'rok' : n <= 4 ? 'roky' : 'let'
  if (_lang === 'hu') return 'év'
  return n === 1 ? 'rok' : n <= 4 ? 'roky' : 'rokov'
}

function formatNumber(val) {
  const locale = _lang === 'en' ? 'en-GB' : _lang === 'cz' ? 'cs-CZ' : _lang === 'hu' ? 'hu-HU' : 'sk-SK'
  return new Intl.NumberFormat(locale, {
    style: 'currency', currency: 'EUR', maximumFractionDigits: 0
  }).format(val)
}

// Apply translations immediately (scripts are at end of body, DOM is ready)
applyTranslations()
