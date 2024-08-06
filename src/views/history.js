import { removeTransaction, fetchTransactions, fetchTransactionsFiltered } from '../api/api';

export function historyView(container) {
  const user = localStorage.getItem("token2")

  container.innerHTML = `
    <h1>Transaction History</h1>
    <form id="filterForm">
      <input type="date" name="date" placeholder="Filter by Date">
      <input type="number" name="amount" placeholder="Filter by Amount">
      <button type="submit">Filter</button>
    </form>
    <table id="transactionsTable">
      <thead>
        <tr>
          <th id="date">Date</th>
          <th id="amount">Amount</th>
          <th id="remove">Remove</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  `;

  const transactionsTable = document.getElementById('transactionsTable').getElementsByTagName('tbody')[0];
  const filterForm = document.getElementById('filterForm');

  filterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const amount = e.target.amount.value;
    const transactions = await fetchTransactionsFiltered(date, amount, user);
    renderTransactions(transactions);
  });

  async function loadTransactions() {
    const transactions = await fetchTransactions(user);
    renderTransactions(transactions);
  }

  function renderTransactions(transactions) {
    transactionsTable.innerHTML = transactions.map(t => `
      <tr data-id="${t.id}">
        <td>${t.date}</td>
        <td>${t.amount}</td>
        <td id="remove-container"><button class="remove-btn">Remove</button></td>
      </tr>
    `).join('');

    // Add event listeners to all remove buttons
    document.querySelectorAll('.remove-btn').forEach(button => {
      button.addEventListener('click', deleteRecord);
    });
  }

  async function deleteRecord(e) {
    const row = e.target.closest('tr');
    const transactionId = row.getAttribute('data-id');
    console.log(transactionId);
    await removeTransaction(transactionId);
    row.remove();
    alert("Data row deleted")
  }

  loadTransactions();
}
