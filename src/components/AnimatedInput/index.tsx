import { Input } from 'noverde-ui/lib/src/components/Input/styled';
import * as styled from './styled';

const AnimatedInput = () => (
  <styled.Container>
    <Input id="animated" name="animated" />
    <label className="label-animated" htmlFor="animated">
      label animada
    </label>
  </styled.Container>
);

export default AnimatedInput;
