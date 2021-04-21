import { Meta, Story } from '@storybook/react/types-6-0';
import { ActivedLink } from '../ActiveLink';
import Button from '.';
import { Stack } from '../Stack';
import { Clip } from 'components/Icon/svgs/Clip';

export default {
  title: 'Colibri/Components/Button',
  component: Button
} as Meta;

export const Catalog = () => (
  <Stack>
    <Button color="secondary">Secondary</Button>
    <br />
    <Button color="primary">Primary</Button>
    <br />
  </Stack>
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
        <Button size="x_small">x small</Button>
        &nbsp;&nbsp;
        <Button size="small">small</Button>
        &nbsp;&nbsp;
        <Button size="medium">medium</Button>
        &nbsp;&nbsp;
        <Button size="large">large</Button>
      </div>
      <br />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <Button color="primary" size="x_small">
          x small
        </Button>
        &nbsp;&nbsp;
        <Button color="primary" size="small">
          small
        </Button>
        &nbsp;&nbsp;
        <Button color="primary" size="medium">
          medium
        </Button>
        &nbsp;&nbsp;
        <Button color="primary" size="large">
          large
        </Button>
      </div>
      <br />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <Button color="danger" size="x_small">
          x small
        </Button>
        &nbsp;&nbsp;
        <Button color="danger" size="small">
          small
        </Button>
        &nbsp;&nbsp;
        <Button color="danger" size="medium">
          medium
        </Button>
        &nbsp;&nbsp;
        <Button color="danger" size="large">
          large
        </Button>
      </div>
      <Button fullWidth color="danger">
        Full
      </Button>
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
