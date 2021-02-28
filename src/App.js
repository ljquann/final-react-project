import './App.css';
import Search from "./Search";
import Forecast from "./Forecast";

function App() {
  return (
      <div className="container">
        <header>
          <Search />
        </header>
        <main>
          <Forecast />
        </main>
      <footer>
        <h4>This <a href="https://github.com/ljquann/final-react-project" target="_blank" rel="noreferrer">website </a>was coded by<a href="https://www.lauraquann.com" target="_blank" rel="noreferrer">Laura Quann</a></h4>
      </footer>
    </div>
  );
}

export default App;
