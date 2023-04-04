import { useSelector } from "react-redux";

import { List } from "../../components/List/List"

export function ExpenseList() {
  const expenseList = useSelector(state => state.expense.exepenseList)

  return <List items={expenseList} />
}
