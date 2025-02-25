import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UIpage from './Components/UIpage';
import Loginform from './Components/Loginform';
import Home from './Components/Home';
import Domain from './Components/Domain';
import Register from './Components/Register';
import Pythoncourse from './Components/Roadmap/Pythoncourse';
import Javacourse from './Components/Roadmap/Javacourse';
import AICourse from './Components/Roadmap/AICourse';
import ReactJSCourse from './Components/Roadmap/ReactJSCourse';
import WebDevelopmentCourse from './Components/Roadmap/WebDevelopmentCourse';
import MachineLearningcourse from './Components/Roadmap/MachineLearningcourse';
import Croadmap from './Components/Roadmap/Croadmap';
import SpringCourse from './Components/Roadmap/SpringCourse';
import CPlusPlusCourse from './Components/Roadmap/CPlusPlusCourse';
import DSACourse from './Components/Roadmap/DSACourse';
import NLPCourse from './Components/Roadmap/NLPCourse';
import DevOpsCourse from './Components/Roadmap/DevOpsCourse';
import Congratulations from './Components/Congratulations';
import Groupcombo from './Components/Groupcombo';
import About from './Components/About';
import Services from './Components/Services';
import Chatting from './Components/Chatting';
import ChatRoom from './Components/ChatRoom';  
import Chatbot from './Components/Chatbot';
import Quiz from './Components/Quiz';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/uipage" />} />
          <Route path="/uipage" element={<UIpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Loginform />} />
          <Route path="/home" element={<Home />} />
          <Route path="/domain" element={<Domain />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pythoncourse" element={<Pythoncourse />} />
          <Route path="/Javacourse" element={<Javacourse />} />
          <Route path="/AICourse" element={<AICourse />} />
          <Route path="/ReactJSCourse" element={<ReactJSCourse />} />
          <Route path="/MachineLearningcourse" element={<MachineLearningcourse />} />
          <Route path="/croadmap" element={<Croadmap />} />
          <Route path="/SpringCourse" element={<SpringCourse />} />
          <Route path="/CPlusPlusCourse" element={<CPlusPlusCourse />} />
          <Route path="/DSACourse" element={<DSACourse/>} />
          <Route path="/NLPCourse" element={<NLPCourse/>} />
          <Route path="/DevOpsCourse" element={<DevOpsCourse/>} />
          <Route path="/WebDevelopmentCourse" element={<WebDevelopmentCourse />} />
          <Route path="/congratulations" element={<Congratulations />} />
          <Route path="/groups" element={<Groupcombo />} />
          <Route path="/chatting" element={<Chatting />} />
          {/*<Route path="/chatting/:course" element={<Chatting/>}/>*/}
          <Route path="/chatRoom" element={<ChatRoom />} /> 
          <Route path="/chatbot" element={<Chatbot/>} />
          <Route path="/quiz" element={<Quiz/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;