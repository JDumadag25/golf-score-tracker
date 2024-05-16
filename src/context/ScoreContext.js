import React, { useState } from 'react';

const ScoreContext = React.createContext();

export const ScoreProvider = ({ children }) => {
    const [hole, setHole] = useState(1);
    const [totalScore, setTotalScore] = useState(0);
    const [totalCoursePar, setTotalCoursePar] = useState(0);
    const [toPar, setToPar] = useState(0);
    const [roundType, setRoundType] = useState();
    const [totalRounds, setTotalRounds] = useState([]);

    // testing
    const [totalScoreTest, setTotalScoreTest] = useState(0);

    const nextHole = (score, par) => {
        // setHole(hole + 1);
        // setTotalCoursePar(totalCoursePar + parseInt(par));
        // setTotalScore(totalScore + parseInt(score));
        // setToPar(toPar + (parseInt(score) - parseInt(par)));
        setTotalRounds((prevArray) => [...prevArray, { score, par }]);
    };

    const submitRoundType = (type) => {
        setRoundType(type);
    };

    const getTotalRoundScores = () => {
        console.log(totalRounds);
        let totalScore = 0;

        totalRounds.forEach((round) => {
            console.log(round);
            total += parseInt(round.score);
        });
        setTotalScoreTest(total);
    };

    return (
        <ScoreContext.Provider
            value={{
                hole,
                totalScore,
                totalCoursePar,
                toPar,
                nextHole,
                submitRoundType,
                roundType,
                totalRounds,
                totalScoreTest,
                getTotalRoundScores,
            }}
        >
            {children}
        </ScoreContext.Provider>
    );
};

export default ScoreContext;
