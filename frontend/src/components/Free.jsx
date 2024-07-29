// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import list from '../../public/list.json'
import Cards from './Cards';
import axios from "axios";

const Free = () => {
  const [book,setBook] = useState([])
  useEffect(()=>{
    const getBook = async()=>{
        try{
          const res =  await axios.get("http://localhost:4001/all-books");
          setBook(res.data);
        }catch(error){
          console.log(error);
        }
      };
      getBook();
    },[]);
    const filterList = book.filter((data)=>data.category=="Fiction");
    console.log(filterList);

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <h1 className='font-bold text-3xl my-6'>Free Offered Courses</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe pariatur et aliquid temporibus, obcaecati facilis beatae recusandae amet animi accusantium eos, maiores unde deleniti cum consectetur. Aperiam voluptas ad libero vel quisquam?</p>
    </div>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-6'>
    <Slider {...settings}>
      {filterList.map((item)=>(
        <Cards item={item} key={item.id}/>
      ))}
      </Slider>
    </div>
    
    </>
  )
}

export default Free
