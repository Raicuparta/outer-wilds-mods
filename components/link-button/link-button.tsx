import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';

import styles from './link-button.module.scss';

interface Props
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  variant?: 'primary' | 'secondary';
}

export const LinkButton: React.FunctionComponent<Props> = ({
  children,
  variant = 'secondary',
  ...props
}) => (
  <a className={`${styles.linkButton} ${styles[variant]}`} {...props}>
    <div className={styles.content}>{children}</div>
  </a>
);