import { Menu, MenuItemLink } from "react-admin";
import { useState } from "react";
import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import GroupsIcon from '@mui/icons-material/Groups';
import MemoryIcon from '@mui/icons-material/Memory';
import SecurityIcon from "@mui/icons-material/Security";


export const MyMenu = () => {
  const [openMonitoring, setOpenMonitoring] = useState(false);
  const [openAudit, setOpenAudit] = useState(false);

  return (
    <Menu>
      {/* Главный пункт меню */}
      <MenuItemLink to="/" primaryText="Главная" leftIcon={<DashboardIcon />} />

      {/* Саб-меню ===Monitoring=== */}
      <ListItemButton onClick={() => setOpenMonitoring(!openMonitoring)}>
        <ListItemIcon>
          <LegendToggleIcon />
        </ListItemIcon>
        <ListItemText primary="Мониторинг" />
        {openMonitoring ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>

      {openMonitoring && (
        <>
          <MenuItemLink to="/plants" primaryText="Все подразделения"  leftIcon={<GroupsIcon/>}/>
          <MenuItemLink to="/processes" primaryText="Процессы" leftIcon={<MemoryIcon/>} />
        </>
      )}

        {/* Саб-меню ===audit=== */}
        <ListItemButton onClick={() => setOpenAudit(!openAudit)}>
            <ListItemIcon>
                <SecurityIcon/>
            </ListItemIcon>
            <ListItemText primary="Внутренний аудит" />
            {openAudit ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>

        {openAudit && (
            <>
                <MenuItemLink to="/risks_categories" primaryText="Стандарты" leftIcon={<MemoryIcon/>} />
                <MenuItemLink to="/risks" primaryText="Риски" leftIcon={<MemoryIcon/>} />
            </>
        )}
    </Menu>
  );
};
