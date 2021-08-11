import { typographyVariants } from "./typographyVariants";
import { breakpoints } from "./breakpoints";

export const colors = {
    background: {
      light: {
        color: '#FFFFFF',
      },
      main: {
        color: '#E5E5E5',
      },
    },
    borders: {
      main: {
        color: '#8863e7',
      },
    },
    primary: {
      main: {
        color: '#e9c46a',
        contrastText: '#fff',
      },
    },
    secondary: {
      main: {
        color: '#FFF8E6',
        contrastText: '#fff',
      },
    },
  };

  
export default {
    colors: colors,
    breakpoints: breakpoints,
    typographyVariants: typographyVariants,
    transition: '200ms ease-in-out',
    fontFamily: '\'Fira Sans\', sans-serif',
}