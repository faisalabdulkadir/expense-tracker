import { Card, CardHeader, Divider} from "@heroui/react";
import type { StatusColour } from "../types/types";
import { columns, expenses } from "../data/data";
import { Expenses } from "./Expense";

const statusColorMap: StatusColour = {
  paid: "success",
  unpaid: "danger",
};

const ExpenseList = () => {
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
