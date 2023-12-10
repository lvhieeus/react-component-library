import { CloseIcon } from '@lib/icons';

import { Card, IconButton } from '..';
import { ModalProps } from './types';
import useStyles from './use-styles';

export const Modal = (props: ModalProps) => {
  const { children, isOpen, isDismissible, isClosable = true, onClose, css,  ...remains } = props;
  const { root, backdrop, modal, closeButton } = useStyles();

  if (!isOpen) {
    return null;
  }

  return (
    <div css={root}>
      <div css={backdrop} onClick={isDismissible ? onClose : undefined}/>
      <Card css={[modal, css]} {...remains}>
        {isClosable && <IconButton css={closeButton} onClick={onClose}><CloseIcon /></IconButton>}
        {children}
      </Card>
    </div>
  );
};
