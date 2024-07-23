import React, { useEffect, useState } from "react";

import loupe from "../../img/search.png";
import { baseUrl } from "../../utils/const";

function SearchBar() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/product`)
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const searchTerm = e.target.value.toLowerCase();

      // Recherche de l'élément correspondant au terme de recherche
      const foundItem = datas.find(
        (item) => item.name.toLowerCase() === searchTerm
      );

      if (foundItem) {
        const productId = foundItem.id;
        console.info("productId", productId);
        window.location.href = `/product/${productId}`;
      } else {
        console.info(`Aucun résultat trouvé pour '${searchTerm}'`);
      }
    }
  };
  return (
    <div className="relative">
      <input
        className="flex items-center text-center bg-gray-200 rounded-2xl w-36 h-8 hover:bg-gray-400 hover:placeholder-black focus:placeholder-transparent"
        type="text"
        placeholder="Rechercher"
        onKeyPress={handleKeyPress}
      />
      <div className="absolute -left-4 -bottom-1 flex items-center pl-4">
        <img className="w-8 " src={loupe} alt="loupe" />
      </div>
    </div>
  );
}
export default SearchBar;
