import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    // useState should only be used inside component functions.
    // It is not allowed to be used inside nested functions as clickHandler.
    // const [title, setTitle] = useState(props.title);

    // Max recommends using Handler name at the end of event logic.
    // const clickHandler = () => {
    //     setTitle("Updated!");
    //     // setTitle does not change the variable title right away.
    //     // Instead schedules the assignment and re-rendering of the functional component.
    //     console.log(title);
    // };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
        </Card>
    );
};

export default ExpenseItem;
