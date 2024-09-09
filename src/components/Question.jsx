import React from 'react'

const Question = ({ question, onAnswer }) => {    
    return (
        <div className='questions-container'>
            <p className='question-text'>{question.question}</p>
            {question.answers.map((answer, index) => (
                <button
                    key={index}
                    className='answer-btn'
                    onClick={() => onAnswer(answer)}
                >
                    {answer}
                </button>
            ))}
        </div>
    )
}

export default Question