import React from "react";
import styles from './style.module.scss';
import { Button } from "@/shared/button/button";

interface MainListProps {
    todos:{
        task?: string,
        priority?: number,
        executor?: string}[];
        handleDelete:(index:number) => void;
        filterPriority: () => void;
}
export const MainList:React.FC<MainListProps> = ({todos, handleDelete, filterPriority}) => {
    return (
        <div className={styles.taskListContainer}>
            <div className={styles.taskList}>
                <h3>Your tasks</h3>
                <button
                    onClick={filterPriority}
                >filter by priority</button>
            {todos && 
                todos.map((el,index) =>
                    {
                        return (
                        <div className={styles.taskItem} key={index+1}>
                            <p><span>task name:</span> {el?.task}</p>
                            <p><span>priority:</span> {el?.priority}</p>
                            <p><span>executor:</span> {el?.executor}</p>
                            <Button text={'Done'} handleDelete={handleDelete} index={index+1} />
                        </div>
                    )}
                )
            }
            </div>
            </div>
    )
}