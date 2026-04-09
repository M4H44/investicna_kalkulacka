// Historické výnosy indexov
const indexy = {
    nasdaq:  { nazov: 'NASDAQ 100',  vynos: 0.14, farba: '#0d6efd' },
    sp500:   { nazov: 'S&P 500',     vynos: 0.10, farba: '#198754' },
    world:   { nazov: 'MSCI World',  vynos: 0.07, farba: '#ffc107' },
    dlhopisy:{ nazov: 'Dlhopisy',    vynos: 0.03, farba: '#6c757d' }
}

// Odporúčania ETF podľa profilu
const etfOdporucania = {
    agresivny: {
        dlhy: [
            { etf: 'Invesco NASDAQ 100 UCITS ETF (EQQQ)', isin: 'IE0032077012', dovod: 'Najvyšší historický výnos ~14% p.a., TER 0,30%', zlozenie: '100 najväčších nefinančných US tech spoločností — Apple, Microsoft, Nvidia, Amazon...', vynos: '~14% p.a. (1985–2024)' },
            { etf: 'iShares NASDAQ 100 UCITS ETF (CNDX)', isin: 'IE00B53SZB19', dovod: 'Alternatíva od iShares, rovnaký index, TER 0,33%', zlozenie: 'Rovnaké zloženie ako EQQQ — 100 nefinančných US tech titulov', vynos: '~14% p.a. (1985–2024)' }
        ],
        kratky: [
            { etf: 'iShares Core S&P 500 UCITS ETF (CSPX)', isin: 'IE00B5BMR087', dovod: 'Stabilnejší ako NASDAQ pre kratší horizont, TER 0,07%', zlozenie: '500 najväčších US spoločností naprieč všetkými sektormi', vynos: '~10% p.a. (1957–2024)' },
            { etf: 'iShares Core MSCI World UCITS ETF (IWDA)', isin: 'IE00B4L5Y983', dovod: 'Globálna diverzifikácia, nižšie riziko, TER 0,20%', zlozenie: '~1 400 spoločností z 23 rozvinutých krajín (US, EU, JP...)', vynos: '~8% p.a. (1970–2024)' }
        ]
    },
    vyvazeny: {
        dlhy: [
            { etf: 'iShares Core S&P 500 UCITS ETF (CSPX)', isin: 'IE00B5BMR087', dovod: 'Dlhodobý výnos ~10% p.a., nižšia volatilita, TER 0,07%', zlozenie: '500 najväčších US spoločností naprieč všetkými sektormi', vynos: '~10% p.a. (1957–2024)' },
            { etf: 'Vanguard FTSE All-World UCITS ETF (VWCE)', isin: 'IE00BK5BQT80', dovod: 'Širšia globálna diverzifikácia vr. rozvíjajúcich sa trhov, TER 0,22%', zlozenie: '~3 700 spoločností z celého sveta vrátane emerging markets (Čína, India...)', vynos: '~8% p.a. (2000–2024)' }
        ],
        kratky: [
            { etf: 'iShares Core MSCI World UCITS ETF (IWDA)', isin: 'IE00B4L5Y983', dovod: 'Rozvinuté trhy, nižšia volatilita, TER 0,20%', zlozenie: '~1 400 spoločností z 23 rozvinutých krajín (US, EU, JP...)', vynos: '~8% p.a. (1970–2024)' },
            { etf: 'Vanguard FTSE All-World UCITS ETF (VWCE)', isin: 'IE00BK5BQT80', dovod: 'Maximálna diverzifikácia vr. rozvíjajúcich sa trhov, TER 0,22%', zlozenie: '~3 700 spoločností z celého sveta vrátane emerging markets', vynos: '~8% p.a. (2000–2024)' }
        ]
    },
    konzervativny: {
        dlhy: [
            { etf: 'iShares Core MSCI World UCITS ETF (IWDA)', isin: 'IE00B4L5Y983', dovod: 'Rozvinuté trhy ~8% p.a., nižšie riziko ako S&P 500, TER 0,20%', zlozenie: '~1 400 spoločností z 23 rozvinutých krajín (US, EU, JP...)', vynos: '~8% p.a. (1970–2024)' },
            { etf: 'Vanguard FTSE All-World UCITS ETF (VWCE)', isin: 'IE00BK5BQT80', dovod: 'Maximálna diverzifikácia vr. rozvíjajúcich sa trhov, TER 0,22%', zlozenie: '~3 700 spoločností z celého sveta vrátane emerging markets', vynos: '~8% p.a. (2000–2024)' }
        ],
        kratky: [
            { etf: 'iShares Core Euro Govt Bond UCITS ETF (IEAG)', isin: 'IE00B4WXJJ64', dovod: 'Štátne dlhopisy eurozóny, nízke riziko, TER 0,09%', zlozenie: 'Štátne dlhopisy Nemecka, Francúzska, Talianska, Španielska a ďalších krajín EÚ', vynos: '~3% p.a. (2000–2024)' },
            { etf: 'Vanguard EUR Eurozone Govt Bond UCITS ETF (VETY)', isin: 'IE00BZ163L38', dovod: 'Alternatíva od Vanguard, nižší TER, TER 0,07%', zlozenie: 'Štátne dlhopisy krajín eurozóny, podobné zloženie ako IEAG', vynos: '~3% p.a. (2000–2024)' }
        ]
    }
}

