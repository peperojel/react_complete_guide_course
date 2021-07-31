import ExpenseItem from './ExpenseItem';
import Card from './Card';
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

    return <Card className="expenses">{items}</Card>;
}

export default Expenses;
