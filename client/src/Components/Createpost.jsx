import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import {getRandomPrompt} from "../utils"
import { Form, Loader } from './Pages'
export default function Createpost() {
    const navigate = useNavigate();
    const [form, setform] = useState({
        name:"",
        prompt:"",
        photo:"",
    })
    const [generateImage, setgenerateImage] = useState(false);
    const [loading, setloading] = useState(false);


    const generateImg =()=>{

    } 
    const handleSubmit =()=>{

    }
    const handleChange =(e)=>{
setform({...form,[e.target.name]: e.target.value})
    };
    const handleSurprise=()=>{
const randomPrompt = getRandomPrompt(form.prompt);
setform({...form,prompt:randomPrompt})
    }
  return (
    <section className='max-w-7xl mx-auto'>
       <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
            Create 
        </h1>
        <p className='mt-2 text-[#666e75] text-[14px] max-w-[700px]'>
           Create imaginative images through DALL-E-AI and share with your community
        </p>
        </div>
        <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
<div className='flex flex-col gap-5'>
    <Form LabelName='Your Name'
     type='text'
     name='name'
     placeHolder="Bob Cruise"
      value={form.name} 
      handleChange={handleChange}
     />
     <Form LabelName='Prompt'
     type='text'
     name='prompt'
     placeHolder='A Samurai riding a Horse on Mars, lomography.'
     isSurpriseMe
     handleSurpriseMe={handleSurprise}
      value={form.name} 
      handleChange={handleChange}
     />
     <div className='border-gray-300 relative border text-gray-900 text-sm rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 w-64 h-64 flex p-3 justify-center items-center'>
        {form.photo?(<img src={form.photo} alt={form.prompt} className='w-full h-full object-contain'/>):<img src={preview} alt={"preview"} className="w-9/12 h-9/12 object-contain opacity-40"/>}


        {
            generateImage && (<div className="absolute inset-0 z-0 justify-center items-center flex bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader/>
                </div>)
        }
     
     
     </div>
</div>
<div className='mt-5 gap-5 flex'>
    <button className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center" type={"button"} onClick={generateImg} >{generateImage?'Generating...':"Generate"}</button>
</div>
<div className='mt-10 '>
    <p className='mt-2 text-[#666e75] text-[14px]'>Once you have created an image, you can share it with others in the community</p>
</div>
<button type='button' className='mt-3 text-white bg-[#6469ff] font-medium  rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'  >
Share with your community
</button>
        </form>
    </section>
  )
}
