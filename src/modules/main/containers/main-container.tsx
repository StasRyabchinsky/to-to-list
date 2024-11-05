import React from "react";
import { ToDoList } from "../components/to-do-list/to-do-list";

export const MainContainer = () => {

    const formData = [
        {
            label: 'Task name:',
            id: 'task',
            name: 'task',
            type: 'text'
        },
        {
            label: 'Priority:',
            id: 'priority',
            name: 'priority',
            type: 'number'
        },
        {
            label: 'Executor:',
            id: 'executor',
            name: 'executor',
            type: 'text'
        },

    ]

    return (
        <ToDoList formData={formData} />
    )
}