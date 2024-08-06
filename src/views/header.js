import { navigate } from "../utils/utils";

export function renderHeader() {
  const header = document.getElementById('header');
  const user = localStorage.getItem('token');

  header.innerHTML = `
      <header>
        <a href="/" id="homeLink">Home</a>
        ${user ? `
          <a href="/history" id="historyLink">History</a>
          <a href="/add" id="addLink">Add Transaction</a>
          <a href="#" id="logoutLink">Logout</a>
          <p id="username">Username: ${user}</p>
        ` : `
          <a href="/login" id="loginLink">Login</a>
        `}
      </header>
    `;

  document.getElementById('homeLink').addEventListener('click', (e) => navigate(e, '/'));
  if (user) {
    document.getElementById('historyLink').addEventListener('click', (e) => navigate(e, '/history'));
    document.getElementById('addLink').addEventListener('click', (e) => navigate(e, '/add'));
    document.getElementById('logoutLink').addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('token');
      localStorage.removeItem('token2');
      localStorage.removeItem('token3');
      navigate(e, '/');
    });
  } else {
    document.getElementById('loginLink').addEventListener('click', (e) => navigate(e, '/login'));
  }
}