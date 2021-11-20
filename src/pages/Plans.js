import { ContainerPage, ContainerPlans } from "../styles/ContainerStyle";
import { ImagePlan } from "../styles/Image";
import { Description, PageTitle, PlanDescription } from "../styles/TextStyle";
import image from '../assets/image04.jpg'
import { PlanData, PlansPageTitle } from "../styles/PlanStyle";
import { ButtonPages } from "../styles/ButtonStyle";

export default function Plans() {
    return (
        <ContainerPage>
            <PlansPageTitle>
                <PageTitle>Bom te ver por aqui, @User.</PageTitle>
                <Description>Você ainda não assinou um plano, que tal começar agora?</Description>
            </PlansPageTitle>
            <ContainerPlans>
                <PlanData>
                    <ImagePlan src={image} />
                    <PlanDescription>Você recebe um box por semana. Ideal para quem quer exercer a gratidão todos os dias.</PlanDescription>
                    <ButtonPages>Assinar</ButtonPages>
                </PlanData>
                <PlanData>
                    <ImagePlan src={image} />
                    <PlanDescription>Você recebe um box por semana. Ideal para quem quer exercer a gratidão todos os dias.</PlanDescription>
                    <ButtonPages>Assinar</ButtonPages>
                </PlanData>
            </ContainerPlans>
        </ContainerPage>
    );
}