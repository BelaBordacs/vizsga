import { createContext, useContext, useEffect, useState } from "react";
import { myAxios } from "../api/Axios";

const FeladatContext = createContext();
export const FeladatProvider = ({children}) => {
const [ kat, setKat ] = useState([]);
const [ tesztek, setTesztek] = useState([]);
const [tesztByKat, setTesztByKat] = useState([]);
const [ selectedId, setSelectedId ] = useState(null);

const fetchKat = async () => {  
    const response = await myAxios.get('api/kategoria');
    setKat(response.data);
}

const fetchTesztek = async () => {
    const response = await myAxios.get('api/tesztek');
    setTesztek(response.data);
}

const fetchTesztByKat = async (id) => {
    const response = await myAxios.get(`/tesztekByKat/${id}`);
    setTesztByKat(response.data);
}

useEffect (() => {  
    fetchKat();
    fetchTesztek();
}, [])

    return (
        <FeladatContext.Provider value = {{kat, tesztek, selectedId, setSelectedId}}>
            {children}
        </FeladatContext.Provider>
    );
};

export const useFeladatContext = () => useContext(FeladatContext);