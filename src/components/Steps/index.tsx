import { useState } from 'react';
import { useEffect } from 'react';
import { Box, BoxHover, Container } from './styled';

type StepsProps = {
  inititalValues: number;
  currency: number;
};

const Steps = ({ currency, inititalValues }: StepsProps) => {
  const [initState, setInitState] = useState<any | []>();
  const [currencyValue, setCurrencyValues] = useState<any | []>();

  useEffect(() => {
    const _initState = [];
    const _currencyValue = [];

    for (let i = 0; i < inititalValues; i++) {
      _initState.push({ id: i++ });
    }
    for (let i = 0; i < currency; i++) {
      _currencyValue.push({ id: i++ });
    }
    setCurrencyValues(_currencyValue);
    setInitState(_initState);
  }, [currency, inititalValues]);

  return (
    <Container>
      <Box>
        {[currencyValue].map((e, i) => (
          <div key={i}></div>
        ))}
      </Box>
      <BoxHover>
        {[initState].map((e, i) => (
          <div key={i}></div>
        ))}
      </BoxHover>
    </Container>
  );
};

export default Steps;
