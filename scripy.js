document.addEventListener("DOMContentLoaded", function() {
    const heartContainer = document.querySelector(".hearts-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("falling-heart");
        heart.innerHTML = "❤";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2-5 сек падения
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);
});

/* CSS для падающих сердечек */
const style = document.createElement("style");
style.innerHTML = `
    .falling-heart {
        position: absolute;
        top: -10px;
        font-size: 24px;
        opacity: 0.8;
        animation: fall 5s linear infinite;
    }

    @keyframes fall {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(100vh); opacity: 0; }
    }
`;
document.head.appendChild(style);