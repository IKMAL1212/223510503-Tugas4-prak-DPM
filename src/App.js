import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Scoreboard from './components/Scoreboard';

const App = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const incrementScoreA = () => {
    setScoreA(prevScore => prevScore + 1);
  };

  const decrementScoreA = () => {
    setScoreA(prevScore => Math.max(prevScore - 1, 0));
  };

  const incrementScoreB = () => {
    setScoreB(prevScore => prevScore + 1);
  };

  const decrementScoreB = () => {
    setScoreB(prevScore => Math.max(prevScore - 1, 0));
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <Scoreboard
        teamA="Team A"
        teamB="Team B"
        scoreA={scoreA}
        scoreB={scoreB}
        incrementScoreA={incrementScoreA}
        decrementScoreA={decrementScoreA}
        incrementScoreB={incrementScoreB}
        decrementScoreB={decrementScoreB}
        resetScores={resetScores}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default App;
