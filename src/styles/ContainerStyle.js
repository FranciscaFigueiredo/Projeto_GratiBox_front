import styled from "styled-components";

const ContainerPage = styled.div`
    width: 95vw;
    height: 90vh;

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
    height: 20vh;

    background-color: #4d65a8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

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

export {
    ContainerPage,
    ContainerButtons,
}