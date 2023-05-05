import React from 'react'
import './Scores.css'

const Scores = ({listOfScoreData}) => {

    return (
        <div id='scores-body'>
        <h2 id='title'>Track your progress</h2>
        <hr id='hr'></hr>
        <p className='answers'>Questions you've answered correctly:</p>
        <p className='number'>{listOfScoreData[0].wins}  🐳done!</p>
        <p className='answers'>Questions you've answered incorrectly:</p> 
        <p className='number'>{listOfScoreData[0].losses} oh 🦀! </p>
        <p className='answers'>Total questions you've answered:</p>
        <p className='number'>{listOfScoreData[0].total_played} !! 🌊</p>
        </div>
    )
}

export default Scores