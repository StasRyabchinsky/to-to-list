import React from "react";
import styles from "./style.module.scss"

import { Button } from "../button/button";
import { Input } from "../input/input";

interface AddModalProps {
    isActivePlus: boolean;
    inputValue: {
        task: string;
        priority: number;
        executor: string;
    };
    switchActivePlus: () => void;
    handleChange: (e: any) => void;
    handleSubmit: () => void;
    formData: {
        label: string;
        id: string;
        name: string;
        type: string
      }[];
}

export const AddModal:React.FC<AddModalProps> = ({isActivePlus, inputValue, switchActivePlus,handleChange, handleSubmit, formData}) => {
    return (
        <div 
        className={isActivePlus ? styles.activePopup : styles.popup} 
        onClick={(e) => {
            // e.stopPropagation();
            e.target === e.currentTarget? switchActivePlus() : null
        }}
        >
            <div className={styles.popupContent}>
                <form
                className={styles.popupForm}
                onSubmit={(e) =>{
                e.preventDefault()
                handleSubmit()
                }}>
                    <h3>New task</h3>
                    {formData.map((obj, index)=> {
                            return(
                                <Input key={index} formData={obj} inputValue={inputValue} handleChange={handleChange} />
                            )
                        })
                    }
                    <div className={styles.buttonGroup}>
                        <Button handleSubmit={handleSubmit} text={'Add Todo'} />
                        <Button switchActivePlus={switchActivePlus} text={'Cancel'} />
                    </div>
                </form>
            </div>
      </div> 
    )
}