import { DefaultTheme } from 'noverde-ui';

type Theme = typeof DefaultTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
