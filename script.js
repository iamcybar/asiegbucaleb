document.addEventListener("DOMContentLoaded", function () {
    // === MATRIX-STYLE BINARY RAIN EFFECT ===
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();

    const columns = Math.floor(canvas.width / 15);
    const drops = Array(columns).fill(0);

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00ff00";
        ctx.font = "15px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = Math.random() > 0.5 ? "0" : "1";
            const x = i * 15;
            const y = drops[i] * 15;

            ctx.fillText(text, x, y);

            if (y > canvas.height && Math.random() > 0.95) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 50);

    // === TYPING EFFECT FOR TERMINAL ===

    const terminalBody = document.querySelector(".terminal-body");

const lines = [
    "> Welcome to CYBAR’s digital lair...",
    "> Initializing hack mode...",
    "> Access granted!",
    "> Loading top-secret projects...",
    "> Now you can scroll through to view the projects...",
    "> You can also contact CYBAR by filling the form...",
];

let index = 0;

function typeNextLine() {
    if (index < lines.length) {
        let p = document.createElement("p");
        terminalBody.appendChild(p);
        let text = lines[index];
        let i = 0;
        let interval = setInterval(() => {
            p.innerHTML += text[i];
            i++;
            if (i === text.length) {
                clearInterval(interval);
                index++;
                setTimeout(typeNextLine, 1000);
            }
        }, 50);
    }
}

setTimeout(typeNextLine, 500);

    // === CONTACT FORM ALERT ===
    const form = document.querySelector(".contact form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Message Sent!");
        form.reset();
    });

    // Resize canvas when window resizes
    window.addEventListener("resize", resizeCanvas);
});


function glitchEffect() {
    const text = document.getElementById("glitch-text");
    const originalText = "CYBAR";
    
    setInterval(() => {
        let glitchText = originalText.split("");

        for (let i = 0; i < glitchText.length; i++) {
            if (Math.random() > 0.7) { 
                glitchText[i] = String.fromCharCode(33 + Math.random() * 94); 
            }
        }

        text.innerText = glitchText.join("");

        setTimeout(() => {
            text.innerText = originalText;
        }, 200);
        
    }, 800);
}

glitchEffect();

document.addEventListener("click", () => {
    document.body.classList.add("glitch");
    setTimeout(() => {
        document.body.classList.remove("glitch");
    }, 500);
});

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "h") {
        document.body.style.background = "#ff0000";
        document.body.innerHTML = "<h1>ADMIN MODE ACTIVATED 🔥</h1>";
    }
});
