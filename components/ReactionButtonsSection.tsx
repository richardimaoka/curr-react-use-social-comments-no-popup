import React from 'react';
import styles from './ReactionButtonsSection.module.css';

const ReactionButtonsSection: React.FC = () => {
  return (
    <section className={styles.reactionButtonsSection}>
      <button className={styles.reactionButton}>Like</button>
      <button className={styles.reactionButton}>Comment</button>
      <button className={styles.reactionButton}>Share</button>
      <button className={styles.reactionButton}>Save</button>
    </section>
  );
};

export default ReactionButtonsSection;