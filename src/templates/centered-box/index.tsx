import { Button, Text } from 'noverde-ui';
import Legal from '../../components/Legal';
import { WebcamCapture } from '../../components/Webcam';
import { Box, Container, Content, Wrapper } from './styles';

export const CenteredBox = () => {
  const width = '20rem';
  return (
    <Wrapper>
      <Container>
        <Content>
          <Text type="title" marginBotton="24px">
            Noverde
          </Text>
          <Box>
            <Text marginBotton={'24px'}>
              precisamos confirmar sua identidade. Tira uma <b>selfie</b> pra
              gente ;)
            </Text>
            <WebcamCapture css={{ marginBottom: '2rem' }} />
            <Button width={width} css={{ marginTop: '24px' }}>
              tirar foto
            </Button>
          </Box>
        </Content>
      </Container>
      <Legal />
    </Wrapper>
  );
};
