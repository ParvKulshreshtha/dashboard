import { Activities, Contacts, Notifications, notifIcon } from "@/data";
import { Dispatch, FC, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface ComponentInterface {
    rightSidebarOpen: boolean;
    setRightSidebarOpen:Dispatch<SetStateAction<boolean>>
}

const RightSidebar: FC<ComponentInterface> = ({ rightSidebarOpen, setRightSidebarOpen }) => {
    const navigate = useNavigate()
    return (
        <div className={`sidebar-transition " ${rightSidebarOpen ? "w-full md:w-72 open" : "w-0 hidden"} px-6 py-5 border-l-[1px] border-black10 dark:border-white/10 z-50 bg-white dark:bg-black transition-sidebar overflow-y-auto h-[100vh] fixed right-0`}>
            <button className="md:hidden p-2 text-black dark:text-white" onClick={() => setRightSidebarOpen(prev => !prev)}>
                <IoMdClose />
            </button>

            <div>
                <div className="text-black dark:text-white">
                    <div className="py-2 px-1 font-semibold">Notification</div>
                    <div>
                        {Notifications?.map((notifs, index) => (
                            <div key={index} className="mt-2 flex items-start gap-2 p-1 hover:bg-black05 dark:hover:bg-white/5 rounded-sm cursor-pointer" onClick={()=> navigate("/profile/notification")}>
                                <img src={notifIcon[notifs.type]} alt="" className="w-6 h-6" />
                                <div className="flex flex-col w-48">
                                    <div className="whitespace-nowrap text-ellipsis overflow-hidden">{notifs.title}</div>
                                    <span className="text-black40 dark:text-white/40 mt-0 text-xs">{notifs.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6 text-black dark:text-white">
                    <div className="py-2 px-1 font-semibold">Activities</div>
                    <div>
                        {Activities?.map((activity, index) => (
                            <div key={index} className="mt-2 flex items-start gap-2 p-1 hover:bg-black05 dark:hover:bg-white/5 rounded-sm cursor-pointer" onClick={()=> navigate("/profile/activities")}>
                                <img src={activity.avatar} alt="" className="w-6 h-6" />
                                <div className="flex flex-col w-48">
                                    <div className="whitespace-nowrap text-ellipsis overflow-hidden">{activity.title}</div>
                                    <span className="text-black40 dark:text-white/40 mt-0 text-xs">{activity.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6 text-black dark:text-white">
                    <div className="py-2 px-1 font-semibold">Contacts</div>
                    <div>
                        {Contacts?.map((contact, index) => (
                            <div key={index} className="mt-2 flex items-center gap-2 p-1 hover:bg-black05 dark:hover:bg-white/5 rounded-sm cursor-pointer" onClick={()=> navigate("/profile/contacts")}>
                                <img src={contact.avatar} alt="" className="w-6 h-6" />
                                <div className="flex flex-col w-48">
                                    <div className="whitespace-nowrap text-ellipsis overflow-hidden">{contact.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
