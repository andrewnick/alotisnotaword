// @flow
import React from 'react';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {author.bio}
        <span className={styles['author__name']}>
          <strong>{author.name}</strong>
        </span>
      </p>
    </div>
  );
};

export default Author;
