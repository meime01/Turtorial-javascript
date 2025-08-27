const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const DOTS = 40;
const dots = [];

for (let i = 0; i < DOTS; i++) {
    dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseSize: 8 + Math.random() * 18,
        size: 0,
        opacity: 0,
        speed: 0.5 + Math.random(),
        phase: Math.random() * Math.PI * 2
    });
}

function animateDots() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach(dot => {
        // Animate size and opacity with sine wave
        const t = performance.now() / 1000 * dot.speed + dot.phase;
        dot.size = dot.baseSize * (0.6 + 0.4 * Math.abs(Math.sin(t)));
        dot.opacity = 0.3 + 0.5 * Math.abs(Math.cos(t));
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(118, 185, 0, ${dot.opacity})`; // NVIDIA green
        ctx.fill();
    });
    requestAnimationFrame(animateDots);
}
animateDots();