// eslint-disable-next-line no-unused-vars
import React from 'react';
import list from '../../../public/list.json';
import Cards from '../../components/Cards';
import {Link} from 'react-router-dom';
function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='items-center justify-center text-center mt-28'>
        <h1 className='font-semibold text-3xl md:text-4xl'>We are delighted to have you <span className='text-purple-600'>here!!!</span></h1>
        <p className='mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet veritatis ipsum culpa optio quae atque facere vel harum deserunt vitae corrupti dignissimos, aliquid incidunt est reprehenderit odit? Dolores perferendis esse exercitationem mollitia assumenda sunt sapiente asperiores libero, explicabo dolor illum error repudiandae totam debitis ullam amet quam! Dicta aspernatur numquam veniam quae.</p>
        <Link to="/">
        <button className='bg-purple-600 text-white px-4 py-2 rounded-md mt-3 hover:bg-purple-800 duration-300'>Back</button>
        </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 grid-cols-4'>    
          {
            list.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
          }      
        </div>
    </div> 
    </>
  )
}

export default Course

