export function FormComponent({ type, placeholder, name, values, handleChange, errors }) {
    return <div data-mdb-input-init className="form-outline mb-4">
        <input
            type={type}
            className="form-control form-control-lg"
            placeholder={placeholder}
            name={name}
            value={values[name]}
            onChange={handleChange}
        />
        {errors[name] &&
            <label className="form-label text-danger" style={{fontSize:'12px'}} htmlFor="form3Example1cg">
                {errors[name]}
            </label>
        }
    </div>
}