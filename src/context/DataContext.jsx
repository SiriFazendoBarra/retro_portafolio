import { useContext, createContext, useEffect, useState } from "react"
import axios from "axios"

const DataContext = createContext()

export default function DataProvider({ children }) {
    const API_URL = import.meta.env.VITE_API_URL
    const [info, setInfo] = useState([])
    const [portafolio, setPortafolio] = useState([])

    const getData = async () => {
        try {
            const { data } = await axios.get(`${API_URL}.json`)
            setInfo(data)

        } catch (error) {
            console.log(error)
        }
    }

    const getPortafolio = () => {
        info.portafolio ? setPortafolio(Object.values(info.portafolio)) : null
    }

    useEffect(() => {
        getPortafolio()
    }, [info])

    useEffect(() => {
        getData()
    }, [])
    console.log(info)
    console.log(portafolio)

    return (
        <DataContext.Provider value={{ portafolio }}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => useContext(DataContext)