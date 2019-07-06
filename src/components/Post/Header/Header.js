// @flow
import React from 'react';
import Icon from '../../Icon';
import { getIcon } from '../../../utils';
import styles from './Header.module.scss';

type Props = {
  title?: string
};

const Header = ({ title }: Props) => (
  <div className={styles['header']}>
    <h1 className={styles['header__title']} dangerouslySetInnerHTML={{ __html: title }} />
    <div className={styles['header__icon']}>
      <Icon icon={getIcon('down-arrow')} />
    </div>
  </div>
);

export default Header;
