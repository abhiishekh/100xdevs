

import axios from 'axios'
import { useEffect, useState } from 'react'

export const usefetch =({url})=>{
    const [data,setData] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
    const fetchData = async()=>{
        setLoading(true)
        try {
            
            const response = await axios.get(url)
            if(response.status === 200 && response.data){
                setData(response.data.response)
            }else{
                setError(response.data.message)
            }
        } catch (error) {
            console.log("error aa gya "+ error)
            setError(error.message|| "somthing went wrong")
        }finally{
            setLoading(false)
        }

    }

        fetchData();
    },[url])

    return {
        data,
        error,
        loading
    }
}