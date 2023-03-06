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
import {VitalScreen1} from './screens/VitalScreen1';
import {VitalScreen2} from './screens/VitalScreen2';
import {VitalScreen3} from './screens/VitalScreen3';
import {VitalScreen4} from './screens/VitalScreen4';
import { DecisionHigherAcuityScreen } from './screens/DescionHigherAcuityScreen';

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
          <Route  path ="/VitalScreen1" element={<VitalScreen1 />}/>
          <Route  path ="/VitalScreen2" element={<VitalScreen2 />}/>
          <Route  path ="/VitalScreen3" element={<VitalScreen3 />}/>
          <Route  path ="/VitalScreen4" element={<VitalScreen4 />}/>
          <Route  path="/DecisionHigherAcuityScreen" element={<DecisionHigherAcuityScreen />}/>
          

          

          
            

          
        </Routes>
        
      </div>
        
  );
}

export default App;
