import React, { useRef } from "react";
//import axios from "axios";
//import Accordion from 'react-bootstrap/Accordion'
//import AddItem from "./AddItem";
import ItemAccordion from "./ItemAccordion";

const ItemList = (props) =>{
    console.log(props);

    const inputEl = useRef("");
    
    const deleteItem =(id) =>{
        props.deleteItem(id);
    }

    const renderItemList = props.items.map((item) => {
        return (
            <div>
                 <h3 className="mt-3">Items List</h3>  
                 <ItemAccordion deleteItem={deleteItem} item={item} key={item.id}/> 
            </div>
         
        );
      });

     const getSearchTerm = () =>{
         props.searchKeyword(inputEl.current.value)
       
     }

    // const baseURL = "http://jsonplaceholder.typicode.com/posts";

    // const [items, setItemData] = useState([]);


    // useEffect(() =>{
    //     axios.get(baseURL).then((response) =>{
    //         setItemData(response.data)
    //     });
    // }, []);


    // const addItemHandler = (item) => {
    //     console.log(items);
    //     setItemData([...items, { id:"", ...item }]);
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
            <div className="search">
                <input 
                ref={inputEl}
                type="text" 
                placeholder="Search item" 
                value={props.searchTerm} 
                onChange={getSearchTerm}/>
            </div>

          
           {renderItemList}           
                      
       </div>
    )
}

export default ItemList;