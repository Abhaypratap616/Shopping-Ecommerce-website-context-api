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
    const [data , setdata] = useState([]);
    const [total, setTotal] = useState("0");
    const [count, setCount] = useState(1);
    const [newdata, setnewdata] = useState([]);
    const[lasttotal,setlasttotal] = useState(0);

    async function fetchData() {
        setLoading(true);
        try {
            const response = await fetch('https://api.pujakaitem.com/api/products');
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
    function changenumber(){
        setnum(num+1);
       console.log(singleproduct.id)
       console.log(singleproduct);
       const pratap = singleproduct;
       const pratap1 = [...data,pratap];
         setdata(pratap1);
      }
            function deletebyid(id){
            const newdata = data.filter((item) => {
                return item.id !== id;
            });
            setdata(newdata);
            setnum(num-1);
        }

        const findTotalAmount = () => {
           return data.reduce((total, item) => total + item.price, 0);

           
          };
        
        function increment(id){
            setCount(count+1);
            const newdata = data.map((item) => {
                return item.id === Id ? {...item,price: item.price*count}:item;

                
            }); 
            
        }
        

        function decrement(id){
            setCount(count>1 ? count-1 : 1);
            const newdata = data.map((item) => {
                return item.id === Id ? {...item,price: item.price*count}:item;
            });
        }

    useEffect(() => {
        single(Id);
    },[
        Id
    ]);
    
    

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
        setnum,
        changenumber,
        data,
        setdata,
        deletebyid,
        increment,
        decrement,
        total,
        setTotal,
        count,
        setCount,
        total,
        setTotal,
        newdata,
        lasttotal,
        findTotalAmount,
        

    };
    return (
        <AppContext.Provider value={{statemanagement}}>
        {children}
        </AppContext.Provider>
    )
}



   



