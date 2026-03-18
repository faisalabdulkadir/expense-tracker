import { Card, CardHeader, Divider } from "@heroui/react";
import type { StatusColour } from "../types/types";
import { columns } from "../data/data";
import { Expenses } from "./Expense";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

const statusColorMap: StatusColour = {
  paid: "success",
  unpaid: "danger",
};

const ExpenseList = () => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);
  return (
    <Card>
      <CardHeader className="flex justify-center">
        <div className="font-bold text-2xl">ExpenseList</div>
      </CardHeader>
      <Divider />
      <Expenses
        columns={columns}
        expenses={expenses}
        statusColorMap={statusColorMap}
      />
    </Card>
  );
};

export default ExpenseList;
