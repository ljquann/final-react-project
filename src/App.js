import './App.css';
import Search from "./Search";
import Forecast from "./Forecast";

function App() {
  return (
   <body>
<div className="container">
    <header>
       <Search />
    </header>
    <main>
        <Forecast />
    </main>
    <footer>
        <h4>This website was coded by <a href="https://www.lauraquann.com" target="_blank" rel="noreferrer">Laura Quann</a>.</h4>
    </footer>
</div>
</body>
  );
}

export default App;
