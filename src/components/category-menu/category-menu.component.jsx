import "./category-menu.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const CategoryMenu = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => {
        return <CategoryItem key={id} title={title} imageUrl={imageUrl} />;
      })}
    </div>
  );
};

export default CategoryMenu;
