
import  { OMDbApiKey, OMDId } from './env'
import React, { useState, createContext } from 'react'


const getMoviesApi =  ( values : {s:string , y:number }) => {
   
    const apikey = OMDbApiKey
    const id = OMDId 
    const word = values.s
    const year = values.y
    const response  =  fetch(`http://www.omdbapi.com/?i=${ id }&apikey=${ apikey }&s=${ word }&y=${ year }`)
    
    return response

}
export default  getMoviesApi