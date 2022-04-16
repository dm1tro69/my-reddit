import {assoc} from "../js/assoc";

export const generateRandomIndex = () => Math.random().toString(36).substring(2, 15)
//nanoid

export const assignId = assoc('id', generateRandomIndex())

export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomIndex())
