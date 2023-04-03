import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
    // income useSelector
  // expenseList selector

// totalExpense with reducer acc and expense.price with initial 0 value
// remainingMoney
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>totalExpense $</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>remainingMoney $</div>
      </div>
    </div>
  );
}
