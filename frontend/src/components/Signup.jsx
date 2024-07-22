import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit= (data)=>console.log(data);
  return (
    <>
    <div className='flex h-screen items-center justify-center'>

    <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit) } method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/'>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </Link>
    <h3 className="font-bold text-2xl">Sign Up</h3>
    <div className='mt-5'>
      <span>Name</span> <br />
      <input type="text" 
      placeholder='Enter your full name' 
      className='w-80 py-1 px-3 border rounded-md outline-none'
      {...register("name", { required: true })}
      />
      <br />
      {errors.name && <span className='text-sm text-red-500'>*This field is required</span>}
      </div>
    <div className='mt-5'>
      <span>Email</span> <br />
      <input type="text" 
      placeholder='Enter your Email' 
      className='w-80 py-1 px-3 border rounded-md outline-none'
      {...register("email", { required: true })}
      />
      <br />
      {errors.email && <span className='text-sm text-red-500'>*This field is required</span>}
    </div>
    <div className='mt-5'>
      <span>Mobile Number</span> <br />
      <input type="text" 
      placeholder='Enter your Mobile Number' 
      className='w-80 py-1 px-3 border rounded-md outline-none'
      {...register("number", { required: true })}
      />
      <br />
      {errors.number && <span className='text-sm text-red-500'>*This field is required</span>}
    </div>
    <div className='mt-5'>
    <span>Password</span> <br />
      <input type="password" 
      placeholder='Enter your Password' 
      className='w-80 py-1 px-3 border rounded-md outline-none'
      {...register("password", { required: true })}
      />
      <br />
      {errors.password && <span className='text-sm text-red-500'>*This field is required</span>}
    </div>
    <div className='mt-5'>
    <span>Confirm Password</span> <br />
      <input type="password" 
      placeholder='Confirm your Password' 
      className='w-80 py-1 px-3 border rounded-md outline-none'
      {...register("password", { required: true })}
      />
      <br />
      {errors.password && <span className='text-sm text-red-500'>*This field is required</span>}
    </div>
    <div className='flex justify-between mt-3'>
    <button className="btn bg-blue-700 hover:bg-blue-900 text-white font-normal">Sign Up</button>
    <span className='flex items-center'>
      <p>Have Account?</p>
    <Link to='/'>
      <button className="px-1 underline">Login</button>
    </Link>
    </span>

    </div>
      </form>
  </div>
    </div>
    </>
  )
}

export default Signup
