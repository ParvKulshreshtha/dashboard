import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  
import icon_leftsidebar from '../assets/icon-leftsidebar.png';
import icon_star from '../assets/icon-star.png';
import icon_dark_star from '../assets/icon-dark-star.png';
import icon_search from '../assets/icon-search.png';
import icon_dark_search from '../assets/icon-dark-search.png';
import icon_sun from '../assets/icon-sun.png';
import icon_dark_sun from '../assets/icon-dark-sun.png';
import icon_dark_leftsidebar from '../assets/icon-dark-leftsidebar.png';
import icon_clockcounter from '../assets/icon-clockcounter.png';
import icon_dark_clockcounter from '../assets/icon-dark-clockcounter.png';
import icon_notifs from '../assets/icon-notifs.png';
import icon_dark_notifs from '../assets/icon-dark-notifs.png';
import icon_rightsidebar from '../assets/icon-rightsidebar.png';
import icon_dark_rightsidebar from '../assets/icon-dark-rightsidebar.png';
import { Dispatch, FC, SetStateAction, useEffect } from "react";


interface ComponentInterface {
    leftSidebarOpen:boolean,
    setLeftSidebarOpen:Dispatch<SetStateAction<boolean>>,
    rightSidebarOpen:boolean,
    setRightSidebarOpen:Dispatch<SetStateAction<boolean>>,
    darkTheme:boolean,
    setDarkTheme:Dispatch<SetStateAction<boolean>>
}

  

const Header:FC<ComponentInterface> = ({setLeftSidebarOpen, leftSidebarOpen, setRightSidebarOpen, rightSidebarOpen, darkTheme, setDarkTheme}) => {

    const toggleTheme = () => {
      setDarkTheme((prevTheme) => !prevTheme);
    };
  
    useEffect(() => {
      if (darkTheme) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }, [darkTheme]);
  
return (
    <header className={`bg-white dark:bg-black text-sm border-b-[1px] border-black10 dark:border-white/10 py-5 px-4 md:px-6 fixed top-0 flex justify-between items-center ${rightSidebarOpen?"right-72":"right-0"} ${leftSidebarOpen?"left-52":"left-0"} transition-header z-50`}>
    <div className="flex flex-row gap-4 items-center">
        <button onClick={() => setLeftSidebarOpen(prevOpen => !prevOpen)}>
            <img 
                src={darkTheme ? icon_dark_leftsidebar : icon_leftsidebar} 
                alt="Left Sidebar" 
                className="h-7 w-7 fill-white" 
            />
        </button>

        <button>
            <img 
                src={darkTheme ? icon_dark_star : icon_star} 
                alt="Left Sidebar" 
                className="h-7 w-7 fill-white" 
            />
        </button>
        <div className="hidden md:flex">
        <Breadcrumb>
            <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink href="/">
                <div className="text-black40 dark:text-white/40">Dashboard</div>
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
                <BreadcrumbPage>Default</BreadcrumbPage>
            </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        </div>
    </div>
    <div className="flex flex-row gap-4 items-center">
        <div className="flex gap-2 bg-black05 dark:bg-white/20 py-1 px-2 items-center rounded-[8px]">
        <img className="h-4 w-4" src={darkTheme?icon_dark_search : icon_search} alt="Search" />
        <input 
            type="text" 
            placeholder="Search" 
            className="outline-none placeholder:text-black20 dark:placeholder:text-white/20 bg-transparent w-24 h-5" 
        />
        <span className="text-black20 dark:text-white/20 text-sm hidden md:block">⌘/</span>
        </div>
        <div className="flex gap-2">
        <button onClick={toggleTheme}>
            <img 
                src={darkTheme ? icon_dark_sun : icon_sun} 
                alt="Left Sidebar" 
                className="h-7 w-7 fill-white" 
            />
        </button>
        <button >
            <img 
                src={darkTheme ? icon_dark_clockcounter : icon_clockcounter} 
                alt="Left Sidebar" 
                className="h-7 w-7 fill-white" 
            />
        </button>
        <button onClick={() => setRightSidebarOpen(prevOpen => !prevOpen)}>
            <img 
                src={darkTheme ? icon_dark_notifs : icon_notifs} 
                alt="Left Sidebar" 
                className="h-7 w-7 fill-white" 
            />
        </button>
        <button onClick={() => setRightSidebarOpen(prevOpen => !prevOpen)}>
            <img 
                src={darkTheme ? icon_dark_rightsidebar : icon_rightsidebar} 
                alt="Left Sidebar" 
                className="h-7 w-7 fill-white" 
            />
        </button>
        </div>
    </div>
    </header>
);
};

export default Header;
