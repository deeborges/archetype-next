import { Text } from 'noverde-ui';
import Legal from '../../components/Legal';
import {
  Container,
  Banner,
  Footer,
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
          <Text fontSize="xl_5">
            vamos <br />
            <strong>
              criar <br /> sua conta
            </strong>
          </Text>
        </div>
        <img src="" alt="" />
      </Banner>

      <ContentFormWrapper>
        <ContentForm>
          <Text fontSize="xl_2" color="galaxy">
            muito&nbsp;
            <Text tag="span" fontSize="xl_2" weight="600" color="galaxy">
              prazer :)
            </Text>
          </Text>
          <Text type="body-1" color="gray500">
            para fazer sua simulação precisamos criar a sua conta.
          </Text>
          <Text type="body-1" color="gray500" marginBotton="2rem">
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
