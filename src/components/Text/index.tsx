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
  type?: 'subtitle' | 'label' | 'body-1' | 'body-2' | 'caption';
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
};

export const Text = (props: TextProps) => {
  const TmpText = styledText({ ...props });
  return <TmpText {...props}>{props.children}</TmpText>;
};
