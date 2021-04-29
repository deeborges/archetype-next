import { Text } from 'noverde-ui';
import Legal from '../../components/Legal';
import {
  Container,
  Banner,
  ContentForm,
  ContentFormWrapper,
  Wrapper
} from './styled';

type AuthProps = {
  children: React.ReactNode;
};

const Auth = ({ children }: AuthProps) => (
  <Wrapper>
    <Container>
      <Banner>
        <div></div>
        <div>
          <Text type="body-1">fase 01</Text>
          <Text size="size-72">
            vamos <br />
            <strong>
              criar sua <br /> conta
            </strong>
          </Text>
        </div>
        <img src="" alt="" />
      </Banner>

      <ContentFormWrapper>
        <ContentForm>
          <Text size="size-32" color="galaxy">
            muito&nbsp;
            <Text tag="span" size="size-32" weight="weight-600" color="galaxy">
              prazer :)
            </Text>
          </Text>
          <Text type="body-1" color="gray-500">
            para fazer sua simulação precisamos criar a sua conta.
          </Text>
          <Text
            type="body-1"
            color="gray-500"
            custom={{
              marginBottom: 'size-24'
            }}
          >
            É rapidinho!
          </Text>
          {children}
        </ContentForm>
      </ContentFormWrapper>
    </Container>
    <Legal />
  </Wrapper>
);

export default Auth;
