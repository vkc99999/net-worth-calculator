document.addEventListener("DOMContentLoaded", function() {
    const conversionRateInput = document.getElementById("conversion_rate");

    const assetA_future = 1384125;
    const assetB_current = 450000;
    const assetB_rate = 5 / 100;

    const monthlySavings = 5000;
    const savingsPerMillisecond = monthlySavings / (30 * 24 * 60 * 60 * 1000);

    let totalNetWorthUSD = (assetA_future / 3) + (assetB_current / Math.pow(1 + assetB_rate, 3));

    function updateNetWorth() {
        let usdToInrRate = parseFloat(conversionRateInput.value) || 86.70;
        totalNetWorthUSD += savingsPerMillisecond * 100;
        const netWorthINR = totalNetWorthUSD * usdToInrRate;

        // Ensure elements exist before updating
        let networthUsdElem = document.getElementById("networth_usd");
        let networthInrElem = document.getElementById("networth_inr");
        let networthUsdTeluguElem = document.getElementById("networth_usd_telugu");
        let networthInrTeluguElem = document.getElementById("networth_inr_telugu");

        if (networthUsdElem && networthInrElem) {
            // Directly apply styles in JavaScript
            networthUsdElem.innerHTML = `<span style="color:#FF1493; text-shadow: 0px 0px 15px rgba(255, 20, 147, 1);">$${totalNetWorthUSD.toFixed(2)}</span>`;
            networthInrElem.innerHTML = `<span style="color:#FF8C00; text-shadow: 0px 0px 15px rgba(255, 140, 0, 1);">₹${netWorthINR.toFixed(2)}</span>`;
            networthUsdTeluguElem.innerHTML = `<span style="color:#FF1493; text-shadow: 0px 0px 15px rgba(255, 20, 147, 1);">$${totalNetWorthUSD.toFixed(2)}</span>`;
            networthInrTeluguElem.innerHTML = `<span style="color:#FF8C00; text-shadow: 0px 0px 15px rgba(255, 140, 0, 1);">₹${netWorthINR.toFixed(2)}</span>`;
        }
    }

    setInterval(updateNetWorth, 100);

    // Moving Circles Without Collisions
    const circles = document.querySelectorAll(".container");
    const speed = 0.08; // Slower movement
    let positions = [];

    function isOverlapping(x1, y1, r1, x2, y2, r2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < (r1 + r2);
    }

    circles.forEach((circle, index) => {
        let size = circle.clientWidth;
        let x, y, dx, dy, overlapping;

        do {
            x = Math.random() * (window.innerWidth - size - 10);
            y = Math.random() * (window.innerHeight - size - 10);
            dx = (Math.random() * 2 - 1) * speed;
            dy = (Math.random() * 2 - 1) * speed;

            overlapping = positions.some(pos => 
                isOverlapping(x, y, size / 2, pos.x, pos.y, pos.size / 2)
            );
        } while (overlapping);

        positions.push({ x, y, dx, dy, size });
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    });

    function moveCircles() {
        circles.forEach((circle, index) => {
            let pos = positions[index];

            let maxWidth = window.innerWidth - pos.size;
            let maxHeight = window.innerHeight - pos.size;

            if (pos.x <= 0 || pos.x >= maxWidth) {
                pos.dx *= -1;
                pos.x = Math.max(0, Math.min(pos.x, maxWidth));
            }
            if (pos.y <= 0 || pos.y >= maxHeight) {
                pos.dy *= -1;
                pos.y = Math.max(0, Math.min(pos.y, maxHeight));
            }

            pos.x += pos.dx;
            pos.y += pos.dy;

            // Prevent Circles from Touching
            positions.forEach((other, otherIndex) => {
                if (index !== otherIndex) {
                    if (isOverlapping(pos.x, pos.y, pos.size / 2, other.x, other.y, other.size / 2)) {
                        pos.dx *= -1;
                        pos.dy *= -1;
                    }
                }
            });

            circle.style.left = `${pos.x}px`;
            circle.style.top = `${pos.y}px`;
        });

        requestAnimationFrame(moveCircles);
    }

    moveCircles();
});
