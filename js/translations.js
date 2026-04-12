const TRANSLATIONS = {
  sk: {
    // Page titles
    pageTitle: 'Investičná kalkulačka',
    eduPageTitle: 'Základy investovania – Investičná kalkulačka',

    // Nav / shared
    navBrand: '📈 Investičná kalkulačka',
    navEdu: '📖 Základy investovania',
    navCalc: '🧮 Kalkulačka',

    // Index page static
    ctaBtn: '📖 Nový v investovaní? Začni tu →',
    h1: 'Koľko budem mať o X rokov?',
    subheading: 'Zadaj parametre a zisti reálnu hodnotu svojich investícií',
    labelMesacna: 'Mesačná investícia:',
    labelRoky: 'Počet rokov investovania:',
    labelVek: 'Váš vek:',
    labelInflacia: 'Ročná inflácia:',
    labelRiziko: 'Rizikový profil',
    optKonzerv: 'Konzervatívny',
    optVyvazeny: 'Vyvážený',
    optAgresivny: 'Agresívny',
    cardResults: '📊 Výsledky podľa indexu',
    cardEtf: '✅ Odporúčané ETF',
    cardChart: '📈 Vývoj investície v čase',
    cardBrokers: '🏦 Porovnanie brokerov',

    // Range hint labels
    rangeRokyMin: '1 rok',
    rangeRokyMax: '50 rokov',

    // Footer
    footerAboutTitle: '📈 Investičná kalkulačka',
    footerAboutText: 'Bezplatný vzdelávací nástroj pre dlhodobých investorov v EÚ. Pomáhame pochopiť silu zloženého úročenia a orientovať sa vo svete ETF.',
    footerSources: 'Zdroje dát: MSCI, S&P Global, NASDAQ, ECB.',
    footerLegalTitle: '⚖️ Právne upozornenie',
    footerLegal1: 'Táto stránka slúži <strong class="text-white">výlučne na vzdelávacie účely</strong> a nepredstavuje investičné poradenstvo v zmysle zákona č. 566/2001 Z. z. o cenných papieroch ani smernice MiFID II.',
    footerLegal2: 'Historické výnosy <strong class="text-white">nezaručujú</strong> budúce výsledky. Hodnota investície môže klesať aj rásť. Investovanie je spojené s rizikom čiastočnej alebo úplnej straty vloženého kapitálu.',
    footerLegal3: 'Pred akýmkoľvek investičným rozhodnutím odporúčame konzultáciu s licencovaným finančným poradcom registrovaným v NBS.',
    footerCopy: '© 2026 Investičná kalkulačka — nie sme licencovaní investiční poradcovia | Nie sme pobočkou ani partnerom žiadneho brokera',

    // Dynamic strings (app.js)
    thIndex: 'Index',
    thVlozene: 'Vložené',
    thNominalne: 'Nominálne',
    thRealne: 'Reálne (po inflácii)',
    thZisk: 'Zisk',
    inflaciaNote: '* Historické výnosy nezaručujú budúce výsledky. Inflácia: ',
    metaLabel: 'ℹ️ Zdroje & metodika',
    metaHtml: `<strong>📊 Zdroje a metodika</strong><br><br>
Výnosy sú historické <strong>CAGR</strong> (geometrický priemer) 1985–2024,<br>
vrátane reinvestovaných dividend (total return index), v USD.<br><br>
<strong>NASDAQ 100 ~14%</strong> — NASDAQ / Bloomberg, total return<br>
<strong>S&P 500 ~11%</strong> — S&P Global / Shiller data, total return<br>
<strong>MSCI World ~9%</strong> — MSCI official index, net total return<br>
<strong>Dlhopisy ~3%</strong> — ECB / Bloomberg Euro Govt Bond Index;<br>
&nbsp;&nbsp;forward estimate podľa súčasných výnosov eurozóny<br><br>
Reálna hodnota: r<sub>real</sub> = (1 + r<sub>nom</sub>) / (1 + i) − 1<br>
aplikovaná mesačne na každý vklad zvlášť.`,
    volba1: '1. voľba',
    volba2: '2. voľba',
    isinLabel: 'ISIN:',
    precoLabel: 'Prečo?',
    etfDisclaimer: '⚠️ Toto nie je investičné poradenstvo. Informácie sú len vzdelávacie.',
    warn1Rok: '⚠️ Pre 1-ročný horizont odporúčame dlhopisy bez ohľadu na zvolený profil.',
    warnKratkyPrefix: '💡 Pre horizont ',
    warnKratkySuffix: ' odporúčame konzervatívnejší prístup ako pri dlhodobom investovaní.',
    thBroker: 'Broker',
    thPoplatkyETF: 'Poplatky<br>ETF',
    thDostupnost: 'Dostupnosť',
    thJazyk: 'Jazyk',
    thNakladyPrefix: 'Náklady za ',
    thNakladySuffix: ' rokov',
    thZostatok: 'Zostatok (nominálne)',
    thUcet: 'Účet',
    otvorUcet: 'Otvoriť účet',
    dostupnostEU: 'Celá EÚ',
    dostupnostPartial: '18 krajín EÚ',
    dostupnostSKCZ: 'SK/CZ',
    brokerNotePrefix: '* Náklady vypočítané pri ',
    brokerNoteMid: '/mes počas ',
    brokerNoteSuffix: ' rokov. Výnos: ',
    brokerNoteEnd: '% p.a. Hodnoty sú nominálne.',
    chartDlhopisy: 'Dlhopisy (3%)',
    chartVlozene: 'Vložené',
    chartNasdaqReal: 'NASDAQ reálne',
    chartSP500Real: 'S&P 500 reálne',
    chartMSCIReal: 'MSCI World reálne',
    chartYearShort: 'r.',
    indexDlhopisy: 'Dlhopisy',
    regulaciaLabel: 'Regulácia:',
    ochranaLabel: 'Ochrana:',
    zlozenieLabel: 'Zloženie:',
    priemerVynosLabel: 'Priemerný výnos:',

    // Broker meta
    brokerMeta: {
      xtb:   { regulacia: 'KNF (Poľsko), licencia v EÚ', ochrana: 'ICF do 20 000 €', poznamka: 'Aktíva klientov oddelené od majetku XTB. ETF sú cenné papiere vo tvojom vlastníctve — XTB je len sprostredkovateľ. V prípade bankrotu brokera sa ETF vrátia tebe.' },
      t212:  { regulacia: 'FCA (UK), CySEC (Cyprus)', ochrana: 'ICF do 20 000 €', poznamka: 'ETF spravuje nezávislý depozitár (Interactive Brokers UK). Tvoje aktíva nie sú majetkom Trading 212. Sprostredkovateľ, nie správca.' },
      degiro:{ regulacia: 'AFM / DNB (Holandsko)', ochrana: 'ICF do 20 000 €', poznamka: 'ETF sú držané v samostatnej právnickej entite Stichting DEGIRO — oddelene od majetku brokera. Tvoje cenné papiere sú chránené aj pri bankrote DEGIRO.' },
      tr:    { regulacia: 'BaFin (Nemecko) — banková licencia', ochrana: 'Vklady do 100 000 € (bankový depozit) + ICF do 20 000 €', poznamka: 'Trade Republic je nemecká banka. ETF ako cenné papiere sú oddelené od súvahy banky a patria tebe, nie banke.' },
      etoro: { regulacia: 'CySEC (Cyprus), FCA (UK)', ochrana: 'ICF do 20 000 €', poznamka: 'Klientske aktíva sú oddelené od majetku eToro. ETF sú vo vlastníctve klienta. eToro je sprostredkovateľ — vydavateľom ETF je iShares, Vanguard a pod.' },
      portu: { regulacia: 'ČNB (Česká republika)', ochrana: 'ICF do 20 000 €', poznamka: 'Aktíva klientov sú uložené u depozitára (Raiffeisen Bank). Portu spravuje portfólio, ale tvoje ETF sú majetkom teba, nie Portu.' }
    },

    // ETF descriptions
    etf: {
      'LU1681038243': { // 6AQQ
        dovod: 'Najvyšší historický výnos ~14% p.a., TER 0,23%, ACC — dostupné na XTB aj Trading 212 v EUR (Xetra: 6AQQ.DE)',
        zlozenie: '100 najväčších nefinančných US tech spoločností — Apple, Microsoft, Nvidia, Amazon...'
      },
      'IE00B5BMR087': { // CSP1
        dovod: 'Stabilnejší ako NASDAQ, ~11% p.a., TER 0,07%, ACC — dostupné na XTB aj Trading 212 v EUR (Xetra: SXR8.DE)',
        zlozenie: '500 najväčších US spoločností naprieč všetkými sektormi'
      },
      'IE00B4L5Y983': { // IWDA
        dovod: 'Globálna diverzifikácia, nižšia volatilita, TER 0,20%, ACC — dostupné na XTB aj Trading 212 v EUR',
        zlozenie: '~1 400 spoločností z 23 rozvinutých krajín (US, EU, JP...)'
      },
      'IE00BK5BQT80': { // VWCE
        dovod: 'Maximálna diverzifikácia vr. rozvíjajúcich sa trhov, TER 0,22%, ACC — dostupné na XTB aj Trading 212 v EUR',
        zlozenie: '~3 700 spoločností z celého sveta vrátane emerging markets'
      },
      'IE00B4WXJJ64': { // IEAG
        dovod: 'Štátne dlhopisy eurozóny, nízke riziko, TER 0,07%. ⚠️ Distribučný (DIS) — kupóny vyplácané pravidelne, treba ručne reinvestovať.',
        zlozenie: 'Štátne dlhopisy Nemecka, Francúzska, Talianska, Španielska a ďalších krajín EÚ'
      },
      'IE00BZ163H91': { // VETY
        dovod: 'Alternatíva od Vanguard, TER 0,07%. ⚠️ Distribučný (DIS) — kupóny vyplácané pravidelne, treba ručne reinvestovať.',
        zlozenie: 'Štátne dlhopisy krajín eurozóny — podobné zloženie ako IEAG'
      }
    },

    // vzdelavanie.html
    eduNavBrand: '📈 Investičná kalkulačka',
    eduH1: '📖 Základy investovania',
    eduSubtitle: 'Pochop kľúčové pojmy skôr, než vložíš prvé euro',
    triH2: 'Investičný trojuholník',
    triIntro: 'Každá investícia balansuje medzi tromi vlastnosťami. Nemôžeš mať všetky tri naraz — vždy musíš niečo obetovať.',
    triVynos: 'Výnos',
    triLikvidita: 'Likvidita',
    triRiziko: 'Riziko',
    triVynosTitle: 'Výnos',
    triVynosDesc: 'Koľko zarobíš. Vyšší výnos spravidla znamená vyššie riziko alebo nižšiu likviditu. Akcie historicky ~7–14 % ročne, dlhopisy ~2–4 %.',
    triRizikoTitle: 'Riziko',
    triRizikoDesc: 'Šanca, že stratíš časť peňazí. Bezpečnejšie investície prinášajú nižší výnos. Riziko sa efektívne znižuje dlhším horizontom.',
    triLikviditaTitle: 'Likvidita',
    triLikviditaDesc: 'Ako rýchlo môžeš peniaze vybrať bez straty. ETF na burze sú vysoko likvidné — predáš ich behom sekúnd kedykoľvek.',
    exDlhopisyTitle: 'Príklad: Štátne dlhopisy',
    exDlhopisyText: '✅ Nízke riziko &nbsp; ✅ Vysoká likvidita &nbsp; ❌ Nízky výnos',
    exSP500Title: 'Príklad: Akciový ETF (S&P 500)',
    exSP500Text: '⚠️ Stredné riziko &nbsp; ✅ Vysoká likvidita &nbsp; ✅ Vysoký výnos',
    exNehnutoTitle: 'Príklad: Nehnuteľnosť',
    exNehnutoText: '✅ Nízke riziko &nbsp; ❌ Nízka likvidita &nbsp; ✅ Slušný výnos',
    riskH2: 'Typy investičného rizika',
    riskIntro: 'Nie každé riziko je rovnaké. Niektoré vieš eliminovať, iné nie.',
    riskMarketTitle: '📉 Trhové riziko',
    riskMarketDesc: 'Celý trh klesá — napr. počas recesie alebo pandémie. Postihuje všetkých investorov naraz.',
    riskMarketBadge1: 'Nedá sa eliminovať',
    riskMarketBadge2: 'Znižuje sa dlhším časom',
    riskCompanyTitle: '🏢 Firemné riziko',
    riskCompanyDesc: 'Jedna firma skrachuje (napr. Enron, Wirecard). Ak máš len ju, prídeš o všetko.',
    riskCompanyBadge1: 'Dá sa eliminovať diverzifikáciou — napr. ETF NASDAQ 100 investuje do 100 US spoločností',
    riskCurrencyTitle: '💱 Menové riziko',
    riskCurrencyDesc: 'Ak investuješ v USD a euro posilní, tvoj výnos v eurách klesne. Pre SK/EÚ investorov reálne.',
    riskCurrencyBadge1: 'Čiastočne zvládnuteľné — investuj do ETF v eurách',
    riskInflationTitle: '🔥 Inflačné riziko',
    riskInflationDesc: 'Peniaze na sporiacom účte strácajú kúpnu silu. Inflácia 3 % ročne = tvoje úspory reálne klesajú.',
    riskInflationBadge1: 'Nedá sa ignorovať',
    riskInflationBadge2: 'Akcie ho dlhodobo prekonávajú',
    riskTimingTitle: '⏳ Časové riziko',
    riskTimingDesc: 'Predáš v zlý čas — napr. počas krachu. Snaha o „časovanie trhu" zlyhá takmer vždy.',
    riskTimingBadge1: 'Rieši to pravidelné investovanie, najlepšie 1× mesačne (DCA)',
    riskCounterTitle: '🏦 Riziko protistrany',
    riskCounterDesc: 'Broker skrachuje. Preto sú dôležité regulácia a ochrana vkladov (SIPC, FSCS, ICS). Ak broker skrachuje, neprídeš o nič — peniaze máš v ETF, nie u brokera.',
    riskCounterBadge1: 'Znižuje regulácia',
    etfH2: 'Čo je ETF a prečo je populárny?',
    etfDesc: '<strong>ETF (Exchange Traded Fund)</strong> je fond obchodovaný na burze, ktorý sleduje index — napr. S&amp;P 500 obsahuje 500 najväčších amerických firiem. Kúpou jedného ETF vlastníš malý podiel v každej z nich naraz.',
    etfProsTitle: '✅ Výhody ETF',
    etfProsContent: 'Nízke poplatky (TER 0,07–0,2 %)<br>Okamžitá diverzifikácia<br>Vysoká likvidita<br>Dostupné od 1 €',
    etfConsTitle: '⚠️ Na čo si dať pozor',
    etfConsContent: 'Hodnota kolíše každý deň<br>Pri panike ľudia predávajú lacno<br>Mena fondu vs. tvoja mena investuj v eurach<br>Akumulačné ACC vhodnejsie reinvestuju dividendu vs. distribučné',
    rulesH2: '5 zlatých pravidiel dlhodobého investora',
    rule1Title: 'Investuj pravidelne, nie raz za čas, raz mesacne',
    rule1Desc: 'DCA (dollar-cost averaging) znižuje riziko zlého načasovania trhu.',
    rule2Title: 'Diverzifikuj — neskladaj vajcia do jedného košíka',
    rule2Desc: 'ETF na globálny index kúpi ti podiel v 1 600+ firmách naraz.',
    rule3Title: 'Dlhší horizont = menšie efektívne riziko',
    rule3Desc: 'S&P 500 nikdy neklesol za akékoľvek 20-ročné obdobie v histórii.',
    rule4Title: 'Nesleduj trh každý deň',
    rule4Desc: 'Krátkodobé výkyvy sú normálne. Panika je najdrahšia investičná chyba.',
    rule5Title: 'Začni skôr, nie lepsie-necakaj',
    rule5Desc: 'Čas na trhu je cennejší ako načasovanie trhu. Zložený úrok robí zázraky.',
    eduCtaBtn: '🚀 Vyskúšaj kalkulačku'
  },

  cz: {
    // Page titles
    pageTitle: 'Investiční kalkulačka',
    eduPageTitle: 'Základy investování – Investiční kalkulačka',

    // Nav / shared
    navBrand: '📈 Investiční kalkulačka',
    navEdu: '📖 Základy investování',
    navCalc: '🧮 Kalkulačka',

    // Index page static
    ctaBtn: '📖 Nový v investování? Začni zde →',
    h1: 'Kolik budu mít za X let?',
    subheading: 'Zadejte parametry a zjistěte reálnou hodnotu svých investic',
    labelMesacna: 'Měsíční investice:',
    labelRoky: 'Počet let investování:',
    labelVek: 'Váš věk:',
    labelInflacia: 'Roční inflace:',
    labelRiziko: 'Rizikový profil',
    optKonzerv: 'Konzervativní',
    optVyvazeny: 'Vyvážený',
    optAgresivny: 'Agresivní',
    cardResults: '📊 Výsledky podle indexu',
    cardEtf: '✅ Doporučené ETF',
    cardChart: '📈 Vývoj investice v čase',
    cardBrokers: '🏦 Srovnání brokerů',

    // Range hint labels
    rangeRokyMin: '1 rok',
    rangeRokyMax: '50 let',

    // Footer
    footerAboutTitle: '📈 Investiční kalkulačka',
    footerAboutText: 'Bezplatný vzdělávací nástroj pro dlouhodobé investory v EU. Pomáháme pochopit sílu složeného úročení a orientovat se ve světě ETF.',
    footerSources: 'Zdroje dat: MSCI, S&P Global, NASDAQ, ECB.',
    footerLegalTitle: '⚖️ Právní upozornění',
    footerLegal1: 'Tato stránka slouží <strong class="text-white">výhradně ke vzdělávacím účelům</strong> a nepředstavuje investiční poradenství ve smyslu zákona č. 256/2004 Sb. o podnikání na kapitálovém trhu ani směrnice MiFID II.',
    footerLegal2: 'Historické výnosy <strong class="text-white">nezaručují</strong> budoucí výsledky. Hodnota investice může klesat i růst. Investování je spojeno s rizikem částečné nebo úplné ztráty vloženého kapitálu.',
    footerLegal3: 'Před jakýmkoliv investičním rozhodnutím doporučujeme konzultaci s licencovaným finančním poradcem registrovaným v ČNB.',
    footerCopy: '© 2026 Investiční kalkulačka — nejsme licencovaní investiční poradci | Nejsme pobočkou ani partnerem žádného brokera',

    // Dynamic strings
    thIndex: 'Index',
    thVlozene: 'Vloženo',
    thNominalne: 'Nominálně',
    thRealne: 'Reálně (po inflaci)',
    thZisk: 'Zisk',
    inflaciaNote: '* Historické výnosy nezaručují budoucí výsledky. Inflace: ',
    metaLabel: 'ℹ️ Zdroje & metodika',
    metaHtml: `<strong>📊 Zdroje a metodika</strong><br><br>
Výnosy jsou historické <strong>CAGR</strong> (geometrický průměr) 1985–2024,<br>
včetně reinvestovaných dividend (total return index), v USD.<br><br>
<strong>NASDAQ 100 ~14%</strong> — NASDAQ / Bloomberg, total return<br>
<strong>S&P 500 ~11%</strong> — S&P Global / Shiller data, total return<br>
<strong>MSCI World ~9%</strong> — MSCI official index, net total return<br>
<strong>Dluhopisy ~3%</strong> — ECB / Bloomberg Euro Govt Bond Index;<br>
&nbsp;&nbsp;forward estimate podle současných výnosů eurozóny<br><br>
Reálná hodnota: r<sub>real</sub> = (1 + r<sub>nom</sub>) / (1 + i) − 1<br>
aplikovaná měsíčně na každý vklad zvlášť.`,
    volba1: '1. volba',
    volba2: '2. volba',
    isinLabel: 'ISIN:',
    precoLabel: 'Proč?',
    etfDisclaimer: '⚠️ Toto není investiční poradenství. Informace jsou pouze vzdělávací.',
    warn1Rok: '⚠️ Pro 1-roční horizont doporučujeme dluhopisy bez ohledu na zvolený profil.',
    warnKratkyPrefix: '💡 Pro horizont ',
    warnKratkySuffix: ' doporučujeme konzervativnější přístup než při dlouhodobém investování.',
    thBroker: 'Broker',
    thPoplatkyETF: 'Poplatky<br>ETF',
    thDostupnost: 'Dostupnost',
    thJazyk: 'Jazyk',
    thNakladyPrefix: 'Náklady za ',
    thNakladySuffix: ' let',
    thZostatok: 'Zůstatek (nominálně)',
    thUcet: 'Účet',
    otvorUcet: 'Otevřít účet',
    dostupnostEU: 'Celá EU',
    dostupnostPartial: '18 zemí EU',
    dostupnostSKCZ: 'SK/CZ',
    brokerNotePrefix: '* Náklady vypočítané při ',
    brokerNoteMid: '/měs po dobu ',
    brokerNoteSuffix: ' let. Výnos: ',
    brokerNoteEnd: '% p.a. Hodnoty jsou nominální.',
    chartDlhopisy: 'Dluhopisy (3%)',
    chartVlozene: 'Vloženo',
    chartNasdaqReal: 'NASDAQ reálně',
    chartSP500Real: 'S&P 500 reálně',
    chartMSCIReal: 'MSCI World reálně',
    chartYearShort: 'r.',
    indexDlhopisy: 'Dluhopisy',
    regulaciaLabel: 'Regulace:',
    ochranaLabel: 'Ochrana:',
    zlozenieLabel: 'Složení:',
    priemerVynosLabel: 'Průměrný výnos:',

    // Broker meta
    brokerMeta: {
      xtb:   { regulacia: 'KNF (Polsko), licence v EU', ochrana: 'ICF do 20 000 €', poznamka: 'Aktiva klientů jsou oddělena od majetku XTB. ETF jsou cenné papíry ve vašem vlastnictví — XTB je pouze zprostředkovatel. V případě bankrotu brokera se ETF vrátí vám.' },
      t212:  { regulacia: 'FCA (UK), CySEC (Kypr)', ochrana: 'ICF do 20 000 €', poznamka: 'ETF spravuje nezávislý depozitář (Interactive Brokers UK). Vaše aktiva nejsou majetkem Trading 212. Zprostředkovatel, nikoli správce.' },
      degiro:{ regulacia: 'AFM / DNB (Nizozemsko)', ochrana: 'ICF do 20 000 €', poznamka: 'ETF jsou drženy v samostatné právnické entitě Stichting DEGIRO — odděleně od majetku brokera. Vaše cenné papíry jsou chráněny i při bankrotu DEGIRO.' },
      tr:    { regulacia: 'BaFin (Německo) — bankovní licence', ochrana: 'Vklady do 100 000 € (bankovní depozit) + ICF do 20 000 €', poznamka: 'Trade Republic je německá banka. ETF jako cenné papíry jsou odděleny od rozvahy banky a patří vám, nikoli bance.' },
      etoro: { regulacia: 'CySEC (Kypr), FCA (UK)', ochrana: 'ICF do 20 000 €', poznamka: 'Klientská aktiva jsou oddělena od majetku eToro. ETF jsou ve vlastnictví klienta. eToro je zprostředkovatel — vydavatelem ETF je iShares, Vanguard apod.' },
      portu: { regulacia: 'ČNB (Česká republika)', ochrana: 'ICF do 20 000 €', poznamka: 'Aktiva klientů jsou uložena u depozitáře (Raiffeisen Bank). Portu spravuje portfolio, ale vaše ETF jsou vaším majetkem, nikoli Portu.' }
    },

    // ETF descriptions
    etf: {
      'LU1681038243': {
        dovod: 'Nejvyšší historický výnos ~14% p.a., TER 0,23%, ACC — dostupné na XTB i Trading 212 v EUR (Xetra: 6AQQ.DE)',
        zlozenie: '100 největších nefinančních US tech společností — Apple, Microsoft, Nvidia, Amazon...'
      },
      'IE00B5BMR087': {
        dovod: 'Stabilnější než NASDAQ, ~11% p.a., TER 0,07%, ACC — dostupné na XTB i Trading 212 v EUR (Xetra: SXR8.DE)',
        zlozenie: '500 největších US společností napříč všemi sektory'
      },
      'IE00B4L5Y983': {
        dovod: 'Globální diverzifikace, nižší volatilita, TER 0,20%, ACC — dostupné na XTB i Trading 212 v EUR',
        zlozenie: '~1 400 společností z 23 rozvinutých zemí (US, EU, JP...)'
      },
      'IE00BK5BQT80': {
        dovod: 'Maximální diverzifikace vč. rozvíjejících se trhů, TER 0,22%, ACC — dostupné na XTB i Trading 212 v EUR',
        zlozenie: '~3 700 společností z celého světa včetně emerging markets'
      },
      'IE00B4WXJJ64': {
        dovod: 'Státní dluhopisy eurozóny, nízké riziko, TER 0,07%. ⚠️ Distribuční (DIS) — kupóny vypláceny pravidelně, je třeba ručně reinvestovat.',
        zlozenie: 'Státní dluhopisy Německa, Francie, Itálie, Španělska a dalších zemí EU'
      },
      'IE00BZ163H91': {
        dovod: 'Alternativa od Vanguard, TER 0,07%. ⚠️ Distribuční (DIS) — kupóny vypláceny pravidelně, je třeba ručně reinvestovat.',
        zlozenie: 'Státní dluhopisy zemí eurozóny — podobné složení jako IEAG'
      }
    },

    // vzdelavanie.html
    eduNavBrand: '📈 Investiční kalkulačka',
    eduH1: '📖 Základy investování',
    eduSubtitle: 'Pochopte klíčové pojmy dříve, než vložíte první euro',
    triH2: 'Investiční trojúhelník',
    triIntro: 'Každá investice balancuje mezi třemi vlastnostmi. Nemůžete mít všechny tři najednou — vždy musíte něco obětovat.',
    triVynos: 'Výnos',
    triLikvidita: 'Likvidita',
    triRiziko: 'Riziko',
    triVynosTitle: 'Výnos',
    triVynosDesc: 'Kolik vyděláte. Vyšší výnos zpravidla znamená vyšší riziko nebo nižší likviditu. Akcie historicky ~7–14 % ročně, dluhopisy ~2–4 %.',
    triRizikoTitle: 'Riziko',
    triRizikoDesc: 'Šance, že ztratíte část peněz. Bezpečnější investice přinášejí nižší výnos. Riziko se efektivně snižuje delším horizontem.',
    triLikviditaTitle: 'Likvidita',
    triLikviditaDesc: 'Jak rychle můžete peníze vybrat bez ztráty. ETF na burze jsou vysoce likvidní — prodáte je během sekund kdykoliv.',
    exDlhopisyTitle: 'Příklad: Státní dluhopisy',
    exDlhopisyText: '✅ Nízké riziko &nbsp; ✅ Vysoká likvidita &nbsp; ❌ Nízký výnos',
    exSP500Title: 'Příklad: Akciový ETF (S&P 500)',
    exSP500Text: '⚠️ Střední riziko &nbsp; ✅ Vysoká likvidita &nbsp; ✅ Vysoký výnos',
    exNehnutoTitle: 'Příklad: Nemovitost',
    exNehnutoText: '✅ Nízké riziko &nbsp; ❌ Nízká likvidita &nbsp; ✅ Slušný výnos',
    riskH2: 'Typy investičního rizika',
    riskIntro: 'Ne každé riziko je stejné. Některé dokážete eliminovat, jiné ne.',
    riskMarketTitle: '📉 Tržní riziko',
    riskMarketDesc: 'Celý trh klesá — např. během recese nebo pandemie. Postihuje všechny investory najednou.',
    riskMarketBadge1: 'Nedá se eliminovat',
    riskMarketBadge2: 'Snižuje se delším časem',
    riskCompanyTitle: '🏢 Firemní riziko',
    riskCompanyDesc: 'Jedna firma zkrachuje (např. Enron, Wirecard). Pokud máte jen ji, přijdete o vše.',
    riskCompanyBadge1: 'Dá se eliminovat diverzifikací — např. ETF NASDAQ 100 investuje do 100 US společností',
    riskCurrencyTitle: '💱 Měnové riziko',
    riskCurrencyDesc: 'Pokud investujete v USD a euro posílí, váš výnos v eurech klesne. Pro SK/EU investory reálné.',
    riskCurrencyBadge1: 'Částečně zvladatelné — investujte do ETF v eurech',
    riskInflationTitle: '🔥 Inflační riziko',
    riskInflationDesc: 'Peníze na spořicím účtu ztrácejí kupní sílu. Inflace 3 % ročně = vaše úspory reálně klesají.',
    riskInflationBadge1: 'Nedá se ignorovat',
    riskInflationBadge2: 'Akcie ho dlouhodobě překonávají',
    riskTimingTitle: '⏳ Časové riziko',
    riskTimingDesc: 'Prodáte ve špatný čas — např. během krachu. Snaha o „časování trhu" selže téměř vždy.',
    riskTimingBadge1: 'Řeší to pravidelné investování, nejlépe 1× měsíčně (DCA)',
    riskCounterTitle: '🏦 Riziko protistrany',
    riskCounterDesc: 'Broker zkrachuje. Proto jsou důležité regulace a ochrana vkladů (SIPC, FSCS, ICS). Pokud broker zkrachuje, nepřijdete o nic — peníze máte v ETF, ne u brokera.',
    riskCounterBadge1: 'Snižuje regulace',
    etfH2: 'Co je ETF a proč je populární?',
    etfDesc: '<strong>ETF (Exchange Traded Fund)</strong> je fond obchodovaný na burze, který sleduje index — např. S&amp;P 500 obsahuje 500 největších amerických firem. Koupí jednoho ETF vlastníte malý podíl v každé z nich najednou.',
    etfProsTitle: '✅ Výhody ETF',
    etfProsContent: 'Nízké poplatky (TER 0,07–0,2 %)<br>Okamžitá diverzifikace<br>Vysoká likvidita<br>Dostupné od 1 €',
    etfConsTitle: '⚠️ Na co si dát pozor',
    etfConsContent: 'Hodnota kolísá každý den<br>Při panice lidé prodávají levně<br>Měna fondu vs. vaše měna — investujte v eurech<br>Akumulační ACC vhodněji reinvestují dividendu vs. distribuční',
    rulesH2: '5 zlatých pravidel dlouhodobého investora',
    rule1Title: 'Investujte pravidelně, ne jednou za čas, jednou měsíčně',
    rule1Desc: 'DCA (dollar-cost averaging) snižuje riziko špatného načasování trhu.',
    rule2Title: 'Diverzifikujte — neskladejte vajíčka do jednoho košíku',
    rule2Desc: 'ETF na globální index vám koupí podíl v 1 600+ firmách najednou.',
    rule3Title: 'Delší horizont = menší efektivní riziko',
    rule3Desc: 'S&P 500 nikdy neklesl za jakékoliv 20-leté období v historii.',
    rule4Title: 'Nesledujte trh každý den',
    rule4Desc: 'Krátkodobé výkyvy jsou normální. Panika je nejdražší investiční chyba.',
    rule5Title: 'Začněte dříve, ne lépe-nečekejte',
    rule5Desc: 'Čas na trhu je cennější než načasování trhu. Složený úrok dělá zázraky.',
    eduCtaBtn: '🚀 Vyzkoušej kalkulačku'
  },

  en: {
    // Page titles
    pageTitle: 'Investment Calculator',
    eduPageTitle: 'Investing Basics – Investment Calculator',

    // Nav / shared
    navBrand: '📈 Investment Calculator',
    navEdu: '📖 Investing Basics',
    navCalc: '🧮 Calculator',

    // Index page static
    ctaBtn: '📖 New to investing? Start here →',
    h1: 'How much will I have in X years?',
    subheading: 'Enter parameters and find the real value of your investments',
    labelMesacna: 'Monthly investment:',
    labelRoky: 'Years of investing:',
    labelVek: 'Your age:',
    labelInflacia: 'Annual inflation:',
    labelRiziko: 'Risk profile',
    optKonzerv: 'Conservative',
    optVyvazeny: 'Balanced',
    optAgresivny: 'Aggressive',
    cardResults: '📊 Results by index',
    cardEtf: '✅ Recommended ETFs',
    cardChart: '📈 Investment growth over time',
    cardBrokers: '🏦 Broker comparison',

    // Range hint labels
    rangeRokyMin: '1 year',
    rangeRokyMax: '50 years',

    // Footer
    footerAboutTitle: '📈 Investment Calculator',
    footerAboutText: 'A free educational tool for long-term investors in the EU. We help you understand the power of compound interest and navigate the world of ETFs.',
    footerSources: 'Data sources: MSCI, S&P Global, NASDAQ, ECB.',
    footerLegalTitle: '⚖️ Legal disclaimer',
    footerLegal1: 'This website is intended <strong class="text-white">solely for educational purposes</strong> and does not constitute investment advice within the meaning of MiFID II or any applicable securities law.',
    footerLegal2: 'Historical returns <strong class="text-white">do not guarantee</strong> future results. The value of investments may fall as well as rise. Investing involves the risk of partial or total loss of capital invested.',
    footerLegal3: 'Before making any investment decision, we recommend consulting a licensed financial adviser registered with the relevant regulatory authority.',
    footerCopy: '© 2026 Investment Calculator — we are not licensed investment advisers | We are not affiliated with or partners of any broker',

    // Dynamic strings
    thIndex: 'Index',
    thVlozene: 'Invested',
    thNominalne: 'Nominal',
    thRealne: 'Real (after inflation)',
    thZisk: 'Profit',
    inflaciaNote: '* Historical returns do not guarantee future results. Inflation: ',
    metaLabel: 'ℹ️ Sources & methodology',
    metaHtml: `<strong>📊 Sources & methodology</strong><br><br>
Returns are historical <strong>CAGR</strong> (geometric mean) 1985–2024,<br>
including reinvested dividends (total return index), in USD.<br><br>
<strong>NASDAQ 100 ~14%</strong> — NASDAQ / Bloomberg, total return<br>
<strong>S&P 500 ~11%</strong> — S&P Global / Shiller data, total return<br>
<strong>MSCI World ~9%</strong> — MSCI official index, net total return<br>
<strong>Bonds ~3%</strong> — ECB / Bloomberg Euro Govt Bond Index;<br>
&nbsp;&nbsp;forward estimate based on current eurozone yields<br><br>
Real value: r<sub>real</sub> = (1 + r<sub>nom</sub>) / (1 + i) − 1<br>
applied monthly to each contribution separately.`,
    volba1: '1st choice',
    volba2: '2nd choice',
    isinLabel: 'ISIN:',
    precoLabel: 'Why?',
    etfDisclaimer: '⚠️ This is not investment advice. Information is for educational purposes only.',
    warn1Rok: '⚠️ For a 1-year horizon we recommend bonds regardless of the chosen risk profile.',
    warnKratkyPrefix: '💡 For a ',
    warnKratkySuffix: ' horizon we recommend a more conservative approach than for long-term investing.',
    thBroker: 'Broker',
    thPoplatkyETF: 'ETF<br>fees',
    thDostupnost: 'Availability',
    thJazyk: 'Language',
    thNakladyPrefix: 'Costs over ',
    thNakladySuffix: ' years',
    thZostatok: 'Balance (nominal)',
    thUcet: 'Account',
    otvorUcet: 'Open account',
    dostupnostEU: 'All EU',
    dostupnostPartial: '18 EU countries',
    dostupnostSKCZ: 'SK/CZ',
    brokerNotePrefix: '* Costs calculated at ',
    brokerNoteMid: '/mo over ',
    brokerNoteSuffix: ' years. Return: ',
    brokerNoteEnd: '% p.a. Nominal values.',
    chartDlhopisy: 'Bonds (3%)',
    chartVlozene: 'Invested',
    chartNasdaqReal: 'NASDAQ real',
    chartSP500Real: 'S&P 500 real',
    chartMSCIReal: 'MSCI World real',
    chartYearShort: 'y.',
    indexDlhopisy: 'Bonds',
    regulaciaLabel: 'Regulation:',
    ochranaLabel: 'Protection:',
    zlozenieLabel: 'Composition:',
    priemerVynosLabel: 'Average return:',

    // Broker meta
    brokerMeta: {
      xtb:   { regulacia: 'KNF (Poland), EU licence', ochrana: 'ICF up to €20,000', poznamka: 'Client assets are segregated from XTB\'s own assets. ETFs are securities in your ownership — XTB is merely the intermediary. In case of broker bankruptcy, ETFs are returned to you.' },
      t212:  { regulacia: 'FCA (UK), CySEC (Cyprus)', ochrana: 'ICF up to €20,000', poznamka: 'ETFs are managed by an independent custodian (Interactive Brokers UK). Your assets are not the property of Trading 212. They act as intermediary, not custodian.' },
      degiro:{ regulacia: 'AFM / DNB (Netherlands)', ochrana: 'ICF up to €20,000', poznamka: 'ETFs are held in a separate legal entity Stichting DEGIRO — segregated from broker assets. Your securities are protected even in the event of DEGIRO\'s bankruptcy.' },
      tr:    { regulacia: 'BaFin (Germany) — banking licence', ochrana: 'Deposits up to €100,000 (bank deposit) + ICF up to €20,000', poznamka: 'Trade Republic is a German bank. ETFs as securities are segregated from the bank\'s balance sheet and belong to you, not the bank.' },
      etoro: { regulacia: 'CySEC (Cyprus), FCA (UK)', ochrana: 'ICF up to €20,000', poznamka: 'Client assets are segregated from eToro\'s assets. ETFs are owned by the client. eToro is an intermediary — ETF issuers are iShares, Vanguard etc.' },
      portu: { regulacia: 'CNB (Czech Republic)', ochrana: 'ICF up to €20,000', poznamka: 'Client assets are held with a custodian (Raiffeisen Bank). Portu manages the portfolio, but your ETFs are your property, not Portu\'s.' }
    },

    // ETF descriptions
    etf: {
      'LU1681038243': {
        dovod: 'Highest historical return ~14% p.a., TER 0.23%, ACC — available on XTB and Trading 212 in EUR (Xetra: 6AQQ.DE)',
        zlozenie: '100 largest non-financial US tech companies — Apple, Microsoft, Nvidia, Amazon...'
      },
      'IE00B5BMR087': {
        dovod: 'More stable than NASDAQ, ~11% p.a., TER 0.07%, ACC — available on XTB and Trading 212 in EUR (Xetra: SXR8.DE)',
        zlozenie: '500 largest US companies across all sectors'
      },
      'IE00B4L5Y983': {
        dovod: 'Global diversification, lower volatility, TER 0.20%, ACC — available on XTB and Trading 212 in EUR',
        zlozenie: '~1,400 companies from 23 developed countries (US, EU, JP...)'
      },
      'IE00BK5BQT80': {
        dovod: 'Maximum diversification incl. emerging markets, TER 0.22%, ACC — available on XTB and Trading 212 in EUR',
        zlozenie: '~3,700 companies from around the world including emerging markets'
      },
      'IE00B4WXJJ64': {
        dovod: 'Eurozone government bonds, low risk, TER 0.07%. ⚠️ Distributing (DIS) — coupons paid regularly, must be manually reinvested.',
        zlozenie: 'Government bonds of Germany, France, Italy, Spain and other EU countries'
      },
      'IE00BZ163H91': {
        dovod: 'Vanguard alternative, TER 0.07%. ⚠️ Distributing (DIS) — coupons paid regularly, must be manually reinvested.',
        zlozenie: 'Eurozone government bonds — similar composition to IEAG'
      }
    },

    // vzdelavanie.html
    eduNavBrand: '📈 Investment Calculator',
    eduH1: '📖 Investing Basics',
    eduSubtitle: 'Understand the key concepts before you invest your first euro',
    triH2: 'The Investment Triangle',
    triIntro: 'Every investment balances three properties. You cannot have all three at once — you always have to sacrifice something.',
    triVynos: 'Return',
    triLikvidita: 'Liquidity',
    triRiziko: 'Risk',
    triVynosTitle: 'Return',
    triVynosDesc: 'How much you earn. Higher return usually means higher risk or lower liquidity. Stocks historically ~7–14% p.a., bonds ~2–4%.',
    triRizikoTitle: 'Risk',
    triRizikoDesc: 'The chance of losing some of your money. Safer investments bring lower returns. Risk is effectively reduced by a longer time horizon.',
    triLikviditaTitle: 'Liquidity',
    triLikviditaDesc: 'How quickly you can withdraw money without loss. Exchange-traded ETFs are highly liquid — you can sell them in seconds at any time.',
    exDlhopisyTitle: 'Example: Government bonds',
    exDlhopisyText: '✅ Low risk &nbsp; ✅ High liquidity &nbsp; ❌ Low return',
    exSP500Title: 'Example: Equity ETF (S&P 500)',
    exSP500Text: '⚠️ Medium risk &nbsp; ✅ High liquidity &nbsp; ✅ High return',
    exNehnutoTitle: 'Example: Real estate',
    exNehnutoText: '✅ Low risk &nbsp; ❌ Low liquidity &nbsp; ✅ Decent return',
    riskH2: 'Types of investment risk',
    riskIntro: 'Not every risk is the same. Some you can eliminate, others you cannot.',
    riskMarketTitle: '📉 Market risk',
    riskMarketDesc: 'The whole market falls — e.g. during a recession or pandemic. It affects all investors at once.',
    riskMarketBadge1: 'Cannot be eliminated',
    riskMarketBadge2: 'Reduced by a longer time horizon',
    riskCompanyTitle: '🏢 Company risk',
    riskCompanyDesc: 'A single company goes bankrupt (e.g. Enron, Wirecard). If you only hold it, you lose everything.',
    riskCompanyBadge1: 'Can be eliminated by diversification — e.g. NASDAQ 100 ETF invests in 100 US companies',
    riskCurrencyTitle: '💱 Currency risk',
    riskCurrencyDesc: 'If you invest in USD and the euro strengthens, your return in euros falls. Very real for EU investors.',
    riskCurrencyBadge1: 'Partially manageable — invest in EUR-denominated ETFs',
    riskInflationTitle: '🔥 Inflation risk',
    riskInflationDesc: 'Money in a savings account loses purchasing power. 3% annual inflation = your savings are shrinking in real terms.',
    riskInflationBadge1: 'Cannot be ignored',
    riskInflationBadge2: 'Stocks outperform it over the long term',
    riskTimingTitle: '⏳ Timing risk',
    riskTimingDesc: 'You sell at the wrong time — e.g. during a crash. Attempting to "time the market" almost always fails.',
    riskTimingBadge1: 'Solved by regular investing, ideally once a month (DCA)',
    riskCounterTitle: '🏦 Counterparty risk',
    riskCounterDesc: 'The broker goes bankrupt. That\'s why regulation and deposit protection (SIPC, FSCS, ICS) matter. If a broker fails, you lose nothing — your money is in the ETF, not with the broker.',
    riskCounterBadge1: 'Reduced by regulation',
    etfH2: 'What is an ETF and why is it popular?',
    etfDesc: '<strong>ETF (Exchange Traded Fund)</strong> is a fund traded on a stock exchange that tracks an index — e.g. the S&amp;P 500 contains the 500 largest US companies. By buying one ETF you own a small share in each of them at once.',
    etfProsTitle: '✅ ETF advantages',
    etfProsContent: 'Low fees (TER 0.07–0.2%)<br>Instant diversification<br>High liquidity<br>Available from €1',
    etfConsTitle: '⚠️ What to watch out for',
    etfConsContent: 'Value fluctuates every day<br>People sell cheap in a panic<br>Fund currency vs. your currency — invest in euros<br>Accumulating (ACC) funds automatically reinvest dividends vs. distributing',
    rulesH2: '5 golden rules for the long-term investor',
    rule1Title: 'Invest regularly, not just occasionally — once a month',
    rule1Desc: 'DCA (dollar-cost averaging) reduces the risk of bad market timing.',
    rule2Title: 'Diversify — don\'t put all your eggs in one basket',
    rule2Desc: 'A global index ETF gives you a stake in 1,600+ companies at once.',
    rule3Title: 'Longer horizon = lower effective risk',
    rule3Desc: 'The S&P 500 has never declined over any 20-year period in history.',
    rule4Title: 'Don\'t check the market every day',
    rule4Desc: 'Short-term fluctuations are normal. Panic is the most expensive investment mistake.',
    rule5Title: 'Start sooner, not better — don\'t wait',
    rule5Desc: 'Time in the market is more valuable than timing the market. Compound interest works miracles.',
    eduCtaBtn: '🚀 Try the calculator'
  }
}
