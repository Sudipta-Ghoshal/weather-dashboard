import { useEffect, useState } from "react"

const useLocalStorage = (storageKey, default_value) => {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(storageKey)) ?? default_value);

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value))
    }, [value, storageKey])

    return [value, setValue]
}

export default useLocalStorage;