import { GeneralPropsWithChildren } from '@lib/types';

import useStyles from './card-header.use-styles';

export const CardHeader = (props: GeneralPropsWithChildren) => {
  const { children, css, ...remains } = props;
  const { root } = useStyles();

  return (
    <div css={[root, css]} {...remains}>{children}</div>
  );
};
