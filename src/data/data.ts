import type { Category, Expense, StatusOptions } from "../types/types";

export const expenses: Expense[] = [
  {
    id: "1",
    title: "Groceries at Supermarket",
    amount: 45,
    category: "Food",
    status: "paid",
  },
  {
    id: "2",
    title: "Bus Fare",
    amount: 15,
    category: "Transport",
    status: "unpaid",
  },
  {
    id: "3",
    title: "New Shoes",
    amount: 80,
    category: "Shopping",
    status: "paid",
  },
  {
    id: "4",
    title: "Lunch at Restaurant",
    amount: 30,
    category: "Food",
    status: "unpaid",
  },
  {
    id: "5",
    title: "Fuel for Car",
    amount: 60,
    category: "Transport",
    status: "paid",
  },
];

export const categories: Category[] = [
  {key: "all", label: "All"},
  { key: "food", label: "Food" },
  { key: "shopping", label: "Shopping" },
  { key: "transport", label: "Transport" },
];

export const statuses: StatusOptions[]  = [
  { key: "all", label: "All" },
  { key: "paid", label: "Paid" },
  { key: "unpaid", label: "Unpaid" },
];

export const columns: Record<string, string>[] = [
  { name: "TITLE", uid: "title" },
  { name: "AMOUNT", uid: "amount" },
  { name: "CATEGORY", uid: "category" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];
