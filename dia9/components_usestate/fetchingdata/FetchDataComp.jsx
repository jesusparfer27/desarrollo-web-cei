import '../fetchingdata/fetchingdata.css'

import { useState, useEffect } from "react";

export const FetchDataComp = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        console.log("Cargué mi componente");
        getDataUsandoAsync()
        // getDataUsandoThen()

    }, [])


    const getDataUsandoThen = () => {

        fetch("https://randomuser.me/api/?results")
            // .then(respuesta) => {
            //     console.log(respuesta);
            //     const datos = respuesta.json();
            //     return datos
            //  } )
            .then(stringJson => stringJson.json())
            .then(objetoJs => setData(objetoJs))
            .then (returnAnterior => {
                // console.log("Hola")
                // console.log("chau")
                return returnAnterior;
            })
            .then (returnAnterior2 => returnAnterior2)
            .catch(error => {
                console.log("Tuvimos un error", error)
            });

    }


    const getDataUsandoAsync = async () => {
        try {

            // llamar a la API y esperar la respuesta
            const respuesta = await fetch("https://randomuser.me/api/?results")
            console.log(respuesta)
            // Convertir el string de JSON en un object JS
            // Const objJs = JSON.parse(respuesta)
            const objJs = await respuesta.json()
            console.log(objJs)
            // guardo la info en mi state
            setData(objJs)
        } catch (e) {
            console.log("tuvimos un error", e)
        }
    }

    return (
        <>
            {!data.length && "Cargando ...."}
            {
                data.map(({ id, name, email, phone, location, state, country, picture, medium }) => {
                    // const {id, name} = user;
                    return (
                        <div className="containerStyle" key={id}>
                            <div className="cardImage">
                                <img className="imgStyle" src={picture.medium} alt="" />
                            </div>
                            <div className="cardData">
                                <img className="imgStyle" src="" alt="" />
                                <div className="showingData">
                                <h3 className="h3Style">Hola, me llamo</h3>
                                <h2 className="h2Style">{name.first} {name.last}</h2>
                                </div>

                                <img className="imgStyle" src="" alt="" />
                                <div className="showingData">
                                <h3 className="h3Style">Mi correo electronico es</h3>
                                <h2 className="h2Style">{email}</h2>
                                </div>

                                <img className="imgStyle" src="" alt="" />
                                <div className="showingData">
                                <h3 className="h3Style">Mi número de teléfono es</h3>
                                <h2 className="h2Style">{phone}</h2>
                                </div>

                                <img className="imgStyle" src="" alt="" />
                                <div className="showingData">
                                <h3 className="h3Style">Vivo en</h3>
                                <h2 className="h2Style">{location.state}, {location.country}</h2>
                                </div>

                                <img className="imgStyle" src="" alt="" />
                                <div className="showingData">
                                <h3 className="h3Style">Hola, me llamo</h3>
                                <h2 className="h2Style">{name.first} {name.last}</h2>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <form action="http..." method='GET/POST'>
                <input type="text" />
            </form>
        </>
    );
}
