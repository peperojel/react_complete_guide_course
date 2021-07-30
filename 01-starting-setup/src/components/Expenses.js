import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    const items = [];

    for (const expense of props.expenses) {
        items.push(
            <ExpenseItem
                key={expense.id}
                date={expense.date}
                amount={expense.amount}
                title={expense.title}
            />
        );
    }

    return <div className="expenses">{items}</div>;
}

export default Expenses;
