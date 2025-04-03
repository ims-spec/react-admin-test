import { Layout, LayoutProps } from "react-admin";
import { MyMenu } from "./Menu";

export const MenuLayout = (props: LayoutProps) => <Layout {...props} menu={MyMenu} />;
