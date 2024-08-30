
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useTodoContext } from "../../hooks/useTodoContext";



export function TodosForm() { 
  const context = useTodoContext() 


  return (
    <form onSubmit={(e)=>{
      if (context?.onSubmit){
        context?.onSubmit(e)
      }
    }} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Todo"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="mb-4"> 
        <label>DeadLine</label> 
       <input type="date" /> 
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
       
      >
        Submit
      </button>
    </form>
  );
}

