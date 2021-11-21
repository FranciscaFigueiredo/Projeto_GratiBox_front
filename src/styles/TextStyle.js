import styled from "styled-components";

const PageTitle = styled.h1`
    color: #ffffff;
    font-size: 28px;
    font-weight: 500;
    text-align: center;
    margin: 30px auto 20px;
`;

const Description = styled.h3`
    color: #ffffff;
    font-size: 18px;
    font-weight: 300;
    text-align: center;
`;

const PlanDescription = styled.h3`
    height: ${(props) => props.type === 'subscribe' ? '20px' : '10vh'};

    margin-left: 5px;
    
    color: #4D65A8;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`;

const ProductsCheck = styled.div`
    height: 20px;
    
    color: #4D65A8;
    font-size: 18px;
    text-align: justify;

    margin-bottom: 10px;
`;

export { 
    PageTitle,
    Description,
    PlanDescription,
    ProductsCheck,
};
