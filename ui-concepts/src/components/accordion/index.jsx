// Single Accordion
import data from "./data";
import { useState } from "react";
import './styles.css';


export default function Accordion() {
    const [selected, setSelected] = useState(null);

function handleSingleSelection(getCurrentId){
    setSelected(getCurrentId === selected ? null : getCurrentId);
}

    return (
        <div className="wrapper">
            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map((dataItem) =>
                        <div className="item">
                            <div onClick={()=>handleSingleSelection(dataItem.id)} className="subject">
                                <h3>{dataItem.subject}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id ?
                                <div className="content">{dataItem.chapter} </div>
                                : null
                            }
                        </div>
                    )) : (<div> No data found!</div>
                )}
            </div>
        </div>);
}