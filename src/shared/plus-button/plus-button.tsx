import React from "react";
import styles from './style.module.scss'

interface PlusButtonProps {
  isActivePlus:boolean;
  switchActivePlus: () => void;
}

export const PlusButton: React.FC<PlusButtonProps> = ({isActivePlus, switchActivePlus}) => {
    return (
        <button 
        className={isActivePlus? styles.activeAddAction : styles.addAction}
        onClick={switchActivePlus}>
          <div className={styles.plus}></div>
          <div className={styles.plus}></div>
        </button>
    )
}