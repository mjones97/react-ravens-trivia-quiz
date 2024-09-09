import React, { useState } from 'react'
import Question from './Question';
import Result from './Result';

const Quiz = () => {
    const [questions] = useState([
        { question: "When were the Ravens founded?", answers: ["1967", "1996", "2006", "1987"], correctAnswer: "1996" },
        { question: "Who was the first player ever drafted by the Ravens?", answers: ["Johnny Unitas", "Ray Lewis", "Ed Reed", "Jonathan Ogden"], correctAnswer: "Jonathan Ogden" },
        { question: "Who is the current head coach of the Ravens?", answers: ["Mike Tomlin", "John Madden", "John Harbaugh", "Brian Billick"], correctAnswer: "John Harbaugh" },
        { question: "Art Modell moved his team from which city to Baltimore to become the Ravens?", answers: ["Cleveland", "Los Angeles", "Oakland", "Orlando"], correctAnswer: "Cleveland" },
        { question: "What was the first stadium that the Ravens called home?", answers: ["Baltimore Stadium", "Heinz Field", "M&T Bank Stadium", "Memorial Stadium"], correctAnswer: "Memorial Stadium" },
        { question: "What team did the Baltimore Ravens, originate from?", answers: ["Houston Oilers", "New England Patriots", "Cleveland Browns", "Miami Dolphins"], correctAnswer: "Cleveland Browns" },
        { question: "In 2004, who did the Ravens original owner Art Modell sell the team to?", answers: ["Ralph Wilson", "Steve Bisciotti", "Jim Irsay", "Robert Kraft"], correctAnswer: "Steve Bisciotti" },
        { question: "What are the two main team colors?", answers: ["Black and Blue", "Black and Orange", "Black and Purple", "Black and Yellow"], correctAnswer: "Black and Purple" },
        { question: "Who was the first head coach of the Ravens?", answers: ["Ted Marchibroda", "Brian Billick", "Art Modell", "John Madden"], correctAnswer: "Ted Marchibroda" },
        { question: "How many rushing yards did Jamal Lewis have in the 2000 Super Bowl season?", answers: ["1,320", "1,462", "1,263", "1,364"], correctAnswer: "1,364" }
    ]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    const handleAnswer = (selectedAnswer) => {
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;

        if (selectedAnswer === correctAnswer) {
            setCorrectAnswerCount(prevCount => prevCount + 1);
        }

        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            } else {
                setQuizFinished(true);
            }
        }, 1000);
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setCorrectAnswerCount(0);
        setQuizFinished(false);
    }

    return (
        <div>
            {quizFinished ? (
                <Result
                    score={correctAnswerCount}
                    total={questions.length}
                    onRestart={restartQuiz}
                />
            ) : (
                <Question
                    question={questions[currentQuestionIndex]}
                    onAnswer={handleAnswer}
                />
            )}
        </div>
    )
}

export default Quiz