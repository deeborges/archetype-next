import LayoutGlobal from '../src/layout/global';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../src/layout/tokens';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme.default}>
      <LayoutGlobal />
      <Story />
    </ThemeProvider>
  )
];
