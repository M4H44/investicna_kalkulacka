// Info o brokeroch — bezpečnosť, regulácia, ochrana
const brokerMeta = {
    xtb:  { regulacia: 'KNF (Poľsko), licencia v EÚ', ochrana: 'ICF do 20 000 €', poznamka: 'Aktíva klientov oddelené od majetku XTB. ETF sú cenné papiere vo tvojom vlastníctve — XTB je len sprostredkovateľ. V prípade bankrotu brokera sa ETF vrátia tebe.' },
    t212: { regulacia: 'FCA (UK), CySEC (Cyprus)', ochrana: 'ICF do 20 000 €', poznamka: 'ETF spravuje nezávislý depozitár (Interactive Brokers UK). Tvoje aktíva nie sú majetkom Trading 212. Sprostredkovateľ, nie správca.' },
    degiro: { regulacia: 'AFM / DNB (Holandsko)', ochrana: 'ICF do 20 000 €', poznamka: 'ETF sú držané v samostatnej právnickej entite Stichting DEGIRO — oddelene od majetku brokera. Tvoje cenné papiere sú chránené aj pri bankrote DEGIRO.' },
    tr:   { regulacia: 'BaFin (Nemecko) — banková licencia', ochrana: 'Vklady do 100 000 € (bankový depozit) + ICF do 20 000 €', poznamka: 'Trade Republic je nemecká banka. ETF ako cenné papiere sú oddelené od súvahy banky a patria tebe, nie banke.' },
    etoro: { regulacia: 'CySEC (Cyprus), FCA (UK)', ochrana: 'ICF do 20 000 €', poznamka: 'Klientske aktíva sú oddelené od majetku eToro. ETF sú vo vlastníctve klienta. eToro je sprostredkovateľ — vydavateľom ETF je iShares, Vanguard a pod.' },
    portu: { regulacia: 'ČNB (Česká republika)', ochrana: 'ICF do 20 000 €', poznamka: 'Aktíva klientov sú uložené u depozitára (Raiffeisen Bank). Portu spravuje portfólio, ale tvoje ETF sú majetkom teba, nie Portu.' }
}

function brokerTooltip(klic) {
    const b = brokerMeta[klic]
    return `<strong>Regulácia:</strong> ${b.regulacia}<br><strong>Ochrana:</strong> ${b.ochrana}<br><br>${b.poznamka}`
}

// Historické výnosy indexov
const indexy = {
    nasdaq:  { nazov: 'NASDAQ 100',  vynos: 0.14, farba: '#0d6efd' },
    sp500:   { nazov: 'S&P 500',     vynos: 0.11, farba: '#198754' },
    world:   { nazov: 'MSCI World',  vynos: 0.09, farba: '#ffc107' },
    dlhopisy:{ nazov: 'Dlhopisy',    vynos: 0.03, farba: '#6c757d' }
}

