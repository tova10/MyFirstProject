document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const messageDiv = document.getElementById('message');
  
  messageDiv.textContent = `שלום ${username}, תודה שנרשמת!`;
  messageDiv.style.marginTop = "10px";
  messageDiv.style.color = "green";
  
  // כאן ניתן להוסיף לוגיקה לשליחת הנתונים לשרת
});