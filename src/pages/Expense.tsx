import {
  CardBody,
  Chip,
  Input,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@heroui/react";
import { ToggleIcon } from "../components/ToggleIcon";
import { EditIcon } from "../components/EditIcon";
import { DeleteIcon } from "../components/DeleteIcon";
import type { Expense, StatusColour } from "../types/types";
import React, { useCallback, useState } from "react";
import { categories, statuses } from "../data/data";
import { useDispatch } from "react-redux";
import { deleteExpense, filterByStatus, updateExpense } from "../features/expense/expenseSlice";
import { SaveIcon } from "../components/SaveIcon ";
import { CancelIcon } from "../components/CancelIcon ";
import type { PayloadAction } from "@reduxjs/toolkit";

type ExpensesProp = {
  columns: Record<string, string>[];
  expenses: Expense[];
  statusColorMap: StatusColour;
};

export const Expenses = ({
  columns,
  expenses,
  statusColorMap,
}: ExpensesProp) => {
  const [editID, setEditID] = useState<string>("");
  const [editExpense, setEditExpense] = useState<Expense | null>(null);

  const dispatch = useDispatch();
  const handleEditExpense = (expense: Expense) => {
    console.log({ expense });
    setEditID(expense.id as string);
    setEditExpense(expense);
  };

  const handleChange = (value: string) => {
    setEditExpense((prev) => {
      if (!prev) return null;
      return { ...prev, title: value };
    });
  };

  const handleSelectionChange =
    (action: (value: string) => PayloadAction<string>) =>
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(action(e.target.value));
    };

  const handleDeleteExpense = (id: string) => {
    dispatch(deleteExpense({ id }));
  };

  const handleUpdateExpense = (expense: Expense) => {
    dispatch(
      updateExpense({
        id: expense.id as string,
        title: editExpense?.title ?? "",
      }),
    );
    setEditExpense(null);
    setEditID("");
  };

  const handleCancelEdit = () => {
    setEditExpense(null);
    setEditID("");
  };
  const renderCell = useCallback(
    (expenses: Expense, columnKey: string | number) => {
      const cellValue = expenses[columnKey as keyof Expense];
      const isEditing = editID === expenses.id;
      console.log({ editdetails: expenses.id, editID });

      switch (columnKey) {
        case "title":
          return (
            <div className="flex flex-col">
              {isEditing ? (
                <Input
                  name="title"
                  placeholder="Enter your title"
                  value={editExpense?.title}
                  onValueChange={handleChange}
                />
              ) : (
                <p className="text-bold text-sm capitalize">{cellValue}</p>
              )}
            </div>
          );
        case "status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[expenses.status]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Toggle status">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <ToggleIcon expense={expenses} />
                </span>
              </Tooltip>
              {isEditing ? (
                <>
                  <Tooltip color="success" content="Save expense">
                    <span
                      className="text-lg text-success cursor-pointer active:opacity-50"
                      onClick={() => handleUpdateExpense(expenses)}
                    >
                      <SaveIcon />
                    </span>
                  </Tooltip>
                  <Tooltip color="danger" content="Cancel expense">
                    <span
                      className="text-lg text-danger cursor-pointer active:opacity-50"
                      onClick={handleCancelEdit}
                    >
                      <CancelIcon />
                    </span>
                  </Tooltip>
                </>
              ) : (
                <>
                  <Tooltip content="Edit expense">
                    <span
                      className="text-lg text-default-400 cursor-pointer active:opacity-50"
                      onClick={() => handleEditExpense(expenses)}
                    >
                      <EditIcon />
                    </span>
                  </Tooltip>
                  <Tooltip color="danger" content="Delete expense">
                    <span
                      className="text-lg text-danger cursor-pointer active:opacity-50"
                      onClick={() => handleDeleteExpense(expenses.id as string)}
                    >
                      <DeleteIcon />
                    </span>
                  </Tooltip>
                </>
              )}
            </div>
          );
        default:
          return cellValue;
      }
    },
    [editID, editExpense],
  );

  return (
    <div>
      <CardBody>
        <div className="flex gap-4">
          <Select
            className="max-w-xs"
            label="Fiter by status"
            placeholder="Select a status"
            // selectedKeys={[value]}
            variant="bordered"
            onChange={handleSelectionChange(filterByStatus)}
          >
            {statuses.map((status) => (
              <SelectItem key={status.key}>{status.label}</SelectItem>
            ))}
          </Select>

          <Select
            className="max-w-xs"
            label="Fiter by category"
            placeholder="Select a category"
            // selectedKeys={[value]}
            variant="bordered"
            // onChange={handleSelectionChange}
          >
            {categories.map((category) => (
              <SelectItem key={category.key}>{category.label}</SelectItem>
            ))}
          </Select>
        </div>
        <Table aria-label="Example table with custom cells">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody>
            {/* {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )} */}
            {expenses.map((exp) => (
              <TableRow key={exp.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(exp, columnKey)}</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </div>
  );
};
