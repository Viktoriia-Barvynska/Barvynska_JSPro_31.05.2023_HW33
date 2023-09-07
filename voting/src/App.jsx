import { useState } from 'react'

import SmileCard from './components/SmileCard/SmileCard';
import ShowResultsButton from './components/ShowResultsButton/ShowResultsButton';

import './App.css'

function App() {
  
  const smiles = ['😊', '🤩', '😍', '😉', '🤗'];
  const [votes, setVotes] = useState(new Array(smiles.length).fill(0));
  const [showResults, setShowResults] = useState(false);
  const [winningSmile, setWinningSmile] = useState('');

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
  };

  const handleShowResults = () => {
    let maxVotes = -1;
    let winningIndex = -1;

    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > maxVotes) {
        maxVotes = votes[i];
        winningIndex = i;
      }
    }

    if (winningIndex === -1) {
      setWinningSmile('Немає переможця');
    }
    else {
      setWinningSmile(smiles[winningIndex]);
    }

    setShowResults(true);
  };

  console.log(votes)
  return (
    <>
    <h1>Голосування за смайлики</h1>
      <div className='app'>
      <div>
        {smiles.map((smile, index) => (
          <SmileCard
            key={index}
            smile={smile}
            votes={votes[index]}
            onVote={() => handleVote(index)}
          />
        ))}
      </div>
      <div>
      <ShowResultsButton
        winningSmile={winningSmile}
        onShowResults={handleShowResults}
        showResults={showResults}
      />
      {showResults && <p>Переможець: {winningSmile}</p>}
      </div>
    </div>
      
    </>
  )
}

export default App


