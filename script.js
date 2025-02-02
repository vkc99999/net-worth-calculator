document.addEventListener("DOMContentLoaded", function () {
    const conversionRateInput = document.getElementById("conversion_rate");

    function updateTargetConversion() {
        let usdToInrRate = parseFloat(conversionRateInput.value) || 86.70;
        let targetUsd = 2085056.25;
        let targetInr = targetUsd * usdToInrRate;

        // Ensure real-time variation within reasonable range
        let fluctuationFactor = 0.02 + Math.random() * 0.02; // 2-4% variation
        let currentUsd = targetUsd * (1 - fluctuationFactor);
        let currentInr = currentUsd * usdToInrRate;

        document.getElementById("target_usd").innerText = `$${targetUsd.toFixed(2)}`;
        document.getElementById("target_inr").innerText = `₹${targetInr.toFixed(2)}`;
        document.getElementById("networth_usd").innerText = `$${currentUsd.toFixed(2)}`;
        document.getElementById("networth_inr").innerText = `₹${currentInr.toFixed(2)}`;
        document.getElementById("networth_usd_telugu").innerText = `$${currentUsd.toFixed(2)}`;
        document.getElementById("networth_inr_telugu").innerText = `₹${currentInr.toFixed(2)}`;
    }

    setInterval(updateTargetConversion, 100); // Update every 100ms (10 times per second)
    updateTargetConversion();

    // Circle Movement Fixes (Ensure Circles Stay Inside)
    const circles = document.querySelectorAll(".container");
    const speed = 0.15; // Slower for better control
    let positions = [];

    circles.forEach((circle, index) => {
        let x = Math.random() * (window.innerWidth - circle.clientWidth - 10);
        let y = Math.random() * (window.innerHeight - circle.clientHeight - 10);
        let dx = (Math.random() * 2 - 1) * speed;
        let dy = (Math.random() * 2 - 1) * speed;

        positions.push({ x, y, dx, dy });
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    });

    function moveCircles() {
        circles.forEach((circle, index) => {
            let pos = positions[index];
            let rect = circle.getBoundingClientRect();
            let maxWidth = window.innerWidth - rect.width;
            let maxHeight = window.innerHeight - rect.height;

            // Ensure Circles Stay Inside
            if (pos.x <= 0 || pos.x >= maxWidth) {
                pos.dx *= -1;
                pos.x = Math.max(0, Math.min(pos.x, maxWidth));
            }
            if (pos.y <= 0 || pos.y >= maxHeight) {
                pos.dy *= -1;
                pos.y = Math.max(0, Math.min(pos.y, maxHeight));
            }

            // Update Position
            pos.x += pos.dx;
            pos.y += pos.dy;
            circle.style.left = `${pos.x}px`;
            circle.style.top = `${pos.y}px`;
        });

        requestAnimationFrame(moveCircles);
    }

    moveCircles();
});
