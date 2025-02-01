function calculateNetWorth() {
    // Get user inputs
    let assetA_future = parseFloat(document.getElementById("assetA_future").value);
    let assetB_current = parseFloat(document.getElementById("assetB_current").value);
    let assetB_rate = parseFloat(document.getElementById("assetB_rate").value) / 100;
    let assetC_current = parseFloat(document.getElementById("assetC_current").value);
    let assetC_rate = parseFloat(document.getElementById("assetC_rate").value) / 100;

    // Calculate Asset A's current value
    let assetA_current = assetA_future / 3;

    // Calculate Asset B's current value (reverse compound interest)
    let assetB_currentValue = assetB_current / Math.pow(1 + assetB_rate, 3);

    // Calculate Asset C's current value (reverse compound interest)
    let assetC_currentValue = assetC_current / Math.pow(1 + assetC_rate, 3);

    // Total net worth
    let netWorth = assetA_current + assetB_currentValue + assetC_currentValue;

    // Display result
    document.getElementById("networth").innerText = netWorth.toFixed(2);
}
