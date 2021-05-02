
export default function validateForm(values){
    let errors = {}

    if(!values.username.trim()){
        errors.username = "Username required";
    }

    if(!values.email){
        errors.email = "Email required";
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email address is invalid";
    }

    if(!values.password){
        errors.password = "Password required";
    }
    else if(values.password.length < 6){
        errors.password = "Password must be at least 6 characters"
    }

    if(!values.password2){
        errors.password2 = "password required"
    }
    else if(values.password2 !== values.password){
        errors.password = "Passwords does not match"
    }
}
