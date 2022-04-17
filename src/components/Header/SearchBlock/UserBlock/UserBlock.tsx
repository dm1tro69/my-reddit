import React, {FC} from 'react';
import styles from "./UserBlock.module.css";
import Text, {EColor} from "../../../Text/Text";
import IconAnon from "../../../icons/IconAnon";

interface IUserBlockProps {
    avatarSrc?: string;
    username?: string;
    loading?: boolean;
}

const UserBlock: FC<IUserBlockProps> = ({avatarSrc, username, loading}) => {
    return (
        <a href="https://www.reddit.com/api/v1/authorize?client_id=_WLTijAbejU5SOprOHBAVw&response_type=token&
    state=random_string&redirect_uri=http://localhost:3000&scope=read submit identity&state=put">
    <div className={styles.userBox}>
           <div className={styles.avatarBox}>
               {avatarSrc ? <img className={styles.avatarImage} src={avatarSrc} alt="avatar"/> : <IconAnon/>}

           </div>
            <div className={styles.username}>
                {loading ? (
                    <Text size={20} color={EColor.black}>Loading...</Text>
                ): (
                    <Text size={20} color={EColor.black}>{username || 'Аноним'}</Text>
                ) }

            </div>
        </div>
        </a>
    );
};

export default UserBlock;
