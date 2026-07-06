const btn = document.getElementById('catch-me');
const scoreDisplay = document.getElementById('score');
let score = 0;

btn.addEventListener('mouseover', () => {
    // מציאת מיקום אקראי על המסך
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
});

btn.addEventListener('click', () => {
    score++;
    scoreDisplay.innerText = `נקודות: ${score}`;
    alert("וואו! אתה מהיר מדי!");
});