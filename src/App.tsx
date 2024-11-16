import './App.css';
import {  Routes, Route, useLocation, Location, Navigate } from 'react-router-dom';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import { FC, useState } from 'react';
import OrderList from './components/OrderList';
import Header from './components/Header';
import ECommDash from './components/ECommDash';

const App: FC = () => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(window.screen.availWidth>1120);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [element, setElement] = useState(1);

  const location:Location = useLocation()

  const handleButtonClick = () => {
    setElement(prevElem=>prevElem===1?2:1);
  };

  return (
      <div className={`flex flex-col min-h-screen text-black dark:text-white text-sm dark:bg-black`}>
        <Header
          setLeftSidebarOpen={setLeftSidebarOpen}
          leftSidebarOpen={leftSidebarOpen}
          setRightSidebarOpen={setRightSidebarOpen}
          rightSidebarOpen={rightSidebarOpen}
        />
        <div className="flex flex-grow">
          <LeftSidebar openBar={leftSidebarOpen} location = {location} setLeftSidebarOpen={setLeftSidebarOpen} />
          <main className={`${(leftSidebarOpen || rightSidebarOpen) && "hidden"} sm:block flex-grow p-6 mt-24 main-transition ${(leftSidebarOpen && window.screen.availWidth>1120) ? 'ml-52' : 'ml-0'} ${(rightSidebarOpen && window.screen.availWidth>1120) ? 'mr-72' : 'mr-0'} w-[100vh] overflow-hidden`}>
            <button onClick={handleButtonClick} className="px-2">
              (Click here To go to {element===2?"Dashboard":"order"} page)
            </button>
            <Routes>
            <Route path="/" element={<Navigate to="/Dashboard/Default" replace/>} /> 
              {element ===1 ?<Route path="/Dashboard/Default" element={<ECommDash  setElement={setElement}/>} /> : <Route path="/Dashboard/Default" element={<OrderList/>} />}
            <Route path="*" element={<div>No Page Found</div>} /> 
            </Routes>
          </main>
          <RightSidebar rightSidebarOpen={rightSidebarOpen} setRightSidebarOpen={setRightSidebarOpen} />
        </div>
      </div>
  );
};

export default App;
