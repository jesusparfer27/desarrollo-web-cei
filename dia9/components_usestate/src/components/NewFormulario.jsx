import { useState } from "react";

export const NewFormulario = () => {

    const [formData, setFormData] = useState({
        nombre: "",
        apellidos: "",
        rangoEdad: "",
        ocupacion: ""
    });

    const [errores, setErrores] = useState({});

    const listaRangoEdad = [
        { value: 'menor', label: "Menor de 18" },
        { value: 'adulto-joven', label: "18-30" },
        { value: 'adulto', label: "31-50" },
        { value: 'adulto-mayor', label: "Mayor de 50" }
    ]

    const listaOcupaciones = [
        
            {value: "estudiante", label: "Estudiante"},
            {value: "empleado", label: "Empleado"},
            {value: "autonomo", label: "Autónomo"},
            {value: "desempleado", label: "Desempleado"},
            {value: "jubilado", label: "Jubilado"},
        
    ]

    const validateForm = () => {
        const objetoErrores = {};
        // hacer nuestras comprobaciones
        if (!formData.nombre) objetoErrores.nombre="Debes ingresar un nombre";
        if (!formData.apellido) objetoErrores.apellido="Debes ingresar un apellido";
        if (!formData.rangoEdad) objetoErrores.rangoEdad="Debes ingresar un rango de edad";

        if (isAdulto && !formData.ocupacion) objetoErrores.ocupacion="Debes seleccionar una ocupación";

        return objetoErrores
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const listaErrores = validateForm();

        // si existe algun error guardar el error en nuestro set de errores
        // si no, mostrar por consola

        if (Object.keys(listaErrores).length === 0 ) {
            console.log("Datos del formulario:", formData)
        } else {
            setErrores(listaErrores)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;


        //setFormData({...formData, [name]:value })
        setFormData(prevData => ({ ...prevData, [name]: value }));

        // Limpiar error cuando el usuario empieza a escribir/seleccionar
        setErrores ( prevErrores => ({...prevErrores, [name]: ""}))
    }

    const isAdulto = ['adulto-joven', 'adulto', 'adulto-mayor'].includes(formData.rangoEdad);




    return (
        <>
            <form onSubmit={handleSubmit}>

                {/* Input de nombre */}
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                    {errores.nombre &&
                        <p style={{ color: 'red' }}>{errores.nombre}</p>
                    }
                </div>

                {/* Input de apellido  */}
                <div>
                    <label htmlFor="apellido">Apellido:</label>
                    <input type="text"
                        id="apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                    />
                    {errores.apellido &&
                        <p style={{ color: 'red' }}>{errores.apellido}</p>
                    }
                </div>

                {/* Input de edad */}
                <div>
                    <label htmlFor="rangoEdad">Rango edad:</label>
                    <select
                        name="rangoEdad"
                        id="rangoEdad"
                        value={formData.rangoEdad}
                        onChange={handleChange}
                    >
                        <option value="">Seleccione un rango</option>
                        {
                            listaRangoEdad.map(rango => (
                                <option key={rango.value}
                                    value={rango.value}
                                >
                                    {rango.label}
                                </option>
                            ))
                        }

                    </select>

                    {errores.rangoEdad &&
                        <p style={{ color: 'red' }}>{errores.rangoEdad}</p>
                    }
                    <input type="text"
                        id="edad"
                        name="edad"
                        value={formData.rangoEdad}
                        onChange={handleChange}
                    />
                    {errores.edad &&
                        <p style={{ color: 'red' }}>{errores.rangoEdad}</p>
                    }
                </div>

                {/* Ocupacion */}
                {isAdulto && (
                    <div>
                        <label htmlFor="ocupacion">Ocupación</label>
                        <select
                            name="ocupacion"
                            id="ocupacion"
                            value={formData.ocupacion}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione una ocupacion</option>
                            {
                                listaOcupaciones.map(ocupacion => (
                                    <option key={ocupacion.value}
                                        value={ocupacion.value}
                                    >
                                        {ocupacion.label}
                                    </option>
                                ))
                            }

                        </select>

                        {errores.ocupacion &&
                            <p style={{ color: 'red' }}>{errores.ocupacion}</p>
                        }
                        <input type="text"
                            id="ocupacion"
                            name="ocupacion"
                            value={formData.ocupacion}
                            onChange={handleChange}
                        />
                        {errores.ocupacion &&
                            <p style={{ color: 'red' }}>{errores.ocupacion}</p>
                        }
                    </div>
                )}

                <button type="submit">Enviar!</button>
            </form>

            {/* <Select 
            
            /> */}

        </>
    );
}
// sfnc shortcut