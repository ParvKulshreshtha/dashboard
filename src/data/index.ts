import sidebar_notifs_bug from "../assets/sidebar-notifs-bug.png"
import sidebar_notifs_user from "../assets/sidebar-notifs-user.png"
import sidebar_notifs_network from "../assets/sidebar-notifs-network.png"
import sidebar_activities_avatar_1 from "../assets/sidebar-activitiesavatar-1.png"
import sidebar_activities_avatar_2 from "../assets/sidebar-activitiesavatar-2.png"
import sidebar_activities_avatar_3 from "../assets/sidebar-activitiesavatar-3.png"
import sidebar_activities_avatar_4 from "../assets/sidebar-activitiesavatar-4.png"
import sidebar_activities_avatar_5 from "../assets/sidebar-activitiesavatar-5.png"
import sidebar_contacts_avatar_1 from "../assets/sidebar-contactavatar-1.png"
import sidebar_contacts_avatar_2 from "../assets/sidebar-contactavatar-2.png"
import sidebar_contacts_avatar_3 from "../assets/sidebar-contactavatar-3.png"
import sidebar_contacts_avatar_4 from "../assets/sidebar-contactavatar-4.png"
import sidebar_contacts_avatar_5 from "../assets/sidebar-contactavatar-5.png"
import sidebar_contacts_avatar_6 from "../assets/sidebar-contactavatar-6.png"




interface NotificationInterface {
    id: number;
    title: string;
    type: string;
    time: string;
}

interface ActivitiesInterface {
    id: number;
    title: string;
    avatar: string;
    time: string;
}

interface ContactInterface {
    id: number,
    name: string,
    avatar: string,
    address:string,
}

interface NotificationItemInterface {
    [key:string]:string
}

export const Notifications:NotificationInterface[] = [
    {id:1,type:"bug", title:"You have a bug that needs to be fixed.", time:"just now"},
    {id:2,type:"user", title:"New user registered", time:"just now"},
    {id:3,type:"bug", title:"You have a bug that needs to be fixed.", time:"just now"},
    {id:4,type:"network", title:"Andi Lane subscribed to you", time:"just now"},
]

export const Activities:ActivitiesInterface[] = [
    {id:1, avatar:sidebar_activities_avatar_1, title:"You have a bug that needs to be fixed.", time:"just now"},
    {id:2, avatar:sidebar_activities_avatar_2, title:"Released a new version", time:"just now"},
    {id:3, avatar:sidebar_activities_avatar_3, title:"Submitted a bug", time:"just now"},
    {id:4, avatar:sidebar_activities_avatar_4, title:"Modified A data in Page X", time:"just now"},
    {id:5, avatar:sidebar_activities_avatar_5, title:"Deleted a page in Project X", time:"just now"},
]

export const Contacts:ContactInterface[] = [
    {id:1, avatar:sidebar_contacts_avatar_1, name:"Natali Craig", address:"Meadow Lane Oakland"},
    {id:2, avatar:sidebar_contacts_avatar_2, name:"Drew Cano",address:"Bagwell Avenue Ocala"},
    {id:3, avatar:sidebar_contacts_avatar_3, name:"Orlando Diggs",address:"Washburn Baton Rouge"},
    {id:4, avatar:sidebar_contacts_avatar_4, name:"Andi Lane",address:"Nest Lane Olivette"},
    {id:5, avatar:sidebar_contacts_avatar_5, name:"Kate Morrison",address:"Larry San Francisco"},
    {id:6, avatar:sidebar_contacts_avatar_6, name:"Koray Okumus",address:"Ranch Field Florida"},
]


export const notifIcon:NotificationItemInterface = {
    bug:sidebar_notifs_bug,
    user:sidebar_notifs_user,
    network:sidebar_notifs_network
}

type Status = {
    color: string;
    name: string;
    dark_color: string;
  };
  
  export const statusMap: { [key: number]: Status } = {
    1: { color: '#8A8CD9', dark_color: '#8A8CD9', name: 'In Progress' },
    2: { color: '#4AA785', dark_color: '#4AA785', name: 'Completed' },
    3: { color: '#59A8D4', dark_color: '#59A8D4', name: 'Pending' },
    4: { color: '#FFC555', dark_color: '#FFC555', name: 'Approved' },
    5: { color: '#1C1C1C66', dark_color: '#FFFFFF66' ,name: 'Rejected' },
  };

  interface Product {
    id:number;
    product: string;
    quantity: number;
    amount: number;
  }
  
  export const products: Product[] = [
    {
      id:1,
      product: "ASOS Ridley High Waist",
      quantity: 82,
      amount: 79.49
    },
    {
      id:2,
      product: "Marco Lightweight Shirt",
      quantity: 37,
      amount: 120.79
    },
    {
      id:3,
      product: "Half Sleeve Shirt",
      quantity: 54,
      amount: 20.00
    },
    {
      id:4,
      product: "Lightweight Jacket",
      quantity: 19,
      amount: 89.67
    },
    {
      id:5,
      product: "Marco Shoes",
      quantity: 70,
      amount: 12.89
    }
  ];
  