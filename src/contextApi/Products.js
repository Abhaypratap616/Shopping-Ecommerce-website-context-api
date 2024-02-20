import { createContext, useEffect } from "react";
import { useState } from "react";
const API = 'https://api.pujakaitem.com/api/products';

export const AppContext = createContext();
export default function AppContextprovider({children}) {
    const [start, setstart] = useState([""]);
    const [loading, setLoading] = useState(true);
    const [singleproduct, setsingleproduct] = useState([]);
    const[Id,setId] = useState("");
    const[num,setnum] = useState(0);

    async function fetchData() {
        setLoading(true);
        try {
            const response = await fetch(API);
            const data = await response.json();
            setstart(data);
            setLoading(false);
            
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    },[
    ]);
   
    async function single(Id) {
        setLoading(true);
        try{
            const response = await fetch(`${API}?id=${Id}`);
            const data = await response.json();
            setsingleproduct(data);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        single(Id);
    },[
        
        Id
    ]);
    
    
    console.log(Id);
console.log(singleproduct);
console.log(singleproduct.name)


    
   
    const statemanagement = {
        start,
        setstart,
        loading,
        setLoading,
        singleproduct,
        setsingleproduct,
        Id,
        setId,
        num,
        setnum
    };
    
   
    return (
        <AppContext.Provider value={{statemanagement}}>
        {children}
        </AppContext.Provider>

    )

}


   



