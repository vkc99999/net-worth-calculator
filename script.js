document.addEventListener("DOMContentLoaded", function() {
    // Hardcoded values
    const assetA_future = 1384125; // Target amount of Asset A in 3 years
    const assetB_current = 450000; // Current price of Asset B
    const assetB_rate = 5 / 100; // Growth rate of Asset B (% per year)
    const conversionRateInput = document.getElementById("conversion_rate");

    // Splitting $5000 per month into per-millisecond increments
    const monthlySavings = 5000; 
    const savingsPerMillisecond = monthlySavings / (30 * 24 * 60 * 60 * 1000);

    // Initial net worth calculation
    let totalNetWorthUSD = (assetA_future / 3) + (assetB_current / Math.pow(1 + assetB_rate, 3));

    function updateNetWorth() {
        // Get the latest conversion rate entered by the user
        let usdToInrRate = parseFloat(conversionRateInput.value) || 86.70;

        // Add the savings accumulated in the last 100 milliseconds
        totalNetWorthUSD += savingsPerMillisecond * 100; 

        // Convert USD net worth to INR
        const netWorthINR = totalNetWorthUSD * usdToInrRate;

        // Display updated values in both English & Telugu sections
        document.getElementById("networth_usd").innerText = totalNetWorthUSD.toFixed(6);
        document.getElementById("networth_inr").innerText = netWorthINR.toFixed(6);
        document.getElementById("networth_usd_telugu").innerText = totalNetWorthUSD.toFixed(6);
        document.getElementById("networth_inr_telugu").innerText = netWorthINR.toFixed(6);
    }

    // Run updateNetWorth every 100 milliseconds (10 times per second)
    setInterval(updateNetWorth, 100);

    // Ensure updates happen when conversion rate is changed
    conversionRateInput.addEventListener("input", updateNetWorth);

    // Run first update immediately
    updateNetWorth();
});
