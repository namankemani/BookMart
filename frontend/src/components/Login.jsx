import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit= (data)=>console.log(data);
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit) } method="dialog">
    <Link to='/'>
      {/* if there is a button in form, it will close the modal */}
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById('my_modal_3').close()}>✕</button>
    </Link> 
    <h3 className="font-bold text-2xl">Login</h3>
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
    <div className='mt-3'>
    <span>Password</span> <br />
      <input type="password" 
      placeholder='Password' 
      className='w-80 py-1 px-3 border rounded-md outline-none'
      {...register("password", { required: true })}
      />
      <br />
      {errors.password && <span className='text-sm text-red-500'>*This field is required</span>}
    </div>
    <div className='flex justify-between mt-3'>
    <button className="btn bg-blue-700 hover:bg-blue-900 text-white">Login</button>
    <span className='flex items-center'>
      <p>Not Registered?</p>
      <Link to="signup">
      <button className="px-0 font-thin btn btn-link">Sign Up</button>
      </Link>
    </span>

    </div>
      </form>
  </div>
</dialog>
    </div>
  )
}

export default Login
