import { ContainerPage, ContainerPlans } from "../styles/ContainerStyle";
import { ImagePlan } from "../styles/Image";
import { Description, PageTitle, PlanDescription } from "../styles/TextStyle";
import image from '../assets/image04.jpg'
import { PlanData, PlansPageTitle } from "../styles/PlanStyle";
import { ButtonPages } from "../styles/ButtonStyle";
import PlanCard from "../components/PlanCard";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { getPlans } from "../services/gratibox";

export default function Plans() {
    const { name, token } = useContext(UserContext);
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        getPlans(token).then((res) => setPlans(res.data)).catch((err) => console.error())
    }, [])
    console.log(plans)

    return (
        <ContainerPage>
            <PlansPageTitle>
                <PageTitle>Bom te ver por aqui, {name}.</PageTitle>
                <Description>Você ainda não assinou um plano, que tal começar agora?</Description>
            </PlansPageTitle>
            <ContainerPlans>
                {plans.map((plan, index) => <PlanCard key={index} index={index} name={plan.name} period={plan.period} description={plan.description} />)}
            </ContainerPlans>
        </ContainerPage>
    );
}