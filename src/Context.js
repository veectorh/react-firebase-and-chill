//FOR CREATING AND MANAGING STATE IN THE REACT APP

import React, { useState, createContext } from 'react'

export const QueryContext = createContext();

export const QueryProvider = props => {
   const [searchTerm, updateSearchTerm] = useState('')
   const [comments, setComments] = useState([])
   const [isLoading, setIsLoading] = useState(false)

   return (
       <QueryContext.Provider value={{search: [searchTerm, updateSearchTerm], com: [comments, setComments], isLD: [isLoading, setIsLoading]}}>
           {props.children}
       </QueryContext.Provider>
   )
}
