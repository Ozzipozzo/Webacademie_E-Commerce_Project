import { createGlobalStyle } from "styled-components";
import PoppinsLight from '../fonts/Poppins-Light.ttf';
import PoppinsRegular from '../fonts/Poppins-Regular.ttf';
import PoppinsMedium from '../fonts/Poppins-Medium.ttf';


const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Poppins';
  src: url(${PoppinsRegular}) format('woff'),
       url(${PoppinsLight}) format('woff'),
       url(${PoppinsMedium}) format('woff');
}
`;

export default FontStyles;
