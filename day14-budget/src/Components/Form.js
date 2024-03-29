import React, { useRef } from "react";
import { useBudget } from "./Context/BudgetContext";

const Form = () => {
  const { submitExpense } = useBudget();
  const nameRef = useRef(null);
  const expenseRef = useRef(null);

  const handleExpenseSubmission = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const expense = expenseRef.current.value;
    submitExpense(name, expense);

    nameRef.current.value = "";
    expenseRef.current.value = "";
  };
  return (
    <div className="my-10 mx-36">
      <form
        onSubmit={handleExpenseSubmission}
        className="flex justify-between gap-10"
      >
        <input
          ref={nameRef}
          className="w-full p-2 px-3 border border-grey-600 rounded-lg focus:shadow-inner focus:outline-blue-400 focus:shadow-blue-300"
          placeholder="Enter Expense Name"
          type="text"
        />
        <input
          ref={expenseRef}
          className="w-full p-2 px-3 border border-grey-400 rounded-lg focus:shadow-inner focus:outline-blue-600 focus:shadow-blue-300"
          placeholder="Enter Amount"
          type="number"
        />
        <button
          className="p-1 px-3   cursor-pointer border  border-grey-600 bg-blue-500 text-white rounded-lg"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;
