import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expenseTotal}) => {
    const totalAsCurrency = numeral(expenseTotal / 100).format('$0,0.00');

    return (
        <div>
            <h1>Viewing {expenseCount} expense{expenseCount != 1 && 's'} totalling {totalAsCurrency}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);