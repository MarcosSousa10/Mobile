/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
interface ContainerTextProps {
  color?: string;
  fontSize?: string;
  fontFamily?: 'Poppins-Bold' | 'Poppins-Italic' | 'Poppins-Light' | 'Poppins-Regular';
}
export const ContainerText = styled.Text<ContainerTextProps>`
  ${(props: {color: any}) => (props.color ? `color: ${props.color}` : '')};
  font-family: ${(props: { fontFamily: any; })=> props.fontFamily};
  font-size: ${(props: {fontSize: any}) => props.fontSize};
`;
