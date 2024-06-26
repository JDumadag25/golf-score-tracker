import React, { useState } from 'react';

const ScoreContext = React.createContext();

export const ScoreProvider = ({ children }) => {
    const [roundType, setRoundType] = useState();
    const [totalRounds, setTotalRounds] = useState([]);
    const [totalScore, setTotalScore] = useState(0);
    const [toPar, setToPar] = useState(0);

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
            }}
        >
            {children}
        </ScoreContext.Provider>
    );
};

export default ScoreContext;
