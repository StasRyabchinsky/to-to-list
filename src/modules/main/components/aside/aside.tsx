import React from "react";
import styles from './style.module.scss'
import { AsideGroup } from "@/shared/aside-group/aside-group";

export const Aside = () => {
    return(
        <aside className={styles.aside}>
            <AsideGroup />
        </aside>
    )
}