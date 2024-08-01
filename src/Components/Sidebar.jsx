import { React, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FcComboChart } from "react-icons/fc";
import { TbBuildingWarehouse } from "react-icons/tb";
import { LiaGiftsSolid } from "react-icons/lia";
import { MdAssignmentReturn } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiShop } from "react-icons/gi";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { FaCalculator } from "react-icons/fa6";
import { PiPresentationChartDuotone } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuitem = [
        { path: '/', 
          name: "Dashboard",
          icon: <FcComboChart /> 
        },
        { path: '/inventory',
          name: "Inventory", 
          icon: <TbBuildingWarehouse  />
        },
        { path: '/orders',
          name: "Orders",
          icon: <LiaGiftsSolid /> 
        },
        { path: '/returns', name: "Returns", icon: <MdAssignmentReturn /> },
        { path: '/customers', name: "Customers", icon: <IoIosPeople /> },
        { path: '/shipping', name: "Shipping", icon: <LiaShippingFastSolid /> },
        { path: '/channel', name: "Channel", icon: <GiShop /> },
        { path: '/integrations', name: "Integrations", icon: <MdOutlineAddHomeWork /> },
        { path: '/calculators', name: "Calculators", icon: <FaCalculator /> },
        { path: '/reports', name: "Reports", icon: <PiPresentationChartDuotone /> },
        { path: '/accounts', name: "Accounts", icon: <IoIosSettings /> },
    ];

    return (
        <div className="sidebar" style={{ width: isOpen ? "300px" : "50px" }}>
            <div className="top_section">
                <h1 style={{ display: isOpen ? "block" : "none" }}></h1>
                <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                    <FaBars onClick={toggle} />
                </div>
            </div>
            <div className="menu_items">
                {menuitem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link" activeClassName="active">
                        <div className="icon">{item.icon}</div>
                        {isOpen && <div className="link_text">{item.name}</div>} {/* Show name only when isOpen is true */}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
