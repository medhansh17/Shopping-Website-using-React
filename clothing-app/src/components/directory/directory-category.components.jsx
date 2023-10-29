import CategoryItem from "../category-item/category-item.component";  //importing CategoryItem 
import './directory-container.styles.scss'


const Directory = ({ categories }) => {           //accepting categories array as props
  return (
    <div className="directory-container">
      {categories.map((category) => (                                              
        <CategoryItem key={category.id} category={category} />    //passing every object from categories array
      ))}
    </div>
  );
};

export default Directory;