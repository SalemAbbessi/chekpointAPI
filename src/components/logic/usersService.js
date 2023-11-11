
import axios from "axios"
import { useState } from "react"

const usersService =async  () => {

        try {
            const users = await axios.get ("https://jsonplaceholder.typicode.com/users")
          if (users) {
           return users.data
          }
            
         } catch (error) {
            console.log(error)
            
         }
    }



export default usersService