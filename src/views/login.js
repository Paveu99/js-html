import { fetchUsers } from "../api/api";

export async function loginView(container) {
    container.innerHTML = `
      <h1>Login</h1>
      <form id="loginForm">
        <input type="text" name="email" placeholder="Email" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
    `;
    const users = await fetchUsers();
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;



        try {
            const user = users.find(u => u.email === email && u.password === password);
            localStorage.setItem('token', user.name);
            localStorage.setItem('token2', user.id);
            localStorage.setItem('token3', user.email);
            window.history.pushState({}, '', '/home');
            window.dispatchEvent(new Event('popstate'));
        } catch (e) {
            alert('Invalid credentials, please try again');
        }
    });
}
