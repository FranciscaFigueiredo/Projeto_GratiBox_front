import styled from "styled-components";

const ImageHome = styled.img`
    width: 100vw;
    height: 90vw;

    object-fit: cover;

    z-index: 10;

    margin-top: 10px;

    @media (min-width: 500px) {
        width: 100vw;
        height: 80vw;
    }
`;

const ImagePlan = styled.img`
    width: 80vw;
    height: 30vh;

    border-radius: 25px 25px 0 0;

    object-fit: cover;
`;

export {
    ImageHome,
    ImagePlan,
}