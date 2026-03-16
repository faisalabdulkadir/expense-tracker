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
  key: Status;
  label: Capitalize<Status>;
};

export type StatusColour = Record<Expense["status"], "success" | "danger">;
