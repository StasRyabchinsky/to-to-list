'use client'
import styles from "./style.module.scss"
import { Header } from "../header/header";
import { Aside } from "../aside/aside";
import { MainList } from "../main-list/main-list";
import { AddModal } from "@/shared/add-modal/add-modal";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { scrollLock, scrollUnlock } from "../../helpers/scroll";
import { IndexedDB } from "@/api/indexeddb/indexeddb";

interface ToDoListProps {
    formData: {
    label: string;
    id: string;
    name: string;
    type: string
  }[]
}

 export const ToDoList:React.FC<ToDoListProps> = ({formData}) => {
  const [isActivePlus, setActivePlus] = useState<boolean>(false);
  const [isActiveBrgMenu, setActiveBrgMenu] = useState<boolean>(false);

  const switchActivePlus = () => {
    isActivePlus? scrollUnlock() : scrollLock()
    setActivePlus(!isActivePlus)
  }
  const switchActiveBrgMenu = () => {
    setActiveBrgMenu(!isActiveBrgMenu)
  }

  const [todos, setTodos] = useState<{
    task: string,
    priority: number,
    executor: string}[]>([])

  const [inputValue, setInputValue] = useState<{
    task: string,
    priority: number,
    executor: string}>({
      task: '',
      priority: 0,
      executor: ''
    })
    IndexedDB()

const handleChange = (e:any) => {
  e.target.name === 'task' ? setInputValue({...inputValue, task: e.target.value}) : 
  e.target.name === 'priority' ? setInputValue({...inputValue, priority: e.target.value}) :
  e.target.name === 'executor' ? setInputValue({...inputValue, executor: e.target.value}) : null
}

const handleSubmit = () => { 
  setTodos([...todos, inputValue])
  // indexedDB.add([...todos,inputValue])
  setInputValue({
    task: '',
    priority: 0,
    executor: ''
   })
   switchActivePlus()
}

const handleDelete = (index:number) => {
  const newTodos = [...todos]
  newTodos.splice(index-1, 1)
  setTodos(newTodos)
}

const filterPriority = () => {
  setTodos([...todos.sort((obj1:any, obj2:any) => {
    return obj1.priority - obj2.priority
  })])
  
  // console.log(todos)
}
useEffect(() => {
  filterPriority()
  console.log(todos)

},[])

  return (
    <div className={styles.page}>
        <Header isActivePlus={isActivePlus} switchActivePlus={switchActivePlus} isActiveBrgMenu={isActiveBrgMenu} switchActiveBrgMenu={switchActiveBrgMenu} />
        <main className={styles.main}>
        <Aside />
        <MainList todos={todos} handleDelete={handleDelete} filterPriority={filterPriority} />
        </main>
        {isActivePlus && createPortal(
          <AddModal isActivePlus={isActivePlus} switchActivePlus={switchActivePlus} handleChange={handleChange} handleSubmit={handleSubmit} inputValue={inputValue} formData={formData} />,
          document.body
        )}
    </div>
  );
}
