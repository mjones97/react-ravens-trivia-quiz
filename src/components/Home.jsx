import React from 'react';
import { Link } from 'react-router-dom';
import { teams } from '../teams';

const Home = () => {
    return (
        <div className='p-4'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4'>
                {teams.map((team) => (
                    <Link
                        key={team.id}
                        to={`/quiz/${team.id}`}
                        className='bg-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:bg-gray-300 transition'
                    >
                        <img 
                            src={team.logo} 
                            alt={`${team.name} logo`} 
                            className='w-24 h-24 mb-2'
                        />
                        <span className='text-blue-600'>{team.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;