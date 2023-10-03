/* eslint-disable prettier/prettier */
import Modal from '../Modal';
import { useGlobalRducer } from '../../../../story/reducers/globalReducer/useGlobalReducer';
export interface GLobalModalType {
    visible: boolean;
    title: string;
    text: string;
}
const GlobalModal = () => {
    const {modal,closeModal} = useGlobalRducer();
  return (
    <Modal
      title={modal.title}
      text={modal.text}
      visible={modal.visible}
      onCloseModal={closeModal}
    />
  );
};
export default GlobalModal;
