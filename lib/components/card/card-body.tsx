import { GeneralPropsWithChildren } from '@lib/types';

import useStyles from './card-body.use-styles';

export const CardBody = (props: GeneralPropsWithChildren) => {
  const { children, css, ...remains } = props;
  const { root } = useStyles();

  return (
    <div css={[root, css]} {...remains}>{children}</div>
  );
};
