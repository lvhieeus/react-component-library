import { GeneralPropsWithChildren } from '@lib/types';

import useStyles from './card-footer.use-styles';

export const CardFooter = (props: GeneralPropsWithChildren) => {
  const { children, css, ...remains } = props;
  const { root } = useStyles();

  return (
    <div css={[root, css]} {...remains}>{children}</div>
  );
};
