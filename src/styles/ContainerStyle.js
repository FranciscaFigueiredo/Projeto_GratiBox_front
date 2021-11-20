import styled from "styled-components";

const ContainerPage = styled.div`
    max-width: 95vw;
    height: 100vh;

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
    height: 50%;

    background-color: #4d65a8;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    margin: 0 auto;
    padding-bottom: 10vh;

    position: fixed;
    bottom: 0;
    left: 0;

    a {
        color: #ffffff;
        font-size: 18px;
        font-weight: bold;
        line-height: 21px;
    }
`;

const ContainerPlans = styled.div`
    margin: 20px auto;
    width: 95vw;

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