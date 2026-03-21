import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Expense } from "../../types/types";

export interface ExpenseState {
  expenses: Expense[];
  allExpenses: Expense[];
}

const initialState: ExpenseState = {
  expenses: [],
  allExpenses: [],
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Omit<Expense, "id">>) => {
      const newExpense: Expense = {
        title: action.payload.title,
        category: action.payload.category,
        status: action.payload.status,
        amount: action.payload.amount,
        id: nanoid(),
      };
      state.expenses.push(newExpense);
      state.allExpenses.push(newExpense);
    },
    toggleExpense: (state, action: PayloadAction<string>) => {
      const expense = state.expenses.find((exp) => exp.id === action.payload);
      const allExpense = state.allExpenses.find(
        (exp) => exp.id === action.payload,
      );
      if (expense && allExpense) {
        expense.status = expense.status === "paid" ? "unpaid" : "paid";
      }
    },
    updateExpense: (
      state,
      action: PayloadAction<{ id: string; title: string }>,
    ) => {
      const expense = state.expenses.find(
        (exp) => exp.id === action.payload.id,
      );
      if (expense) {
        expense.title = action.payload.title;
      }
    },
    deleteExpense: (state, action: PayloadAction<{ id: string }>) => {
      const expense = state.expenses.find(
        (exp) => exp.id === action.payload.id,
      );
      if (expense) {
        state.expenses = state.expenses.filter(
          (exp) => exp.id !== action.payload.id,
        );
      }
    },
    filterByStatus: (state, action: PayloadAction<string>) => {
      state.expenses =
        action.payload === "all"
          ? state.allExpenses
          : state.allExpenses.filter((exp) => exp.status === action.payload);
    },
  },
});

export const { addExpense, toggleExpense, updateExpense, deleteExpense, filterByStatus } =
  expenseSlice.actions;

export default expenseSlice.reducer;
