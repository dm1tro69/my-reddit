import React, {FC} from 'react';
import styles from "./Layout.module.css";

interface ILayoutProps {
    children?: React.ReactNode
}

const Layout: FC<ILayoutProps> = ({children}) => {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
};

export default Layout;
