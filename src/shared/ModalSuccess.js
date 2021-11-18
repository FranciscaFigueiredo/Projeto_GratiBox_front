import { IoShieldCheckmarkSharp } from 'react-icons/io5'
import { IconContext } from "react-icons/lib";
import { ButtonModal } from '../styles/ButtonStyle';
import { Message, Modal } from "../styles/ModalStyle";

export default function ModalSuccess({ message, setModalSuccess }) {
    return (
        <Modal>
            <Message>
            <IconContext.Provider value={{ size: "60px", color: "#008000", className: "global-class-name" }}>
                <div>
                    <IoShieldCheckmarkSharp />
                </div>
            </IconContext.Provider>
                
                <h1>{ message }</h1>
                {/* <ButtonModal onClick={() => setModalSuccess(false)}>OK</ButtonModal> */}
            </Message>
        </Modal>
    );
}