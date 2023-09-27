/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
interface ExamplaProps {
  text?: string;
  children?:string;
}
const Exemple = (props: ExamplaProps) => {
  return (
    <View>
      <Text>{props.children}</Text>
      <Text>{props.text}</Text>
    </View>
  );
};
export default Exemple;
