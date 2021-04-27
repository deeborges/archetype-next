import { TokenColors, TokenFontWeights, TokenSizes } from 'components/types';
import { styledText } from './styled';
import { TextTags, TextTypes } from './types';

export type TextProps = {
  children: string | React.ReactNode;
  fontSize?: TokenSizes;
  tag?: TextTags;
  type?: TextTypes;
  weight?: TokenFontWeights;
  marginBotton?: string;
  color?: TokenColors;
  id?: string;
};

export const Text = (props: TextProps) => {
  const TmpText = styledText({ ...props });
  return (
    <TmpText id={props.id} {...props}>
      {props.children}
    </TmpText>
  );
};
