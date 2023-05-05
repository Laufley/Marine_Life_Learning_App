import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import InfoList from '../components/InfoList'
import { getMarineInfo, getOneMarineItem, updateOneMarineItem } from '../components/MarineService'
import { getScoreData, updateScore } from '../components/QuizzService'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Quizz from '../components/Quizz'
import HomePage from '../components/HomePage'


const MainContainer = () => {
    console.log('krak-rators: Indira BG , John P, Laura McG, Liam K')

    const[listOfMarineInfo, setListOfMarineInfo] = useState([])
    const[listOfScoreData,setScoreData]=useState([])
    const [filterCount, setFilterCount] = useState ([])
    // const [filteredMarineList,setFilteredList]=useState([])
    const [filter,setFilter]=useState("")
    const [selectedCategory,setSelectCategory]=useState("")
    const [randomiseValue,setRandomiseValue]=useState(0)


    useEffect(() => {
        getMarineInfo()
        .then((allMarineInfo) =>{
            setListOfMarineInfo(allMarineInfo)
            setFilterCount(allMarineInfo.filter(item => item.isChecked === true))
        })
        getScoreData()
        .then((allScoreData)=>{
            setScoreData(allScoreData)
        })
    }, [])

    const changeCounter = (isChecked, item) => {
        updateOneMarineItem(item)
        const updateItemIndex = listOfMarineInfo.findIndex(marineItem => marineItem._id === item._id)
        const updateMarineInfo = [...listOfMarineInfo]
        updateMarineInfo [updateItemIndex] = item
        setListOfMarineInfo(updateMarineInfo)
        const listOfFilteredInfo = updateMarineInfo.filter(item => item.isChecked === true)
        setFilterCount(listOfFilteredInfo)
    }
    const updateCurrentScore=(score)=>{
        updateScore(score)
        const updatedScoreIndex=listOfScoreData.findIndex(scoreItem=>scoreItem._id===score._id)
        const updatedScoreData=[...listOfScoreData]
        updatedScoreData[updatedScoreIndex]=score
        setScoreData(updatedScoreData)
    }

    const saveFilteredSearch=(filteredInput)=>{
        setFilter(filteredInput)
    }

    const selectFunction = (category) => {
        const sortCategory=category
        setSelectCategory(sortCategory)        
    };

    const randomInt = () => {
        const min = 1
        const max = 3
        const randomNum= Math.trunc(Math.random()*(max - min) + min)
        setRandomiseValue(randomNum)
    }

    const results=listOfMarineInfo.filter(data=>data.name.toLowerCase().includes(filter)).filter(item => item.category.toLowerCase() === selectedCategory||!selectedCategory)
    return (
        <section id='main-container'>
            <Router>
                <Header/>
                <NavBar/>
                <Routes>
                    <Route exact path='/' element={<HomePage/>}/>
                    <Route path='/modules' exact element={<InfoList listOfMarineInfo ={results}  filter={filter} changeCounter={changeCounter} filterCount={filterCount} saveFilteredSearch={saveFilteredSearch} selectFunction={selectFunction}/>}/>
                    <Route path='/quizz' element={<Quizz listOfMarineInfo={listOfMarineInfo} listOfScoreData={listOfScoreData} updateCurrentScore={updateCurrentScore} randomiseValue={randomiseValue} randomInt={randomInt}/>}/>
                </Routes>
                
            </Router>
        </section>
    )
}
export default MainContainer
