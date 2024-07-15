import { useState } from "react";

const FormularioMultiple = () => {

    const [paso, setPaso] = useState(1)
    const [formData, setFormData] = useState({
        nombre: "",
        email: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando formulario")
    }

    const pasoSiguiente = () => {
        console.log("Siguiente")
        // incrementa el paso, pero nunca se pasa de tres pasos
        setPaso(  (paso) => Math.min(paso +1, 3)      )
    }

    const pasoAnterior = () => {
        console.log("Anterior")
        setPaso(  (paso) => Math.max(paso -1, 1)      )

    }

    const renderizarPasos = () => {
        switch (paso) {
            case 1: return <Paso1 data ={formData} setFormData={setFormData}/>
            case 2: return <Paso2 data ={formData} setFormData={setFormData}/>
            case 3: return <Paso3 data ={formData} setFormData={setFormData}/>
            default: return null;
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* los inputs */}
                {renderizarPasos()}

                {/* los botones */}
                {paso > 1 && (
                    <button type="button" onClick={pasoAnterior}>Anterior</button>
                )}
                
                
                {paso > 2 && (
                    <button onClick={pasoSiguiente}>Siguiente</button>
                )}

                {paso > 3 && (
                    <button type="submit">Enviar</button>
                )}
                
                
            </form>
        </>
    );
}

const Paso1 = ({data, setData}) => (
    <div>
        <h2>Página 1</h2>
        <input type="text" 
        value={data.nombre}
        onChange={(e) => setData({...data, nombre: e.target.value})}
        placeholder="Nombre"
        />
        otros campos...
    </div>
)

const Paso2 = ({data, setData}) => (
    <div>
        <h2>Página 2</h2>
        <input type="text" 
        value={data.apellido}
        onChange={(e) => setData({...data, nombre: e.target.value})}
        placeholder="Apellido"
        />
        otros campos...
    </div>
)

const Paso3 = ({data, setData}) => (
    <div>
    <h2>Confirmación de datos</h2>
    nombre: {data.nombre}
    apellido: {data.apellido}
</div>
)

export default FormularioMultiple;