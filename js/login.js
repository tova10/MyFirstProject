document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const messageDiv = document.getElementById('message');
  
  // כאן תתבצע בדיקה מול שרת
  messageDiv.textContent = `שלום ${username}, מתבצע תהליך התחברות...`;
  messageDiv.style.marginTop = "10px";
  messageDiv.style.color = "#333";
});

function tova(params) {
  
}
