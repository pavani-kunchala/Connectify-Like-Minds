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
import Groups from './Components/Groups'; 
import ChatRoom from './Components/ChatRoom'; 
import Chatbot from './Components/Chatbot';
import QuizSelection from './Components/QuizSelection';
import Quiz from './Components/Quiz';

//follows the path as small letters with no space between

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
          <Route path="/courses" element={<Domain />} />
          <Route path="/c" element={<Croadmap />} />
          <Route path="/java" element={<Javacourse />} />
          <Route path="/python" element={<Pythoncourse />} />
          <Route path="/ai" element={<AICourse />} />
          <Route path="/reactjs" element={<ReactJSCourse />} />
          <Route path="/machinelearning" element={<MachineLearningcourse />} />
          <Route path="/springboot" element={<SpringCourse />} />
          <Route path="/cplusplus" element={<CPlusPlusCourse />} />
          <Route path="/dsa" element={<DSACourse/>} />
          <Route path="/nlp" element={<NLPCourse/>} />
          <Route path="/devops" element={<DevOpsCourse/>} />
          <Route path="/webdevelopment" element={<WebDevelopmentCourse />} />
          <Route path="/register" element={<Register />} />
          <Route path="/congratulations" element={<Congratulations />} />
          <Route path="/groupscombo" element={<Groupcombo />} />
          <Route path="/chatting" element={<Chatting />} />
          <Route path="chatrooms" element={<Groups />} />
          <Route path="/chatrooms/:room" element={<ChatRoom />} />
          <Route path="/chatbot" element={<Chatbot/>} />
          <Route path="/quiz" element={<QuizSelection />} />  
          <Route path="/quiz/:course" element={<Quiz />} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;