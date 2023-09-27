/* eslint-disable prettier/prettier */
import {  TouchableOpacityProps } from 'react-native';
import {ButtonContainer} from './button.syle';
import Text from '../text/Text';
import { theme } from '../../themes/theme';
import { textTypes } from '../text/textTypes';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
};
const Button = ({title, type, margin, ...props}: ButtonProps) => {
  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      
      break;
      case theme.buttons.buttonsTheme.primary:
        
        break;

    default:
          return(
    <ButtonContainer margin={margin} {...props}>
        <Text type={textTypes.BUTTON_BOLD} color={theme.colors.neutraTheme.white}>{title}</Text>
    </ButtonContainer>
    );
  }

};
export default Button;
