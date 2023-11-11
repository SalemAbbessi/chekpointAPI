import React from 'react'
import useUsers from './logic/useUsers'
const UsersList = (name) => {
    const {data , isLoading , error} = useUsers()

    if ( isLoading && data.length === 0 ) return <h1>L o a d i n g ...</h1>
    if (  !isLoading && data && data.length === 0) return <h1> No Data Found </h1>
    if ( !isLoading && error) return <h1> error </h1>
    if ( !isLoading && !error && data && data.length > 0) 
 
   
    return (
    <div >
     
      { data.map((el,) =>
      
       <h1>{el.name}</h1>)}
       
         
          </div>
   
  )

}

export default UsersList
