// Historické výnosy indexov
const indexy = {
    nasdaq:  { nazov: 'NASDAQ 100',  vynos: 0.14, farba: '#0d6efd' },
    sp500:   { nazov: 'S&P 500',     vynos: 0.11, farba: '#198754' },
    world:   { nazov: 'MSCI World',  vynos: 0.09, farba: '#ffc107' },
    dlhopisy:{ nazov: 'Dlhopisy',    vynos: 0.03, farba: '#6c757d', nazovKey: 'indexDlhopisy' }
}

function brokerTooltip(klic) {
    const b = t('brokerMeta')[klic]
    return `<strong>${t('regulaciaLabel')}</strong> ${b.regulacia}<br><strong>${t('ochranaLabel')}</strong> ${b.ochrana}<br><br>${b.poznamka}`
}

/** Registrácia podľa jazyka rozhrania (getLang), nie podľa IP. */
const BROKER_SIGNUP_URLS = {
    xtb: {
        sk: 'https://www.xtb.com/sk',
        cz: 'https://www.xtb.com/cz',
        pl: 'https://www.xtb.com/pl',
        hu: 'https://www.xtb.com/hu',
        en: 'https://www.xtb.com/int'
    },
    t212: {
        sk: 'https://www.trading212.com/sk',
        cz: 'https://www.trading212.com/cs',
        pl: 'https://www.trading212.com/pl',
        hu: 'https://www.trading212.com/hu',
        en: 'https://www.trading212.com/en'
    },
    tr: {
        sk: 'https://www.traderepublic.com/en-sk',
        cz: 'https://www.traderepublic.com/en-de',
        pl: 'https://www.traderepublic.com/en-pl',
        hu: 'https://www.traderepublic.com/en-de',
        en: 'https://www.traderepublic.com'
    },
    degiro: {
        sk: 'https://www.degiro.sk',
        cz: 'https://www.degiro.cz',
        pl: 'https://www.degiro.pl',
        hu: 'https://www.degiro.co.uk',
        en: 'https://www.degiro.co.uk'
    },
    etoro: {
        sk: 'https://www.etoro.com/sk/',
        cz: 'https://www.etoro.com/en/',
        pl: 'https://www.etoro.com/pl/',
        hu: 'https://www.etoro.com/hu/',
        en: 'https://www.etoro.com/en/'
    },
    portu: {
        sk: 'https://www.portu.sk',
        cz: 'https://www.portu.cz',
        pl: 'https://www.portu.sk',
        hu: 'https://www.portu.sk',
        en: 'https://www.portu.sk'
    }
}

function brokerSignupUrl(brokerId) {
    const lang = typeof getLang === 'function' ? getLang() : 'sk'
    const row = BROKER_SIGNUP_URLS[brokerId]
    if (!row) return '#'
    return row[lang] || row.sk || row.en || Object.values(row)[0]
}

// Odporúčania ETF podľa profilu
const dlhopisy = [
    { etf: 'iShares Core Euro Govt Bond UCITS ETF (IEAG)', isin: 'IE00B4WXJJ64', vynos: '~3% p.a. (forward estimate)' },
    { etf: 'Vanguard EUR Eurozone Govt Bond UCITS ETF (VETY)', isin: 'IE00BZ163H91', vynos: '~3% p.a. (forward estimate)' }
]

