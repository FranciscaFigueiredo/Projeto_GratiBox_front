import { useNavigate } from "react-router";

function LoginValidation() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const navigate = useNavigate();
    if (user === null) {
        navigate("/")
        if (user) {
            user.token = "";
        }
        window.location.reload()
    } else {
        return user;
    }
}

export {
    LoginValidation
}