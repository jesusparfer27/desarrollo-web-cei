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
            .then(respuesta => respuesta.json())
            .then(json => setData(json.results))
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
            setData(objJs.results)
        } catch (e) {
            console.log("tuvimos un error")
        }
    }

        return (
            <>
                {!data.length && "Cargando ...."}
                {
                    data.map( ({ id, name}) => {
                        // const {id, name} = user;
                        return (
                            <div key={id}>
                                <h3>{name.first}</h3>
                                {/* <p>{}, {}</p> */}
                            </div>
                        )
                    })
                }
            </>
        );
    }