const etfOdporucania = {
    agresivny: {
        rok1:  dlhopisy,
        kratky: [
            { etf: 'Amundi NASDAQ-100 II UCITS ETF Acc (6AQQ)', isin: 'LU1681038243', vynos: '~14% p.a. (1985–2024)' },
            { etf: 'iShares Core S&P 500 UCITS ETF Acc (CSP1)', isin: 'IE00B5BMR087', vynos: '~11% p.a. (1985–2024)' }
        ],
        dlhy: [
            { etf: 'Amundi NASDAQ-100 II UCITS ETF Acc (6AQQ)', isin: 'LU1681038243', vynos: '~14% p.a. (1985–2024)' },
            { etf: 'iShares Core S&P 500 UCITS ETF Acc (CSP1)', isin: 'IE00B5BMR087', vynos: '~11% p.a. (1985–2024)' }
        ]
    },
    vyvazeny: {
        rok1:  dlhopisy,
        kratky: [
            { etf: 'iShares Core S&P 500 UCITS ETF Acc (CSP1)', isin: 'IE00B5BMR087', vynos: '~11% p.a. (1985–2024)' },
            { etf: 'iShares Core MSCI World UCITS ETF Acc (IWDA)', isin: 'IE00B4L5Y983', vynos: '~9% p.a. (1985–2024)' }
        ],
        dlhy: [
            { etf: 'iShares Core S&P 500 UCITS ETF Acc (CSP1)', isin: 'IE00B5BMR087', vynos: '~11% p.a. (1985–2024)' },
            { etf: 'Amundi NASDAQ-100 II UCITS ETF Acc (6AQQ)', isin: 'LU1681038243', vynos: '~14% p.a. (1985–2024)' }
        ]
    },
    konzervativny: {
        rok1:  dlhopisy,
        kratky: [
            { etf: 'iShares Core MSCI World UCITS ETF Acc (IWDA)', isin: 'IE00B4L5Y983', vynos: '~9% p.a. (1985–2024)' },
            { etf: 'Vanguard FTSE All-World UCITS ETF Acc (VWCE)', isin: 'IE00BK5BQT80', vynos: '~9% p.a. (1985–2024)' }
        ],
        dlhy: [
            { etf: 'iShares Core S&P 500 UCITS ETF Acc (CSP1)', isin: 'IE00B5BMR087', vynos: '~11% p.a. (1985–2024)' },
            { etf: 'iShares Core MSCI World UCITS ETF Acc (IWDA)', isin: 'IE00B4L5Y983', vynos: '~9% p.a. (1985–2024)' }
        ]
    }
}

// Výpočet budúcej hodnoty (zložený úrok mesačne)
function vypocitajFV(mesacna, roky, vynos) {
    const r = vynos / 12
    const n = roky * 12
    return mesacna * (((Math.pow(1 + r, n)) - 1) / r)
}

// Reálna hodnota po inflácii — správny výpočet cez reálnu úrokovú mieru
function realnaHodnota(mesacna, roky, vynosRocny, inflaciaPercent) {
    const rNom  = vynosRocny / 12
    const rInf  = inflaciaPercent / 100 / 12
    const rReal = (1 + rNom) / (1 + rInf) - 1
    const n     = roky * 12
    if (rReal === 0) return mesacna * n
    return mesacna * ((Math.pow(1 + rReal, n) - 1) / rReal)
}

// Formátovanie čísel — deleguje na i18n.js
function formatEur(hodnota) {
    return formatNumber(hodnota)
}

