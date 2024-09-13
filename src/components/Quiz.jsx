import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { questions } from '../questions';

const Quiz = () => {
    const { teamId } = useParams();
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const teamQuestions = questions[teamId];
    if (!teamQuestions) {
        return <div>No questions available for this team.</div>;
    }

    const question = teamQuestions[currentQuestionIndex];

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleNextQuestion = () => {
        if (selectedAnswer === question.correctAnswer) {
            setScore(score + 1);
        }
        setSelectedAnswer('');
        if (currentQuestionIndex < teamQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsQuizFinished(true);
        }
    };

    const handleRestartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer('');
        setIsQuizFinished(false);
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className='p-4'>
            {!isQuizFinished ? (
                <>
                    <h2 className='text-2xl font-bold mb-4'>{question.text}</h2>
                    <div className="mb-4">
                        {question.answers.map((answer, index) => (
                            <button
                                key={index}
                                className={`block w-full p-2 mb-2 rounded ${selectedAnswer === answer ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                onClick={() => handleAnswerClick(answer)}
                            >
                                {answer}
                            </button>
                        ))}
                    </div>
                    <button
                        className='bg-blue-500 text-white p-2 rounded'
                        onClick={handleNextQuestion}
                    >
                        {currentQuestionIndex < teamQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    </button>
                </>
            ) : (
                <div className='mt-4'>
                    <h3 className='text-xl font-semibold'>Your Score: {score}/{teamQuestions.length}</h3>
                    <button
                        className='bg-green-500 text-white p-2 rounded mr-2'
                        onClick={handleRestartQuiz}
                    >
                        Restart Quiz
                    </button>
                    <button
                        className='bg-gray-500 text-white p-2 rounded'
                        onClick={handleBackToHome}
                    >
                        Back to Homepage
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quiz;