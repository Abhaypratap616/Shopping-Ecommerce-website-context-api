import { createContext, useEffect } from "react";
import { useState } from "react";
const API = 'https://api.pujakaitem.com/api/products';
export const Filtercontext = createContext();
export default function Filterprovider({children}){
    const[filterdata,setfilterdata] = useState(['']);
    const[mainfilterdata,setmainfilterdata] = useState(['']);
    const[values,setvalues]  = useState(''); 
    const[num,setnum] = useState(0);
    const[ID,setId] = useState("");
    
   
   
    async function fetchData() {
       
        try {
            const response = await fetch('https://api.pujakaitem.com/api/products');
            const data = await response.json();
            
            setfilterdata(data);
            console.log("ye wala data h filterwlae ka ")
            
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        fetchData();
    },[
    ]);

    const updatefunction = (e) => {
        setvalues(e.target.value);
        console.log(values);
    }
    const updatehogya = () => {
        const filterdata1 = filterdata.filter((item) => {
            return item.company.toLowerCase().includes(values.toLowerCase());
        });
        setfilterdata(filterdata1);
    }

    const all = () => {
        fetchData();
    }
    const mobilefunction = () => {
        const filterdata12 = filterdata.filter((item) => {
            return item.category === 'mobile';
        });
        setfilterdata(filterdata12);
    }
    const watchfunction = () => {
        const filterdata13 = filterdata.filter((item) => {
            return item.category === 'watch';
        });
        setfilterdata(filterdata13);
    }
    const Accessoriesfunction = () => {
        const filterdata14 = filterdata.filter((item) => {
            return item.category === 'accessories';
        });
        setfilterdata(filterdata14);
    }
    
    const Computerfunction = () => {
        const filterdata15 = filterdata.filter((item) => {
            return item.category === 'computer';
        });
        setfilterdata(filterdata15);
    }
    const Laptopfunction = () => {
        const filterdata16 = filterdata.filter((item) => {
            return item.category === 'laptop';
        })
        setfilterdata(filterdata16);
    }

    const aplefunction = () => {
        const filterdata17 = filterdata.filter((item) => {
            return item.company === 'apple';
        });
        setfilterdata(filterdata17);
    }

    const samsungfunction = () => {
        const filterdata18 = filterdata.filter((item) => {
            return item.company === 'samsung';
        });
        setfilterdata(filterdata18);
    }

    const lenovafunction = () => {
        const filterdata19 = filterdata.filter((item) => {
            return item.company === 'lenova';
        });
        setfilterdata(filterdata19);
    }

    const asusfunction = () => {
        const filterdata20 = filterdata.filter((item) => {
            return item.company === 'asus';
        });
        setfilterdata(filterdata20);
    }

const statement ={
    filterdata,
    setfilterdata,
    values,
    setvalues,
    updatefunction,
    updatehogya,
    all,
    fetchData,
    mobilefunction,
    watchfunction,
    Accessoriesfunction,
    Computerfunction,
    Laptopfunction,
    aplefunction,
    samsungfunction,
    num,
    setnum,
    ID,
    setId,
    mainfilterdata,
    setmainfilterdata,
    lenovafunction,
    asusfunction
}
    return(
        <Filtercontext.Provider value={{statement}}>
            {children}
        </Filtercontext.Provider>
    )
}