// Hlavná funkcia
function vypocitaj() {
    const mesacna = parseFloat(document.getElementById('mesacnaInvesticia').value)
    const roky = parseInt(document.getElementById('pocetRokov').value)
    const inflacia = parseFloat(document.getElementById('inflacia').value)
    const riziko = document.getElementById('riziko').value
    const horizont = roky <= 1 ? 'rok1' : roky <= 4 ? 'kratky' : 'dlhy'

    if (isNaN(mesacna) || isNaN(roky) || isNaN(inflacia)) return
    if (mesacna <= 0 || roky <= 0) return

    const rizikoPoupravene = riziko

    const vlozene = mesacna * 12 * roky

    // Výpočet pre každý index
    let tabulkaHTML = `
        <div class="table-responsive">
        <table class="table table-hover text-center">
            <thead class="table-dark">
                <tr>
                    <th>${t('thIndex')}</th>
                    <th>${t('thVlozene')}</th>
                    <th>${t('thNominalne')}</th>
                    <th>${t('thRealne')}</th>
                    <th>${t('thZisk')}</th>
                </tr>
            </thead>
            <tbody>
    `

    Object.values(indexy).forEach(index => {
        const fv = vypocitajFV(mesacna, roky, index.vynos)
        const real = realnaHodnota(mesacna, roky, index.vynos, inflacia)
        const zisk = fv - vlozene
        const nazov = index.nazovKey ? t(index.nazovKey) : index.nazov

        tabulkaHTML += `
            <tr>
                <td><span class="badge" style="background:${index.farba}">${nazov}</span></td>
                <td>${formatEur(vlozene)}</td>
                <td class="fw-bold">${formatEur(fv)}</td>
                <td class="text-success fw-bold">${formatEur(real)}</td>
                <td class="text-primary">+${formatEur(zisk)}</td>
            </tr>
        `
    })

    tabulkaHTML += `</tbody></table></div>
        <p class="text-muted small text-center mt-2">
            ${t('inflaciaNote')}${inflacia}% &nbsp;
            <span class="metodika-tip" style="cursor:help; border-bottom:1px dashed #aaa;">${t('metaLabel')}</span>
        </p>
    `

    document.getElementById('tabulkaVysledkov').innerHTML = tabulkaHTML

    // Odporúčanie ETF
    const odporucania = etfOdporucania[rizikoPoupravene][horizont]
    const horizontUpozornenie = roky <= 1
        ? `<p class="text-warning small">${t('warn1Rok')}</p>`
        : roky <= 4
            ? `<p class="text-info small">${t('warnKratkyPrefix')}${roky} ${pluralYear(roky)}${t('warnKratkySuffix')}</p>`
            : ''

    const etfKarty = odporucania.map((odp, i) => {
        const etfT = t('etf')[odp.isin] || {}
        const dovod = etfT.dovod || ''
        const zlozenie = etfT.zlozenie || ''
        return `
    <div class="alert alert-success mb-2">
        <div class="d-flex align-items-center gap-2 mb-1">
            <span class="badge bg-success">${i === 0 ? t('volba1') : t('volba2')}</span>
            <h6 class="mb-0">🎯 <span
                class="etf-tooltip-trigger"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-html="true"
                title="<strong>${t('zlozenieLabel')}</strong> ${zlozenie}<br><strong>${t('priemerVynosLabel')}</strong> ${odp.vynos}"
            >${odp.etf}</span></h6>
        </div>
        <p class="mb-1 small"><strong>${t('isinLabel')}</strong> ${odp.isin}</p>
        <p class="mb-0 small"><strong>${t('precoLabel')}</strong> ${dovod}</p>
    </div>`
    }).join('')

    document.getElementById('odporucanie').innerHTML = `
    ${horizontUpozornenie}
    ${etfKarty}
    <p class="text-muted small mb-0">${t('etfDisclaimer')}</p>
`

    // Inicializuj tooltips po každom renderi
    document.querySelectorAll('.etf-tooltip-trigger').forEach(el => {
        new bootstrap.Tooltip(el, { trigger: 'hover focus', html: true, sanitize: false })
    })

    // Brokeri
    const vynosZaklad = rizikoPoupravene === 'agresivny' ? 0.14 : rizikoPoupravene === 'vyvazeny' ? 0.11 : 0.09

    const fvXTB    = vypocitajFV(mesacna, roky, vynosZaklad)
    const fvPortu  = vypocitajFV(mesacna, roky, vynosZaklad - 0.01)
    const fveToro  = vypocitajFV(mesacna * (1 - 0.015), roky, vynosZaklad)
    const fvT212   = vypocitajFV(mesacna, roky, vynosZaklad)
    const fvTR     = vypocitajFV(Math.max(1, mesacna - 1), roky, vynosZaklad)
    const fvDegiro = vypocitajFV(Math.max(1, mesacna - 1 - mesacna * 0.00038), roky, vynosZaklad)

    const nakladyXTB    = 0
    const nakladyT212   = 0
    const nakladyDegiro = Math.round(fvXTB - fvDegiro)
    const nakladyPortu  = Math.round(fvXTB - fvPortu)
    const nakladyeToro  = Math.round(fvXTB - fveToro)
    const nakladyTR     = Math.round(fvXTB - fvTR)

    const rokyLabel = `${t('thNakladyPrefix')}${roky} ${pluralYear(roky)}`

    document.getElementById('brokeri').innerHTML = `
    <div class="table-responsive">
    <table class="table table-hover text-center align-middle">
        <thead class="table-dark">
            <tr>
                <th>${t('thBroker')}</th>
                <th data-i18n-html="thPoplatkyETF">${t('thPoplatkyETF')}</th>
                <th class="hide-mobile">${t('thDostupnost')}</th>
                <th class="hide-mobile">${t('thJazyk')}</th>
                <th>${rokyLabel}</th>
                <th class="hide-mobile">${t('thZostatok')}</th>
                <th>${t('thUcet')}</th>
            </tr>
        </thead>
        <tbody>
            <tr class="table-success">
                <td><strong class="broker-tip" data-broker="xtb">XTB</strong> ⭐</td>
                <td>0%<br><small class="text-muted">do 100k€/mes</small></td>
                <td class="hide-mobile">${t('dostupnostEU')}</td>
                <td class="hide-mobile">SK/CZ/PL/DE</td>
                <td class="text-success fw-bold">${formatEur(nakladyXTB)}</td>
                <td class="hide-mobile fw-bold">${formatEur(fvXTB)}</td>
                <td><a href="${brokerSignupUrl('xtb')}" target="_blank" rel="noopener noreferrer" class="btn btn-success btn-sm"><span class="d-none d-md-inline">${t('otvorUcet')}</span><span class="d-md-none">→</span></a></td>
            </tr>
            <tr class="table-success">
                <td><strong class="broker-tip" data-broker="t212">Trading 212</strong> ⭐</td>
                <td>0%</td>
                <td class="hide-mobile">${t('dostupnostEU')}</td>
                <td class="hide-mobile">SK/EN</td>
                <td class="text-success fw-bold">${formatEur(nakladyT212)}</td>
                <td class="hide-mobile fw-bold">${formatEur(fvT212)}</td>
                <td><a href="${brokerSignupUrl('t212')}" target="_blank" rel="noopener noreferrer" class="btn btn-success btn-sm"><span class="d-none d-md-inline">${t('otvorUcet')}</span><span class="d-md-none">→</span></a></td>
            </tr>
            <tr>
                <td><strong class="broker-tip" data-broker="tr">Trade Republic</strong></td>
                <td>1€<br><small class="text-muted">transakcia</small></td>
                <td class="hide-mobile">${t('dostupnostPartial')}</td>
                <td class="hide-mobile">SK/DE/FR</td>
                <td class="text-warning fw-bold">-${formatEur(nakladyTR)}</td>
                <td class="hide-mobile fw-bold">${formatEur(fvTR)}</td>
                <td><a href="${brokerSignupUrl('tr')}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-sm"><span class="d-none d-md-inline">${t('otvorUcet')}</span><span class="d-md-none">→</span></a></td>
            </tr>
            <tr>
                <td><strong class="broker-tip" data-broker="degiro">DEGIRO</strong></td>
                <td>1€<br><small class="text-muted">+0,038%</small></td>
                <td class="hide-mobile">${t('dostupnostEU')}</td>
                <td class="hide-mobile">SK/EN</td>
                <td class="text-warning fw-bold">-${formatEur(nakladyDegiro)}</td>
                <td class="hide-mobile fw-bold">${formatEur(fvDegiro)}</td>
                <td><a href="${brokerSignupUrl('degiro')}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-sm"><span class="d-none d-md-inline">${t('otvorUcet')}</span><span class="d-md-none">→</span></a></td>
            </tr>
            <tr>
                <td><strong class="broker-tip" data-broker="etoro">eToro</strong></td>
                <td>0%<br><small class="text-muted">1,5% konv.</small></td>
                <td class="hide-mobile">${t('dostupnostEU')}</td>
                <td class="hide-mobile">EN</td>
                <td class="text-warning fw-bold">-${formatEur(nakladyeToro)}</td>
                <td class="hide-mobile fw-bold">${formatEur(fveToro)}</td>
                <td><a href="${brokerSignupUrl('etoro')}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-sm"><span class="d-none d-md-inline">${t('otvorUcet')}</span><span class="d-md-none">→</span></a></td>
            </tr>
            <tr>
                <td><strong class="broker-tip" data-broker="portu">Portu</strong></td>
                <td>1% ročne</td>
                <td class="hide-mobile">${t('dostupnostSKCZ')}</td>
                <td class="hide-mobile">SK/CZ</td>
                <td class="text-danger fw-bold">-${formatEur(nakladyPortu)}</td>
                <td class="hide-mobile fw-bold">${formatEur(fvPortu)}</td>
                <td><a href="${brokerSignupUrl('portu')}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-sm"><span class="d-none d-md-inline">${t('otvorUcet')}</span><span class="d-md-none">→</span></a></td>
            </tr>
        </tbody>
    </table>
    </div>
    <p class="text-muted small text-center mt-2">
        ${t('brokerNotePrefix')}${formatEur(mesacna)}${t('brokerNoteMid')}${roky} ${pluralYear(roky)}${t('brokerNoteSuffix')}${(vynosZaklad * 100).toFixed(0)}${t('brokerNoteEnd')}
    </p>
`

    // Graf
    vykreslGraf(mesacna, roky, inflacia, rizikoPoupravene)
}

