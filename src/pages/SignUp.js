import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { ContainerPage } from "../styles/ContainerStyle";
import { PageTitle } from "../styles/TextStyle";
import { ButtonRegistration } from "../styles/ButtonStyle";
import Input from "../styles/Form/InputStyle";

import Loader from "react-loader-spinner";
import ModalError from "../shared/ModalError";

import { signUp } from "../services/gratibox";
import ModalSuccess from "../shared/ModalSuccess";

export default function SignUp() {
    const navigate = useNavigate();

    const [compare, setCompare] = useState(true);
    const [modal, setModal] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [message, setMessage] = useState(1);

    const [buttonName, setButtonName] = useState("Cadastrar");
    const [disable, setDisable] = useState(false);

    const [name, setName] = useState("");    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [userData, setUserData] = useState({});

    useEffect(() => {
        if (password !== confirmPassword) {
            setCompare(false);
        } else {
            setCompare(true);
        }

        setUserData({
            name,
            email,
            password,
            confirmPassword,
        })

    }, [name, email, password, confirmPassword, modal, modalSuccess]);

    function registration(event) {
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

        if (password === confirmPassword) {
            signUp(userData).then((res) => {
                setMessage('Cadastro realizado com sucesso!');
                setModalSuccess(true);
                setTimeout(() => {
                    navigate('/login')
                }, 2000)
            }).catch((err) => {
                console.error();
                setButtonName('Cadastrar')
                setPassword('');
                setConfirmPassword('');
                setDisable(false);

                if(err.response.status === 400) {
                    setMessage('Digite dados válidos');
                    setModal(true);
                }

                if(err.response.status === 409) {
                    setEmail("");
                    setMessage('Email já cadastrado');
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
            })    
        } else {
            setPassword("");
            setConfirmPassword("");
            setMessage("Senhas diferentes, confirme novamente");
            setModal(true);
            setButtonName("Cadastrar");
            setDisable(false);
        }
    }
    
    return (
        <ContainerPage>
            <PageTitle>Bem vindo ao GratiBox</PageTitle>

            <form onSubmit={registration}>
                <Input compare={true} type='text' placeholder='Nome' disabled={disable} required value={name} onChange={(event) => (setName(event.target.value))} />
                <Input compare={true} type='email' placeholder='Email' disabled={disable} required value={email} onChange={(event) => (setEmail(event.target.value))} />
                <Input compare={compare} type='password' placeholder='Senha' disabled={disable} required value={password} onChange={(event) => (setPassword(event.target.value))} />
                <Input compare={compare} type='password' placeholder='Confirme sua senha' disabled={disable} required value={confirmPassword} onChange={(event) => (setConfirmPassword(event.target.value))} />
                <ButtonRegistration type='submit' >{ buttonName }</ButtonRegistration>
            </form>
            <Link to='/login'>Já sou grato</Link>
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