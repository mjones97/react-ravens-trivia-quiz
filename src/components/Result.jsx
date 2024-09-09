import React from 'react'

const Result = ({ score, total, onRestart }) => {
    return (
        <div id='result-container'>
            <h2>Quiz Complete</h2>
            <p className='summary'>You answered {score} out of {total} questions correctly.</p>
            <button id='restart-btn' onClick={onRestart}>Restart Quiz</button>
        </div>
    )
}

export default Result