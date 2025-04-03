import { Menu } from 'react-admin';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MusicIcon from '@mui/icons-material/MusicNote';
import PeopleIcon from '@mui/icons-material/People';


export const MainMenu = () => (
    <Menu>
        <Menu.Item to="/" primaryText="Dashboard" leftIcon={<DashboardIcon />} />
        <Menu.Item to="/plants" primaryText="Songs" leftIcon={<MusicIcon />} />
        <Menu.Item to="/processes" primaryText="Artists" leftIcon={<PeopleIcon />} />
    </Menu>
);