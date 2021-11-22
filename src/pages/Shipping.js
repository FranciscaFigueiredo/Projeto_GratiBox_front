/* eslint-disable */
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import Select from 'react-select'
import { ContainerPage } from "../styles/ContainerStyle";
import { Address, PlanData, PlansPageTitle } from "../styles/PlanStyle";
import { Description, PageTitle } from "../styles/TextStyle";
import image from '../assets/image03.jpg'
import { ImagePlan } from "../styles/Image";
import { ButtonPages } from "../styles/ButtonStyle";
import { PlanContext } from "../contexts/PlanContext";
import { useNavigate } from "react-router";
import { InputAddress } from "../styles/Form/InputStyle";
import { useEffect } from "react";
import { getStates, toSign } from "../services/gratibox";
import { LoginValidation } from "../login";
import ModalError from "../shared/ModalError";
import ModalSuccess from "../shared/ModalSuccess";
import Loader from "react-loader-spinner";

export default function Shipping() {
    const navigate = useNavigate();
    const { name, address, setAddress } = useContext(UserContext);
    const token = LoginValidation();
    const { subscribe, setSubscribe } = useContext(PlanContext);

    const options = [];

    const [buttonName, setButtonName] = useState("Finalizar");
    const [disable, setDisable] = useState(false);

    const [modal, setModal] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [message, setMessage] = useState(1);

    const [completeName, setCompleteName] = useState("");
    const [street, setStreet] = useState("");
    const [cep, setCep] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [states, setStates] = useState([]);

    console.log({
        completeName,
        cep,
        city,
        state,
        token
    })

    useEffect(() => {
        getStates(token).then((res) => setStates(res.data)).catch((err) =>  {
            if (err.response?.status === 500) {
                setMessage("Servidor fora de área, tente novamente mais tarde");
                setModal(true);
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            }
        })

        if (states.length && !options.length) {
            console.log(states)
            states.map((value) => {
                options.push({
                    value: value.acronym,
                    label: value.acronym,
                })
            })
        }
    }, [state])
    

    console.log(options)

    function checkout(event) {
        event.preventDefault();

        setButtonName(
            <Loader
                type="ThreeDots"
                color="#ffffff"
                height={30}
                width={30}
                timeout={2000} //2 secs
            />
        );

        setDisable(true)

        setSubscribe({...subscribe, ...address});
        
        if (!Number(cep)) {
            setMessage("CEP inválido");
            setModal(true);
            setCep('');
        }

        toSign(subscribe, token).then((res) => {
            console.log(res.data);
            setMessage('');
            setModalSuccess(true);
            setTimeout(() => {
                navigate('/my-plan')
            }, 2000)
        })
    }

    return (
        <ContainerPage>
            <PlansPageTitle>
                <PageTitle>Bom te ver por aqui, {name}.</PageTitle>
                <Description>“Agradecer é arte de atrair coisas boas”</Description>
            </PlansPageTitle>
            <form onSubmit={checkout}>
                <PlanData type='subscribe'>
                    <ImagePlan src={image} />
                
                
                    <InputAddress field='address' compare={true} type='text' placeholder='Nome completo' disabled={disable} required value={completeName} onChange={(event) => (setCompleteName(event.target.value))} />
                    <InputAddress field='address' compare={true} type='text' placeholder='Endereço de entrega' disabled={disable} required value={street} onChange={(event) => (setStreet(event.target.value))} />

                    <InputAddress field='address' compare={true} type='text' placeholder='CEP' disabled={disable} required value={cep} onChange={(event) => (setCep(event.target.value))} />
                    <Address>
                        <InputAddress field='city' compare={true} type='text' placeholder='Cidade' disabled={disable} required value={city} onChange={(event) => (setCity(event.target.value))} />
                        <Select
                                width='65vw'
                                onFocus={false}
                                onChange={(event) => setState(event.value)}
                                options={options}
                                isLoading={options.length === 0}
                                placeholder="Estado"
                            />
                        {/* <InputAddress field='state' compare={true} type='text' placeholder='Estado' disabled={disable} required value={state} onChange={(event) => (setState(event.target.value))} /> */}
                    </Address>
                    
                </PlanData>
                
                <ButtonPages type='submit' onClick={() => {
                    setCep(cep.replace('-', '').replace('.', ''))
                    setAddress({
                        street,
                        cep,
                        city,
                        state,
                    });
                }} >{buttonName}</ButtonPages>
            </form>

            {
                modal ?
                <ModalError message={message} setModal={setModal} />
                : ''
            }

            {
                modalSuccess ?
                <ModalSuccess message={message} setModal={setModal} />
                : ''
            }
        </ContainerPage>
        
    );
}