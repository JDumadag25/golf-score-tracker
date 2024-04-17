import React, { useState } from 'react';

const ScoreContext = React.createContext();

export const ScoreProvider = ({ children }) => {
    const [hole, setHole] = useState(1);
    const [totalScore, setTotalScore] = useState(0);
    const [totalCoursePar, setTotalCoursePar] = useState(0);
    const [toPar, setToPar] = useState(0);
    const [roundType, setRoundType] = useState();

    const nextHole = (score, par) => {
        setHole(hole + 1);
        setTotalCoursePar(totalCoursePar + parseInt(par));
        setTotalScore(totalScore + parseInt(score));
        setToPar(toPar + (parseInt(score) - parseInt(par)));
    };

    const submitRoundType = (type) => {
        setRoundType(type);
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
            }}
        >
            {children}
        </ScoreContext.Provider>
    );
};

export default ScoreContext;
