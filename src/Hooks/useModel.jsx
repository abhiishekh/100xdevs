import { useState } from "react";


export function useModel(){
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal=()=>{
        setModalOpen(true)
    }
    const closeModal=()=>{
        setModalOpen(false)
    }

    return {
        isModalOpen:isModalOpen,
        openModal:openModal,
        closeModal:closeModal
    }
}
export function useNextModel(){
    const [isNextModel, setIsNextModel] = useState(false);

    const openNextModel =()=>{
        setIsNextModel(true)

    }
    const closeNextModel=()=>{
        setIsNextModel(false)
    }

    return {
        isNextModel:isNextModel,
        openNextModel:openNextModel,
        closeNextModel:closeNextModel
    }
}

export function useCreator(){

    const [isCreatorOpen ,setIsCreatorOpen] = useState(false)
    const openCreator=()=>{
        setIsCreatorOpen(true)
    }
    const closeCreator=()=>{
        setIsCreatorOpen(false)
    }

    return {
        isCreatorOpen:isCreatorOpen,
        openCreator:openCreator,
        closeCreator:closeCreator
    }
}

export function useLoginCreator(){
    const [isCreatorLogin,setIsCreatorLogin] = useState(false)
    const openCreatorLogin=() =>{
        setIsCreatorLogin(true)
    }
    const closeCreatorLogin=()=>{
        setIsCreatorLogin(false)
    }

    return {
        isCreatorLogin,
        openCreatorLogin,
        closeCreatorLogin
    }
}
