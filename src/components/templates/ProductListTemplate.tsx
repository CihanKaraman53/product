import { FC } from "react";

import Container from "../atoms/container/Container";
import Content from "../organisms/content/Content";
import Header from "../molecules/header/Header";
import SideBar from "../organisms/sidebar/SideBar";
import "./ProductListTemplate.css";

const ProductListTemplate: FC = () => {
  return (
    <Container>
      <div className="productlist-wrapper">
        <Header>ProductListTemplate</Header>
        <div className="main">
          <Content></Content>
        </div>
      </div>
    </Container>
  );
};

export default ProductListTemplate;
