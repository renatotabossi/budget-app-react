import React, {useContext, useState} from "react";
import { v4 as uuidv4} from "uuid";

const BudgetContexts = React.createContext()

export function useBudgets( ) {
    return useContext(BudgetContexts)
}

// {
//     id:
//     name:
//     max:
// }

// {
//     id:
//     busdgetId:
//     amount:
//     description:
// }

export const BudgetProvider = ({ children }) => {
    const [budget, setbudget] = useState([])
    const [expenses, setexpenses] = useState([])


        function getBudgetExpenses(budgetId) {
            return expenses.filter(expense => expense.budgetId === budgetId)

        }
        function addExpense() {

        }
        function addBudget({name, max}) {
            setbudget(prevBudgets => {
                return [...prevBudgets, {id: uuidv4(), name, max}]
            })
        }
        function deleteBudget() {

        }
        function deleteExpense() {

        }


    return <BudgetContexts.Provider value={
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense
    } >
        {children}
    </BudgetContexts.Provider>
};