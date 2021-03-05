import React from 'react';
import IncomeItem from './IncomeItem';

export default function IncomeList({income, setIncome}) {

    const removeIncome = item => {
        let temp = income.filter((_, index) => index !== item);
        setIncome(temp)
    }

    const sortByDate = (a, b) => a.date - b.date;

    return (
        <div className="income-list">
            {
                income.sort(sortByDate).map((value, index) => (
                    <IncomeItem 
                        key={index} 
                        income={value} 
                        index={index} 
                        removeIncome={removeIncome} 
                    />
                ))
            }
        </div>
    )
}
