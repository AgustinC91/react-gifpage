import { useState } from "react";
import { AddCategory, GifGrid } from "./component";



export const GifExpertApp = () => {
    const apiKey = 'yM5btZprxlf5kOM4ERu7cKvkmq9J6U3a'
    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (value) => {

        if (categories.includes(value)) return;

        setCategories([ value, ...categories])


        // setCategories( cat => ['Valorant', ...cat] )
    }


    console.log(categories)
    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onAddCategory={onAddCategory} />

            {categories.map(category => (
                <GifGrid key={category}
                    category={category} />)
            )}
            {/* <li key={category}>{category}</li> */}

        </>
    )
}