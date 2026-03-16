import ExpenseList from "./pages/ExpenseList";
import ExpenseTrackerForm from "./pages/ExpenseTrackerForm";
import Summary from "./pages/Summary";

function App() {
  return (
    <section className=" flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-4">
          <ExpenseTrackerForm />
        </div>
         <div className="p-4">
          <Summary />
        </div>
        <div className="p-4">
          <ExpenseList />
        </div>
      </div>
    </section>
  );
}

export default App;
