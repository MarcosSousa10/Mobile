/* eslint-disable prettier/prettier */
import {
  Alert,
  ModalProps as ModalPropsReact,
  Modal as ModalReact,
  Pressable,
  View,
} from 'react-native';
import Text from '../text/Text';
interface ModalProps extends ModalPropsReact {
  title: string;
  text: string;
  onCloseModal: () => void;
}
const Modal = ({title, text, onCloseModal, ...props}: ModalProps) => {

  return (
    <ModalReact
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        Alert.alert('Modal has been close.');
        onCloseModal();
      }}
      {...props}>
      <View>
        <View>
          <Text>{title}</Text>
          <Text>{text}</Text>
          <Pressable
            onPress={onCloseModal}>
            <Text>Hide Model</Text>
          </Pressable>
        </View>
      </View>
    </ModalReact>
  );
};
export default Modal;