// Odporúčania ETF podľa profilu
const etfOdporucania = {
    agresivny: {
        dlhy: [
            { etf: 'Amundi NASDAQ-100 II UCITS ETF Acc (6AQQ)', isin: 'LU1681038243', dovod: 'Najvyšší historický výnos ~14% p.a., TER 0,23%, ACC — dostupné na XTB aj Trading 212 v EUR (Xetra: 6AQQ.DE)', zlozenie: '100 najväčších nefinančných US tech spoločností — Apple, Microsoft, Nvidia, Amazon...', vynos: '~14% p.a. (1985–2024)' },
            { etf: 'iShares Core S&P 500 UCITS ETF Acc (CSP1)', isin: 'IE00B5BMR087', dovod: 'Stabilnejší ako NASDAQ, ~11% p.a., TER 0,07%, ACC — dostupné na XTB aj Trading 212 v EUR (Xetra: SXR8.DE)', zlozenie: '500 najväčších US spoločností naprieč všetkými sektormi', vynos: '~11% p.a. (1985–2024)' }
        ],
        kratky: [
            { etf: 'iShares Core S&P 500 UCITS ETF Acc (CSP1)', isin: 'IE00B5BMR087', dovod: 'Stabilný, likvidný, TER 0,07% — dostupné na XTB aj Trading 212 v EUR', zlozenie: '500 najväčších US spoločností naprieč všetkými sektormi', vynos: '~11% p.a. (1985–2024)' },
            { etf: 'iShares Core MSCI World UCITS ETF Acc (IWDA)', isin: 'IE00B4L5Y983', dovod: 'Širšia diverzifikácia, nižšia volatilita, TER 0,20% — dostupné na XTB aj Trading 212 v EUR', zlozenie: '~1 400 spoločností z 23 rozvinutých krajín (US, EU, JP...)', vynos: '~9% p.a. (1985–2024)' }
        ]
    },
    vyvazeny: {
        dlhy: [
            { etf: 'iShares Core S&P 500 UCITS ETF Acc (CSP1)', isin: 'IE00B5BMR087', dovod: 'Dlhodobý výnos ~11% p.a., nižšia volatilita, TER 0,07% — dostupné na XTB aj Trading 212 v EUR', zlozenie: '500 najväčších US spoločností naprieč všetkými sektormi', vynos: '~11% p.a. (1985–2024)' },
            { etf: 'Vanguard FTSE All-World UCITS ETF Acc (VWCE)', isin: 'IE00BK5BQT80', dovod: 'Maximálna globálna diverzifikácia vr. rozvíjajúcich sa trhov, TER 0,22% — dostupné na XTB aj Trading 212 v EUR', zlozenie: '~3 700 spoločností z celého sveta vrátane emerging markets (Čína, India...)', vynos: '~9% p.a. (1985–2024)' }
        ],
        kratky: [
            { etf: 'iShares Core MSCI World UCITS ETF Acc (IWDA)', isin: 'IE00B4L5Y983', dovod: 'Rozvinuté trhy, nižšia volatilita, TER 0,20% — dostupné na XTB aj Trading 212 v EUR', zlozenie: '~1 400 spoločností z 23 rozvinutých krajín (US, EU, JP...)', vynos: '~9% p.a. (1985–2024)' },
            { etf: 'Vanguard FTSE All-World UCITS ETF Acc (VWCE)', isin: 'IE00BK5BQT80', dovod: 'Širšia diverzifikácia vr. rozvíjajúcich sa trhov, TER 0,22% — dostupné na XTB aj Trading 212 v EUR', zlozenie: '~3 700 spoločností z celého sveta vrátane emerging markets', vynos: '~9% p.a. (1985–2024)' }
        ]
    },
    konzervativny: {
        dlhy: [
            { etf: 'iShares Core MSCI World UCITS ETF Acc (IWDA)', isin: 'IE00B4L5Y983', dovod: 'Rozvinuté trhy ~9% p.a., nižšie riziko ako S&P 500, TER 0,20% — dostupné na XTB aj Trading 212 v EUR', zlozenie: '~1 400 spoločností z 23 rozvinutých krajín (US, EU, JP...)', vynos: '~9% p.a. (1985–2024)' },
            { etf: 'Vanguard FTSE All-World UCITS ETF Acc (VWCE)', isin: 'IE00BK5BQT80', dovod: 'Maximálna diverzifikácia vr. rozvíjajúcich sa trhov, TER 0,22% — dostupné na XTB aj Trading 212 v EUR', zlozenie: '~3 700 spoločností z celého sveta vrátane emerging markets', vynos: '~9% p.a. (1985–2024)' }
        ],
        kratky: [
            { etf: 'iShares Core Euro Govt Bond UCITS ETF (IEAG)', isin: 'IE00B4WXJJ64', dovod: 'Štátne dlhopisy eurozóny, nízke riziko, TER 0,09%. ⚠️ Distribučný (DIS) — kupóny vyplácané pravidelne, treba ručne reinvestovať.', zlozenie: 'Štátne dlhopisy Nemecka, Francúzska, Talianska, Španielska a ďalších krajín EÚ', vynos: '~3% p.a. (forward estimate)' },
            { etf: 'Vanguard EUR Eurozone Govt Bond UCITS ETF (VETY)', isin: 'IE00BZ163H91', dovod: 'Alternatíva od Vanguard, nižší TER 0,07%. ⚠️ Distribučný (DIS) — kupóny vyplácané pravidelne, treba ručne reinvestovať.', zlozenie: 'Štátne dlhopisy krajín eurozóny — podobné zloženie ako IEAG', vynos: '~3% p.a. (forward estimate)' }
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
// (každý mesačný vklad sa diskontuje iba infláciou za čas, počas ktorého rástol)
function realnaHodnota(mesacna, roky, vynosRocny, inflaciaPercent) {
    const rNom  = vynosRocny / 12
    const rInf  = inflaciaPercent / 100 / 12
    const rReal = (1 + rNom) / (1 + rInf) - 1
    const n     = roky * 12
    if (rReal === 0) return mesacna * n
    return mesacna * ((Math.pow(1 + rReal, n) - 1) / rReal)
}

// Hlavná funkcia
function vypocitaj() {
    const mesacna = parseFloat(document.getElementById('mesacnaInvesticia').value)
    const roky = parseInt(document.getElementById('pocetRokov').value)
    const inflacia = parseFloat(document.getElementById('inflacia').value)
    const riziko = document.getElementById('riziko').value
    const horizont = roky <= 5 ? 'kratky' : 'dlhy'
    const vek = parseInt(document.getElementById('vek').value)

    if (isNaN(mesacna) || isNaN(roky) || isNaN(inflacia) || isNaN(vek)) return
    if (mesacna <= 0 || roky <= 0) return

// Korektor podľa veku
    let rizikoPoupravene = riziko
    if (vek > 55) {
        if (riziko === 'agresivny') rizikoPoupravene = 'vyvazeny'
        if (riziko === 'vyvazeny') rizikoPoupravene = 'konzervativny'
    }
    if (vek < 30) {
        if (riziko === 'konzervativny') rizikoPoupravene = 'vyvazeny'
        if (riziko === 'vyvazeny') rizikoPoupravene = 'agresivny'
    }

    const vlozene = mesacna * 12 * roky

    // Výpočet pre každý index
    let tabulkaHTML = `
        <div class="table-responsive">
        <table class="table table-hover text-center">
            <thead class="table-dark">
                <tr>
                    <th>Index</th>
                    <th>Vložené</th>
                    <th>Nominálne</th>
                    <th>Reálne (po inflácii)</th>
                    <th>Zisk</th>
                </tr>
            </thead>
            <tbody>
    `

    Object.values(indexy).forEach(index => {
        const fv = vypocitajFV(mesacna, roky, index.vynos)
        const real = realnaHodnota(mesacna, roky, index.vynos, inflacia)
        const zisk = fv - vlozene

        tabulkaHTML += `
            <tr>
                <td><span class="badge" style="background:${index.farba}">${index.nazov}</span></td>
                <td>${formatEur(vlozene)}</td>
                <td class="fw-bold">${formatEur(fv)}</td>
                <td class="text-success fw-bold">${formatEur(real)}</td>
                <td class="text-primary">+${formatEur(zisk)}</td>
            </tr>
        `
    })

    tabulkaHTML += `</tbody></table></div>
        <p class="text-muted small text-center mt-2">
            * Historické výnosy nezaručujú budúce výsledky. Inflácia: ${inflacia}% &nbsp;
            <span class="metodika-tip" style="cursor:help; border-bottom:1px dashed #aaa;">ℹ️ Zdroje &amp; metodika</span>
        </p>
    `

    document.getElementById('tabulkaVysledkov').innerHTML = tabulkaHTML

    // Odporúčanie ETF
    const odporucania = etfOdporucania[rizikoPoupravene][horizont]
    const vekInfo = vek > 55
        ? `<p class="text-warning small">⚠️ Vzhľadom na váš vek (${vek}) sme znížili riziko portfólia.</p>`
        : vek < 30
            ? `<p class="text-info small">💡 Máte ${vek} rokov — odporúčame agresívnejší prístup.</p>`
            : ''

    const etfKarty = odporucania.map((odp, i) => `
    <div class="alert alert-success mb-2">
        <div class="d-flex align-items-center gap-2 mb-1">
            <span class="badge bg-success">${i === 0 ? '1. voľba' : '2. voľba'}</span>
            <h6 class="mb-0">🎯 <span
                class="etf-tooltip-trigger"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-html="true"
                title="<strong>Zloženie:</strong> ${odp.zlozenie}<br><strong>Priemerný výnos:</strong> ${odp.vynos}"
            >${odp.etf}</span></h6>
        </div>
        <p class="mb-1 small"><strong>ISIN:</strong> ${odp.isin}</p>
        <p class="mb-0 small"><strong>Prečo?</strong> ${odp.dovod}</p>
    </div>`).join('')

    document.getElementById('odporucanie').innerHTML = `
    ${vekInfo}
    ${etfKarty}
    <p class="text-muted small mb-0">⚠️ Toto nie je investičné poradenstvo. Informácie sú len vzdelávacie.</p>
`

    // Inicializuj tooltips po každom renderi
    document.querySelectorAll('.etf-tooltip-trigger').forEach(el => {
        new bootstrap.Tooltip(el, { trigger: 'hover focus', html: true, sanitize: false })
    })

    // Brokeri
    // Výpočet nákladov brokerov
    // Výnos podľa profilu
    const vynosZaklad = rizikoPoupravene === 'agresivny' ? 0.14 : rizikoPoupravene === 'vyvazeny' ? 0.11 : 0.09

// XTB - bez poplatkov
    const fvXTB = vypocitajFV(mesacna, roky, vynosZaklad)

// Portu - 1% ročne = znížený výnos
    const fvPortu = vypocitajFV(mesacna, roky, vynosZaklad - 0.01)

// eToro - 1.5% konverzia jednorazovo pri každom vklade
    const fveToro = vypocitajFV(mesacna * (1 - 0.015), roky, vynosZaklad)

// Trading 212 - bez poplatkov
    const fvT212 = vypocitajFV(mesacna, roky, vynosZaklad)

// Trade Republic - 1€/mes fixný poplatok
    const fvTR = vypocitajFV(Math.max(1, mesacna - 1), roky, vynosZaklad)

// DEGIRO - 1€ + 0,038% za transakciu
    const fvDegiro = vypocitajFV(Math.max(1, mesacna - 1 - mesacna * 0.00038), roky, vynosZaklad)

    const nakladyXTB = 0
    const nakladyT212 = 0
    const nakladyDegiro = Math.round(fvXTB - fvDegiro)
    const nakladyPortu = Math.round(fvXTB - fvPortu)
    const nakladyeToro = Math.round(fvXTB - fveToro)
    const nakladyTR = Math.round(fvXTB - fvTR)

    document.getElementById('brokeri').innerHTML = `
    <div class="table-responsive">
    <table class="table table-hover text-center align-middle">
        <thead class="table-dark">
            <tr>
                <th>Broker</th>
                <th>Poplatky ETF</th>
                <th class="hide-mobile">Dostupnosť</th>
                <th class="hide-mobile">Jazyk</th>
                <th>Náklady za ${roky} rokov</th>
                <th class="hide-mobile">Zostatok (nominálne)</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr class="table-success">
                <td><strong class="broker-tip" data-broker="xtb">XTB</strong> ⭐</td>
                <td>0% do 100k€/mes</td>
                <td class="hide-mobile">Celá EÚ</td>
                <td class="hide-mobile">SK/CZ/PL/DE</td>
                <td class="text-success fw-bold">${formatEur(nakladyXTB)}</td>
                <td class="hide-mobile fw-bold">${formatEur(fvXTB)}</td>
                <td><a href="https://www.xtb.com/sk" target="_blank" class="btn btn-success btn-sm">Otvoriť účet</a></td>
            </tr>
            <tr class="table-success">
                <td><strong class="broker-tip" data-broker="t212">Trading 212</strong> ⭐</td>
                <td>0%</td>
                <td class="hide-mobile">Celá EÚ</td>
                <td class="hide-mobile">SK/EN</td>
                <td class="text-success fw-bold">${formatEur(nakladyT212)}</td>
                <td class="hide-mobile fw-bold">${formatEur(fvT212)}</td>
                <td><a href="https://www.trading212.com" target="_blank" class="btn btn-success btn-sm">Otvoriť účet</a></td>
            </tr>
            <tr>
                <td><strong class="broker-tip" data-broker="tr">Trade Republic</strong></td>
                <td>1€/transakcia</td>
                <td class="hide-mobile">18 krajín EÚ</td>
                <td class="hide-mobile">SK/DE/FR</td>
                <td class="text-warning fw-bold">-${formatEur(nakladyTR)}</td>
                <td class="hide-mobile fw-bold">${formatEur(fvTR)}</td>
                <td><a href="https://www.traderepublic.com" target="_blank" class="btn btn-outline-primary btn-sm">Otvoriť účet</a></td>
            </tr>
            <tr>
                <td><strong class="broker-tip" data-broker="degiro">DEGIRO</strong></td>
                <td>1€ + 0,038%</td>
                <td class="hide-mobile">Celá EÚ</td>
                <td class="hide-mobile">SK/EN</td>
                <td class="text-warning fw-bold">-${formatEur(nakladyDegiro)}</td>
                <td class="hide-mobile fw-bold">${formatEur(fvDegiro)}</td>
                <td><a href="https://www.degiro.sk" target="_blank" class="btn btn-outline-primary btn-sm">Otvoriť účet</a></td>
            </tr>
            <tr>
                <td><strong class="broker-tip" data-broker="etoro">eToro</strong></td>
                <td>0% (1.5% konverzia)</td>
                <td class="hide-mobile">Celá EÚ</td>
                <td class="hide-mobile">EN</td>
                <td class="text-warning fw-bold">-${formatEur(nakladyeToro)}</td>
                <td class="hide-mobile fw-bold">${formatEur(fveToro)}</td>
                <td><a href="https://www.etoro.com" target="_blank" class="btn btn-outline-primary btn-sm">Otvoriť účet</a></td>
            </tr>
            <tr>
                <td><strong class="broker-tip" data-broker="portu">Portu</strong></td>
                <td>1% ročne</td>
                <td class="hide-mobile">SK/CZ</td>
                <td class="hide-mobile">SK/CZ</td>
                <td class="text-danger fw-bold">-${formatEur(nakladyPortu)}</td>
                <td class="hide-mobile fw-bold">${formatEur(fvPortu)}</td>
                <td><a href="https://www.portu.sk" target="_blank" class="btn btn-outline-primary btn-sm">Otvoriť účet</a></td>
            </tr>
        </tbody>
    </table>
    </div>
    <p class="text-muted small text-center mt-2">
        * Náklady vypočítané pri ${formatEur(mesacna)}/mes počas ${roky} rokov. Výnos: ${(vynosZaklad * 100).toFixed(0)}% p.a. Hodnoty sú nominálne.
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

    const vynosRealne = riziko === 'agresivny' ? 0.14 : riziko === 'vyvazeny' ? 0.10 : 0.07
    const labelRealne = riziko === 'agresivny' ? 'NASDAQ reálne' : riziko === 'vyvazeny' ? 'S&P 500 reálne' : 'MSCI World reálne'

    for (let r = 1; r <= roky; r++) {
        labels.push(`${r} r.`)
        dataNasdaq.push(Math.round(vypocitajFV(mesacna, r, 0.14)))
        dataSp500.push(Math.round(vypocitajFV(mesacna, r, 0.10)))
        dataWorld.push(Math.round(vypocitajFV(mesacna, r, 0.07)))
        dataDlhopisy.push(Math.round(vypocitajFV(mesacna, r, 0.03)))
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
                { label: 'Dlhopisy (3%)', data: dataDlhopisy, borderColor: '#20c997', backgroundColor: 'rgba(32,201,151,0.08)', borderWidth: 2, pointRadius: 0, tension: 0.4, fill: false },
                { label: labelRealne, data: dataReal, borderColor: '#6f42c1', borderDash: [6, 4], borderWidth: 2, pointRadius: 0, tension: 0.4, fill: false },
                { label: 'Vložené', data: dataVlozene, borderColor: '#6c757d', backgroundColor: 'rgba(108,117,125,0.08)', borderWidth: 1.5, pointRadius: 0, tension: 0, fill: true }
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

// Formátovanie čísel
function formatEur(hodnota) {
    return new Intl.NumberFormat('sk-SK', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0
    }).format(hodnota)
}

// Live update labielov sliderov
function aktualizujLabely() {
    const mesacna = parseFloat(document.getElementById('mesacnaInvesticia').value)
    const roky = parseInt(document.getElementById('pocetRokov').value)
    const vek = parseInt(document.getElementById('vek').value)
    const inflacia = parseFloat(document.getElementById('inflacia').value)

    document.getElementById('labelMesacna').textContent = formatEur(mesacna)
    document.getElementById('labelRoky').textContent = roky + (roky === 1 ? ' rok' : roky < 5 ? ' roky' : ' rokov')
    document.getElementById('labelVek').textContent = vek + ' rokov'
    document.getElementById('labelInflacia').textContent = inflacia.toFixed(2).replace('.', ',') + ' %'
}

// Event listenery — live výpočet
;['mesacnaInvesticia', 'pocetRokov', 'vek', 'inflacia', 'riziko'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
        aktualizujLabely()
        vypocitaj()
    })
})

// Custom broker tooltip — event delegácia na statickom kontajneri
const brokerTooltipEl = document.getElementById('broker-tooltip')

const metaHtml = `
<strong>📊 Zdroje a metodika</strong><br><br>
Výnosy sú historické <strong>CAGR</strong> (geometrický priemer) 1985–2024,<br>
vrátane reinvestovaných dividend (total return index), v USD.<br><br>
<strong>NASDAQ 100 ~14%</strong> — NASDAQ / Bloomberg, total return<br>
<strong>S&P 500 ~11%</strong> — S&P Global / Shiller data, total return<br>
<strong>MSCI World ~9%</strong> — MSCI official index, net total return<br>
<strong>Dlhopisy ~3%</strong> — ECB / Bloomberg Euro Govt Bond Index;<br>
&nbsp;&nbsp;forward estimate podľa súčasných výnosov eurozóny<br><br>
Reálna hodnota: r<sub>real</sub> = (1 + r<sub>nom</sub>) / (1 + i) − 1<br>
aplikovaná mesačne na každý vklad zvlášť.`

const tabulkaEl = document.getElementById('tabulkaVysledkov')

tabulkaEl.addEventListener('mouseover', e => {
    if (!e.target.closest('.metodika-tip')) return
    brokerTooltipEl.innerHTML = metaHtml
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

document.getElementById('brokeri').addEventListener('mouseover', e => {
    const tip = e.target.closest('.broker-tip')
    if (!tip) return
    const klic = tip.dataset.broker
    brokerTooltipEl.innerHTML = brokerTooltip(klic)
    brokerTooltipEl.style.display = 'block'
})

document.getElementById('brokeri').addEventListener('mousemove', e => {
    brokerTooltipEl.style.left = (e.clientX + 14) + 'px'
    brokerTooltipEl.style.top  = (e.clientY + 14) + 'px'
})

document.getElementById('brokeri').addEventListener('mouseleave', () => {
    brokerTooltipEl.style.display = 'none'
})

document.getElementById('brokeri').addEventListener('mouseout', e => {
    if (!e.target.closest('.broker-tip')) brokerTooltipEl.style.display = 'none'
})

// Inicializácia footer broker tooltipov
document.querySelectorAll('.footer-broker-tip').forEach(el => {
    const klic = el.dataset.broker
    new bootstrap.Tooltip(el, { trigger: 'hover focus', html: true, title: brokerTooltip(klic) })
})

// Inicializácia pri načítaní stránky
aktualizujLabely()
vypocitaj()