import LayoutGlobal from '../src/layout/global';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'noverde-ui';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={DefaultTheme}>
      <LayoutGlobal />
      <Story />
    </ThemeProvider>
  )
];
