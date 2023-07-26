import { useState } from "react";

const Display = ({ title }) => <h1>{title}</h1>;

const Anecdote = ({ anecdote, votes }) => {
  return (
    <>
      <p>{anecdote}</p>
      <p>{votes != 1 ? "has " + votes + " votes" : "has " + votes + " vote"}</p>
    </>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const headerOne = "Anecdote of the day";
  const headerTwo = "Anecdote with the most votes";
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  // return length of array and generate empty array
  const array_length = anecdotes.length;
  const initialVotes = new Array(array_length).fill(0);

  // set states for selecting anecdote and tracking votes
  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState(initialVotes);

  // generate random integer using Math.floor function
  function getRandomInt(max_value) {
    return Math.floor(Math.random() * max_value);
  }

  // use map to handle vote count increase
  function handleVoteIncrement(index) {
    const nextVote = votes.map((v, i) => {
      if (i == index) {
        return v + 1;
      } else {
        return v;
      }
    });
    setVote(nextVote);
  }

  // return index in votes array of highest value
  const max = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <Display title={headerOne} />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={() => handleVoteIncrement(selected)} text="Vote" />
      <Button
        onClick={() => setSelected(getRandomInt(array_length))}
        text="Next anecdote"
      />
      <Display title={headerTwo} />
      <Anecdote anecdote={anecdotes[max]} votes={votes[max]} />
    </div>
  );
};

export default App;
