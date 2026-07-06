let score = 0;

function handleCellClick(index) {
  const status = document.getElementById('status');
  score++;
  status.textContent = `מספר לחיצות: ${score}`;
  
  if (score === 5) {
    status.textContent = "כל הכבוד! הגעת ליעד!";
    status.style.color = "blue";
  }
}

function resetGame() {
  score = 0;
  document.getElementById('status').textContent = "";
  document.getElementById('status').style.color = "black";
}