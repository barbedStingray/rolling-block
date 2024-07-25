import './App.css';
import RollBox from './RollBox';

function App() {

  const ultimateShowdown = ['this', 'is', 'the', 'ultimate', 'showdown', 'of', 'ultimate', 'destiny', 'only', 'one', 'will', 'survive', 'wonder', 'who', 'itll', 'be']

  return (
    <div className="App">
      <h1>Rolling Block</h1>
      <div className='grid'>
        {ultimateShowdown.map((lyric, index) => (
          <RollBox key={index} lyric={lyric} />
        ))}
      </div>
    </div>
  );
}

export default App;
