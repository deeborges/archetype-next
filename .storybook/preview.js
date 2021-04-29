import LayoutGlobal from '../src/layout/global';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'noverde-ui';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <LayoutGlobal />
      <Story />
    </ThemeProvider>
  )
];
