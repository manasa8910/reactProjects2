import { BudgetProvider } from "./Components/Context/BudgetContext";
import "./App.css";
import Main from "./Components/Main";

function App() {
  return (
    <BudgetProvider>
      <Main />
    </BudgetProvider>
  );
}

export default App;
