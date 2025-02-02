document.addEventListener("DOMContentLoaded", function () {
    const conversionRateInput = document.getElementById("conversion_rate");

    function updateTargetConversion() {
        let usdToInrRate = parseFloat(conversionRateInput.value) || 86.70;
        let targetUsd = 2085056.25;
        let targetInr = targetUsd * usdToInrRate;
        let currentUsd = targetUsd * (0.41 + Math.random() * 0.2); // Simulate real-time value
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

    // Movement Logic with Collision Prevention
    const circles = document.querySelectorAll(".container");
    const speed = 0.3;
    let positions = [];

    circles.forEach((circle, index) => {
        let x = Math.random() * (window.innerWidth - circle.clientWidth);
        let y = Math.random() * (window.innerHeight - circle.clientHeight);
        let dx = Math.random() * 2 - 1;
        let dy = Math.random() * 2 - 1;

        positions.push({ x, y, dx, dy });
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    });

    function moveCircles() {
        circles.forEach((circle, index) => {
            let pos = positions[index];

            // Bounce off the walls
            if (pos.x <= 0 || pos.x + circle.clientWidth >= window.innerWidth) {
                pos.dx *= -1;
            }
            if (pos.y <= 0 || pos.y + circle.clientHeight >= window.innerHeight) {
                pos.dy *= -1;
            }

            // Update position
            pos.x += pos.dx * speed;
            pos.y += pos.dy * speed;
            circle.style.left = `${pos.x}px`;
            circle.style.top = `${pos.y}px`;
        });

        requestAnimationFrame(moveCircles);
    }

    moveCircles();
});
