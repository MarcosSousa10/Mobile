/* eslint-disable prettier/prettier */
import { TextInputProps } from 'react-native';
import { ContainerInput } from './input.style';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import { theme } from '../../themes/theme';
// type InputProps = TextInputProps;
interface InputProps extends TextInputProps {
  title?: string;
}
const Input = ({title, ...props }: InputProps) => {
  return (
    <DisplayFlexColumn>
      {title && (
        <Text customMargin='0px 0px 4px 8px'  color={theme.colors.grayTheme.gray100} type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}>{title}</Text>
      )}
      <ContainerInput {...props} />
    </DisplayFlexColumn>
  );
};
export default Input;
