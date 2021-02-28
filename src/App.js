import './App.css';
function App() {
  return (
   <body>
<div class="container">
    <header class="row">
        <h1 class="col-8">City Name </h1>
        <div class="buttons col-4">
            <button class="search-button"><i class="fas fa-search"></i></button>
            <button class="farenheit"> °F </button>
            <button class="celsius"> °C </button>
        </div>
    </header>
    <main>
        <div class="today new-day row">
            <div class="far-left col-4">
                <h2>
                    Today
                </h2>
                <h3>
                    Time
                </h3>
            </div>
            <div class="icon col-4">
                ☔️
            </div>
            <div class="forcast col-4">
                <ul>
                    <li>Temp</li>
                    <li>Description</li>
                    <li>Humidity</li>
                    <li>Wind</li>
                </ul>
            </div>
        </div>
        <div class="tomorrow new-day row">
            <div class="far-left col-4">
                <h2>
                    Tomorrow
                </h2>
                <h3>
                    Time
                </h3>
            </div>
            <div class="icon col-4">
                ☔️
            </div>
            <div class="forcast col-4">
                <ul>
                    <li>Temp</li>
                    <li>Description</li>
                    <li>Humidity</li>
                    <li>Wind</li>
                </ul>
            </div>
        </div>
        <div class="day-after-tomorrow new-day row">
            <div class="far-left col-4">
                <h2>
                    Day After Tomorrow
                </h2>
                <h3>
                    Time
                </h3>
            </div>
            <div class="icon col-4">
                ☔️
            </div>
            <div class="forcast col-4">
                <ul>
                    <li>Temp</li>
                    <li>Description</li>
                    <li>Humidity</li>
                    <li>Wind</li>
                </ul>
            </div>
        </div>
        <div class="day-after-that new-day row">
            <div class="far-left col-4">
                <h2>
                    Day After That
                </h2>
                <h3>
                    Time
                </h3>
            </div>
            <div class="icon col-4">
                ☔️
            </div>
            <div class="forcast col-4">
                <ul>
                    <li>Temp</li>
                    <li>Description</li>
                    <li>Humidity</li>
                    <li>Wind</li>
                </ul>
            </div>
        </div>
    </main>
    <footer>
        <h4>This website was coded by <a href="https://www.lauraquann.com" target="_blank">Laura Quann</a>.</h4>
    </footer>
</div>
</body>
  );
}

export default App;
