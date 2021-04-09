import React from 'react';
import styled from 'styled-components';

type tags =
  | 'p'
  | 'span'
  | 'label'
  | 'a'
  | 'b'
  | 'small'
  | 'strong'
  | 'i'
  | 'heading-1';

type Props = {
  color: string;
  size: string;
  variant: string;
  weight: string;
  lineHeight: string;
  as: tags;
  children: React.ReactNode | string;
};

const Label = styled.label`
  font-size: 12px;
  color: red;
`;

const Paragraphy = styled.p`
  font-size: 12px;
  color: green;
`;

const Span = styled.span`
  font-size: 12px;
  color: black;
`;

// const getTextStyles = ({
//   as,
//   color,
//   variant,
//   children,
//   lineHeight,
//   size,
//   weight
// }: Props) => {
//   switch (as) {
//     case 'label':
//       return styled.label`
//         ${css`

//         `}
//       `;
//     default:
//       return '';
//   }
// };

export const Text = (props: Props) => {
  switch (as) {
    case 'label':
      return <Label css={{}}>{children}</Label>;
    case 'span':
      return <Span>{children}</Span>;
    default:
      return <Paragraphy>{children}</Paragraphy>;
  }
};
