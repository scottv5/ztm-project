import styled from "styled-components";
import CategoryItem from "../category-item/category-item.component";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: `/shop/hats`,
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: `/shop/jackets`,
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: `/shop/sneakers`,
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: `/shop/womens`,
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: `/shop/mens`,
  },
];

const CategoryMenu = () => {
  return (
    <CategoriesContainer>
      {categories.map(({ title, id, route, imageUrl }) => {
        return (
          <CategoryItem
            key={id}
            title={title}
            route={route}
            imageUrl={imageUrl}
          />
        );
      })}
    </CategoriesContainer>
  );
};

export default CategoryMenu;

const CategoriesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
