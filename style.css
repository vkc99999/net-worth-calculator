document.addEventListener("DOMContentLoaded", function () {
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

    // Bouncing effect logic
    const circles = document.querySelectorAll(".container");
    const speed = 0.3; // Slow movement speed
    let directions = circles.length ? Array.from({ length: circles.length }, () => ({
        x: Math.random() * 2 - 1,
        y: Math.random() * 2 - 1
    })) : [];

    function moveCircles() {
        circles.forEach((circle, index) => {
            let rect = circle.getBoundingClientRect();
            let parentRect = document.body.getBoundingClientRect();

            let left = rect.left + directions[index].x * speed;
            let top = rect.top + directions[index].y * speed;

            if (left <= 0 || left + rect.width >= parentRect.width) {
                directions[index].x *= -1;
            }
            if (top <= 0 || top + rect.height >= parentRect.height) {
                directions[index].y *= -1;
            }

            circle.style.left = `${left}px`;
            circle.style.top = `${top}px`;
        });

        requestAnimationFrame(moveCircles);
    }

    moveCircles();
});
