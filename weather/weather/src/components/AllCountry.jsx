
import { useState } from 'react';
const AllCountry = () => {
    const [allcoutry,setAllCountry]=useState([]);
    const {data,loading,error}=useFetch( 'https://countriesnow.space/api/v0.1/countries/flag/unicode'
    );
    useEffect(() => {
        if (data  ) {
          setAllCountry(data.data.city);
          localStorage.setItem('allCountry', JSON.stringify(allCountry));
        }
      }, [data]);

    return (
   {allcoutry}
    // <div>
    //  {loading && <p>Loading...</p>}
    //    {/* {error && <p>Error: {error.message}</p>} */}
    //    {data && typeof data === "object" ? (
    //    <div>
    //    <h2> {data.city}</h2>
    //   {console.log(data.city)}
    //    </div>) :
    //   (<p>No data available</p> )
    //    } 
    // </div>
  )
}

export default AllCountry
