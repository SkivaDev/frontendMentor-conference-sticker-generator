import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {

    // const { register, handleSubmit } = useForm();
    
  return (
    <form action="" className='bg-red-300 p-4'>
        <fieldset>
          <div>
            <label htmlFor="">Upload Avatar</label>
            <button>here</button>
          </div>
        </fieldset>
        <fieldset>
            <div>
                <label htmlFor="">Full Name</label>
                <input 
                  type="text" 
                  id="fullName"
                  name="fullName"
                  className={false ? 'error' : ''}
                />
            </div>
        </fieldset>
        <fieldset>
            <div>
                <label htmlFor="">Email Address</label>
                <input 
                  type="text"
                  id="email"
                  name="email"
                  className={false ? 'error' : ''}
                />
            </div>
        </fieldset>
        <fieldset>
            <div>
                <label htmlFor="">GitHub Username</label>
                <input 
                  type="text"
                  id="github"
                  name="github"
                  className={false ? 'error' : ''}
                />
            </div>
        </fieldset>
    </form>
  )
}

export default Form