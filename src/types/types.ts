export type Status = "paid" | "unpaid";

export type Category = Record<string, string>;

export interface Expense {
  id?: string;
  title: string;
  amount: number;
  status: Status;
  category: string;
}

export type StatusOptions = {
  key: Status | "all";
  label: Capitalize<Status | "all">;
};

export type StatusColour = Record<Expense["status"], "success" | "danger">;
