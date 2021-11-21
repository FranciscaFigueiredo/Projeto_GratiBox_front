import { ContainerPage } from "../styles/ContainerStyle";
import { Description, PageTitle, PlanDescription, ProductsCheck } from "../styles/TextStyle";
import { PlanData, PlansPageTitle, ProductTypes, SubscribeData } from "../styles/PlanStyle";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { getPlans } from "../services/gratibox";
import { ImagePlan } from "../styles/Image";
import { PlanContext } from "../contexts/PlanContext";

import image from '../assets/image03.jpg'
import Select from "react-select";
import dayjs from "dayjs";
import { LoginValidation } from "../login";

export default function Subscribe() {
    const { name } = useContext(UserContext);

    const token = LoginValidation();
    
    const { plan } = useContext(PlanContext);

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
        // const today = dayjs()
    }, [products]);
    console.log(plan);
    console.log({day, products});

    function choiceProducts(event) {
        if(!products.includes(event.target.value)) {
            console.log(event.target.value)
            setProducts([...products, `${event.target.value}`])
        }
        if(products.includes(event.target.value)) {
            console.log(event.target.value)
            setProducts(products.filter((prod) => prod != event.target.value))
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
                                onFocus={false}
                                onChange={(event) => (setData(event.target.options))}
                                width='65vw'
                                options={options}
                                isLoading={options.length === 0}
                                placeholder="Selecione uma categoria..."
                            />
                            )
                        }
                        

                        

                        {/* <label>
                        <select value={data} onChange={(event) => (setData(event.target.value)) }>
                            <option value="Segunda">Segunda</option>
                            <option value="Terça">Terça</option>
                            <option value="Quarta">Quarta</option>
                            <option value="Quinta">Quinta</option>
                            <option value="Sexta">Sexta</option>
                        </select>
                        </label> */}
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
                </form>
            </PlanData>
        </ContainerPage>
    );
}