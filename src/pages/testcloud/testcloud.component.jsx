import React from 'react'
import {useState} from 'react'
import axios from 'axios'

export default function TestCloud(){

    const [response, setResponse] = useState([])

    function handleClick(){
        axios.get("https://category-api-production-4e60.up.railway.app/v1/category/")
        .then((resp) =>setResponse(resp.data))
    }

    return(
        <div>
            <button className='apiCall' onClick={handleClick}> Call API </button>
            {
                response.map((category) => <p key={category.categoryId}>{category.categoryName}</p>)
                //response[0].itemName

            }
        </div>
    )

    

}
