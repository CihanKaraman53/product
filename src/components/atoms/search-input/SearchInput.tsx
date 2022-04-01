import { FC } from "react";
import "./SearchInput.css";
import SearchIcon from "../../assets/icon/searchIcon.svg";

interface SearchInputProps {
  placeholder?: string;
  value?: string | number | readonly string[];
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
const SearchInput: FC<SearchInputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="input-wrapper">
      <div className="icon-wapper">
        <img src={SearchIcon} alt="search icon" />
      </div>
      <input
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      ></input>
    </div>
  );
};

export default SearchInput;
