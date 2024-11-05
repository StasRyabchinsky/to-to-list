import React from "react";
import styles from './style.module.scss';

interface InputProps {
    formData: {
        label: string;
        id: string;
        name: string;
        type: string
      },
      inputValue: {
        task: string;
        priority: number;
        executor: string;
    },
    handleChange: (e: any) => void
}

export const Input:React.FC<InputProps> = ({formData, inputValue, handleChange}) => {
    return (
        <div className={styles.inputWrapper}>
            <label htmlFor={formData.id} className={styles.label}>{formData.label}</label>
            {
                formData.name == 'task' ?
                <input  
                    autoFocus
                    className={styles.input}
                    id={formData.id}
                    required
                    name={formData.name}
                    type={formData.type} 
                    value={formData.name == inputValue.task ? inputValue.task : formData.name == inputValue.executor ? inputValue.executor : formData.name == inputValue.priority.toString() ? inputValue.priority: undefined}
                    onChange={handleChange}
                />
                :
                <input  
                    className={styles.input}
                    id={formData.id}
                    name={formData.name}
                    type={formData.type} 
                    value={formData.name == inputValue.task ? inputValue.task : formData.name == inputValue.executor ? inputValue.executor : formData.name == inputValue.priority.toString() ? inputValue.priority: undefined}
                    onChange={handleChange}
                />
            }
        </div>
    )
}