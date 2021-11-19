import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { ContainerPage } from "../styles/ContainerStyle";
import { PageTitle } from "../styles/TextStyle";
import { ButtonRegistration } from "../styles/ButtonStyle";
import Input from "../styles/Form/InputStyle";

import Loader from "react-loader-spinner";
import ModalError from "../shared/ModalError";

import { postLogin } from "../services/gratibox";
import ModalSuccess from "../shared/ModalSuccess";

export default function Login() {
    const navigate = useNavigate();

    const [modal, setModal] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [message, setMessage] = useState(1);

    const [buttonName, setButtonName] = useState("Cadastrar");
    const [disable, setDisable] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [userData, setUserData] = useState({});

    useEffect(() => {
        setUserData({
            email,
            password,
        })

    }, [email, password, modal]);

    function login(event) {
        event.preventDefault();
        setDisable(true);

        setButtonName(
            <Loader
                type="ThreeDots"
                color="#ffffff"
                height={46}
                width={46}
                timeout={2000} //2 secs
            />
        );
        postLogin(userData).then((res) => {
            setMessage('');
            setModalSuccess(true);
            setTimeout(() => {
                navigate('/plans')
            }, 2000)
        }).catch((err) => {
            console.error();
            setButtonName('Cadastrar')
            setPassword('');
            setDisable(false);

            if(err.response.status === 400) {
                setMessage('Digite dados válidos');
                setModal(true);
            }

            if(err.response.status === 401) {
                setEmail("");
                setMessage('Email ou senha incorretos');
                setModal(true);
            }

            if (err.response.status === 500) {
                setMessage("Servidor fora de área, tente novamente mais tarde");
                setButtonName("Cadastrar");
                setModal(true);
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            }
        });
    }
    
    return (
        <ContainerPage>
            <PageTitle>Bem vindo ao GratiBox</PageTitle>

            <form onSubmit={login}>
                <Input type='email' placeholder='Email' disabled={disable} required value={email} onChange={(event) => (setEmail(event.target.value))} />
                <Input compare={true} type='password' placeholder='Senha' disabled={disable} required value={password} onChange={(event) => (setPassword(event.target.value))} />
                <ButtonRegistration type='submit' >{ buttonName }</ButtonRegistration>
            </form>
            <Link to='/sign-up'>Ainda não sou grato</Link>
            {
                modal ?
                <ModalError message={message} setModal={setModal} />
                : ''
            }

            {
                modalSuccess ?
                <ModalSuccess message={message} />
                : ''
            }
        </ContainerPage>
    );
}