import { Dispatch, FC, SetStateAction, useState } from "react";
import userAvatar from "../assets/avatar-user.png";
import sidebar_active from "../assets/sidebar-active-tab.png";
import sidebar_default from "../assets/sidebar-default.png";
import sidebar_ecom from "../assets/sidebar-ecom.png";
import sidebar_projects from "../assets/sidebar-projects.png";
import sidebar_courses from "../assets/sidebar-courses.png";
import icon_closedArrow from "../assets/icon-closedarrow.png";
import icon_openedArrow from "../assets/icon-openedarrow.png";
import sidebar_dark_active from "../assets/sidebar-dark-active-tab.png";
import sidebar_dark_default from "../assets/sidebar-dark-default.png";
import sidebar_dark_ecom from "../assets/sidebar-dark-ecom.png";
import sidebar_dark_projects from "../assets/sidebar-dark-projects.png";
import sidebar_dark_courses from "../assets/sidebar-dark-courses.png";
import icon_dark_closedArrow from "../assets/icon-dark-closedarrow.png";
import icon_dark_openedArrow from "../assets/icon-dark-openedarrow.png";
import Dot from "./ui/Dot";
import { useSelector } from "react-redux";

interface ComponentInterface {
    openBar: boolean;
    setOpenBar: Dispatch<SetStateAction<boolean>>;
}

interface MenuItem {
    name: string;
    icon: string;
    darkIcon: string;
    active: boolean;
    subItems: {
        name: string;
        active: boolean;
    }[]
}

interface MenuItems {
    [key: string]: MenuItem[];
}

const menuItems: MenuItems = {
    Dashboard: [
        { name: "Default", icon: sidebar_default, darkIcon: sidebar_dark_default, active: true, subItems: [] },
        { name: "eCommerce", icon: sidebar_ecom, darkIcon: sidebar_dark_ecom, active: false, subItems: [{ name: "eCommerce Dashboard", active: false }] },
        { name: "Projects", icon: sidebar_projects, darkIcon: sidebar_dark_projects, active: false, subItems: [{ name: "Projects Dashboard", active: false }] },
        { name: "Courses", icon: sidebar_courses, darkIcon: sidebar_dark_courses, active: false, subItems: [{ name: "Courses Dashboard", active: false }] },
    ],
    Pages: [
        { name: "eCommerce", icon: sidebar_ecom, darkIcon: sidebar_dark_ecom, active: false, subItems: [{ name: "eCommerce Dashboard", active: false }] },
        { name: "Projects", icon: sidebar_projects, darkIcon: sidebar_dark_projects, active: false, subItems: [{ name: "Projects Dashboard", active: false }] },
        { name: "Courses", icon: sidebar_courses, darkIcon: sidebar_dark_courses, active: false, subItems: [{ name: "Courses Dashboard", active: false }] },
    ]
};

const LeftSidebar: FC<ComponentInterface> = ({ openBar, setOpenBar }) => {
    const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

    const darkTheme = useSelector((state: any) => state.darkTheme);

    const handleItemClick = (category: string, item: MenuItem) => {
        if (item.subItems.length > 0) {
            setExpandedItems(prev => ({
                ...prev,
                [`${category}-${item.name}`]: !prev[`${category}-${item.name}`]
            }));
        }
    };

    return (
        <div className={`sidebar-transition ${openBar ? "w-52 open" : "w-0 hidden"} px-4 py-5 bg-white dark:bg-black z-50 border-black10 dark:border-white/10 border-r-[1px] transition-sidebar overflow-y-scroll h-[100vh] fixed left-0`}>
            <div>
                <div className="flex p-1 gap-2 rounded-sm items-center">
                    <img src={userAvatar} className="w-6 h-6" alt="User Avatar" />
                    <span className="dark:text-white">ByeWind</span>
                </div>

                <div className="mt-4 pb-3">
                    <div className="flex gap-2">
                        <button className="text-black40 dark:text-white/40 hover:bg-black10 dark:hover:bg-white/10 rounded-lg py-1 px-2">Favorites</button>
                        <button className="text-black20 dark:text-white/20 hover:bg-black10 dark:hover:bg-white/10 rounded-lg py-1 px-2">Recently</button>
                    </div>
                    {["Overview", "Projects"]?.map(favorite => (
                        <div key={favorite} className="mt-1 flex gap-2 py-1 px-2 items-center">
                            <Dot color={darkTheme ? "#ffffff33" : "#1c1c1c33"} />
                            <div className="text-black dark:text-white text-sm">{favorite}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-4 pb-3 flex flex-col gap-4">
                    {Object.keys(menuItems).map((category) => (
                        <div key={category}>
                            <div className="py-1 px-2 text-black40 dark:text-white/40">{category}</div>
                            {menuItems[category]?.map((item, index) => (
                                <div key={index}>
                                    <div
                                        className={`mt-1 flex gap-1 py-1 px-0 pr-2 items-center rounded-[8px] ${item.active && "bg-black05 dark:bg-white/5"}`}
                                        onClick={() => handleItemClick(category, item)}
                                    >
                                        <div className="w-6 h-5">
                                            {item.subItems.length > 0 && (
                                                <img
                                                    src={expandedItems[`${category}-${item.name}`] ? (darkTheme ? icon_dark_openedArrow : icon_openedArrow) : (darkTheme ? icon_dark_closedArrow : icon_closedArrow)}
                                                    alt=""
                                                />
                                            )}
                                            {item.active && <img src={darkTheme ? sidebar_dark_active : sidebar_active} alt="" />}
                                        </div>
                                        <img src={darkTheme ? item.darkIcon : item.icon} alt={`${item.name} Icon`} className="h-5 w-5" />
                                        <div className="text-black dark:text-white text-sm">{item.name}</div>
                                    </div>
                                    {expandedItems[`${category}-${item.name}`] && (
                                        <div className="ml-8">
                                            {item.subItems.map((subItem, subIndex) => (
                                                <div key={subIndex} className="py-1 px-0 pr-2 pl-5 items-center">
                                                    <div className="text-black dark:text-white text-sm truncate w-full">{subItem.name}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
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
