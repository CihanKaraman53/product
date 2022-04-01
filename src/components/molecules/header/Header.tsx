import { FC } from "react";
import "./Header.css";

const Header: FC = () => {
  return (
    <div className="header">
      <ul>
        <li>Kampanyalar</li>
        <li>Ürünler</li>
        <li>Hakkımızda</li>
        <li>İletişim</li>
      </ul>
    </div>
  );
};

export default Header;
