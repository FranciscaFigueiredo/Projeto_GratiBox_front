import { ContainerPage, ContainerPlans } from "../styles/ContainerStyle";
import { ImagePlan } from "../styles/Image";
import { Description, PageTitle, PlanDescription } from "../styles/TextStyle";
import image from '../assets/image04.jpg'
import { PlanData, PlansPageTitle } from "../styles/PlanStyle";
import { ButtonPages } from "../styles/ButtonStyle";
import PlanCard from "../components/PlanCard";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Plans() {
    const { name } = useContext(UserContext);

    return (
        <ContainerPage>
            <PlansPageTitle>
                <PageTitle>Bom te ver por aqui, {name}.</PageTitle>
                <Description>Você ainda não assinou um plano, que tal começar agora?</Description>
            </PlansPageTitle>
            <ContainerPlans>
                <PlanCard />
                <PlanData>
                    <ImagePlan src={image} />
                    <PlanDescription>Você recebe um box por semana. Ideal para quem quer exercer a gratidão todos os dias.</PlanDescription>
                    <ButtonPages>Assinar</ButtonPages>
                </PlanData>
            </ContainerPlans>
        </ContainerPage>
    );
}