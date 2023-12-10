import { GeneralPropsWithChildren } from '@lib/types';

export interface ModalProps extends GeneralPropsWithChildren {
  isOpen: boolean;
  isDismissible?: boolean;
  isClosable?: boolean;
  onClose?: () => void;
}
