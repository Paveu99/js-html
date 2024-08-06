import { navigate } from "../utils/utils";

export function homeView(container) {
    const user = localStorage.getItem('token');

    container.innerHTML = `
      <h1>Welcome to the Transaction History App</h1>
      <p>This application allows you to manage and view your transaction history.</p>
      ${!user ? `<p>Please <a href="/login" id="loginLink2">log in</a> to access the full features.</p>` : ''}
    `;

    const link2 = document.getElementById('loginLink2')
    if (link2) {
        link2.addEventListener('click', (e) => navigate(e, '/login'))
    }
}
