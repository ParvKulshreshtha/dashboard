import { Activities, Contacts, Notifications, notifIcon } from "@/data";
import { FC } from "react";


interface ComponentInterface {
    rightSidebarOpen:boolean
}



const RightSidebar:FC<ComponentInterface> = ({rightSidebarOpen}) => {
    return (
        <div className={`sidebar-transition ${rightSidebarOpen?"w-72 open":"w-0 hidden"} px-6 py-5 border-l-[1px] border-black10 dark:border-white/10 z-50 bg-white dark:bg-black transition-sidebar overflow-y-scroll h-[100vh] fixed right-0`}>
            

            <div>

                <div className="text-black dark:text-white">
                    <div className=" py-2 px-1 font-semibold">Notification</div>
                    <div className="">
                        {Notifications?.map(notifs => (
                            <div className="mt-2 flex items-start gap-2 p-1">
                                <img src={notifIcon[notifs.type]} alt="" className="w-6 h-6" />
                                <div className="flex flex-col w-48">
                                    <div className="whitespace-nowrap text-ellipsis overflow-hidden ">{notifs.title}</div>
                                    <span className=" text-black40 dark:text-white/40 mt-0 text-xs">{notifs.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-6 text-black dark:text-white">
                    <div className="  py-2 px-1 font-semibold">Activities</div>
                    <div className="">
                        {Activities?.map(activity => (
                            <div className="mt-2 flex items-start gap-2 p-1">
                                <img src={activity.avatar} alt="" className="w-6 h-6" />
                                <div className="flex flex-col w-48">
                                    <div className="whitespace-nowrap text-ellipsis overflow-hidden ">{activity.title}</div>
                                    <span className=" text-black40 dark:text-white/40 mt-0 text-xs">{activity.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-6 text-black dark:text-white">
                    <div className="  py-2 px-1 font-semibold">Contacts</div>
                    <div className="">
                        {Contacts?.map(contact => (
                            <div className="mt-2 flex items-center gap-2 p-1">
                                <img src={contact.avatar} alt="" className="w-6 h-6" />
                                <div className="flex flex-col w-48">
                                    <div className="whitespace-nowrap text-ellipsis overflow-hidden ">{contact.name}</div>
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
