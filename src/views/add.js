import { addTransaction } from '../api/api';

export function addView(container) {
  const userId = localStorage.getItem('token2');
  container.innerHTML = `
    <h1>Add Transaction</h1>
    <form id="addForm">
      <input type="date" name="date" required>
      <input type="number" name="amount" required>
      <button type="submit">Add</button>
    </form>
  `;

  const addForm = document.getElementById('addForm');
  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const amount = e.target.amount.value;
    console.log({ date, amount, userId });
    await addTransaction({ date, amount, userId });
    alert('Transaction added');
    e.target.reset();
  });
}
