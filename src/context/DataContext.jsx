import { useContext, createContext, useEffect, useState } from "react"
import axios from "axios"

const DataContext = createContext()

export default function DataProvider({ children }) {
    const API_URL = import.meta.env.VITE_API_URL
    const [data, setData] = useState([])

    const getData = async () => {
        try {
            const { data } = await axios.get(API_URL)
            setData(data.portafolio)
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => useContext(DataContext)