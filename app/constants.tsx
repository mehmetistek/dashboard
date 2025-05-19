import { TiHome } from "react-icons/ti";
import { 
    FaUsers,
    FaHeart,
    FaBox,
    FaBroom,
    FaChartArea,
    FaDiceD6,
    FaCog  
} from "react-icons/fa";

import { IoIosPricetags } from "react-icons/io";


export const sections  = [
    {
        icon:<TiHome/>,
        name:"Anasayfa",
        url:"/",
    },
    {
        icon:<FaDiceD6/>,
        name:"Ürünler",
        url:"/products",
    },
    {
        icon:<FaUsers/>,
        name:"Kullanıcılar",
        url:"/users",
    },
    {
        icon:<IoIosPricetags/>,
        name:"Siparişler",
        url:"/orders",
    },
    {
        icon:<FaChartArea/>,
        name:"Grafikler"
    },
    {
        icon:<FaCog/>,
        name:"Ayarlar"
    },
    {
        icon:<FaHeart/>,
        name:"Favoriler",
        url:""
    },
    {
        icon:<FaBroom/>,
        name:"Envanter",
        url:"/",
    },
]

export const inputs= [
    {
        label:"İsim",
        name:"name",
    },
    {
        label:"Marka",
        name:"brand",
        type:"string"
    },
    {
        label:"Kategori",
        name:"category",
    },
    {
        label:"Fiyat",
        name:"price",
        type:"number"
    },
    {
        label:"Stok",
        name:"stock",
        type:"number"
    },
    {
        label:"Açıklama",
        name:"description",
    },
    
];