import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, currency, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (e) => {
        if (e.target.value > 20000) {
            alert("The budget can not exceed " + currency + "20000")
            setNewBudget("20000")
            return
        }
        else if (e.target.value < totalExpenses) {
            alert("The budget can not decresse below " + currency + totalExpenses)
            setNewBudget(totalExpenses)
            return
        }
        else {
            setNewBudget(e.target.value)
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        }
    }


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}>
            </input>
        </div>
    );
}

export default Budget;
