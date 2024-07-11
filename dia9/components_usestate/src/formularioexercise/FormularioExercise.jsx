import { useState } from "react"
import Input from "./components/Input"
import Select from "./components/Select"

const FormularioExercise = () => {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [checkbox, setCheckbox] = useState(false)

    const userName = [
        { value: "", label: "Nombre" }
    ]

    const validateForm = () => {
        const objetoErrores = {};
        // hacer nuestras comprobaciones
        if (!formData.nombre) objetoErrores.nombre = "Debes ingresar un nombre";
        if (!formData.password) objetoErrores.apellido = "Debes ingresar un apellido";
        if (!formData.checkbox) objetoErrores.rangoEdad = "Debes aceptar los terminos y condiciones";

        return objetoErrores
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const listaErrores = validateForm();

        // si existe algun error guardar el error en nuestro set de errores
        // si no, mostrar por consola

        if (Object.keys(listaErrores).length === 0) {
            console.log("Datos del formulario:", formData)
        } else {
            setErrores(listaErrores)
        }
    }

    const handleChange = (e) => {
        let { name, value } = e.target;

        if (e.target.type == "checkbox") {
            value = e.target.checked;
            console.log("Checkbox values es:", value)
        }

        //setFormData({...formData, [name]:value })
        setFormData(prevData => ({ ...prevData, [name]: value }));

        // Limpiar error cuando el usuario empieza a escribir/seleccionar
        setErrores(prevErrores => ({ ...prevErrores, [name]: "" }))
    }

    return (
        <>
        <form>
            {/* Input de user */}
            <Input
                name="nombre"
                label="Nombre:"
                type="text"
            />

            {/* Input de Password */}
            <Input

            />

            {/* Select de checkbox */}
            <Select
                name="checkbox"
            />
        </form>
        </>
    )
}

export default FormularioExercise

//  usuario, contraseña y checkbox