import { ImagePlan } from "../styles/Image";
import { PlanDescription } from "../styles/TextStyle";
import image from '../assets/image04.jpg'
import { PlanData } from "../styles/PlanStyle";
import { ButtonPages } from "../styles/ButtonStyle";

export default function PlanCard() {
    return (
        <PlanData>
            <ImagePlan src={image} />
            <PlanDescription>Você recebe um box por semana. Ideal para quem quer exercer a gratidão todos os dias.</PlanDescription>
            <ButtonPages>Assinar</ButtonPages>
        </PlanData>
    );
}