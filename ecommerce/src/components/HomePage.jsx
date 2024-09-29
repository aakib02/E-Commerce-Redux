import React from 'react'
import Product from './Product'
import { Box } from '@mui/material'

const HomePage = (props) => {
   const {Products}  = props
  return (
    <Box  component="section" sx={{display:"flex", flexWrap:"wrap",gap:"1rem",  mx:"0.4rem" ,mt:"2rem", justifyContent:"center", }}>
     {
      Products.map((item)=>(
    <Box key={item.id} sx={{height:"23rem",}} >
    <Product value={item}/>
    </Box>
      ))
     }
     </Box>
  
  )
}

export default HomePage