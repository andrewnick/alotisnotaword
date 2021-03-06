// @flow
import React from 'react';
import { Link } from 'gatsby';
import Header from './Header';
import Author from './Author';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import Menu from '../Menu';
import styles from './Post.module.scss';
import type { Node } from '../../types';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const {
    tags, title, heading, date
  } = post.frontmatter;

  return (
    <div className={styles['post']}>
      <Menu />
      <Header title={title} heading={heading} />
      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        {/* {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />} */}
        <Author />
      </div>
    </div>
  );
};

export default Post;
