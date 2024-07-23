import React, { useContext, useEffect } from "react";
import "./profile.css";
import { UserContext } from "../context/UserContext";
import { baseUrl } from "../utils/const";
import Layout from "./layouts/Layout";

export default function Profile() {
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
        console.info("reponse /me useeffect", res);
        setUser(res);
      })
      .catch((err) => console.info(err));
  }, [setUser]);

  console.info("user from Profile.jsx", user);

  //   const user = {
  // birthday: "1963-12-11T23:00:00.000Z";
  // email: "duss@gmail.com";
  // firstname: "Jean-Claude";
  // lastname: "Duss";
  // phone_fix: "0680202505";
  // phone_mobile: "0680202505";
  //   }

  return (
    <Layout>
      <div className="main flex h-screen flex-col">
        Profile
        <div className="flex p-8 ">
          <p>{`${user?.data?.firstname} ${user?.data?.lastname}`}</p>
          <p className="pl-8 text-xs flex items-center">modifier</p>
        </div>
        <div className="contenu flex justify-center ">
          <div className="infos flex flex-col justify-center space-y-8 w-1/3 m-auto">
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col justify-center items-center w-4/5">
                <p className="">Date de naissance</p>
                <p className="">{user?.data?.birthday}</p>
              </div>
              <div className="flex justify-center items-center  w-1/5">
                <p className="text-xs flex items-center">modifier</p>
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col justify-center items-center w-4/5">
                <p className="">Email</p>
                <p className="">{user?.data?.email}</p>
              </div>
              <div className="flex justify-center items-center  w-1/5">
                <p className="text-xs flex items-center">modifier</p>
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col justify-center items-center w-4/5">
                <p className="">Numéro de téléphone</p>
                <p className="">{user?.data?.phone_mobile}</p>
              </div>
              <div className="flex justify-center items-center  w-1/5">
                <p className="text-xs flex items-center">modifier</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
