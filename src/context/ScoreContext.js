import React, { useState } from 'react';

const ScoreContext = React.createContext();

export const ScoreProvider = ({ children }) => {
    const [totalScore, setTotalScore] = useState(0);
    const [totalCoursePar, setTotalCoursePar] = useState(0);
    const [roundType, setRoundType] = useState();
    const [totalRounds, setTotalRounds] = useState([]);

    // testing
    const [totalScoreTest, setTotalScoreTest] = useState(0);
    const [toParTest, setToParTest] = useState(0);

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
        setTotalScoreTest(total);
    };

    const getToPar = () => {
        let total = 0;

        totalRounds.forEach((round) => {
            total = total + (parseInt(round.score) - parseInt(round.par));
        });
        setToParTest(total);
    };

    const goToPreviousHole = () => {
        setTotalRounds(totalRounds.slice(0, -1));
    };

    return (
        <ScoreContext.Provider
            value={{
                totalScore,
                totalCoursePar,
                goToPreviousHole,
                nextHole,
                submitRoundType,
                roundType,
                totalRounds,
                totalScoreTest,
                getTotalRoundScores,
                getToPar,
                toParTest,
            }}
        >
            {children}
        </ScoreContext.Provider>
    );
};

export default ScoreContext;
