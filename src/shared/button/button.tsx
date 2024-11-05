import React from "react";
import styles from './style.module.scss';

interface ButtonProps {
    handleSubmit?:() => void;
    switchActivePlus?: () => void;
    text: string;
    handleDelete?:(index:number ) => void;
    index?: number;
}

export const Button:React.FC<ButtonProps> = ({handleSubmit, switchActivePlus, text, handleDelete, index}) => {
    let button
    switch(text){
        case('Add Todo'):  
            button = <button className={styles.button} onClick={handleSubmit}>Add Todo</button>;
            break;
        case('Cancel'):
            button = <button className={styles.button} onClick={switchActivePlus}>Cancel</button>;
            break;
        case('Done'):
            button = <button onClick={() =>
                {if(handleDelete !== undefined && index){
                    console.log(index)
                        handleDelete(index)
                    }
                }}>Done</button>;
            break;
    }
    return (
        <>
            {button}
        </>
    )
}