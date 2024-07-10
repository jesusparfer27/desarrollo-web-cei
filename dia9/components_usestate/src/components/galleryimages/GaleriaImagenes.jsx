import { useState } from "react"
import { imageData } from './components/galleryimages/GalleryImageData'

const GaleriaImagenes = () => {

    const [actualImage, setActualImage] = useState(0)

    const previouSlide = () => {

    }

    const nextImage = () => {

    }

    return (
        <div className="divStyle">
            <img src={img} 
            alt={name} 
            className="imgStyle" 
            />
            <div className="divStyleImage">
                <button className="buttonStyle">Back</button>
                <button className="buttonStyle">Next</button>
            </div>
        </div>
    )
}

export default GaleriaImagenes


import { useState } from "react"

// const Slider = ({ items }) => {

//     const [imagenActual, setImagenActual] = useState(0)

//     const nextSlide = () => {
//         // if (imagenActual === items.length - 1) {
//         //     setImagenActual(0);
//         // } else {
//         //     setImagenActual(imagenActual + 1);
//         // }

//         const next = items.length > imagenActual+1? imagenActual+1 : 0
//         setImagenActual(next)
//     }

//     const previouSlide = () => {
//         // if (imagenActual === 0) {
//         //     setImagenActual(items.length - 1);
//         // } else {
//         //     setImagenActual(imagenActual - 1);
//         // }

//         const next = imagenActual > 0 ? imagenActual-1 : items.length-1
//         setImagenActual(next)
//     }
//     return (<>

//         <button onClick={previouSlide}>Anterior</button>
//         <img src={items[imagenActual]} alt={items[imagenActual]}/>
//         <button onClick={nextSlide}>Siguiente</button>


//     </>)
// }

// export default Slider