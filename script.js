document.addEventListener("DOMContentLoaded", function() {
    // Hardcoded values
    const assetA_future = 1384125; // Target amount of Asset A in 3 years
    const assetB_current = 450000; // Current price of Asset B
    const assetB_rate = 5 / 100; // Growth rate of Asset B (converted to decimal)
    const conversionRateInput = document.getElementById("conversion_rate");

    // Additional savings contribution ($5000/month distributed per millisecond)
    const monthlySavings = 5000; // $5000 per month
    const savingsPerMillisecond = monthlySavings / (30 * 24 * 60 * 60 * 1000); // Split over a month

    // Store initial net worth
    let totalNetWorthUSD = 0;

    // Display hardcoded values on both English and Telugu sections
    document.getElementById("assetA_future").innerText = assetA_future;
    document.getElementById("assetB_current").innerText = assetB_current;
    document.getElementById("assetB_rate").innerText = (assetB_rate * 100) + "%";

    document.getElementById("assetA_future_telugu").innerText = assetA_future;
    document.getElementById("assetB_current_telugu").innerText = assetB_current;
    document.getElementById("assetB_rate_telugu").innerText = (assetB_rate * 100) + "%";

    function updateNetWorth() {
        // Get the latest conversion rate from user input
        let usdToInrRate = parseFloat(conversionRateInput.value) || 86.70;

        // Calculate Asset A's current value
        const assetA_current = assetA_future / 3;

        // Calculate Asset B's current value (reverse compound interest)
        const assetB_currentValue = assetB_current / Math.pow(1 + assetB_rate, 3);

        // Increment total net worth in USD (adding savings every millisecond)
        totalNetWorthUSD += savingsPerMillisecond * 10; // 10 ms updates

        // Convert net worth to INR
        const netWorthINR = totalNetWorthUSD * usdToInrRate;

        // Display results (rounded to 6 decimal places) in both sections
        document.getElementById("networth_usd").innerText = totalNetWorthUSD.toFixed(6);
        document.getElementById("networth_inr").innerText = netWorthINR.toFixed(6);

        document.getElementById("networth_usd_telugu").innerText = totalNetWorthUSD.toFixed(6);
        document.getElementById("networth_inr_telugu").innerText = netWorthINR.toFixed(6);
    }

    // Run updateNetWorth every 10 milliseconds (100 updates per second)
    setInterval(updateNetWorth, 10);

    // Update net worth whenever conversion rate changes
    conversionRateInput.addEventListener("input", updateNetWorth);

    // Initial calculation
    updateNetWorth();
});
