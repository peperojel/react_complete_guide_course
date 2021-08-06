import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
    const items = [];
    const [yearFilter, setYearFilter] = useState("2020");
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

    const expenseFilteringHandler = (newFilter) => {
        console.log("Setting new year filter:", newFilter);
        setYearFilter(newFilter);
    };

    return (
        <div>
            <ExpensesFilter
                onExpensesFiltering={expenseFilteringHandler}
                selectedYear={yearFilter}
            />
            <Card className="expenses">{items}</Card>
        </div>
    );
};

export default Expenses;
