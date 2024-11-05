import React from "react";
import styles from './style.module.scss'

interface BrgMenuProps {
  isActiveBrgMenu: boolean;
  switchActiveBrgMenu: () => void;
};

export const BrgMenu: React.FC<BrgMenuProps> = ({isActiveBrgMenu, switchActiveBrgMenu}) => {
    return (
        <button 
        className={isActiveBrgMenu? styles.activeBrgMenu : styles.brgMenu}
        onClick={switchActiveBrgMenu}>
          <div className={styles.brgMenuItem}></div>
          <div className={styles.brgMenuItem}></div>
          <div className={styles.brgMenuItem}></div>
        </button>
    )
}