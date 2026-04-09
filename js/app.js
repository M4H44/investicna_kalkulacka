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
        dlhy:   { etf: 'Invesco EQQQ (NASDAQ 100)', isin: 'IE0032077012', dovod: 'Najvyšší historický výnos ~14% p.a.' },
        kratky: { etf: 'iShares Core S&P 500 UCITS (CSPX)', isin: 'IE00B5BMR087', dovod: 'Stabilnejší ako NASDAQ pre kratší horizont' }
    },
    vyvazeny: {
        dlhy:   { etf: 'iShares Core S&P 500 UCITS (CSPX)', isin: 'IE00B5BMR087', dovod: 'Dlhodobý výnos ~10% p.a., nižšia volatilita' },
        kratky: { etf: 'Vanguard FTSE All-World UCITS (VWCE)', isin: 'IE00BK5BQT80', dovod: 'Globálna diverzifikácia, vhodné na 3-5 rokov' }
    },
    konzervativny: {
        dlhy:   { etf: 'Vanguard FTSE All-World UCITS (VWCE)', isin: 'IE00BK5BQT80', dovod: 'Globálna diverzifikácia ~7% p.a.' },
        kratky: { etf: 'iShares Core Euro Govt Bond UCITS', isin: 'IE00B4WXJJ64', dovod: 'Nízke riziko pre krátky horizont' }
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
    const horizont = document.getElementById('horizont').value

    const vek = parseInt(document.getElementById('vek').value)

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
    const odp = etfOdporucania[rizikoPoupravene][horizont]
    const vekInfo = vek > 55
        ? `<p class="text-warning small">⚠️ Vzhľadom na váš vek (${vek}) sme znížili riziko portfólia.</p>`
        : vek < 30
            ? `<p class="text-info small">💡 Máte ${vek} rokov — odporúčame agresívnejší prístup.</p>`
            : ''

    document.getElementById('odporucanie').innerHTML = `
    ${vekInfo}
    <div class="alert alert-success">
        <h5>🎯 ${odp.etf}</h5>
        <p class="mb-1"><strong>ISIN:</strong> ${odp.isin}</p>
        <p class="mb-0"><strong>Prečo?</strong> ${odp.dovod}</p>
    </div>
    <p class="text-muted small">⚠️ Toto nie je investičné poradenstvo. Informácie sú len vzdelávacie.</p>
`

    // Brokeri
    // Výpočet nákladov brokerov
    const fvXTB = vypocitajFV(mesacna, roky, 0.10)
    const fvPortu = vypocitajFV(mesacna * (1 - 0.01/12), roky, 0.10) // 1% ročne
    const fveToro = vypocitajFV(mesacna * (1 - 0.015/12), roky, 0.10) // 1.5% konverzia
    const fvTR = fvXTB - (roky * 12) // 1€ za transakciu mesačne

    const nakladyXTB = 0
    const nakladyPortu = Math.round(fvXTB - fvPortu)
    const nakladyeToro = Math.round(fvXTB - fveToro)
    const nakladyTR = roky * 12

    document.getElementById('brokeri').innerHTML = `
    <div class="table-responsive">
    <table class="table table-hover text-center align-middle">
        <thead class="table-dark">
            <tr>
                <th>Broker</th>
                <th>Poplatky ETF</th>
                <th>Dostupnosť</th>
                <th>Jazyk</th>
                <th>Náklady za ${roky} rokov</th>
                <th>Zostatok</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr class="table-success">
                <td><strong>XTB</strong> ⭐</td>
                <td>0% do 100k€/mes</td>
                <td>Celá EÚ</td>
                <td>SK/CZ/PL/DE</td>
                <td class="text-success fw-bold">${formatEur(nakladyXTB)}</td>
                <td class="fw-bold">${formatEur(fvXTB)}</td>
                <td><a href="https://www.xtb.com/sk" target="_blank" class="btn btn-success btn-sm">Otvoriť účet</a></td>
            </tr>
            <tr>
                <td><strong>Trade Republic</strong></td>
                <td>1€/transakcia</td>
                <td>18 krajín EÚ</td>
                <td>SK/DE/FR</td>
                <td class="text-warning fw-bold">-${formatEur(nakladyTR)}</td>
                <td class="fw-bold">${formatEur(fvTR)}</td>
                <td><a href="https://www.traderepublic.com" target="_blank" class="btn btn-outline-primary btn-sm">Otvoriť účet</a></td>
            </tr>
            <tr>
                <td><strong>eToro</strong></td>
                <td>0% (1.5% konverzia)</td>
                <td>Celá EÚ</td>
                <td>EN</td>
                <td class="text-warning fw-bold">-${formatEur(nakladyeToro)}</td>
                <td class="fw-bold">${formatEur(fveToro)}</td>
                <td><a href="https://www.etoro.com" target="_blank" class="btn btn-outline-primary btn-sm">Otvoriť účet</a></td>
            </tr>
            <tr>
                <td><strong>Portu</strong></td>
                <td>1% ročne</td>
                <td>SK/CZ</td>
                <td>SK/CZ</td>
                <td class="text-danger fw-bold">-${formatEur(nakladyPortu)}</td>
                <td class="fw-bold">${formatEur(fvPortu)}</td>
                <td><a href="https://www.portu.sk" target="_blank" class="btn btn-outline-primary btn-sm">Otvoriť účet</a></td>
            </tr>
        </tbody>
    </table>
    </div>
    <p class="text-muted small text-center mt-2">
        * Náklady vypočítané pri ${formatEur(mesacna)}/mes počas ${roky} rokov pri výnose S&P 500 (~10% p.a.)
    </p>
`

    // Graf
    vykreslGraf(mesacna, roky, inflacia)

    // Zobraz výsledky
    const vysledky = document.getElementById('vysledky')
    vysledky.style.display = 'flex'
    vysledky.scrollIntoView({ behavior: 'smooth' })
}

