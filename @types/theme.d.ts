import { Theme } from '../src/layout/tokens';

// inferencia de tipos
type Theme = typeof Theme.default;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
