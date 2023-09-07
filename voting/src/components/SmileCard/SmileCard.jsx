
import './smileCard.css'

const SmileCard = ({ smile, votes, onVote }) => {
    return (
      <div className="smile-block">
        <div className="smile">{smile}</div>
        <p>Голосів: {votes}</p>
        <button onClick={onVote}>Голосувати</button>
      </div>
    );
  };

export default SmileCard
