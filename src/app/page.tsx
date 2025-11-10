'use client'
import Image from "next/image"
import { useState } from "react"

interface NewSaleData{
  id?:string,
  title?:string,
  description?:string,
  price?:string,
  image?:string
}

export default function HomePage(){
  const [newData, setNewData] = useState<NewSaleData>()
  
  const handleSaleAddition = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      const response = await fetch('/api/addition-of-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      const result = await response.json();
      console.log('Sale item added successfully:', result);
    } catch (error) {
      console.error('Error adding sale item:', error);
    }
  }

  return(
    <div className="w-full h-screen">
      <Image src={'/images/floron-oil-logo.png'} alt="Floron Oil - Logo" width={600} height={200} />
      <h1 className="m-auto text-3xl font-bold">Welcome to Floron</h1>
      <form className="w-full max-w-md flex flex-col gap-4 p-4 border mt-0" onSubmit={handleSaleAddition}>
        <label htmlFor="title">Title</label>
        <input name="title" className="w-100 bg-neutral-100 border" id="title" type="text" value={newData?.title || ''} onChange={(e) => setNewData((prev) => ({
          ...prev,
          title: e.target.value
        }))}/>
        <label htmlFor="description">Description</label>
        <input name="description" className="w-100 bg-neutral-100 border" id="description" type="text" value={newData?.description || ''} onChange={(e) => setNewData((prev) => ({
          ...prev,
          description: e.target.value
        }))}/>
        <label htmlFor="price">Price</label>
        <input name="price" className="w-100 bg-neutral-100 border" id="price" type="string" value={newData?.price || ''} onChange={(e) => setNewData((prev) => ({
          ...prev,
          price: e.target.value
        }))}/>
        <label htmlFor="image">Image</label>
        <input name="image" className="w-100 bg-neutral-100 border" id="image" type="text" value={newData?.image || ''} onChange={(e) => setNewData((prev) => ({
          ...prev,
          image: e.target.value
        }))}/>
        <button type="submit" className="w-100 bg-green-500 text-white p-2 mt-4 rounded">Add New Sale Item</button>
      </form>
    </div>
  )
}