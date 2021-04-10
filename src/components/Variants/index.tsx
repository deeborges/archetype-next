import { styledText } from './styled';

export type TextProps = {
  children: string;
  tag: 'label' | 'p' | 'span';
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
