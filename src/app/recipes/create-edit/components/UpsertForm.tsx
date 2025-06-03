'use client'

import { createRecipe } from "@/app/action";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";

const UpsertForm = () => {

  const {user}=useUser()
    const [ingredients,setIngredients]=useState([''])
    const [steps,setSteps]=useState([''])

const handleIncgredientChange =(index:number,value:string)=>{
    const newIngredients=[...ingredients]
    newIngredients[index]=value
    setIngredients(newIngredients)
}

const handleStepChange =(index:number,value:string)=>{
    const newSteps=[...steps]
    newSteps[index]=value
    setIngredients(newSteps)
}


const handleAddIngredient=()=>{
    setIngredients([...ingredients,''])
}


const handleAddStep=()=>{
    setSteps([...steps,''])
}

const handleDeleteIngredient=(index:number)=>{
    const newIngredients=[...ingredients]
    newIngredients.splice(index,1)
    setIngredients(newIngredients)
}

const handleDeleteStep=(index:number)=>{
    const newStep=[...steps]
    newStep.splice(index,1)
    setSteps(newStep)
}

const  createRecipeWithBind=createRecipe.bind(null,ingredients,steps,user?.id as string)



  return (
    <form className="space-y-6" action={createRecipeWithBind}>

      <div>
        <label className="block text-gray-700 font-medium mb-1" htmlFor="">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full border-white-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>

       <div>
        <label className="block text-gray-700 font-medium mb-1" htmlFor="">
          Category
        </label>
        <select
         
          id="category"
          name="category"
          className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        >

        <option >Select Category</option>
 <option >BreakFast</option>
  <option >Snacks</option>


        </select>
      </div>

       <div>
        <label className="block text-gray-700 font-medium mb-1" htmlFor="">
          Description
        </label>
        <textarea
        rows={5}

          
          id="description"
          name="description"
          className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>

       <div>
        <label className="block text-gray-700 font-medium mb-1" htmlFor="">
          Image URL (take from google image and paste it here)
        </label>
        <input
          type="text"
          id="image"
          name="image"
          className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>

       <div>
        <label className="block text-gray-700 font-medium mb-1" htmlFor="">
          Cooking Time (in minutes)
        </label>
        <input
          type="number"
          id="cookingTimeInMinutes"
          name="cookingTimeInMinutes"
          className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>

        <div>
        <label className="block text-gray-700 font-medium mb-1" >
          Ingredients
        </label>
        {ingredients.map((ingredient:string,index:number)=>(
            <div key={index} className="flex items-center">
                <input type="text" 
                onChange={()=>handleIncgredientChange(index,ingredient)}
                placeholder={`Ingredient ${index + 1}`}
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
           
           <button type="button" 
           className="ml-2 text-red-600 font-medium focus:outline-none"
           onClick={()=>handleDeleteIngredient(index)}
           >Delete</button>
           
            </div>

        ))}
        <button type="button"
         className="text-white-600 font-medium focus:outline-none"
         onClick={()=>handleAddIngredient()}
         >+ Add Ingredients</button>
       
      </div>




 <div>
        <label className="block text-gray-700 font-medium mb-1" >
          Steps
        </label>
        {steps.map((step:string,index:number)=>(
            <div key={index} className="flex items-center">
                <textarea rows={2}  
                onChange={()=>handleStepChange(index,step)}
                placeholder={`Step ${index + 1}`}
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
           
           <button type="button" 
           className="ml-2 text-red-600 font-medium focus:outline-none"
           onClick={()=>handleDeleteStep(index)}
           >Delete</button>
           
            </div>

        ))}
        <button type="button"
         className="text-white-600 font-medium focus:outline-none"
         onClick={()=>handleAddStep()}
         >+ Add Step</button>
       
      </div>


<button type="submit"
className="bg-green-500 text-white py-2 px-6
rounded-md hover:bg-green-600 focus:outline-none"
>
    Create Recipe
    </button>


    </form>
  );
};

export default UpsertForm;
