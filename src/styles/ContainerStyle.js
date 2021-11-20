import styled from "styled-components";

const ContainerPage = styled.div`
    max-width: 95vw;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    form {
        text-align: center;
        margin: 20px auto 0;
    }

    a {
        color: #ffffff;
        font-size: 18px;
        font-weight: bold;
        line-height: 21px;
    }
`;

const ContainerButtons = styled.div`
    width: 100vw;
    min-height: 25vh;

    background-color: #4d65a8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0;

    a {
        color: #ffffff;
        font-size: 18px;
        font-weight: bold;
        line-height: 21px;
    }
`;

const ContainerPlans = styled.div`
    margin: 20px auto;
    width: 100vw;

    display: flex;
    justify-content: space-between;
    align-items: center;

    overflow: scroll;

    z-index: 100;
`;

export {
    ContainerPage,
    ContainerButtons,
    ContainerPlans,
}