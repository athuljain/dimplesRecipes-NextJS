import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"

const Header=()=>{
    return(
             <header className='bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 shadow-md py-4'>
            <div className='container mx-auto flex justify-between items-center px-4'>
                <Link  href='/'>
                    <a className='text-3xl font-bold text-white'>
                        Foodies - The Recipe Book
                    </a>
                </Link>
                <nav>
                    <ul className='flex space-x-8 items-center'>
                        <li>
                            <Link href='/recipes/create-edit' >
                                <a className='items-center text-white hover:text-gray-300 transition-colors duration-300'>
                                    New Recipe
                                </a>
                            </Link>
                        </li>
                        <li className='relative' >
                            <button
                                className='text-white hover:text-gray-300 transition-colors duration-300'
                              
                            >
                                Categories
                            </button>
                            <ul
                                className={`absolute top-full left-0 bg-white shadow-lg py-2 rounded-md mt-1 `}
                            >
                              
                                    <li  className='px-4 py-2'>
                                        <Link href={'/'}
                                          
                                            className='text-gray-800 hover:text-blue-500 transition-colors duration-300'
                                        >
                                            category
                                        </Link>
                                    </li>
                            
                            </ul>
                        </li>
                       
                            <li className='relative' >
                                <button
                                    className='text-white hover:text-gray-300 transition-colors duration-300'
                                   
                                >
                                    Recipes
                                </button>
                                <ul
                                    className={`absolute top-full left-0 bg-white shadow-lg py-2 rounded-md mt-1 `}
                                >
                                    <li className='px-4 py-2'>
                                        <Link
                                            href={`/recipes/my/all`}
                                            legacyBehavior
                                        >
                                            <a className='text-gray-800 hover:text-blue-500 transition-colors duration-300'>
                                                Mine
                                            </a>
                                        </Link>
                                    </li>
                                    <li className='px-4 py-2'>
                                        <Link
                                            href={`/recipes/my/saved`}
                                            legacyBehavior
                                        >
                                            <a className='text-gray-800 hover:text-blue-500 transition-colors duration-300'>
                                                Saved
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        

                        <li>
                            <SignedOut>
                                <SignInButton>
                                    <button className='items-center text-white hover:text-gray-300 transition-colors duration-300'>
                                        Sign in
                                    </button>
                                </SignInButton>
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}

export default Header