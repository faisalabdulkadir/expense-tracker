import { Switch } from "@heroui/react";
import type { Expense } from "../types/types";
import { useDispatch } from "react-redux";
import { toggleExpense } from "../features/expense/expenseSlice";

export const ToggleIcon = ({ expense }: { expense: Expense }) => {
  // const [isSelected, setIsSelected] = React.useState(true);
  console.log({ expense });
  const dispatch = useDispatch();

  const handleToggleStatus = () => {
    dispatch(toggleExpense(expense.id as string));
  };

  return (
    // <svg
    //   aria-hidden="true"
    //   fill="none"
    //   focusable="false"
    //   height="1em"
    //   role="presentation"
    //   viewBox="0 0 20 20"
    //   width="1em"
    //   {...props}
    // >
    <div className="flex flex-col gap-2">
      <Switch
        isSelected={expense.status === "paid"}
        onValueChange={handleToggleStatus}
      />
      {/* <p className="text-small text-default-500">
          Selected: {isSelected ? "true" : "false"}
        </p> */}
    </div>
    // </svg>
  );
};
