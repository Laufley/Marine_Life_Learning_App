import React from 'react'
import './InfoItem.css'


const InfoItem = ({item, changeCounter}) => {

    const handleChange = (evt) => {
        let checkedItem = item.isChecked
        checkedItem = evt.target.checked
        changeCounter(checkedItem, {
            _id: item._id,
            category: item.category,
            name: item.name,
            description: item.description,
            threats: item.threats,
            examples: item.examples,
            picture: item.picture,
            url: item.url,
            isChecked: checkedItem,
            questions: item.questions
        })
    }

    return (
        <li id="infoLi">
            <div id="bigDiv">
                <div>
                    <h2 id="categoryTitle">{item.category} </h2>
                    <p><b>Name: </b>{item.name} </p>
                    <p><b>Description: </b>{item.description} </p>
                    {item.category==="Pollutants" ? <p><b>Solutions: </b>{item.threats}</p> : <p><b>Threats: </b>{item.threats} </p>}
                    <p><b>Examples: </b>{item.examples} </p>   
                    <br></br>        
                    <a id='link-style' href={item.url} target='blank'>  🔎 Further reading</a>
                </div>
                <div>
                    <img id="info-image" src={item.picture}/>
                </div>
            </div>
            <div id="checkboxDiv">
                <input id="checkboxId" type="checkbox" name='checkbox' checked={item.isChecked} onChange={handleChange}/>
                <label htmlFor='checkbox'>Done!</label>
            </div>
        </li>
    )
}

export default InfoItem