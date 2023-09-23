import  { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
useEffect(()=>{
    const fetchData=async ()=>{
        try{
            setLoading(true)
            const response=await fetch(url);
            if(!response.ok)throw new Error(response.status)
            const result=await response.json();
            setData(result);
            setLoading(false)
        }catch(error){
            setError(error)
            setLoading(false)
        }
    }
    fetchData();
},[url])
console.log({data})
  return {data,loading,error}
}

export default useFetch
