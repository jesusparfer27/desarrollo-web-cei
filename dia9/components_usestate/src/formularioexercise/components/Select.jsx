const Select = ({
    name, label, type = "checkbox", firstOptionLabel, value, onChange, lista = [{ value: 0, label:"No hay items" }], error, className, debug
}) => {
    return (
        <div className={className}>
            {
            <label htmlFor={name}>
                {label}
            </label>
            }
            <select
                name={name}
                id={name}
                type={type}
                value={value}
                onChange={onChange}
            >
                <option value="">{firstOptionLabel}</option>
                {
                    lista.map(({ value, label }) => (
                        <option key={value}
                            value={value}
                        >{label}
                        </option>
                    ))
                }
            </select>
            {error &&
                <p style={{ color: 'red' }}>
                    {error}
                </p>
            }
            {debug &&
             <span style={{ color: "orange" }}>
                V: {JSON.stringify(value)}
                </span>}
            </div>
            );
}

            export default Select