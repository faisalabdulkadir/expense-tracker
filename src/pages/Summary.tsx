import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

const Summary = () => {
  return (
    <div>
      <Card>
        <CardHeader className="flex justify-center">
          <p className="font-bold text-2xl">Summary</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex gap-4 justify-center">
            <p>
              <span className="font-bold text-lg">Total Expense:</span> 10
            </p>
            <p>
              <span className="font-bold text-lg">Count per category:</span> 10
            </p>
          </div>
          <Divider />
          <div className="flex gap-4 justify-center">
            <p>
              <span className="font-bold text-lg">Total Unpaid:</span> 10
            </p>
            <p>
              <span className="font-bold text-lg">Total Paid:</span> 10
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Summary;
