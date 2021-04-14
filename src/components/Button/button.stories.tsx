import { Meta, Story } from '@storybook/react/types-6-0';
import Button from '.';

export default {
  title: 'Colibri/Components/Button',
  component: Button
} as Meta;

export const Colors = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row'
    }}
  >
    <Button color="danger">danger</Button>
    <br />
    <Button color="default">default</Button>
    <br />
    <Button color="primary">primary</Button>
    <br />
  </div>
);

export const Scales: Story = () => (
  <>
    <div>
      <p>Normals</p> <br />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <Button color="default" size="x_small">
          x small
        </Button>
        &nbsp;&nbsp;
        <Button color="default" size="small">
          small
        </Button>
        &nbsp;&nbsp;
        <Button color="default" size="medium">
          medium
        </Button>
        &nbsp;&nbsp;
        <Button color="default" size="large">
          large
        </Button>
      </div>
    </div>

    <div>
      <p>Com loadings</p> <br />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <Button color="default" size="x_small" loading>
          x small
        </Button>
        &nbsp;&nbsp;
        <Button color="default" size="small" loading>
          small
        </Button>
        &nbsp;&nbsp;
        <Button color="default" size="medium" loading>
          medium
        </Button>
        &nbsp;&nbsp;
        <Button color="default" size="large" loading>
          large
        </Button>
      </div>
    </div>
  </>
);
export const Danger: Story = () => (
  <Button color="default">Ola mundo novo</Button>
);
export const Primary: Story = () => (
  <Button color="primary">Ola mundo novo</Button>
);

export const ButtonXSmall: Story = () => <Button size="x_small">full</Button>;
export const ButtonFull: Story = () => <Button fullWidth>full</Button>;
export const ButtonWithLoading: Story = () => (
  <Button loading>com loading</Button>
);
