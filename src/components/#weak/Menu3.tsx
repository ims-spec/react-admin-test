import { Menu, MenuItemLink } from "react-admin";
import { useState } from "react";
import {
    Drawer,
    List,
    ListItemButton,
    Typography,
    IconButton,
    Collapse,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SecurityIcon from "@mui/icons-material/Security";
import MonitorIcon from "@mui/icons-material/Monitor";
import ProcessIcon from "@mui/icons-material/Settings";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const menuConfig = {
    audit: {
        title: "Аудит",
        icon: <SecurityIcon />,
        subMenus: ["Проверки", "Отчёты", "Риски", "Журналы"],
    },
    monitoring: {
        title: "Мониторинг",
        icon: <MonitorIcon />,
        subMenus: ["Системный", "Сетевой", "Логирование"],
    },
    processes: {
        title: "Процессы",
        icon: <ProcessIcon />,
        subMenus: ["Автоматизация", "Оптимизация", "Контроль"],
    },
} as const; // Это указывает TypeScript, что `menuConfig` неизменяемый

type MenuKey = keyof typeof menuConfig; // Тип для ключей меню

export const Menu3 = () => {
    const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
    const [subMenuOpen, setSubMenuOpen] = useState<Record<string, boolean>>({});

    // Открытие модального окна
    const openMenu = (menu: MenuKey) => setActiveMenu(menu);
    const closeMenu = () => setActiveMenu(null);

    // Открытие/закрытие вложенного подменю
    const toggleSubMenu = (menuName: string) => {
        setSubMenuOpen((prevState) => ({
            ...prevState,
            [menuName]: !prevState[menuName],
        }));
    };

    return (
        <>
            <Menu>
                {Object.keys(menuConfig).map((key) => (
                    <ListItemButton key={key} onClick={() => openMenu(key as MenuKey)}>
                        {menuConfig[key as MenuKey].icon}
                        <span style={{ marginLeft: 10 }}>{menuConfig[key as MenuKey].title}</span>
                    </ListItemButton>
                ))}
            </Menu>

            {Object.keys(menuConfig).map((key) => (
                <Drawer key={key} anchor="left" open={activeMenu === key} onClose={closeMenu}>
                    <div style={{ width: 300, padding: 16 }}>
                        <Typography variant="h6">
                            {menuConfig[key as MenuKey].title}
                            <IconButton onClick={closeMenu} style={{ float: "right" }}>
                                <CloseIcon />
                            </IconButton>
                        </Typography>

                        <List>
                            {menuConfig[key as MenuKey].subMenus.map((subMenu) => (
                                <div key={subMenu}>
                                    <ListItemButton onClick={() => toggleSubMenu(subMenu)}>
                                        <span>{subMenu}</span>
                                        {subMenuOpen[subMenu] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    </ListItemButton>
                                    <Collapse in={subMenuOpen[subMenu]} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <MenuItemLink to={`/${key}/${subMenu.toLowerCase()}/plants`} primaryText="Детали" sx={{ pl: 4 }} />
                                            <MenuItemLink to={`/${key}/${subMenu.toLowerCase()}/history`} primaryText="История" sx={{ pl: 4 }} />
                                            <MenuItemLink to={`/${key}/${subMenu.toLowerCase()}/analytics`} primaryText="Аналитика" sx={{ pl: 4 }} />
                                        </List>
                                    </Collapse>
                                </div>
                            ))}
                        </List>
                    </div>
                </Drawer>
            ))}
        </>
    );
};


