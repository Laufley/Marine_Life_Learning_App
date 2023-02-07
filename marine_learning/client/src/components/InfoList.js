import React, {useState} from 'react'
import InfoItem from './InfoItem'



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
        <>
        <form>
            <input type="text" placeholder="Search for ..." value={filter} onChange={handleChange}/>
        </form>
        <form>
            <select onChange={handleSelect}>
                <option value="" disabled selected>Sort by Category</option>
                <option value="">All Categories</option>
                <option value="pollutants">Pollutants</option>
                <option value="marine life">Marine Life</option>
                <option value="coral reefs">Coral Reefs</option>
                <option value="habitats">Habitats</option>
            </select>
        </form>
        <ul>
            {mappedMarineInfo}
        </ul>
        <div>
            {filterCount.length === 20 ? <a href='/quizz'>Test your knowledge!</a> : <p>Read all the info to unlock the quiz...!</p>}
        </div>

        
        
        </>
    )
}

export default InfoList

