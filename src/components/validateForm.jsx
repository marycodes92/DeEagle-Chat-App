import {useState, useEffect} from 'react'

const ValidateForm = (validation) => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""
    });

    const [errors, setErrors] = useState({})


    const changeHandler = event => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const submitHandler = event => {
        event.preventDefault();
        setErrors(validation(values));
    }

    return { changeHandler, values, submitHandler, errors};
}

export default ValidateForm;