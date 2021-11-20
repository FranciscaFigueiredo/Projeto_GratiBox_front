import styled from "styled-components";

const PlansPageTitle = styled.div`
    width: 95vw;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
`;

const PlanData = styled.div`
    margin: 20px auto;
    max-width: 80vw;

    /* height: 45vh; */
    margin-right: 20px;

    background-color: #e5cdb3;
    border-radius: 25px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`;

export {
    PlansPageTitle,
    PlanData,
}