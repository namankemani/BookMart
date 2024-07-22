import React from 'react'

const Cards = ({item}) => {
    console.log({item})
  return (
    <div>
      <div className="card bg-base-100 m-2 shadow-xl hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt=" " />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge text-white bg-purple-600">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline px-3 py-4">$ {item.price}</div>
      <div className="badge badge-outline hover:bg-purple-600 hover:text-white px-3 py-4 cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards
