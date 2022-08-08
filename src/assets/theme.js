import {fontNormalise as fn} from '../utils/responsive';

const theme = {
  primaryColor: 'rgb(86,30,164)',
  text: {
    primaryColor: 'rgb(188,169,218)',
    secondaryColor: 'rgb(248,104,255)',
  },
  fontSize: {
    xs: fn(2),
    s: fn(4),
    m: fn(5),
    l: fn(6),
    xl: fn(8),
    xxl: fn(10),
  },
};
export default theme;
