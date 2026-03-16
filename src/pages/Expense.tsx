import {
  CardBody,
  Chip,
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
import { useCallback } from "react";
import { categories, statuses } from "../data/data";

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
  const renderCell = useCallback(
    (expenses: Expense, columnKey: string | number) => {
      const cellValue = expenses[columnKey as keyof Expense];

      switch (columnKey) {
        case "title":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
              {/* <p className="text-bold text-sm capitalize text-default-400">
              {user.team}
            </p> */}
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
                  <ToggleIcon />
                </span>
              </Tooltip>
              <Tooltip content="Edit expense">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete expense">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <DeleteIcon />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [],
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
          // onChange={handleSelectionChange}
        >
          {statuses.map((status) => (
            <SelectItem key={status.key}>{status.label}</SelectItem>
          ))}
        </Select>

        <Select
          className="max-w-xs"
          label="Fiter by status"
          placeholder="Select a status"
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
          <TableBody items={expenses}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardBody>
    </div>
  );
};
