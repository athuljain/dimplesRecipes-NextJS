
import {z, ZodIssue} from 'zod'
import { prisma } from './lib/prisma';
import { redirect } from 'next/navigation';


const recipeSchema=z.object({
    title : z.string(),
    description : z.string(),
    ingredients:z.array(z.string()),
    steps:z.array(z.string()),
    image:z.string(),
    category:z.string(),
    cookingTimeInMinutes:z.number().int().positive(),
    authorId: z.string()
})


export async function createRecipe(
    ingredients:string[],
    steps:string[],
    authorId:string,
    formData:FormData
) {
    let recipe;
    try{

        const payload={
            title:formData.get("title"),
            description:formData.get("description"),
            image:formData.get("image"),
            category:formData.get('category'),
            cookingTimeInMinutes:Number(formData.get('cookingTimeInMinutes')),
            ingredients,
            steps,
            authorId
        }
        const parsedData= recipeSchema.safeParse(payload);

    
        if (! parsedData.success) {
            // If parsing failed, throw an error with details of the validation errors
            throw new Error(
                parsedData.error.errors
                    .map((err: ZodIssue) => err.message)
                    .join('\n')
            );
        }

        recipe=await prisma.recipe.create({
            data:parsedData.data
        }) 



   }catch (error: unknown) {
    if (error instanceof Error) {
        console.log(error);
        throw new Error(error.message || 'Internal server error');
    } else {
        console.log('Unknown error:', error);
        throw new Error('Internal server error');
    }
}

redirect(`recipes/${recipe.recipeId}`)


}

