document.addEventListener("DOMContentLoaded", function() {
    const assetA_future = 1384125;
    const assetB_current = 450000;
    const assetB_rate = 5 / 100;
    const conversionRateInput = document.getElementById("conversion_rate");

    const monthlySavings = 5000;
    const savingsPerMillisecond = monthlySavings / (30 * 24 * 60 * 60 * 1000);

    let totalNetWorthUSD = (assetA_future / 3) + (assetB_current / Math.pow(1 + assetB_rate, 3));

    function updateNetWorth() {
        let usdToInrRate = parseFloat(conversionRateInput.value) || 86.70;

        totalNetWorthUSD += savingsPerMillisecond * 100;
        const netWorthINR = totalNetWorthUSD * usdToInrRate;

        document.getElementById("networth_usd").innerText = totalNetWorthUSD.toFixed(2);
        document.getElementById("networth_inr").innerText = netWorthINR.toFixed(2);
        document.getElementById("networth_usd_telugu").innerText = totalNetWorthUSD.toFixed(2);
        document.getElementById("networth_inr_telugu").innerText = netWorthINR.toFixed(2);
    }

    setInterval(updateNetWorth, 100);
    conversionRateInput.addEventListener("input", updateNetWorth);
    updateNetWorth();
});
