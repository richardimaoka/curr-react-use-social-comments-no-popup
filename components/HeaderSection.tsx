import Image from "next/image"; // Import Image component
import React from "react";
import styles from "./HeaderSection.module.css";

const HeaderSection: React.FC = () => {
  const authorName = "pime-chan";
  const uploadDate = "3/8 22:12";
  const avatarSrc = "/images/avatar.png";

  return (
    <header className={styles.header}>
      <div className={styles.authorInfo}>
        <Image
          src={avatarSrc}
          alt={`${authorName}'s avatar`}
          className={styles.avatar}
          width={356}
          height={356}
        />
        <span className={styles.username}>{authorName}</span>
        <span className={styles.uploadDate}>{uploadDate}</span>
      </div>
      <button className={styles.followButton}>Follow</button>
    </header>
  );
};

export default HeaderSection;
