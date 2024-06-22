import React from 'react'
import './Contact.css'
import { useParams } from 'react-router-dom'

const Contact = () => {

  const {title} = useParams()
  const altMsg = "add '/something' to the URL"
  
if(title){
  return (
    <div className='contact'>
  <h1>Contact: {title}</h1>
  </div>
  )
} else {
  return (
    <div className='contact'>
  <h1>Contact: {altMsg}</h1>
  </div>
  )
}
}

export default Contact