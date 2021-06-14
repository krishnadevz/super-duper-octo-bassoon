import styles from './Post.module.scss';
const Post = ({content,date}) => {
  return (
    <>
      <p className={styles.postsContent}>
          {content}
          </p>
          <ul className={styles.postMeta}>
      <li className={styles.postDate}>
          {date}
          </li></ul>
    </>
  );
};
export default Post;
