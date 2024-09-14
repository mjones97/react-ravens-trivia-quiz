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
        return <div className='text-center p-4'>No questions available for this team.</div>;
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
        <div className='p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg mt-10'>
            {!isQuizFinished ? (
                <>
                    <h2 className='text-3xl font-semibold mb-4'>{question.text}</h2>
                    <div className="space-y-2 mb-4">
                        {question.answers.map((answer, index) => (
                            <button
                                key={index}
                                className={`block w-full p-3 rounded-lg border border-gray-300 ${selectedAnswer === answer ? 'bg-blue-600 text-white' : 'bg-gray-100'} transition-colors duration-300 hover:bg-blue-500 hover:text-white`}
                                onClick={() => handleAnswerClick(answer)}
                            >
                                {answer}
                            </button>
                        ))}
                    </div>
                    <button
                        className='bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300'
                        onClick={handleNextQuestion}
                    >
                        {currentQuestionIndex < teamQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    </button>
                </>
            ) : (
                <div className='mt-6 text-center'>
                    <h3 className='text-2xl font-semibold mb-4'>Your Score: {score}/{teamQuestions.length}</h3>
                    <div className='flex justify-center space-x-4'>
                        <button
                            className='bg-green-600 text-white p-3 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300'
                            onClick={handleRestartQuiz}
                        >
                            Restart Quiz
                        </button>
                        <button
                            className='bg-gray-600 text-white p-3 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300'
                            onClick={handleBackToHome}
                        >
                            Back to Homepage
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;