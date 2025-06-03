import React from "react";
import UpsertForm from "./components/UpsertForm";

const UpsertRecipe=()=>{
return(
    <div className="max-w-xl mx-auto px-4 py-8" >
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Create Recipe</h1>
        <div>
   <UpsertForm /> 
        </div>
    
    </div>
)
}
export default UpsertRecipe