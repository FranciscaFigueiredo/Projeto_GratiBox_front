import { ImagePlan } from "../styles/Image";
import { PlanDescription } from "../styles/TextStyle";
import image1 from '../assets/image04.jpg'
import image2 from '../assets/image02.jpg'
import { PlanData } from "../styles/PlanStyle";
import { ButtonPages } from "../styles/ButtonStyle";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PlanContext } from "../contexts/PlanContext";

export default function PlanCard({ index, name, period, description }) {
    const navigate = useNavigate();

    const { setPlan } = useContext(PlanContext);

    let image = image1;

    if (index === 1) {
        image = image2;
    }
    
    return (
        <PlanData>
            <ImagePlan src={image} />
            <PlanDescription>{description}</PlanDescription>
            <ButtonPages onClick={() => {
                setPlan({
                    name,
                    period,
                    description,
                })
                navigate('/subscribe');
            }} >Assinar</ButtonPages>
        </PlanData>
    );
}