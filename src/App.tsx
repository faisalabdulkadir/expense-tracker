import ExpenseTrackerForm from "./pages/ExpenseTrackerForm";

function App() {

  return (
  
      <section className=" flex justify-center items-center">
        <div>
          <div>
            <h1 className="text-green">Expense Tracker</h1>
          </div>
       <ExpenseTrackerForm />
        </div>
      </section>
  );
}

export default App;
