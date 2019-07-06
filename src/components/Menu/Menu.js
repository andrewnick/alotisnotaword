// @flow
import React, { useState } from 'react';
import { Link } from 'gatsby';
import Icon from '../Icon';
import { getIcon } from '../../utils';
import styles from './Menu.module.scss';
import { useMenuList } from '../../hooks';

const Menu = () => {
  const { edges } = useMenuList();
  const [menuVisible, setMenuVisibility] = useState(false);

  return (
    <div className={menuVisible ? styles['menu'] : styles['menu__closed']}>
      <div
        className={styles['menu__icon']}
        onClick={() => setMenuVisibility((prevMenuOpen) => !prevMenuOpen)}
      >
        <Icon icon={getIcon('menu')} />
      </div>
      <div className={styles['menu__items']}>
        <div className={styles['menu__item']}>
          {edges.map((edge) => (
            <Link
              className={styles['menu__item__link']}
              to={edge.node.fields.slug}
              key={edge.node.id}
            >
              {edge.node.frontmatter.menu_title
                ? edge.node.frontmatter.menu_title
                : edge.node.frontmatter.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
