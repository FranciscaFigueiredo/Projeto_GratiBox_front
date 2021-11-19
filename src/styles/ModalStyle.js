import styled from 'styled-components';

const Modal = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: rgba(109, 124, 228, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;
`;

const Message = styled.div`
  min-width: 50vw;
  max-width: 90vw;
  min-height: 50vw;
  max-height: 35vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: #ffffff;
  border: 1px solid #6D7CE4;
  border-radius: 10px;

  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.15);

  transition: all 0.4s ease 0, 3s;

  padding: 20px;

  h1 {
    color: #283d3b;
    font-size: 26px;
    text-align: center;

    padding: 20px 0;
  }
`;

export { Modal, Message };