// Graf
let chartInstance = null

function vykreslGraf(mesacna, roky, inflacia) {
    const labels = []
    const dataNasdaq = []
    const dataSp500 = []
    const dataWorld = []
    const dataReal = []
    const dataVlozene = []

    for (let r = 1; r <= roky; r++) {
        labels.push(`${r} r.`)
        dataNasdaq.push(Math.round(vypocitajFV(mesacna, r, 0.14)))
        dataSp500.push(Math.round(vypocitajFV(mesacna, r, 0.10)))
        dataWorld.push(Math.round(vypocitajFV(mesacna, r, 0.07)))
        dataReal.push(Math.round(realnaHodnota(vypocitajFV(mesacna, r, 0.10), inflacia, r)))
        dataVlozene.push(Math.round(mesacna * 12 * r))
    }

    if (chartInstance) chartInstance.destroy()

    const ctx = document.getElementById('graf').getContext('2d')
    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [
                { label: 'NASDAQ 100', data: dataNasdaq, borderColor: '#0d6efd', tension: 0.4, fill: false },
                { label: 'S&P 500', data: dataSp500, borderColor: '#198754', tension: 0.4, fill: false },
                { label: 'MSCI World', data: dataWorld, borderColor: '#ffc107', tension: 0.4, fill: false },
                { label: 'S&P 500 reálne', data: dataReal, borderColor: '#198754', borderDash: [5,5], tension: 0.4, fill: false },
                { label: 'Vložené', data: dataVlozene, borderColor: '#6c757d', tension: 0.4, fill: false }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' },
                tooltip: {
                    callbacks: {
                        label: ctx => `${ctx.dataset.label}: ${formatEur(ctx.raw)}`
                    }
                }
            },
            scales: {
                y: {
                    ticks: {
                        callback: val => formatEur(val)
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