
import {z} from 'zod'
import { prisma } from './lib/prisma';
import { redirect } from 'next/navigation';


const recipeSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  ingredients: z.array(z.string()).min(1, "At least one ingredient is required"),
  steps: z.array(z.string()).min(1, "At least one step is required"),
  image: z.string().min(1, "Image is required"),
  category: z.string().min(1, "Category is required"),
  cookingTimeInMinutes: z.coerce.number().int().positive("Cooking time must be a positive number"),
  authorId: z.string().min(1, "Author ID is required"),
});



// export async function createRecipe(
//     ingredients:string[],
//     steps:string[],
//     authorId:string,
//     formData:FormData
// ) {
//     let recipe;
//     try{


//      const payload = {
//   title: String(formData.get("title") || ""),
//   description: String(formData.get("description") || ""),
//   image: String(formData.get("image") || ""),
//   category: String(formData.get("category") || ""),
//   cookingTimeInMinutes: Number(formData.get("cookingTimeInMinutes") || 0),
//   ingredients: z.array(z.string()).min(1, "At least one ingredient is required"),
// steps: z.array(z.string()).min(1, "At least one step is required"),
//   authorId
// };
// console.log("🐛 Check payload before validation:", payload);

// console.log("➡️ Raw form data values:");
// console.log({
//   title: formData.get("title"),
//   description: formData.get("description"),
//   image: formData.get("image"),
//   category: formData.get("category"),
//   cookingTimeInMinutes: formData.get("cookingTimeInMinutes"),
//   ingredients,
//   steps,
//   authorId,
// });





//         const parsedData = recipeSchema.safeParse(payload);

// if (!parsedData.success) {
//   console.error("❌ Zod validation errors:", parsedData.error.errors);
//   throw new Error(
//     parsedData.error.errors
//       .map((err: ZodIssue) => err.message)
//       .join('\n')
//   );
// }

// // ✅ Only log .data if safeParse was successful
// console.log("✅ Parsed payload:", parsedData.data);

// recipe = await prisma.recipe.create({
//   data: parsedData.data,
// });

//         console.log("create Recipe:",recipe)


//   } catch (error: unknown) {
//   if (error instanceof Error) {
//     console.error("Validation or Prisma error:", error.message);
//     throw new Error(error.message || "Internal server error");
//   }
//   console.error("Unknown error:", error);
//   throw new Error("Internal server error");
// }


// redirect(`recipes/${recipe.recipeId}`)


// }



export async function createRecipe(formData: FormData) {
  const payload = {
    title: String(formData.get("title") || ""),
    description: String(formData.get("description") || ""),
    image: String(formData.get("image") || ""),
    category: String(formData.get("category") || ""),
    cookingTimeInMinutes: Number(formData.get("cookingTimeInMinutes") || 0),
    ingredients: formData.getAll("ingredients") as string[],
    steps: formData.getAll("steps") as string[],
    authorId: String(formData.get("authorId") || ""),
  };

  console.log("🐛 Check payload before validation:", payload);

  const parsedData = recipeSchema.safeParse(payload);
  if (!parsedData.success) {
    console.error("❌ Zod validation errors:", parsedData.error.errors);
    throw new Error(parsedData.error.errors.map((err) => err.message).join('\n'));
  }

  const recipe = await prisma.recipe.create({
    data: parsedData.data,
  });


  
  redirect(`recipes/${recipe.recipeId}`);
}

