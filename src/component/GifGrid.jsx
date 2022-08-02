
import useFetchGifs from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    

    // 


    return (
        <>
            <h3> {isLoading}</h3>{
        isLoading && (<h2 >Cargando...</h2>)
      }
            <h1>{category}</h1>
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem key={image.id}
                            {...image}/>
                ))

                    
                }
            </div>


        </>


    )
}



// {categories.map(category => (
//     <GifGrid key={category}
//         category={category} />)
// )}