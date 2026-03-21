import React from "react";
import {
  Form,
  Input,
  Button,
  Card,
  CardBody,
  CardHeader,
  Select,
  SelectItem,
  Divider,
} from "@heroui/react";
import { categories, statuses } from "../data/data";
import type { Expense } from "../types/types";
import { useDispatch } from "react-redux";
import { addExpense } from "../features/expense/expenseSlice";

export default function ExpenseTrackerForm() {
  const [action, setAction] = React.useState<string | null>(null);
  const [formData, setFormData] = React.useState<Expense>({
    title: "",
    amount: 0,
    status: "paid",
    category: "",
  });

  const dispatch = useDispatch();

  const handleAddExpense =
    (expense: Expense) => (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(addExpense(expense));
      setFormData({
        title: "",
        amount: 0,
        status: "paid",
        category: "",
      });
    };

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  console.log({ formData });

  return (
    <Card>
      <CardHeader className="flex justify-center">
        <h1 className="font-bold text-2xl">Expense Tracker</h1>
      </CardHeader>
      <Divider />
      <CardBody>
        <Form
          className="w-full gap-4 p-4"
          onReset={() => setAction("reset")}
          onSubmit={handleAddExpense(formData)}
        >
          <div className="flex gap-4 w-full">
            <Input
              isRequired
              errorMessage="Please enter a valid title"
              label="Title"
              labelPlacement="outside"
              value={formData.title}
              onChange={handleChange}
              name="title"
              placeholder="Enter your title"
              type="text"
            />

            <Input
              isRequired
              errorMessage="Please enter a valid amount"
              label="Amount"
              labelPlacement="outside"
              value={String(formData.amount)}
              name="amount"
              onChange={handleChange}
              placeholder="Enter your amount"
              type="number"
            />
          </div>

          <div className="flex w-full  gap-4">
            <Select
              className="max-w-xs"
              label="Category"
              placeholder="Select a category"
              selectedKeys={[formData.category]}
              name="category"
              variant="bordered"
              onChange={handleChange}
            >
              {categories.map((category) => (
                <SelectItem key={category.key}>{category.label}</SelectItem>
              ))}
            </Select>

            <Select
              className="max-w-xs"
              label="Status"
              name="status"
              placeholder="Select a status"
              selectedKeys={[formData.status]}
              variant="bordered"
              onChange={handleChange}
            >
              {statuses.map((status) => (
                <SelectItem key={status.key}>{status.label}</SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex justify-center gap-4">
            <Button color="success" type="submit">
              Add Expense
            </Button>
            <Button type="reset" variant="flat">
              Reset
            </Button>
          </div>
          {action && (
            <div className="text-small text-default-500">
              Action: <code>{action}</code>
            </div>
          )}
        </Form>
      </CardBody>
    </Card>
  );
}
