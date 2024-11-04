import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import { FC, useState } from 'react';
import OrderList from './components/OrderList';
import Header from './components/Header';
import ECommDash from './components/ECommDash';

const App: FC = () => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [element, setElement] = useState(1);

  const handleButtonClick = () => {
    setElement(2);
  };

  return (
    <Router>
      <div className={`flex flex-col min-h-screen text-black dark:text-white text-sm dark:bg-black`}>
        <Header
          setLeftSidebarOpen={setLeftSidebarOpen}
          leftSidebarOpen={leftSidebarOpen}
          setRightSidebarOpen={setRightSidebarOpen}
          rightSidebarOpen={rightSidebarOpen}
        />
        <div className="flex flex-grow">
          <LeftSidebar openBar={leftSidebarOpen} />
          <main className={`flex-grow p-6 mt-24 main-transition ${leftSidebarOpen ? 'ml-52' : 'ml-0'} ${rightSidebarOpen ? 'mr-72' : 'mr-0'}`}>
            <button onClick={handleButtonClick} className="px-2">
              (Click here To go to order page)
            </button>
            <Routes>
              {element ===1 ?<Route path="/" element={<ECommDash />} /> : <Route path="/" element={<OrderList/>} />}
            </Routes>
          </main>
          <RightSidebar rightSidebarOpen={rightSidebarOpen} setRightSidebarOpen={setRightSidebarOpen} />
        </div>
      </div>
    </Router>
  );
};

export default App;
