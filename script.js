$(document).ready(function () {
    let totalBudget = 0;

    function updateBudget() {
        $('#total-budget').text('Rs ' + totalBudget.toFixed(2));
    }

    function addExpense(description, amount) {
        const expenseItem = `
            <li class="expense-item">
                <p>${description}</p>
                <p>Rs${amount.toFixed(2)}</p>
                <button class="delete-button">Delete</button>
            </li>
        `;
        $('#expense-list').append(expenseItem);
    }

    $('#add-expense').on('click', function () {
        const description = $('#expense-description').val();
        const amount = parseFloat($('#expense-amount').val());

        if (!description || isNaN(amount) || amount <= 0) {
            alert('Please enter a valid description and amount.');
            return;
        }

        totalBudget -= amount;
        updateBudget();
        addExpense(description, amount);

        $('#expense-description').val('');
        $('#expense-amount').val('');
    });

    $('#expense-list').on('click', '.delete-button', function () {
        const expenseItem = $(this).closest('.expense-item');
        const amount = parseFloat(expenseItem.find('p:last').text().substring(1));

        totalBudget += amount;
        updateBudget();
        expenseItem.remove();
    });

    updateBudget();
});
