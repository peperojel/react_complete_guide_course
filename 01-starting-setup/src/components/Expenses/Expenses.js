import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
    const [yearFilter, setYearFilter] = useState("2020");

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
            <Card className="expenses">
                {props.expenses.map((expense, i) => (
                    <ExpenseItem
                        key={i}
                        amount={expense.amount}
                        title={expense.title}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
};

export default Expenses;
