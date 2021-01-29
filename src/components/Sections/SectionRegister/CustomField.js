import { useField, ErrorMessage } from "formik";

const CustomField = ( {label, component: InputComponent, ...props} ) => {

    const [inputProps, meta] = useField(props);
    const id = props.id || props.name;

    return (
        <>
            {label &&(<label htmlFor={id}>{label}</label>)}
            <InputComponent id={id} {...inputProps} {...props}/>
            <ErrorMessage component="div" name={id} className="invalid-feedback"/>
        </>
    );
}

CustomField.defaultProps = {
    component: 'input'
}

export default CustomField;