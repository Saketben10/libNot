import { create } from "zustand";

type mobileSidebar = {
    isOpen : boolean;
    onOpen : ()=> void;
    onClose : ()=> void;

}

export const Mobilesidebar = create<mobileSidebar>((set)=> ({
    isOpen : true,
    onOpen : ()=> set({isOpen : true}),
    onClose : ()=> set({isOpen: false})
}))