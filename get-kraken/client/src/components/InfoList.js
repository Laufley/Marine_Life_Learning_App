import React, {useState} from 'react'
import InfoItem from './InfoItem'
import './InfoList.css'




const InfoList = ({listOfMarineInfo, changeCounter, filterCount,saveFilteredSearch,filter, selectFunction}) => {

    const handleChange=(evt)=>{
        const filterInput=evt.target.value      
        saveFilteredSearch(filterInput)
    }
    const handleSelect=(evt)=>{
        const category=evt.target.value
        selectFunction(category)

    }

    const mappedMarineInfo = listOfMarineInfo.map((item) => {
        return <InfoItem item = {item} key = {item._id} changeCounter={changeCounter}/>
    })


    return (
        <section id='body-list'>
            <div className='go-to-quizz'>
                {filterCount.length === 20 ? <a className='link-to-quizz' href='/quizz'>Test your knowledge!</a> : <p className='text-link-to-quizz'>Read all the info to unlock the quiz...!</p>}
            </div>
            <form id="formId">
                <input id="inputId" type="text" placeholder="Search for the name" value={filter} onChange={handleChange}/>
                <select id="selectId" onChange={handleSelect}>
                    <option value="" disabled selected>Sort by Category</option>
                    <option value="">All Categories</option>
                    <option value="pollutants">Pollutants</option>
                    <option value="marine life">Marine Life</option>
                    <option value="coral reefs">Coral Reefs</option>
                    <option value="habitats">Habitats</option>
                </select>
            </form>
            <ul id="infoUl">
                {mappedMarineInfo}
            </ul>
            <div className='go-to-quizz'>
                {filterCount.length === 20 ? <a className='link-to-quizz' href='/quizz'>Test your knowledge!</a> : <p className='text-link-to-quizz'>Read all the info to unlock the quiz...!</p>}
            </div>
        </section>
    )
}

export default InfoList

