document.addEventListener("DOMContentLoaded", function() {
    // Hardcoded values
    const assetA_future = 1384125; // Target amount of Asset A in 3 years
    const assetB_current = 450000; // Current price of Asset B
    const assetB_rate = 5 / 100; // Growth rate of Asset B (converted to decimal)

    // Display hardcoded values on the page
    document.getElementById("assetA_future").innerText = assetA_future;
    document.getElementById("assetB_current").innerText = assetB_current;
    document.getElementById("assetB_rate").innerText = (assetB_rate * 100) + "%";

    function updateNetWorth() {
        // Calculate Asset A's current value
        const assetA_current = assetA_future / 3;

        // Calculate Asset B's current value (reverse compound interest)
        const assetB_currentValue = assetB_current / Math.pow(1 + assetB_rate, 3);

        // Total net worth
        const netWorth = assetA_current + assetB_currentValue;

        // Display result (rounded to 2 decimal places)
        document.getElementById("networth").innerText = netWorth.toFixed(2);
    }

    // Update net worth immediately
    updateNetWorth();

    // Update net worth dynamically every second
    setInterval(updateNetWorth, 1000);
});
