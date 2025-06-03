import { join } from 'path';
import {z} from 'zod'
import { prisma } from './lib/prisma';

const recipeSchema=z.object({
    title : z.string(),
    description : z.string(),
    ingredients:z.array(z.string()),
    steps:z.array(z.string()),
    image:z.string(),
    category:z.string(),
    cookingTimeInMinutes:z.number().int().positive()
})


export async function createRecipe(
    ingredients:string[],
    steps:string[],
    authorId:string,
    formData:FormData
) {
    let recipe;
    try{

        const patload={
            title:formData.get("title"),
            description:formData.get("description"),
            image:formData.get("image"),
            category:formData.get('category'),
            cookingTimeInMinutes:Number(formData.get('cookingTimeInMinutes')),
            ingredients,
            steps,
            authorId
        }
        const parseData= recipeSchema.safeParse(payload);

        if(!parseData.success){
            throw new Error(parseData.error.errors.map((err)=>error.message),join('\n'))
        }

        recipe=await prisma. 



    }catch (error){
        console.log('error from createRecipe',error);
        throw new Error(error.message || "internal Server Error")
        
    }
}