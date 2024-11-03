import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderList from './components/OrderList';
import About from './components/About';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import { FC, useState } from 'react';
import ECommDash from './components/ECommDash';

const App:FC = () => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true)
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false)
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

    return (
        <Router>
            <div className="flex flex-col min-h-screen text-black dark:text-white text-sm dark:bg-black">
                <Header setLeftSidebarOpen={setLeftSidebarOpen} leftSidebarOpen={leftSidebarOpen} setRightSidebarOpen={setRightSidebarOpen} rightSidebarOpen={rightSidebarOpen} darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
                <div className="flex flex-grow">
                    <LeftSidebar openBar={leftSidebarOpen} darkTheme={darkTheme}/>
                    <main className={`flex-grow p-6 mt-24 main-transition  ${leftSidebarOpen ? "ml-52" : "ml-0"} ${rightSidebarOpen ? "mr-72" : "mr-0"}`}>
                        <Routes>
                            <Route path="/" element={<ECommDash darkTheme={darkTheme} />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </main>
                    <RightSidebar rightSidebarOpen={rightSidebarOpen}/>
                </div>
            </div>
        </Router>
    );
};

export default App;
