import { FC } from "react";
import userAvatar from "../assets/avatar-user.png";
import sidebar_active from "../assets/sidebar-active-tab.png";
import sidebar_default from "../assets/sidebar-default.png";
import sidebar_ecom from "../assets/sidebar-ecom.png";
import sidebar_projects from "../assets/sidebar-projects.png";
import sidebar_courses from "../assets/sidebar-courses.png";
import Dot from "./ui/Dot";

interface ComponentInterface {
    openBar: boolean;
    darkTheme:boolean;
}

interface MenuItem {
    name: string;
    icon: string;
    active: boolean;
}

interface MenuItems {
    [key: string]: MenuItem[];
}


const menuItems:MenuItems= {
    Dashboard: [
        { name: "Default", icon: sidebar_default, active: true },
        { name: "eCommerce", icon: sidebar_ecom, active: false },
        { name: "Projects", icon: sidebar_projects, active: false },
        { name: "Courses", icon: sidebar_courses, active: false },
    ]
};

const LeftSidebar: FC<ComponentInterface> = ({ openBar, darkTheme }) => {
    return (
        <div className={`sidebar-transition ${openBar ? "w-52 open" : "w-0 hidden"} px-4 py-5 bg-white dark:bg-black z-50 border-black10 dark:white/10 border-r-[1px] transition-sidebar overflow-y-scroll h-[100vh] fixed left-0`}>
            <div>
                <div className="flex p-1 gap-2 rounded-sm items-center">
                    <img src={userAvatar} className="w-6 h-6" alt="User Avatar" />
                    <span className="dark:text-white">ByeWind</span>
                </div>

                <div className="mt-4 pb-3">
                    <div className="flex gap-2">
                        <button className="text-black40 dark:text-white/40  hover:bg-black10 dark:hover:bg-white/10 rounded-lg py-1 px-2">Favorites</button>
                        <button className="text-black20 dark:text-white/20 hover:bg-black10 dark:bg-white/10 rounded-lg py-1 px-2">Recently</button>
                    </div>
                    {["Overview", "Projects"]?.map(favorite => <div className="mt-1 flex gap-2 py-1 px-2 items-center">
                        <Dot color={darkTheme?"#ffffff33":"#1c1c1c33"} />
                        <div className="text-black dark:text-white text-sm">{favorite}</div>
                    </div>)}
                </div>

                <div className="mt-4 pb-3">
                    {Object.keys(menuItems).map((category) => (
                        <div key={category}>
                            <div className="py-1 px-2 text-black40 dark:text-white/40">{category}</div>
                            {menuItems[category]?.map((item, index) => (
                                <div key={index} className={`mt-1 flex gap-1 py-1 px-0 pr-2 items-center rounded-[8px] ${item.active && "bg-black05 dark:bg-white/5"}`}>
                                    <div className="w-6 h-5">
                                        {item.active && <img src={sidebar_active} alt="" />}
                                    </div>
                                    <img src={item.icon} alt={`${item.name} Icon`} className="h-5 w-5" />
                                    <div className="text-black dark:text-white text-sm">{item.name}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;