// Graf
let chartInstance = null

function vykreslGraf(mesacna, roky, inflacia, riziko) {
    const labels = []
    const dataNasdaq = []
    const dataSp500 = []
    const dataWorld = []
    const dataReal = []
    const dataDlhopisy = []
    const dataVlozene = []

    const vynosRealne = riziko === 'agresivny'
        ? indexy.nasdaq.vynos
        : riziko === 'vyvazeny'
            ? indexy.sp500.vynos
            : indexy.world.vynos
    const labelRealne = riziko === 'agresivny' ? t('chartNasdaqReal') : riziko === 'vyvazeny' ? t('chartSP500Real') : t('chartMSCIReal')

    for (let r = 1; r <= roky; r++) {
        labels.push(`${r} ${t('chartYearShort')}`)
        dataNasdaq.push(Math.round(vypocitajFV(mesacna, r, indexy.nasdaq.vynos)))
        dataSp500.push(Math.round(vypocitajFV(mesacna, r, indexy.sp500.vynos)))
        dataWorld.push(Math.round(vypocitajFV(mesacna, r, indexy.world.vynos)))
        dataDlhopisy.push(Math.round(vypocitajFV(mesacna, r, indexy.dlhopisy.vynos)))
        dataReal.push(Math.round(realnaHodnota(mesacna, r, vynosRealne, inflacia)))
        dataVlozene.push(Math.round(mesacna * 12 * r))
    }

    if (chartInstance) chartInstance.destroy()

    const ctx = document.getElementById('graf').getContext('2d')
    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [
                { label: 'NASDAQ 100', data: dataNasdaq, borderColor: '#0d6efd', backgroundColor: 'rgba(13,110,253,0.08)', borderWidth: 2.5, pointRadius: 0, tension: 0.4, fill: false },
                { label: 'S&P 500', data: dataSp500, borderColor: '#198754', backgroundColor: 'rgba(25,135,84,0.08)', borderWidth: 2.5, pointRadius: 0, tension: 0.4, fill: false },
                { label: 'MSCI World', data: dataWorld, borderColor: '#e6a817', backgroundColor: 'rgba(255,193,7,0.08)', borderWidth: 2.5, pointRadius: 0, tension: 0.4, fill: false },
                { label: t('chartDlhopisy'), data: dataDlhopisy, borderColor: '#20c997', backgroundColor: 'rgba(32,201,151,0.08)', borderWidth: 2, pointRadius: 0, tension: 0.4, fill: false },
                { label: labelRealne, data: dataReal, borderColor: '#6f42c1', borderDash: [6, 4], borderWidth: 2, pointRadius: 0, tension: 0.4, fill: false },
                { label: t('chartVlozene'), data: dataVlozene, borderColor: '#6c757d', backgroundColor: 'rgba(108,117,125,0.08)', borderWidth: 1.5, pointRadius: 0, tension: 0, fill: true }
            ]
        },
        options: {
            responsive: true,
            interaction: { mode: 'index', intersect: false },
            plugins: {
                legend: { position: 'bottom', labels: { boxWidth: 20, padding: 14, font: { size: 12 } } },
                tooltip: {
                    callbacks: {
                        label: ctx => ` ${ctx.dataset.label}: ${formatEur(ctx.parsed.y)}`
                    }
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { maxTicksLimit: 10, font: { size: 11 } } },
                y: {
                    grid: { color: 'rgba(0,0,0,0.06)' },
                    ticks: {
                        font: { size: 11 },
                        callback: val => {
                            if (val >= 1_000_000) return (val / 1_000_000).toFixed(1) + ' M€'
                            if (val >= 1_000) return (val / 1_000).toFixed(0) + ' k€'
                            return val + ' €'
                        }
                    }
                }
            }
        }
    })
}

