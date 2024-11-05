import React from "react";
import styles from './style.module.scss'
import { PlusButton } from "@/shared/plus-button/plus-button";
import { BrgMenu } from "@/shared/brg-menu/brg-menu";

interface HeaderProps {
    isActivePlus: boolean;
    switchActivePlus: () => void;
    isActiveBrgMenu: boolean;
    switchActiveBrgMenu: () => void;
}

export const Header:React.FC<HeaderProps> = ({isActivePlus, switchActivePlus, isActiveBrgMenu, switchActiveBrgMenu}) => {
    return (
        <header className={styles.header}>
          <PlusButton isActivePlus={isActivePlus} switchActivePlus={switchActivePlus} />
          <p>Open&Close Tasks</p>
          <BrgMenu isActiveBrgMenu={isActiveBrgMenu} switchActiveBrgMenu={switchActiveBrgMenu} />
      </header>
    )
}