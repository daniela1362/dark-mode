import {useState} from 'react';


const useLocalStorage = (key, initialValue) => {
const [storedValue, setStoredValue] = useState(()=> {
    const storageValue = window.localStorage.getItem(key)
    return storageValue ? JSON.parse(storageValue): initialValue
 }) 
 const setValue = value => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))

 }
 return [storedValue, setValue]
}

export default useLocalStorage
