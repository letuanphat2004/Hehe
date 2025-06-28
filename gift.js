// 👀 Đôi mắt di chuyển theo chuột
const eyes = document.querySelectorAll('.eye');
const pupils = [document.getElementById('pupil-left'), document.getElementById('pupil-right')];

document.addEventListener('mousemove', (e) => {
    eyes.forEach((eye, index) => {
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        const distance = Math.min(20, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 5);

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        pupils[index].style.transform = `translate(${x}px, ${y}px)`;
    });
});

// 👆 Xử lý nút "Xem"
const button = document.getElementById('watchButton');
button.addEventListener('click', () => {
    window.location.href = 'heart.html';
});
