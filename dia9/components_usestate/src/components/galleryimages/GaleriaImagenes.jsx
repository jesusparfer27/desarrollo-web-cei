import { useState } from "react"
import { imageData } from './GalleryImageData'

const GaleriaImagenes = ({ items, img, name }) => {

    const [actualImage, setActualImage] = useState(0)

    const previousImage = () => {
        if (actualImage === 0) {
            setActualImage(imageData.length -1)
        } else {
            setActualImage(actualImage - 1)
        }
    }

    const nextImage = () => {
        if (actualImage === imageData.length - 1) {
            setActualImage(0)
        } else {
            setActualImage(actualImage + 1)
        }
    }

    return (
        <div className="divStyle">
            <img src={imageData[actualImage].img}
                alt={imageData[actualImage].name}
                className="imgStyle"
            />
            <div className="divStyleImage">
                <button onClick={previousImage} className="buttonStyle">Back</button>
                <button onClick={nextImage} className="buttonStyle">Next</button>
            </div>
        </div>
    )
}

export default GaleriaImagenes