import styled from "styled-components";

const Input = styled.input`
    width: 90vw;
    height: 64px;

    color: ${(props) =>
        props.compare ? "#000000" : !props.compare ? "#ff0000" : "#000000"};
    font-size: 24px;
    font-weight: 500;

    margin-bottom: 10px;
    padding: 0 20px;

    background-color: #ffffff;
    border-radius: 5px;

    outline: 0;

    ::placeholder {
        color: rgba(96, 72, 72, 0.4);
    }
`;

const InputAddress = styled.input`
    width: ${(props) => props.field === 'city' ? '40vw' : (props.field === 'state' ? '21vw' : '65vw')};
    height: 6vh;

    color: #000000;
    font-size: 18px;
    font-weight: 500;

    margin-bottom: 10px;
    padding: 0 5px;

    background-color: rgba(224, 209, 237, 0.62);
    border-radius: 5px;

    outline: 0;

    ::placeholder {
        color: #4D65A8;
        font-weight: bold;
    }
`;

export {
    Input,
    InputAddress,
}
