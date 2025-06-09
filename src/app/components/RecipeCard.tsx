import Link from "next/link";
import React from "react";

const RecipeCard=()=>
{
    return(
      <Link href={`recipes/id`}>
        <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg">
<img src='fverv' alt="recipe-img" 
className="w-full h-48 object-cover object-center" />
<div className="p-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">Test Recipe</h3>
    <p className="text-gray-600 mb-4" >Italian</p>
</div>



        </div>
      </Link>
    )
}
export default RecipeCard