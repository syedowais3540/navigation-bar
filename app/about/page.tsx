"use client"
import {useRouter} from "next/navigation"

import Link from "next/link"
 export default function home(){
    const rout = useRouter();
  return <div>
    <h1 className="font-serif text-white bg-black h-40 py-5 text-lg  text-white hover:text-yellow-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quisquam, molestiae tempore voluptates error quidem ratione repellat voluptatem odio vel, adipisci veniam laboriosam! Tempora soluta iste debitis.
       Vel, fugiat commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam animi, ex error excepturi facere vitae accusamus laudantium consequatur architecto nisi voluptatem praesentium aliquid unde? Suscipit et tempora enim dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda voluptas, consequuntur quas sint quod dignissimos doloremque rerum eveniet dolore sapiente reiciendis, vitae tempora! Aspernatur eius eum nesciunt,
        error voluptatibus nobis?</h1>
   
   <div className="mt-8 space-y-4 w-full max-w-xs mx-auto">
        <button onClick={() => rout.push('/')} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Go to Home page</button>
        <button onClick={() => rout.push('/about')} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Go to About page</button>
        <button onClick={() => rout.push('/collection')} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Go to Collection</button>
        <button onClick={() => rout.push('/contact')} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Go to Contact</button>
      </div>

  </div>
 }