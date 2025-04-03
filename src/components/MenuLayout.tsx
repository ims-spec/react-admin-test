import { Layout, LayoutProps } from "react-admin";
import { MyMenu } from "./Menu";
// import {MainMenu} from "./MainMenu.tsx";
// import {Menu3} from "./Menu3.tsx";


export const MenuLayout = (props: LayoutProps) => <Layout {...props} menu={MyMenu} />;
