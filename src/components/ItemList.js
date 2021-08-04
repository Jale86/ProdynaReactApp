import React, { useState,useEffect } from "react";
//import axios from "axios";
//import Accordion from 'react-bootstrap/Accordion'
//import AddItem from "./AddItem";
import ItemAccordion from "./ItemAccordion";

const ItemList = (props) =>{
    console.log(props);

    const renderItemList = props.items.map((item) => {
        return (
          <ItemAccordion item={item} key={item.id}/>
        );
      });

    // const baseURL = "http://jsonplaceholder.typicode.com/posts";

    // const [items, setItemData] = useState([]);


    // useEffect(() =>{
    //     axios.get(baseURL).then((response) =>{
    //         setItemData(response.data)
    //     });
    // }, []);

    // useEffect(() => {
       
    //     const article = { title: 'React Hooks POST Request Example' };
    //     axios.post(baseURL, article)
    //         .then(response => setArticleId(response.data.id));
    // }, []);

    // const addItemHandler = (item) => {
    //     console.log(items);
    //     setItemData([...items, { id:"", ...item }]);
    //   };

    // const addItemHandler = async (item) => {
    //     const request = {
    //         id: "",
    //         ...items,
    //     };
    //     const response = axios.get(baseURL,request);
    //     console.log(items);
    //     setItemData([...items, response.data]);
    //   };

    // const allItems = items.map(item=>{
    //     return (
        
    //         <Accordion >
    //         <Accordion.Item  eventKey="{item.id}">
    //           <Accordion.Header>{item.title}</Accordion.Header>
    //           <Accordion.Body>
    //              {item.body}
    //           </Accordion.Body>
    //         </Accordion.Item>  
    //       </Accordion>
       
           
    //     )
    // })

    return(
       <div className="container-fluid mt-3">   
           {renderItemList}           
                      
       </div>
    )
}

export default ItemList;