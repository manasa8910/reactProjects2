import React from "react";

const Language = ({ data, from, to, fromHandler, toHandler }) => {
  if (!data || !data.data || !data.data.languages) {
    // Handle the case when data or data.data is undefined or empty
    return <div className="text-center">No languages available</div>; // or return some default content or loading indicator
  }

  const fromChangeHandler = (event) => {
    const from = event.target.value;
    fromHandler(from);
  };
  const toChangeHandler = (event) => {
    const to = event.target.value;
    toHandler(to);
  };
  return (
    <div>
      <div className="flex justify-center my-8">
        <div className="flex gap-5">
          <div className="flex w-[300px] items-center gap-3 p-2 rounded-md">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              From
            </label>
            <select
              id="countries"
              class=" border font-semibold border-gray-300 text-gray-500  text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={from}
              onChange={fromChangeHandler}
            >
              {data.data.languages.map((language, index) => (
                <option
                  className="font-semibold text-gray-700"
                  selected="en"
                  key={index}
                  value={language.code}
                >
                  {language.name}
                </option>
              ))}
            </select>
          </div>
          {/*  */}
          <div className="flex w-[300px] items-center gap-3 p-2  rounded-md">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              To
            </label>
            <select
              value={to}
              onChange={toChangeHandler}
              id="countries"
              class=" border font-semibold border-gray-300 text-gray-500  text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {data.data.languages.map((language, index) => (
                <option
                  className="font-semibold text-gray-700"
                  key={index}
                  value={language.code}
                >
                  {language.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
