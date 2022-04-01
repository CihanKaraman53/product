import { FC, useEffect, useState } from "react";
import Checkbox from "../../atoms/checkbox/Checkbox";
import "./Sidebar.css";

interface SideBarProps {
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const SideBar: FC<SideBarProps> = ({ onChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  return (
    <div className="side-wrapper">
      <div>
        <label className="side-label">Category</label>
        {categories.map((category, index) => {
          return (
            <Checkbox
              key={index}
              name={category}
              onChange={onChange}
            ></Checkbox>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
