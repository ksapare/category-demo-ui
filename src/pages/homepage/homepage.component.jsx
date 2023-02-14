import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { CardList } from '../../components/card-list/card-list.component';
import { SearchBox } from '../../components/search-box/search-box.component';



export default function HomePage() {

    const [categories, setCategories] = useState([]);
    const [searchField, setSearchField] = useState("")

    useEffect(() => {

        axios.get("https://category-api-production-4e60.up.railway.app/v1/category/")
        .then((response) =>setCategories(response.data))

    }, [])

    function handleChange(e) {
      setSearchField(e.target.value)
    }

    return (
        <div>
             <SearchBox
              placeholder = 'search category'
              handleChange = { handleChange }
            />
            <CardList 
            categories={
              categories.filter(
                category => 
                category.categoryName.toLowerCase()
                .includes(searchField.toLowerCase())
              )
            } />
        </div>
    )
    
}
