import { Colors } from 'components/types';
import { styledText } from './styled';

export type TextProps = {
  children: string | React.ReactNode;
  fontSize?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'default'
    | 'medium'
    | 'large'
    | 'xl_2'
    | 'xl_2_5'
    | 'xl_3'
    | 'xl_4'
    | 'xl_5'
    | 'xl_6';
  tag?:
    | 'label'
    | 'p'
    | 'span'
    | 'hr'
    | 'pre'
    | 'b'
    | 'strong'
    | 'i'
    | 'em'
    | 'sub'
    | 'sup'
    | 'ins'
    | 'del'
    | 'small'
    | 'mark';
  type?:
    | 'headline'
    | 'title'
    | 'subheading-1'
    | 'subheading-2'
    | 'body-1'
    | 'body-2'
    | 'body-3'
    | 'caption-1'
    | 'caption-2'
    | 'caption-3';
  weight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  marginBotton?: string;
  color?: Colors;
};

export const Text = (props: TextProps) => {
  const TmpText = styledText({ ...props });
  return <TmpText {...props}>{props.children}</TmpText>;
};
