import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {

    // const { register, handleSubmit } = useForm();
    
  return (
    <form action="" className='bg-red-300 sm:p-4'>
        <fieldset>
          <div className='bg-blue-500 h-[200px]'>
            <label htmlFor="" className='text-[19px] font-semibold'>Upload Avatar</label>
            <button>here</button>
          </div>
        </fieldset>
        <fieldset>
            <div className='bg-green-500 flex flex-col gap-[9px] mt-[14px]'>
                <label htmlFor="" className='text-[19px] font-semibold'>Full Name</label>
                <input 
                  type="text" 
                  id="fullName"
                  name="fullName"
                  className={false ? 'error' : 'px-[13px] py-3 bg-transparent rounded-xl border border-white text-[20px] tracking-[-0.9px]'}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className='bg-green-500 flex flex-col gap-[9px] mt-[20px]'>
                <label htmlFor="" className='text-[19px] font-semibold'>Email Address</label>
                <input 
                  type="text"
                  id="email"
                  name="email"
                  className={false ? 'error' : 'px-[13px] py-3 bg-transparent rounded-xl border border-white text-[20px] tracking-[-0.9px]'}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className='bg-green-500 flex flex-col gap-[9px] mt-[20px]'>
                <label htmlFor="" className='text-[19px] font-semibold'>GitHub Username</label>
                <input 
                  type="text"
                  id="github"
                  name="github"
                  className={false ? 'error' : 'px-[13px] py-3 bg-transparent rounded-xl border border-white text-[20px] tracking-[-0.9px]'}
                />
            </div>
        </fieldset>
        <button className='w-full bg-orange-500 text-[20px] text-black font-semibold tracking-[-0.3px] rounded-xl px-[13px] py-3 mt-[22px]'>
          Generate My Ticket
        </button>
    </form>
  )
}

export default Form