import "./ComponentsContainerStyles/HobbiesStyles.css";
import "./ComponentsContainerStyles/CommonComponentsStyles.css";
import { useState } from "react";

export const AidinHobbies = () => {
    const [hiddenText, setHiddenText] = useState(false);

    const handleClick = () => {
        setHiddenText(!hiddenText);
    };

    return (
        <div className="container">
            <div className="description_container">
                <div className="description_block">
                    <strong className="description_tittle">Sobre Aidin</strong>
                    <p className="description_text">
                        Aidin viene de Venezuela,
                        vivió durante ocho años en Buenos Aires (Argentina) y
                        actualmente se encuentra en Valencia estudiando un
                        master de programación y diseño web.
                        Compagina el día a día con los estudios y su trabajo
                        como analista de datos.
                    </p>
                </div>
                <div className={hiddenText ? "hidden_text visible" : "hidden_text"}>
                    <strong className="hidden_text_strong">Más intereses sobre Aidin</strong>
                    <p className="hidden_text_p">A Aidin le gusta todo lo relacionado con la naturaleza, sobre todo excursiones, acampadas y actividades al aire libre.</p>
                </div>
                <div className={hiddenText ? "hobbies_container hidden" : "hobbies_container visible"}>
                    <h2 className="hobbies_tittle">Hobbies de Aidin</h2>
                    <ul className="hobbies_list">
                        <li>Vida saludable</li>
                        <li>Gym</li>
                        <li>Leer</li>
                        <li>Naturaleza</li>
                        <li>Entrenar</li>
                        <li>Cantar</li>
                    </ul>
                </div>
                <div className="button_container">
                        <button className="magic_button" onClick={handleClick}>
                            {hiddenText ? "Volver atrás" : "Averigua más"}
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default AidinHobbies;
