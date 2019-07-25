import useLocalStorage from './useLocalStorage'
import {useEffect} from 'react'

const useDarkMode = ()=>{
const [storedValue, setStoredValue] = useLocalStorage('initialKey')
useEffect(()=>{
    const isDark = localStorage.getItem('initialKey')==='true';
    isDark ? document.body.classList.add('dark-mode'):document.body.classList.remove('dark-mode')
},[storedValue])
return [storedValue, setStoredValue]
}

export default useDarkMode 
