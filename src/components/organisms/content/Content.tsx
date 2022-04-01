import { FC, useEffect, useState } from "react";
import "./Content.css";
import { Link } from "react-router-dom";
import SearchInput from "../../atoms/search-input/SearchInput";
import SortButton from "../../molecules/sort-button/SortButton";
import Card from "../../molecules/card/Card";
import cartIcon from "../../assets/icon/cart.svg";
import { useSelector } from "react-redux";
import { AppState } from "./../../../store/index";
import { useDispatch } from "react-redux";
import { getProduct } from "./../../../store/actions/productActions";
import { addToCard } from "./../../../store/actions/cartAction";
import { Cart } from "../../../types/cart";
import SideBar from "../sidebar/SideBar";

interface SortType {
  type: "desc" | "asc";
}

const defaultSort: SortType = {
  type: "asc",
};

const Content: FC = () => {
  const { products, cart } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();

  const [sortType] = useState(defaultSort);
  const [value, setValue] = useState("");
  const [data, setData] = useState(products.data);
  const [dataRaw, setDataRaw] = useState(products.data);
  const [selectedCategories, setSelectedCategories] = useState<Array<string>>(
    []
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    setData(products.data);
    setDataRaw(products.data);
  }, [products]);

  useEffect(() => {}, [data]);

  const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;

    if (keyword !== "" && keyword.length > 2) {
      const results = products.data.filter((product) => {
        return product.title.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setData(results);
    } else {
      setData(products.data);
    }

    setValue(keyword);
  };

  const sortPrice = () => {
    let product = [...products.data];

    let sortedProduct = product.sort((currentGame, nextGame) => {
      const nameCurrent = currentGame.price;
      const nameNext = nextGame.price;
      if (nameCurrent < nameNext) {
        return -1;
      }
      if (nameCurrent > nameNext) {
        return 1;
      }
      return 0;
    });

    if (sortType.type === "asc") {
      sortType.type = "desc";
    } else {
      sortType.type = "asc";
      sortedProduct.reverse();
    }

    setData(sortedProduct);
  };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedCategories.includes(event.target.id)) {
      const tempCategories = [...selectedCategories, event.target.id];
      const tempData = tempCategories.length
        ? dataRaw.filter((productItem) =>
            tempCategories.includes(productItem.category)
          )
        : dataRaw;
      setData(tempData);
      setSelectedCategories(tempCategories);
    } else {
      const indexOfCategory = selectedCategories.indexOf(event.target.id);
      const tempCategories = [...selectedCategories];
      tempCategories.splice(indexOfCategory, 1);
      const tempData = tempCategories.length
        ? dataRaw.filter((productItem) =>
            tempCategories.includes(productItem.category)
          )
        : dataRaw;
      setData(tempData);
      setSelectedCategories(tempCategories);
    }
  };

  const handleClick = (cart: Cart) => {
    dispatch(addToCard(cart));
  };

  return (
    <>
      <SideBar onChange={handleFilter}></SideBar>
      <div className="content-wrapper">
        <div className="content-top">
          <SearchInput
            value={value}
            onChange={filter}
            placeholder="arama yapın"
          ></SearchInput>
          <SortButton sortType={sortType.type} onClick={sortPrice}></SortButton>
          <div className="image-wrapper">
            <Link to="/cartDetails">
              <img src={cartIcon} alt="cart icon"></img>
            </Link>
            {cart.data.length > 0 && (
              <div className="image-details">{cart.data.length}</div>
            )}
          </div>
        </div>
        <div className="content-bottom">
          {data && data?.length > 0 ? (
            data.map((product) => {
              return (
                <Card
                  key={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  id={product.id}
                  description={product.description}
                  addCart={() => handleClick(product)}
                ></Card>
              );
            })
          ) : (
            <h1>Loading....</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Content;
