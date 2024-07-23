import { Link } from "react-router-dom";
import imgFemme from "../../assets/img/femme_img1.jpg";
import imgHomme from "../../assets/img/homme_moment 3.jpg";
import imgChild from "../../assets/img/enfant-collection1.jpg";

export default function CategoryBaner() {
  const categoryBaner = [
    { id: 1, name: "Homme", img: imgHomme },
    { id: 2, name: "Femme", img: imgFemme },
    { id: 3, name: "Enfant", name2: "Ado", img: imgChild },
  ];
  return (
    <div className="flex w-full flex-wrap pr-[5%] pl-[5%] justify-center">
      <h2 className="text-[1.8rem]  pt-4 pb-8 w-full">Les Catégories</h2>
      <div className="flex flex-wrap md:flex-nowrap gap-4 w-full">
        {categoryBaner.map((category) => (
          <div className="flex  w-full md:w-1/3 relative cursor-pointer">
            <Link
              className="w-full inline-block"
              to={`/${category.name.toLowerCase()}`}
            >
              <img
                src={category.img}
                className="w-full inline-block"
                alt="category.img"
              />
              <span className="flex justify-center items-center rounded-[50px] bg-white h-8 absolute bottom-4 left-4 w-24">
                <p>{category.name}</p>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
