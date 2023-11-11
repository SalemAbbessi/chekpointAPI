import { useState , useEffect } from "react"
import usersService from "./usersService"

const useUsers = () => {
 const [data , setData]= useState([])
 const [isLoading , setIsloading] = useState()
const [ error , setError] = useState()
const fetchUsers = async () => {
    try {
        setIsloading(true)
        const response = await usersService()

        if ( response) {
            setData(response)
            setIsloading(false)
            
        }
        return data
        
    } catch (error) {
        setError("error is exist ")
        console.log(error)

    }finally {
          setIsloading(false)
    }
}

useEffect(() => {
    fetchUsers()
}, [])


return  {data , isLoading , error}


}

export default useUsers