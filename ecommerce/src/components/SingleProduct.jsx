import React from 'react'
import { useParams } from 'react-router-dom'
// import {  useSelector } from 'react-redux'
const SingleProduct = () => {
  // const data = useSelector((state)=>state.wish.Wishvalue)
    const id =  useParams()
    console.log(data);
  return (
    <>
    <div>SingleProduct</div>
    {/* <h1>{data.title}</h1> */}
    </>
  )
}

export default SingleProduct