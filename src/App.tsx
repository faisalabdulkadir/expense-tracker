import ExpenseList from "./pages/ExpenseList";
import ExpenseTrackerForm from "./pages/ExpenseTrackerForm";

function App() {
  return (
    <section className=" flex justify-center items-center">
      <div>
        <div className="p-4">
         <ExpenseTrackerForm />
        </div>
        <div className="p-4">

        <ExpenseList />
        </div>
      </div>
    </section>
  );
}

export default App;
