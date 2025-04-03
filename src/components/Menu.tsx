import { Menu, MenuItemLink } from "react-admin";
import { useState } from "react";
import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import GroupsIcon from '@mui/icons-material/Groups';
import MemoryIcon from '@mui/icons-material/Memory';


export const MyMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Menu>
      {/* Главный пункт меню */}
      <MenuItemLink to="/" primaryText="Главная" leftIcon={<DashboardIcon />} />

      {/* Саб-меню */}
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <LegendToggleIcon />
        </ListItemIcon>
        <ListItemText primary="Мониторинг" />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>

      {open && (
        <>
          <MenuItemLink to="/plants" primaryText="Все подразделения"  leftIcon={<GroupsIcon/>}/>
          <MenuItemLink to="/processes" primaryText="Процессы" leftIcon={<MemoryIcon/>} />
        </>
      )}
    </Menu>
  );
};
