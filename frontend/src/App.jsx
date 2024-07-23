import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import PreniumBaner from "./components/app/PreniumBaner";
import SliderCaroussel from "./components/app/SliderCaroussel";
import VideoBaner from "./components/app/VideoBaner";
import Layout from "./components/layouts/Layout";
import SliderCarousselNewProducts from "./components/app/SliderCarousselNewProducts";
import BandeauDefilant from "./components/app/BandeauDefilant";
import CategoryBaner from "./components/app/CategoryBaner";
import Bandeau2 from "./components/app/Bandeau2";
import Bandeau3 from "./components/app/Bandeau3";
import "./App.css";
import { baseUrl } from "./utils/const";

function App() {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    fetch(`${baseUrl}/api/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setUser(res);
      })
      .catch((err) => console.info(err));
  }, []);

  console.info("userdeApp", user);

  useEffect(() => {
    const existingCartToken = localStorage.getItem("cartId");
    if (existingCartToken) {
      localStorage.removeItem("cartId");
    }
    // Récupération du dernier panier de l'utilisateur et stockage dans le localStorage
    fetch(`${baseUrl}/api/cart-session`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.info("reponse", res);
        localStorage.setItem("cartId", JSON.stringify(res.id));
      })
      .catch((err) => console.error(err));
  }, []); // La dépendance est vide, donc cela ne se déclenchera qu'une seule fois lors du montage initial

  return (
    <Layout>
      <VideoBaner />
      <BandeauDefilant />
      <SliderCaroussel />
      <SliderCarousselNewProducts />
      <Bandeau2 />
      <CategoryBaner />
      <PreniumBaner />
      <Bandeau3 />
    </Layout>
  );
}

export default App;
