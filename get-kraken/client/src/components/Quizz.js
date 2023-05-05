import React, {useState, useEffect} from 'react'
import Scores from './Scores'
import './Quizz.css'

const Quizz = ({listOfMarineInfo,listOfScoreData,updateCurrentScore,randomiseValue,randomInt}) => {

    const handleRefreshClick = ()=>{
        randomInt()
    }

    const handleClick=(currentQuestion,val)=>{
        let buttonValue=val
        if(buttonValue==="true"){
            buttonValue=true
        }
        else{
            buttonValue=false
        }
        if(currentQuestion.correct_answer===buttonValue){
            const newWins=listOfScoreData[0].wins +1
            const newTotalPlayed=listOfScoreData[0].total_played+1
            updateCurrentScore({
                _id:listOfScoreData[0]._id,
                wins:newWins,
                losses:listOfScoreData[0].losses,
                total_played:newTotalPlayed
            })
            return(
                null
                // alert("Whale done , you got that right!!")
            )
        }
        else{
            const newLosses=listOfScoreData[0].losses +1
            const newTotalPlayed=listOfScoreData[0].total_played+1
            updateCurrentScore({
                _id:listOfScoreData[0]._id,
                wins:listOfScoreData[0].wins,
                losses:newLosses,
                total_played:newTotalPlayed
            })
            return(
                null
                // alert("You got this wrong, but dont be crabby")
            )
        }
    }

    const [selectedOption, setSelectedOption] = useState(null);

    const eachQuestion = listOfMarineInfo.map((item) => {
        const variableToPassIn=item.questions[randomiseValue]
        return (
            <li id='question-li'>
                <p id='questions-p'>{item.questions[randomiseValue].question}</p>
                <div id='buttons'>
                    <button id='button1' onClick={()=>handleClick(variableToPassIn,'true')}>True</button>
                    <button id='button1' onClick={()=>handleClick(variableToPassIn,'false')}>False</button>
                </div>
            </li>
        )
    })


    return (
        <section id='quizz-body'>
            <div id='questions'>
                <button className='randomise-button' onClick={handleRefreshClick}>Randomise Questions!</button>
                <ul id='questions-ul'>
                    {eachQuestion}
                </ul>
                <button className='randomise-button' onClick={handleRefreshClick}>Randomise Questions!</button>
            </div>
            <div id='scores'>
                {listOfScoreData.length && <Scores listOfScoreData={listOfScoreData}/>}
                
            </div>

        </section>

    )
}

export default Quizz



    