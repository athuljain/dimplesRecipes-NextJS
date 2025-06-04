// 'use client'

// import { createRecipe } from "@/app/action";
// import { CATEGORY } from "@/app/constants/recipe.constants";
// import { useUser } from "@clerk/nextjs";
// import React, { useState } from "react";

// const UpsertForm = () => {

//   const {user}=useUser()
//     const [ingredients,setIngredients]=useState([''])
//     const [steps,setSteps]=useState([''])

// const handleIncgredientChange =(index:number,value:string)=>{
//     const newIngredients=[...ingredients]
//     newIngredients[index]=value
//     setIngredients(newIngredients)
// }

// const handleStepChange =(index:number,value:string)=>{
//     const newSteps=[...steps]
//     newSteps[index]=value
//     setSteps(newSteps)
// }


// const handleAddIngredient=()=>{
//     setIngredients([...ingredients,''])
// }


// const handleAddStep=()=>{
//     setSteps([...steps,''])
// }

// const handleDeleteIngredient=(index:number)=>{
//     const newIngredients=[...ingredients]
//     newIngredients.splice(index,1)
//     setIngredients(newIngredients)
// }

// const handleDeleteStep=(index:number)=>{
//     const newStep=[...steps]
//     newStep.splice(index,1)
//     setSteps(newStep)
// }

// const createRecipeWithBind = createRecipe.bind(null, ingredients, steps, user?.id as string)




//   return (
//     <form className="space-y-6" action={createRecipeWithBind} >

//       <div>
//         <label className="block text-gray-700 font-medium mb-1" htmlFor="">
//           Title
//         </label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           className="w-full border-white-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
//         />
//       </div>

//        <div>
//         <label className="block text-gray-700 font-medium mb-1" htmlFor="">
//           Category
//         </label>
//         <select
         
//           id="category"
//           name="category"
//           className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
//         >

//         <option >Select Category</option>
//         {CATEGORY.map((category:string)=>(
//           <option value={category} key={category}>{category}</option>
//         ))}


//         </select>
//       </div>

//        <div>
//         <label className="block text-gray-700 font-medium mb-1" htmlFor="">
//           Description
//         </label>
//         <textarea
//         rows={5}

          
//           id="description"
//           name="description"
//           className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
//         />
//       </div>

//        <div>
//         <label className="block text-gray-700 font-medium mb-1" htmlFor="">
//           Image URL (take from google image and paste it here)
//         </label>
//         <input
//           type="text"
//           id="image"
//           name="image"
//           className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
//         />
//       </div>

//        <div>
//         <label className="block text-gray-700 font-medium mb-1" htmlFor="">
//           Cooking Time (in minutes)
//         </label>
//         <input
//           type="number"
//           id="cookingTimeInMinutes"
//           name="cookingTimeInMinutes"
//           className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
//         />
//       </div>

//         <div>
//         <label className="block text-gray-700 font-medium mb-1" >
//           Ingredients
//         </label>
//         {ingredients.map((ingredient:string,index:number)=>(
//             <div key={index} className="flex items-center">
//                <input
//   type="text"
//   value={ingredient} 
//   onChange={(e) => handleIncgredientChange(index, e.target.value)}
//   placeholder={`Ingredient ${index + 1}`}
//   className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
// />
//            <button type="button" 
//            className="ml-2 text-red-600 font-medium focus:outline-none"
//            onClick={()=>handleDeleteIngredient(index)}
//            >Delete</button>
           
//             </div>

//         ))}
//         <button type="button"
//          className="text-white-600 font-medium focus:outline-none"
//          onClick={()=>handleAddIngredient()}
//          >+ Add Ingredients</button>
       
//       </div>




//  <div>
//         <label className="block text-gray-700 font-medium mb-1" >
//           Steps
//         </label>
//         {steps.map((step:string,index:number)=>(
//             <div key={index} className="flex items-center">
//                <textarea
//   rows={2}
//   value={step} 
//   onChange={(e) => handleStepChange(index, e.target.value)}
//   placeholder={`Step ${index + 1}`}
//   className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
// />