// Live update labielov sliderov
function aktualizujLabely() {
    const mesacna = parseFloat(document.getElementById('mesacnaInvesticia').value)
    const roky = parseInt(document.getElementById('pocetRokov').value)
    const inflacia = parseFloat(document.getElementById('inflacia').value)

    document.getElementById('labelMesacna').textContent = formatEur(mesacna)
    document.getElementById('labelRoky').textContent = roky + ' ' + pluralYear(roky)
    document.getElementById('labelInflacia').textContent = inflacia.toFixed(2).replace('.', ',') + ' %'
}

// Event listenery — live výpočet
;['mesacnaInvesticia', 'pocetRokov', 'inflacia', 'riziko'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
        aktualizujLabely()
        vypocitaj()
    })
})

// Custom broker tooltip — event delegácia
const brokerTooltipEl = document.getElementById('broker-tooltip')

const metaHtml = () => t('metaHtml')

const tabulkaEl = document.getElementById('tabulkaVysledkov')

tabulkaEl.addEventListener('mouseover', e => {
    if (!e.target.closest('.metodika-tip')) return
    brokerTooltipEl.innerHTML = metaHtml()
    brokerTooltipEl.classList.add('wide')
    brokerTooltipEl.style.display = 'block'
})
tabulkaEl.addEventListener('mousemove', e => {
    if (!e.target.closest('.metodika-tip')) return
    brokerTooltipEl.style.left = (e.clientX + 14) + 'px'
    brokerTooltipEl.style.top  = (e.clientY + 14) + 'px'
})
tabulkaEl.addEventListener('mouseleave', () => {
    brokerTooltipEl.style.display = 'none'
    brokerTooltipEl.classList.remove('wide')
})
tabulkaEl.addEventListener('mouseout', e => {
    if (!e.target.closest('.metodika-tip')) {
        brokerTooltipEl.style.display = 'none'
        brokerTooltipEl.classList.remove('wide')
    }
})

// Broker tooltip listeners — attached once to the static #brokeri container
const brokeriEl = document.getElementById('brokeri')

brokeriEl.addEventListener('mouseover', e => {
    const tip = e.target.closest('.broker-tip')
    if (!tip) return
    const klic = tip.dataset.broker
    brokerTooltipEl.innerHTML = brokerTooltip(klic)
    brokerTooltipEl.style.display = 'block'
})

brokeriEl.addEventListener('mousemove', e => {
    brokerTooltipEl.style.left = (e.clientX + 14) + 'px'
    brokerTooltipEl.style.top  = (e.clientY + 14) + 'px'
})

brokeriEl.addEventListener('mouseleave', () => {
    brokerTooltipEl.style.display = 'none'
})

brokeriEl.addEventListener('mouseout', e => {
    if (!e.target.closest('.broker-tip')) brokerTooltipEl.style.display = 'none'
})

// Inicializácia pri načítaní stránky
aktualizujLabely()
vypocitaj()

// Nastav aktívne tlačidlo jazyka
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === getLang())
})
