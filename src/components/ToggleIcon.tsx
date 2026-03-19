import { Switch } from "@heroui/react";
import type { Expense } from "../types/types";
import { useDispatch } from "react-redux";
import { toggleExpense } from "../features/expense/expenseSlice";

export const ToggleIcon = ({ expense }: { expense: Expense }) => {
  const dispatch = useDispatch();

  const handleToggleStatus = () => {
    dispatch(toggleExpense(expense.id as string));
  };

  return (
    <div className="flex flex-col gap-2">
      <Switch
        isSelected={expense.status === "paid"}
        onValueChange={handleToggleStatus}
      />
    </div>
  );
};
