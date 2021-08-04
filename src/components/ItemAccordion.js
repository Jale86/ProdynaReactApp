import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const ItemAccordion = (props) => {

    const deleteItem =(id) =>{
        props.deleteItem(id);
    }

    return (
    
        <Accordion >
            <Accordion.Item  eventKey="{props.item.id}">
            <Accordion.Header>{props.item.title}</Accordion.Header>
            <Accordion.Body>
                {props.item.body}
            </Accordion.Body>
            <button onClick={()=>deleteItem(props.item.id)} className="btn btn-warning">Remove from list</button>
            </Accordion.Item>  
        </Accordion>
    )
}

export default ItemAccordion;