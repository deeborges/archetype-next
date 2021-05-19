import { Button, Text } from 'noverde-ui';
import Legal from '../../components/Legal';
import { WebcamCapture } from '../../components/Webcam';
import { Box, Container, Content, Wrapper } from './styles';

export const CenteredBox = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Text
            type="title"
            custom={{
              marginBottom: 'size-24'
            }}
          >
            Noverde
          </Text>
          <Box>
            <Text
              custom={{
                marginBottom: 'size-24'
              }}
            >
              precisamos confirmar sua identidade. Tira uma <b>selfie</b> pra
              gente ;)
            </Text>
            <WebcamCapture css={{ marginBottom: '2rem' }} />
            <Button width="size-20" css={{ marginTop: '24px' }}>
              tirar foto
            </Button>
          </Box>
        </Content>
      </Container>
      <Legal />
    </Wrapper>
  );
};
