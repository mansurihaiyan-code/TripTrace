// =====================================
// ADD EXPENSE FORM
// =====================================

const expenseForm =
    document.getElementById("expenseForm");


if (expenseForm) {

    expenseForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const expenseName =
            document.getElementById("expenseName")
            .value
            .trim();


        const expenseCategory =
            document.getElementById("expenseCategory")
            .value;


        const expenseAmount =
            document.getElementById("expenseAmount")
            .value;


        const expenseDate =
            document.getElementById("expenseDate")
            .value;


        const paidBy =
            document.getElementById("paidBy")
            .value
            .trim();


        const expenseNotes =
            document.getElementById("expenseNotes")
            .value
            .trim();


        // Get logged-in user

        const currentUser =
            JSON.parse(
                localStorage.getItem("triptraceCurrentUser")
            );


        if (!currentUser) {

            alert("❌ Please login before adding an expense.");

            window.location.href = "login.html";

            return;

        }


        // Get existing expenses

        const expenses =
            JSON.parse(
                localStorage.getItem("triptraceExpenses")
            ) || [];


        // Create expense

        const newExpense = {

            id: Date.now(),

            userEmail: currentUser.email,

            expenseName: expenseName,

            category: expenseCategory,

            amount: Number(expenseAmount),

            date: expenseDate,

            paidBy: paidBy,

            notes: expenseNotes

        };


        // Save expense

        expenses.push(newExpense);


        localStorage.setItem(
            "triptraceExpenses",
            JSON.stringify(expenses)
        );


        alert("✅ Expense added successfully!");


        window.location.href = "index.html";

    });

}


// =====================================
// DISPLAY EXPENSES ON INDEX PAGE
// =====================================

const expenseList =
    document.getElementById("expenseList");

const totalExpense =
    document.getElementById("totalExpense");


if (expenseList && totalExpense) {

    const currentUser =
        JSON.parse(
            localStorage.getItem("triptraceCurrentUser")
        );


    if (!currentUser) {

        expenseList.innerHTML = `
            <div class="empty-expense">

                <div class="empty-expense-icon">
                    🔐
                </div>

                <h3>Please Login</h3>

                <p>
                    Login to view your expenses.
                </p>

                <a href="login.html"
                   class="create-trip-button">

                    Login

                </a>

            </div>
        `;

    } else {

        const expenses =
            JSON.parse(
                localStorage.getItem("triptraceExpenses")
            ) || [];


        // Only current user's expenses

        const userExpenses =
            expenses.filter(function (expense) {

                return (
                    expense.userEmail === currentUser.email
                );

            });


        // Calculate total

        let total = 0;


        userExpenses.forEach(function (expense) {

            total += Number(expense.amount);

        });


        totalExpense.textContent =
            "₹" + total.toLocaleString("en-IN");


        // No expenses

        if (userExpenses.length === 0) {

            expenseList.innerHTML = `
                <div class="empty-expense">

                    <div class="empty-expense-icon">
                        💰
                    </div>

                    <h3>No expenses added yet</h3>

                    <p>
                        Start tracking your trip expenses.
                    </p>

                    <a href="add-expense.html"
                       class="create-trip-button">

                        + Add Your First Expense

                    </a>

                </div>
            `;

        } else {

            // Display expenses

            expenseList.innerHTML = "";


            userExpenses.forEach(function (expense) {

                const expenseCard =
                    document.createElement("div");


                expenseCard.className =
                    "expense-card";


                expenseCard.innerHTML = `

                    <div class="expense-card-left">

                        <div class="expense-icon">
                            💰
                        </div>

                        <div>

                            <h3>
                                ${expense.expenseName}
                            </h3>

                            <p>
                                ${expense.category}
                                • Paid by ${expense.paidBy}
                            </p>

                            <small>
                                ${expense.date}
                            </small>

                        </div>

                    </div>


                    <div class="expense-card-right">

                        <strong>
                            ₹${Number(expense.amount).toLocaleString("en-IN")}
                        </strong>

                    </div>

                `;


                expenseList.appendChild(expenseCard);

            });

        }

    }

}