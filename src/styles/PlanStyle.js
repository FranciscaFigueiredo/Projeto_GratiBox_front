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
    max-width: 80vw;
    
    margin: 20px 10px;

    background-color: ${(props) => props.type === 'subscribe' ? '#ffffff' : '#e5cdb3'};
    border-radius: 25px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const SubscribeData = styled.div`
    width: 65vw;
    height: ${(props) => props.type === 'check' ? '' : '5vh'};
    
    margin: 0 0 10px;

    background-color: rgba(224, 209, 237, 0.62);
    border-radius: 5px; 

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    input {
        background-color: none  ;
    }
`;

const ProductTypes = styled.div`
    width: 60vw;
    
    margin: 0 5px 10px;

    border-radius: 5px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    input {
        margin-top: 10px;
    }

    label {
        margin-left: 5px;
        margin-top: 10px;
    }
`;

const Address = styled.div`
    width: 65vw;
    
    margin: 0 auto 10px;

    border-radius: 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    /* input {
        margin-top: 10px;
    }

    label {
        margin-left: 5px;
        margin-top: 10px;
    } */
`;

export {
    PlansPageTitle,
    PlanData,
    SubscribeData,
    ProductTypes,
    Address,
}