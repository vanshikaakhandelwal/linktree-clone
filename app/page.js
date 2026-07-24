"use client"

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const [text, setText] = useState("")

  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }

  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2"> 
        <div className="flex items-center justify-center flex-col ml-[10vw]">
          
          <p className="text-yellow-300 font-bold text-7xl">
            A link in bio built for you.
          </p>

          <p className="text-yellow-300 font-bold text-xl my-4">
            Join 70M+ people using Linktree for their link in bio.
          </p>

          <div className="input flex gap-5">
            <input 
              value={text}
              onChange={(e)=> setText(e.target.value)}   // ✅ fixed
              className="px-2 py-2 focus:outline-green-800 text-white rounded-md" 
              type="text" 
              placeholder="enter your handle" 
            />

            <button  
              onClick={createTree} 
              className="bg-pink-300 rounded-full px-4 py-4 font-semibold">
              Claim Now Bittree
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col mr-[10vw]">
          you are col2
        </div>
      </section>

      <section className="bg-red-700 min-h-[100vh]"></section>
    </main>
  );
}