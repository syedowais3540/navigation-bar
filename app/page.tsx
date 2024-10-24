"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Home() {
  const rout = useRouter();
  return (
    <div>
      <h1 className="font-bold bg-blue-500 text-white h-20 text-4xl text-center p-5 mt-0">
       HUMARI WEBSITE
      </h1>
      

      <nav className="bg-gray-800 p-4 ">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link href="/" className="text-[#f1f1f1] hover:text-blue-500 a">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-[#ffffff] hover:text-blue-500">About</Link>
          </li>
          <li>
            <Link href="/collection" className="text-[#fcfcfc] hover:text-blue-500">Collection</Link>
          </li>
          <li>
            <Link href="/contact" className="text-[#ffffff] hover:text-blue-500">Contact</Link>
          </li>
        </ul>
      </nav>

      
      <div className="mt-8 space-y-4 w-full max-w-xs mx-auto">
        <button onClick={() => rout.push('/')} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full ">Go to Home page</button>
        <button onClick={() => rout.push('/about')} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Go to About page</button>
        <button onClick={() => rout.push('/collection')} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Go to Collection</button>
        <button onClick={() => rout.push('/contact')} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Go to Contact</button>
      </div>
    
      <p className="text-center text-gray-600 mt-4">
        Prepared by : Syed Owais
      </p>
    </div>
  )
}
