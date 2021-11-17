import { ContainerButtons, ContainerPage } from "../styles/ContainerStyle";
import { Image } from "../styles/Image";
import { Description, PageTitle } from "../styles/TextStyle";
import image from '../assets/image05.webp'
import { ButtonHome } from "../styles/ButtonStyle";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <ContainerPage>
            <PageTitle>Bem vindo ao GratiBox</PageTitle>
            <Description>Receba em casa um box com chás, produtos organicos, incensos e muito mais...</Description>
            <Image src={image} />
            <ContainerButtons>
                <Link to='/sign-up' >
                    <ButtonHome>Quero começar</ButtonHome>
                </Link>
                <Link to='/login'>Já sou grato</Link>
            </ContainerButtons>
        </ContainerPage>
    );
}