import React from "react";
// import ItemList from "./components/ItemList";
//import Item from "./components/Item";
import ItemList from "./components/ItemList";
import Navbar from "./components/Navbar";
// import Navbar from "./components/Navbar";
import { useState,useEffect } from "react";
// import Accordion from 'react-bootstrap/Accordion';
import api from "./api/itemsApi";
import AddItem from "./components/AddItem";
import axios from "axios";
import Loading from './components/Loading';

const App = () => {
    const LOCAL_STORAGE_KEY = "contacts";
   
    const baseURL = "http://jsonplaceholder.typicode.com/posts";

    const [items, setItemData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    // useEffect(() => {
    //     setTimeout(() => {
    //       setIsLoading(false);
    //     }, 2500);
    //   })

     //Izvlacenje postova iz fila
     useEffect(() =>{
        axios.get(baseURL).then((response) =>{
            setIsLoading(false);
            setItemData(response.data)
        });
    }, []);

    // Dodavanje novog posta u lisu start
    const addItemHandler = (item) => {
        console.log(items);
        setItemData([...items, { id:"", ...item }]);
      };

    const deleteItem = (id) =>{
     const newCopyItem = items.filter(item =>item.id !== id);
    setItemData(newCopyItem);
    };

    const searchHandler = (searchTerm) => {
        setSearchTerm(searchTerm);
        if(searchTerm !==""){
            const newItemList = items.filter((item)=>{
                return Object.values(item).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
            });
            setSearchResults(newItemList);
        } else{
            setSearchResults(items);
        }
    };
    useEffect(() => {  
        const retriveItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retriveItems) setItemData(retriveItems);
      }, []);

     useEffect(() => {  
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(items));
     }, [items]);

    

    // const retrieveItems = async () => {
    //     const response = await api;
    //     return response.data;
    // };

     // useEffect(() => {
    //      const getAllItems = async () => {
    //       const allItems = await retrieveItems();
    //       if (allItems) setItemData(allItems);
    //     };
    
    //     getAllItems();
    //   }, []);

    // function addItemHandler(item) {
    //     axios
    //       .post(baseURL, {
    //         title: "",
    //         body: ""
    //       })
    //       .then((response) => {
    //         setItemData(response.data);
    //       });
    //   }
    
   

    // const addItemHandler = async (item) => {
    //     const request = {
    //         id: "",
    //         ...items,
    //     };
    //     const response = axios.post(baseURL,request);
    //     console.log(items);
    //     setItemData([...items, response.data]); 

    //     addItemHandler();
    // };

    // useEffect(() => {  
    //     addItemHandler();
    // }, [items]);


    return (

        <div className="App">
          <Navbar/>

          <AddItem addItemHandler={addItemHandler}/>

            {isLoading==true ?  <Loading/> :
            <ItemList deleteItem={deleteItem} items={searchTerm.length < 1 ? items : searchResults} 
            searchTerm={searchTerm} searchKeyword={searchHandler}/> 
            }
        </div>

    )
   
}

export default App;