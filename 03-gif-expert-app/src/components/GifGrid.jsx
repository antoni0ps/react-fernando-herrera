import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);


    useEffect(() => {
        getGifs(category)
            .then(gifs => setImages(gifs)) //La funcion getGifs devuelve una promesa y para resolverla usamos setImages

    }, [category]);    //agregamos la categoría en las dependencias, si la categoría cambia, el componente se vuelve a renderizar.


    //    const getGifs = async () => {

    //         const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURIComponent(category) }&limit=10&api_key=WEGxNXdcfZdTblRFILtY22yR9TWugenB`
    //         const resp = await fetch(url)
    //         const { data } = await resp.json();

    //         const gifs = data.map(img => {
    //             return {
    //                 id: img.id,
    //                 title: img.title,
    //                 url: img.images?.downsized_medium.url
    //             }
    //         })

    //         console.log(gifs);
    //         setImages(gifs)

    //     }




    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">

                {
                    images.map(img => {
                        return <GifGridItem
                            key={img.id}
                            {...img} />  //Se envían todas las props de la imagen como una propiedad independiente (id, title y urlº    )
                    })
                }

            </div>
        </>
    )
}

export default GifGrid