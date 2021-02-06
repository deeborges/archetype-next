import { ThemeProvider as Provider } from 'styled-components';

export const ThemeNames = {
  light: 'light',
  ocean: 'ocean'
};

const light = {
  colors: {
    blue: 'aquamarine',
    green: '#00C9B5',
    purple: '#2F2A84',
    yellow: '#F5BD03',
    white: '#ffffff',
    red: 'red'
  },
  fonts: {
    montserrat: {
      regular: 'Montserrat-Regular',
      semibold: 'Montserrat-SemiBold'
    }
  }
};

const allThemes = {
  light,
  ocean: {
    ...light,
    colors: {
      ...light.colors,
      primary: {
        main: '#2196f3',
        dark: '#1769aa',
        light: '#4dabf5'
      }
    }
  }
};

const ThemeProvider = ({ theme, children }) => (
  <Provider theme={allThemes[theme]}>{children}</Provider>
);

ThemeProvider.defaultProps = {
  theme: 'light'
};

export default ThemeProvider;
