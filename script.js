document.addEventListener("DOMContentLoaded", function() {
    // Hardcoded values
    const assetA_future = 1384125; // Target amount of Asset A in 3 years
    const assetB_current = 450000; // Current price of Asset B
    const assetB_rate = 5 / 100; // Growth rate of Asset B (converted to decimal)
    const conversionRateInput = document.getElementById("conversion_rate");

    // Additional savings contribution ($5000/month distributed per second)
    const monthlySavings = 5000; // $5000 per month
    const savingsPerSecond = monthlySavings / (30 * 24 * 60 * 60); // Split over a month

    // Store initial net worth
    let totalNetWorthUSD = 0;

    // Display hardcoded values on the page
    document.getElementById("assetA_future").innerText = assetA_future;
    document.getElementById("assetB_current").innerText = assetB_current;
    document.getElementById("assetB_rate").innerText = (assetB_rate * 100) + "%";

    function updateNetWorth() {
        // Get the latest conversion rate from user input
        let usdToInrRate = parseFloat(conversionRateInput.value) || 86.70;

        // Calculate Asset A's current value
        const assetA_current = assetA_future / 3;

        // Calculate Asset B's current value (reverse compound interest)
        const assetB_currentValue = assetB_current / Math.pow(1 + assetB_rate, 3);

        // Total net worth in USD (add new savings every second)
        totalNetWorthUSD = assetA_current + assetB_currentValue + savingsPerSecond;

        // Convert net worth to INR
        const netWorthINR = totalNetWorthUSD * usdToInrRate;

        // Display results (rounded to 6 decimal places)
        document.getElementById("networth_usd").innerText = totalNetWorthUSD.toFixed(6);
        document.getElementById("networth_inr").innerText = netWorthINR.toFixed(6);
    }

    // Run updateNetWorth every second
    setInterval(updateNetWorth, 1000);

    // Update net worth whenever conversion rate changes
    conversionRateInput.addEventListener("input", updateNetWorth);

    // Initial calculation
    updateNetWorth();
});
