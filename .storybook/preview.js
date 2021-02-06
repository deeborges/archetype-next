import LayoutGlobal from '../src/layout/global';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [
  (Story) => (
    <>
      <LayoutGlobal />
      <Story />
    </>
  )
];
