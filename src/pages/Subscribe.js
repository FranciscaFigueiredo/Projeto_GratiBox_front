import { ContainerPage } from "../styles/ContainerStyle";
import { Description, PageTitle, PlanDescription, ProductsCheck } from "../styles/TextStyle";
import { PlanData, PlansPageTitle, ProductTypes, SubscribeData } from "../styles/PlanStyle";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { ImagePlan } from "../styles/Image";
import { PlanContext } from "../contexts/PlanContext";

import image from '../assets/image03.jpg'
import Select from "react-select";
import dayjs from "dayjs";
import { LoginValidation } from "../login";
import { ButtonPages } from "../styles/ButtonStyle";
import { useNavigate } from "react-router-dom";

export default function Subscribe() {
    const navigate = useNavigate();
    const { name } = useContext(UserContext);

    LoginValidation();
    
    const { plan, subscribe, setSubscribe } = useContext(PlanContext);

    const [products, setProducts] = useState([])
    const [data, setData] = useState('Segunda');
    const today = dayjs().add(8, 'day').format('YYYY-MM-DD')
    const dayMax = dayjs().add(1, 'month').format('YYYY-MM-DD')
    const [day, setDay] = useState(today);

    const options = [
        { value: 'Segunda', label: 'Segunda' },
        { value: 'Terça', label: 'Terça' },
        { value: 'Quarta', label: 'Quarta' },
        { value: 'Quinta', label: 'Quinta' },
        { value: 'Sexta', label: 'Sexta' },
    ]

    useEffect(() => {
        if (plan.period === 7) {
            setDay(data)
        }
    }, [products, data, plan]);
    console.log(plan);
    console.log(subscribe);

    function choiceProducts(event) {
        if(!products.includes(event.target.value)) {
            console.log(event.target.value)
            setProducts([...products, `${event.target.value}`])
        }
        if(products.includes(event.target.value)) {
            console.log(event.target.value)
            setProducts(products.filter((prod) => prod !== event.target.value))
        }
    }

    return (
        <ContainerPage>
            <PlansPageTitle>
                <PageTitle>Bom te ver por aqui, {name}.</PageTitle>
                <Description>“Agradecer é arte de atrair coisas boas”</Description>
            </PlansPageTitle>
            <PlanData type='subscribe'>
                <ImagePlan src={image} />
                <SubscribeData>
                    <PlanDescription type='subscribe'>{plan.name}</PlanDescription>
                </SubscribeData>
                <form onSubmit={choiceProducts}>
                        
                    <SubscribeData>
                        {
                            plan.period === 30 ?
                                <input style={{width: '65vw'}} type='date' min={today} max={dayMax} value={day} 
                                onChange={(event) => (setDay(event.target.value))} required />
                            : (
                            <Select
                                width='65vw'
                                style={{width: '65vw'}}
                                onFocus={false}
                                onChange={(event) => (setData(event.options))}
                                options={options}
                                isLoading={options.length === 0}
                                placeholder="Selecione uma categoria..."
                            />
                            )
                        }
                    </SubscribeData>
                    <br />
                    <SubscribeData type='check'>
                        <PlanDescription type='subscribe' >Quero receber</PlanDescription>
                        <ProductTypes>
                            <ProductsCheck>
                                <input id='cha' type='checkbox' value='cha' 
                                onChange={(event) => choiceProducts(event)} />
                                <label htmlFor='cha' >Chás</label>
                            </ProductsCheck>

                            <ProductsCheck>
                                <input id='incensos' type='checkbox' value='incenso' 
                                onChange={(event) => choiceProducts(event)} />
                                <label htmlFor='incensos' >Incensos</label>
                            </ProductsCheck>

                            <ProductsCheck>
                                <input id='organicos' type='checkbox' value='organico' 
                                onChange={(event) => choiceProducts(event)} /> 
                                <label htmlFor='organicos' >Produtos organicos</label>
                            </ProductsCheck>
                        </ProductTypes>
                    </SubscribeData>
                    <ButtonPages onClick={() => {
                        setSubscribe({
                            plan,
                            day,
                            products,
                        })
                        navigate('/address');
                    }} >Assinar</ButtonPages>
                </form>
            </PlanData>
        </ContainerPage>
    );
}