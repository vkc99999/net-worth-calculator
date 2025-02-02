document.addEventListener("DOMContentLoaded", function() {
    particlesJS("particleshttps://github.com/vkc99999/net-worth-calculator/blob/main/script.js-js", {
        "particles": {
            "number": { "value": 80 },
            "size": { "value": 3 },
            "move": { "speed": 1 }
        }
    });

    const conversionRateInput = document.getElementById("conversion_rate");

    function updateTargetConversion() {
        let usdToInrRate = parseFloat(conversionRateInput.value) || 86.70;
        let targetUsd = 2085056.25;
        let targetInr = targetUsd * usdToInrRate;

        document.getElementById("target_usd").innerText = `$${targetUsd.toFixed(2)}`;
        document.getElementById("target_inr").innerText = `₹${targetInr.toFixed(2)}`;
    }

    conversionRateInput.addEventListener("input", updateTargetConversion);
    updateTargetConversion();
});
