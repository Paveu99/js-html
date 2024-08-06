export async function fetchUsers() {
    const response = await fetch(`http://localhost:3000/users`);
    const data = await response.json();
    return data;
}

export async function fetchTransactions(username) {
    const response = await fetch(`http://localhost:3000/transactions?userId=${username}`);
    const data = await response.json();
    return data;
}

export async function fetchTransactionsFiltered(date, amount, username) {
    const response = await fetch(`http://localhost:3000/transactions?date=${date}&amount=${amount}&userId=${username}`);
    const data = await response.json();
    return data;
}

export async function addTransaction(transaction) {
    const response = await fetch('http://localhost:3000/transactions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
    });
    return await response.json();
}

export async function removeTransaction(transactionId) {
    const response = await fetch(`http://localhost:3000/transactions/${transactionId}`, {
        method: 'DELETE'
    });
    return await response.json();
}
