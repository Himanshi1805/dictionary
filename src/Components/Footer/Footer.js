import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <hr style={{width: '90%', marginTop: 20}} />
      <span className={styles.name}>Made by Himanshi Gupta</span>
      <div className={styles.iconContainer}>
        <a
          href="https://www.linkedin.com/in/himanshi-gupta-091262205/"
          target="__blank"
        >
          <i className="fab fa-linkedin fa-1x"></i>
        </a>
        <a href="mailto:ghimanshi1805@gmail.com" target="__blank">
          <i className="fab fa-google fa-1x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
