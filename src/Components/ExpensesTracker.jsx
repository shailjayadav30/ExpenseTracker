import { useState } from "react";

const ExpensesTracker = () => {
  const [items, setItems] = useState("");
  const [price, setPrice] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  const handleItemsChange = (event) => {
    setItems(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const addItems = () => {
    if (items !== "" && price !== "") {
      const newExpense = { item: items, price: parseFloat(price) };
      setExpenses([...expenses, newExpense]);
      setTotal(total + newExpense.price);
      setItems(""); 
      setPrice(""); 
    }
  };

  return ( 
    <div className="flex h-screen items-center font-mono justify-center">
    <div className="     bg-gray-800 w-96 rounded-lg ">
      <div className="">
      <div className="mt-6 flex  flex-col">
      <label htmlFor="item " className="ml-12 text-xl text-gray-100 mb-1 font-bold">ITEMS</label>
      <input  className="h-10 w-3/4 ml-12 rounded-lg  focus:outline-none border-2 border-gray-900 mb-4 bg-gray-200 pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 diration-300"
        type="text" 
        id="item" 
        value={items} 
        onChange={handleItemsChange} 
      />
      </div>
       <div className=" flex flex-col" >
       <label htmlFor="price" className="ml-12 text-xl mb-1 font-bold text-gray-100">PRICE</label>
      <input className="h-10 w-3/4 pl-4 ml-12 rounded-lg mb-6 border-2 bg-gray-200 border-gray-900 focus:outline-none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 diration-300"
        type="number" 
        id="price" 
        value={price} 
        onChange={handlePriceChange} 
      />
       </div>
        <div className=" flex justify-end mr-14 ">
        <button onClick={addItems} className="text-xl font-bold bg-gray-400 h-10 w-1/5 rounded">ADD</button>
        </div>
      <div className="bg-gray-200 mt-4  mb-6  w-82 ml-10 mr-10 rounded-xl ">
      {/* <h2 className="ml-12 text-xl font-bold">Expenses</h2> */}
      <ul className="ml-12 text-lg pt-2 font-semibold">
        {expenses.map((expense, index) => (
          <li key={index}>{expense.item}: {expense.price.toFixed(2)}</li>
        ))}
      </ul>
      <h2 className="ml-12 text-lg font-semibold mb-6"> Total: Rs {total.toFixed(2)}</h2>
      </div>
      </div>
    </div>
    </div>
  );
};

export default ExpensesTracker;
