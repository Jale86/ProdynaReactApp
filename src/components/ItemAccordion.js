import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const ItemAccordion = (props) => {

    return (
    
        <Accordion >
            <Accordion.Item  eventKey="{props.item.id}">
            <Accordion.Header>{props.item.title}</Accordion.Header>
            <Accordion.Body>
                {props.item.body}
            </Accordion.Body>
            </Accordion.Item>  
        </Accordion>
    )
}

export default ItemAccordion;