// Výpočet budúcej hodnoty (zložený úrok mesačne)
function vypocitajFV(mesacna, roky, vynos) {
    const r = vynos / 12
    const n = roky * 12
    return mesacna * (((Math.pow(1 + r, n)) - 1) / r)
}

// Reálna hodnota po inflácii
function realnaHodnota(fv, inflacia, roky) {
    return fv / Math.pow(1 + inflacia / 100, roky)
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
        const real = realnaHodnota(fv, inflacia, roky)
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
        <p class="text-muted small text-center">* Historické výnosy nezaručujú budúce výsledky. Inflácia: ${inflacia}%</p>
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
        new bootstrap.Tooltip(el)
    })

    // Brokeri
    // Výpočet nákladov brokerov
    // Výnos podľa profilu
    const vynosZaklad = rizikoPoupravene === 'agresivny' ? 0.14 : rizikoPoupravene === 'vyvazeny' ? 0.10 : 0.07

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
                <td><strong>XTB</strong> ⭐</td>
                <td>0% do 100k€/mes</td>
                <td class="hide-mobile">Celá EÚ</td>
                <td class="hide-mobile">SK/CZ/PL/DE</td>
                <td class="text-success fw-bold">${formatEur(nakladyXTB)}</td>
                <td class="hide-mobile fw-bold">${formatEur(fvXTB)}</td>
                <td><a href="https://www.xtb.com/sk" target="_blank" class="btn btn-success btn-sm">Otvoriť účet</a></td>
            </tr>
            <tr class="table-success">
                <td><strong>Trading 212</strong> ⭐</td>
                <td>0%</td>
                <td class="hide-mobile">Celá EÚ</td>
                <td class="hide-mobile">SK/EN</td>
                <td class="text-success fw-bold">${formatEur(nakladyT212)}</td>
                <td class="hide-mobile fw-bold">${formatEur(fvT212)}</td>
                <td><a href="https://www.trading212.com" target="_blank" class="btn btn-success btn-sm">Otvoriť účet</a></td>
            </tr>
            <tr>
                <td><strong>Trade Republic</strong></td>
                <td>1€/transakcia</td>
                <td class="hide-mobile">18 krajín EÚ</td>
                <td class="hide-mobile">SK/DE/FR</td>
                <td class="text-warning fw-bold">-${formatEur(nakladyTR)}</td>
                <td class="hide-mobile fw-bold">${formatEur(fvTR)}</td>
                <td><a href="https://www.traderepublic.com" target="_blank" class="btn btn-outline-primary btn-sm">Otvoriť účet</a></td>
            </tr>
            <tr>
                <td><strong>DEGIRO</strong></td>
                <td>1€ + 0,038%</td>
                <td class="hide-mobile">Celá EÚ</td>
                <td class="hide-mobile">SK/EN</td>
                <td class="text-warning fw-bold">-${formatEur(nakladyDegiro)}</td>
                <td class="hide-mobile fw-bold">${formatEur(fvDegiro)}</td>
                <td><a href="https://www.degiro.sk" target="_blank" class="btn btn-outline-primary btn-sm">Otvoriť účet</a></td>
            </tr>
            <tr>
                <td><strong>eToro</strong></td>
                <td>0% (1.5% konverzia)</td>
                <td class="hide-mobile">Celá EÚ</td>
                <td class="hide-mobile">EN</td>
                <td class="text-warning fw-bold">-${formatEur(nakladyeToro)}</td>
                <td class="hide-mobile fw-bold">${formatEur(fveToro)}</td>
                <td><a href="https://www.etoro.com" target="_blank" class="btn btn-outline-primary btn-sm">Otvoriť účet</a></td>
            </tr>
            <tr>
                <td><strong>Portu</strong></td>
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
        dataReal.push(Math.round(realnaHodnota(vypocitajFV(mesacna, r, vynosRealne), inflacia, r)))
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

// Inicializácia pri načítaní stránky
aktualizujLabely()
vypocitaj()