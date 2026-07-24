"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useSearchParams } from 'next/navigation';

const Generate = () => {
    const searchParams = useSearchParams()

    const [handle, sethandle] = useState("")
    const [links, setlinks] = useState([{ link: "", linktext: "" }])
    const [picture, setpicture] = useState("")
const [description, setdescription] = useState("")
    const addLink = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            links: links,
            handle: handle,
            picture: picture,
            description: description
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"

        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()
        if(result.success){

            toast.success(result.message)
            setlinks([])
            setpicture("")
            sethandle("")
        }
        else{
            toast.error(result.message)
        }

    };

    const handleChange = (index, field, value) => {
        const updatedLinks = [...links]
        updatedLinks[index][field] = value

        //  yaha console show karega
        console.log("Updated Links:", updatedLinks)

        setlinks(updatedLinks)
    }

    const addMoreLink = () => {
        setlinks([...links, { link: "", linktext: "" }])
    }

    return (
        <div className='bg-[#225AC0] min-h-screen grid grid-cols-2'>      

            <div className="col1 flex justify-center items-center flex-col text-white mt-20">
                <div className='flex flex-col gap-5 my-8'>
                    
                    <h1 className='text-black font-bold text-4xl'>Create your Bittree</h1>

                    {/* Step 1 */}
                    <div className="item">
                        <h2 className='font-semibold text-2xl text-black'>step:1 Claim your Handle</h2>
                        <div className='mx-4'>
                            <input 
                                value={handle}
                                onChange={e => sethandle(e.target.value)} 
                                className='px-4 py-2 my-2 rounded-full'
                                type="text" 
                                placeholder='Choose a handle'
                            />
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="item">
                        <h2 className='font-semibold text-2xl text-black'>step:2 Add Links</h2>

                        {links.map((item, index) => (
                            <div key={index} className='mx-4'>
                                <input
                                    value={item.linktext}
                                    onChange={e => handleChange(index, "linktext", e.target.value)}
                                    className='px-4 py-2 mx-2 my-2 rounded-full'
                                    type="text"
                                    placeholder='Enter link text'
                                />

                                <input
                                    value={item.link}
                                    onChange={e => handleChange(index, "link", e.target.value)}
                                    className='px-4 py-2 mx-2 my-2 rounded-full'
                                    type="text"
                                    placeholder='Enter link'
                                />
                            </div>
                        ))}

                        <button 
                            onClick={addMoreLink}
                            className='p-3 mx-2 bg-slate-900 text-white font-bold rounded-3xl'>
                            + Add More
                        </button>
                    </div>

                    {/* Step 3 */}
                    <div className="item">
                        <h2 className='font-semibold text-2xl text-black'>step:3 Add a Picture and description</h2>
                        <div className='mx-4 flex flex-col'>
                            <input 
                                value={picture}
                                onChange={e => {
                                    setpicture(e.target.value)
                                    console.log("Picture:", e.target.value) // 🔥 console
                                }} 
                                className='px-4 py-2 mx-2 my-2 rounded-full' 
                                type="text" 
                                placeholder='Enter link to your picture' 
                            />
                            <input 
                                value={description}
                                onChange={e => {
                                    setdescription(e.target.value)
                                    console.log("Picture:", e.target.value) // 🔥 console
                                }} 
                                className='px-4 py-2 mx-2 my-2 rounded-full' 
                                type="text" 
                                placeholder='Enter description' 
                            />
                        </div>
                    </div>

                    {/* Final */}
                    <button 
                        onClick={addLink}
                        className='p-4 mx-2 w-fit my-5 bg-slate-900 text-white font-bold rounded-3xl'>
                        Create your BitLink
                    </button>

                </div>
            </div>

            <div className="col2 w-full h-screen bg-[#225AC0]">
                <img className='h-full object-contain' src="/generate.png" alt="Generate your links"/>
                <ToastContainer />
            </div>

        </div>
    )
}

export default Generate