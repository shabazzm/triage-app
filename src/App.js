//import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import { StartScreen } from './screens/StartScreen';
import { AcuityScreenOne } from './screens/AcuityScreenOne';
import { AcuityScreenTwo } from './screens/AcuityScreenTwo';
import { AcuityScreenThree } from './screens/AcuityScreenThree';
import { AcuityScreenFour } from './screens/AcuityScreenFour';
import { AcuityScreenFive } from './screens/AcuityScreenFive';
import { AgeScreen } from './screens/AgeScreen';
import {HighRiskScreen} from './screens/HighRiskScreen';
import { ResourceScreen } from './screens/ResourceScreen';
import {VitalScreen} from './screens/VitalScreen';

function App() {
  return (
      
      <div className="App">
      
        <Routes>
          <Route  path="/" element={<StartScreen />}/>
          <Route  path="/AcuityScreenOne" element={<AcuityScreenOne />}/>
          <Route  path="/AcuityScreenTwo" element={<AcuityScreenTwo />}/>
          <Route  path="/AcuityScreenThree" element={<AcuityScreenThree />}/>
          <Route  path="/AcuityScreenFour" element={<AcuityScreenFour />}/>
          <Route  path="/AcuityScreenFive" element={<AcuityScreenFive />}/>
          <Route  path="/AgeScreen" element={<AgeScreen />}/>
          <Route  path="/HighRiskScreen" element={<HighRiskScreen />}/>
          <Route  path="/ResourceScreen" element={<ResourceScreen />}/>
          <Route  path ="/VitalScreen" element={<VitalScreen />}/>
          

          
            

          
        </Routes>
        
      </div>
        
  );
}

export default App;
