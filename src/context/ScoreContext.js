import React, { useState } from 'react';

const ScoreContext = React.createContext();

// [{"courseName": "Clearview", "totalScore": 17}, {"courseName": "DOUGLASTON", "totalScore": 12}]

export const ScoreProvider = ({ children }) => {
    const [roundType, setRoundType] = useState();
    const [totalRounds, setTotalRounds] = useState([]);
    const [totalScore, setTotalScore] = useState(0);
    const [toPar, setToPar] = useState(0);
    const [scores, setScores] = useState([
        { courseName: 'Clearview', totalScore: 17 },
        { courseName: 'Marine Park', totalScore: 15 },
        { courseName: 'Pebble Beach', totalScore: 12 },
        { courseName: 'Augusta National', totalScore: 12 },
        { courseName: 'Van Courtland', totalScore: 17 },
        { courseName: 'Hilltop', totalScore: 12 },
        { courseName: 'Bally Links', totalScore: 17 },
        { courseName: 'Dyker Heights', totalScore: 12 },
    ]);
    const [courseName, setCourseName] = useState('');

    const nextHole = (score, par) => {
        setTotalRounds((prevArray) => [...prevArray, { score, par }]);
    };

    const submitRoundType = (type) => {
        setRoundType(type);
    };

    const getTotalRoundScores = () => {
        let total = 0;

        totalRounds.forEach((round) => {
            total += parseInt(round.score);
        });
        setTotalScore(total);
    };

    const getToPar = () => {
        let total = 0;

        totalRounds.forEach((round) => {
            total = total + (parseInt(round.score) - parseInt(round.par));
        });
        setToPar(total);
    };

    const goToPreviousHole = () => {
        setTotalRounds(totalRounds.slice(0, -1));
    };

    const endRound = () => {
        setTotalRounds([]);
        setTotalScore(0);
        setToPar(0);
        setRoundType(0);
    };

    const saveScore = () => {
        let finalScore = {
            courseName: courseName,
            totalScore: totalScore,
        };
        setScores((prevArray) => [...prevArray, finalScore]);
        endRound();
    };

    const submitCourseName = (text) => {
        setCourseName(text);
    };

    return (
        <ScoreContext.Provider
            value={{
                goToPreviousHole,
                nextHole,
                submitRoundType,
                roundType,
                totalRounds,
                totalScore,
                getTotalRoundScores,
                getToPar,
                toPar,
                endRound,
                saveScore,
                scores,
                submitCourseName,
                courseName,
            }}
        >
            {children}
        </ScoreContext.Provider>
    );
};

export default ScoreContext;
