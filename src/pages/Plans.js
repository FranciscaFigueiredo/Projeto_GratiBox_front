import { ContainerPage, ContainerPlans } from "../styles/ContainerStyle";
import { Description, PageTitle } from "../styles/TextStyle";
import { PlansPageTitle } from "../styles/PlanStyle";

import PlanCard from "../components/PlanCard";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { getPlans } from "../services/gratibox";

export default function Plans() {
    const { name, token } = useContext(UserContext);
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        getPlans(token).then((res) => setPlans(res.data)).catch((err) => console.error())
    }, [token]);

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