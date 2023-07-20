import React,{useEffect,useState} from 'react'

export default function Form({LabelName,type,name,placeHolder,value,handleChange,isSurpriseMe,handleSurprise}) {
  return (
    <div>

        <div className='flex items-center gap-2 mb-2'>
            <label htmlFor={name} className='block text-sm font-medium text-gray-900'>
                {LabelName} 
            </label>
            {isSurpriseMe && <button type="button" onClick={handleSurprise} className="font-semibold bg-[#ececf1] text-xs py-1 px-2 rounded-[5px] text-black ">Surprise Me </button>}
        </div>
        <input type={type} name={name} className='bg-gray-50 text-sm rounded-lg text-gray-900 border-gray-300 border focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3' 
        placeholder={placeHolder} value={value} required/>
    </div>
  )
}
