// Hardcoded values
const assetA_future = 124338000; // Target amount of Asset A in 3 years
const assetB_current = 450000; // Current price of Asset B
const assetB_rate = 5 / 100; // Growth rate of Asset B (converted to decimal)

// Display hardcoded values on the page
document.getElementById("assetA_future").innerText = assetA_future;
document.getElementById("assetB_current").innerText = assetB_current;
document.getElementById("assetB_rate").innerText = (assetB_rate * 100) + "%";

// Calculate Asset A's current value
const assetA_current = assetA_future / 3;

// Calculate Asset B's current value (reverse compound interest)
const assetB_currentValue = assetB_current / Math.pow(1 + assetB_rate, 3);

// Total net worth
const netWorth = assetA_current + assetB_currentValue;

// Display result
document.getElementById("networth").innerText = netWorth.toFixed(2);
