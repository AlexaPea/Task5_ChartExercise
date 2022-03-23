import './App.css';
import {Routes, Route} from 'react-router-dom';
import ChartOne from './components/ChartOne';
import ChartTwo from './components/ChartTwo';
import ChartThree from './components/ChartThree';
import ChartFour from './components/ChartFour';
import ChartFive from './components/ChartFive';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<ChartOne/>}/>
        <Route path='/charttwo' element={<ChartTwo/>}/>
        <Route path='/chartthree' element={<ChartThree/>}/>
        <Route path='/chartfour' element={<ChartFour/>}/>
        <Route path='/chartfive' element={<ChartFive/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