//            <button type="button" 
//            className="ml-2 text-red-600 font-medium focus:outline-none"
//            onClick={()=>handleDeleteStep(index)}
//            >Delete</button>
           
//             </div>

//         ))}
//         <button type="button"
//          className="text-white-600 font-medium focus:outline-none"
//          onClick={()=>handleAddStep()}
//          >+ Add Step</button>
       
//       </div>


// <button type="submit"
// className="bg-green-500 text-white py-2 px-6
// rounded-md hover:bg-green-600 focus:outline-none"
// >
//     Create Recipe
//     </button>


//     </form>
//   );
// };

// export default UpsertForm;






'use client'

import { createRecipe } from "@/app/action";
import { CATEGORY } from "@/app/constants/recipe.constants";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";

const UpsertForm = () => {
  const { user, isLoaded } = useUser();
  const [ingredients, setIngredients] = useState(['']);
  const [steps, setSteps] = useState(['']);

  if (!isLoaded) return <p>Loading user...</p>;

  const handleIngredientChange = (index: number, value: string) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  };

  const handleStepChange = (index: number, value: string) => {
    const updated = [...steps];
    updated[index] = value;
    setSteps(updated);
  };

  const handleAddIngredient = () => setIngredients([...ingredients, '']);
  const handleAddStep = () => setSteps([...steps, '']);
  const handleDeleteIngredient = (index: number) => setIngredients(ingredients.filter((_, i) => i !== index));
  const handleDeleteStep = (index: number) => setSteps(steps.filter((_, i) => i !== index));

  return (
    <form className="space-y-6" action={createRecipe}>
      {ingredients.map((ingredient, index) => (
        <input key={`ingredient-${index}`} type="hidden" name="ingredients" value={ingredient} />
      ))}
      {steps.map((step, index) => (
        <input key={`step-${index}`} type="hidden" name="steps" value={step} />
      ))}
      <input type="hidden" name="authorId" value={user?.id || ''} />

      <div>
        <label className="block mb-1 font-medium" htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          className="w-full border px-4 py-2 rounded-md"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium" htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          className="w-full border px-4 py-2 rounded-md"
        >
          <option value="">Select Category</option>
          {CATEGORY.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium" htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          className="w-full border px-4 py-2 rounded-md"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium" htmlFor="image">Image URL</label>
        <input
          id="image"
          name="image"
          type="text"
          className="w-full border px-4 py-2 rounded-md"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium" htmlFor="cookingTimeInMinutes">Cooking Time (minutes)</label>
        <input
          id="cookingTimeInMinutes"
          name="cookingTimeInMinutes"
          type="number"
          className="w-full border px-4 py-2 rounded-md"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Ingredients</label>
        {ingredients.map((ingredient, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
              placeholder={`Ingredient ${index + 1}`}
              className="w-full border px-4 py-2 rounded-md"
            />
            <button type="button" onClick={() => handleDeleteIngredient(index)} className="text-red-600">Delete</button>
          </div>
        ))}
        <button type="button" onClick={handleAddIngredient} className="text-blue-600">+ Add Ingredient</button>
      </div>

      <div>
        <label className="block mb-1 font-medium">Steps</label>
        {steps.map((step, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <textarea
              rows={2}
              value={step}
              onChange={(e) => handleStepChange(index, e.target.value)}
              placeholder={`Step ${index + 1}`}
              className="w-full border px-4 py-2 rounded-md"
            />
            <button type="button" onClick={() => handleDeleteStep(index)} className="text-red-600">Delete</button>
          </div>
        ))}
        <button type="button" onClick={handleAddStep} className="text-blue-600">+ Add Step</button>
      </div>

      <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
        Create Recipe
      </button>
    </form>
  );
};

export default UpsertForm;
