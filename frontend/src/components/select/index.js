import './Select.css'

const Select = ({ options, value, onChange, children  }) => {
    return (
        <select className="select" value={value} onChange={onChange}>
            <option value="0">{children}</option>
            {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    )
}

export default Select