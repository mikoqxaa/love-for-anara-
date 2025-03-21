document.addEventListener("DOMContentLoaded", function() {
    const heartContainer = document.querySelector(".hearts-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤";
        heart.style.left = Math.random() * 100 + "vw"; // Рандомное положение по ширине
        heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // 3-5 секунд падения
        heart.style.fontSize = Math.random() * 20 + 10 + "px"; // Разный размер
        heart.style.opacity = Math.random() * 0.5 + 0.5; // Прозрачность
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300); // Каждые 300мс создается новое сердечко
});