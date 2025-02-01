document.addEventListener("DOMContentLoaded", function() {
    // Hardcoded values
    const assetA_future = 1384125; // Target amount of Asset A in 3 years
    const assetB_current = 450000; // Current price of Asset B
    const assetB_rate = 5 / 100; // Growth rate of Asset B (converted to decimal)
    const conversionRateInput = document.getElementById("conversion_rate");

    // Display hardcoded values on the page
    document.getElementById("assetA_future").innerText = assetA_future;
    document.getElementById("assetB_current").innerText = assetB_current;
    document.getElementById("assetB_rate").innerText = (assetB_rate * 100) + "%";

    function updateNetWorth() {
        // Get the latest conversion rate from user input
        let usdToInrRate = parseFloat(conversionRateInput.value) || 86.70;

        // Simulate dynamic changes (random fluctuations for realism)
        let fluctuation = (Math.random() * 10 - 5) / 100; // ±5% fluctuation
        usdToInrRate += usdToInrRate * fluctuation;

        // Calculate Asset A's current value
        const assetA_current = assetA_future / 3;

        // Calculate Asset B's current value (reverse compound interest)
        const assetB_currentValue = assetB_current / Math.pow(1 + assetB_rate, 3);

        // Total net worth in USD
        const netWorthUSD = assetA_current + assetB_currentValue;

        // Convert net worth to INR
        const netWorthINR = netWorthUSD * usdToInrRate;

        // Display results (rounded to 6 decimal places)
        document.getElementById("networth_usd").innerText = netWorthUSD.toFixed(6);
        document.getElementById("networth_inr").innerText = netWorthINR.toFixed(6);
    }

    // Update net worth dynamically every second
    setInterval(updateNetWorth, 1000);

    // Update net worth whenever conversion rate changes
    conversionRateInput.addEventListener("input", updateNetWorth);

    // Initial calculation
    updateNetWorth();
});
