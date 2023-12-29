import React,{ useState}from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
   Box,
   Drawer,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
const [openMenu,setOpenMenu] = useState(false);
const  menuOption =[
  {
    text:"Home",
    icone:<HomeIcon/>,
  },
  {
    text:"About",
    icone:<InfoIcon />,
  },
  {
    text:"Testimonial",
    icone:<CommentRoundedIcon />,
  },
  {
    text:"Contact",
    icone:<PhoneRoundedIcon/>,
  },
  {
    text:"Cart",
    icone:<ShoppingCartRoundedIcon/>,
  },
];

  return (
    <nav>
       <div className="nav-logo-container">
        <img src={Logo}  alt="" />
       </div>
       <div className="navbar-links-container" >
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Menu</a>
        <a href="">Contact</a>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
         </a>

        <botton className="primary-button"> Bookings Now</botton>
       </div>
       <div className="navbar-menu-conainer">
         <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
       </div>
       <Drawer open={openMenu} onClick={() => setOpenMenu(false)}
       anchor="right" >
        <Box sx={{ width: 250 }}
        role="presentation"
        onClick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}
        >
          <list>
            {menuOption.map((item) => (
             <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
              </ListItem> 
            ))}
          </list>
        </Box>
       </Drawer>
    </nav>
  );
};

export default Navbar;




