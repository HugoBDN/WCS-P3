import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { baseUrl } from "../../utils/const";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm() {
  const navigate = useNavigate();

  // État pour stocker les données du formulaire
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  // État pour gérer les erreurs de formulaire
  const [formErrors, setFormErrors] = useState({});
  // État pour gérer l'affichage des notifications
  const [notificationDisplayed, setNotificationDisplayed] = useState(false);

  // Fonction pour gérer les changements dans les champs du formulaire
  // la methode .trim() sert à supprimer les espaces blancs dans les champs pour vérifier si les champs sont vides.

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
    setFormErrors({
      ...formErrors,
      [name]: value.trim() !== "",
    });
  };

  // Fonction pour afficher une notification avec toastify
  const showToastMessage = (message) => {
    if (!notificationDisplayed) {
      toast.error(message, { position: "top-right" });
      setNotificationDisplayed(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ["email", "password"];
    const errors = {};

    requiredFields.forEach((field) => {
      if (!dataForm[field].trim()) {
        errors[field] = true;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      showToastMessage("Veuillez remplir tous les champs.");
      return;
    }

    fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Identifiants incorrects.");
        }
        return res.json();
      })
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res));
        navigate("/");
      })
      .catch((err) => {
        console.error("err :>> ", err);
        showToastMessage(
          "Votre email et/ou votre mot de passe sont incorrect(s)."
        );
      });
  };

  const handleInputFocus = (fieldName) => {
    setFormErrors({ ...formErrors, [fieldName]: false });
    setNotificationDisplayed(false);
  };

  return (
    <>
      <h2 className="mt-12 text-3xl font-bold mb-4 text-center text-black">
        Connectez-vous !
      </h2>
      <form
        className="w-96 m-auto flex flex-col justify-center gap-4"
        onSubmit={handleSubmit}
      >
        <input
          className={`mt-1 block w-full border ${
            formErrors.email && !dataForm.email
              ? "border-red-500"
              : "border-gray-300"
          } rounded-md pl-2 placeholder-gray-400 focus:outline-none h-12`}
          type="email"
          name="email"
          value={dataForm.email}
          onChange={handleChange}
          onFocus={() => handleInputFocus("email")}
          placeholder="Email"
        />
        {formErrors.email && !dataForm.email && (
          <p className="text-red-500 text-xs">Veuillez saisir votre email.</p>
        )}
        <input
          className={`mt-1 block w-full border ${
            formErrors.password && !dataForm.password
              ? "border-red-500"
              : "border-gray-300"
          } rounded-md pl-2 placeholder-gray-400 focus:outline-none h-12`}
          type="password"
          name="password"
          value={dataForm.password}
          onChange={handleChange}
          onFocus={() => handleInputFocus("password")}
          placeholder="Mot de passe"
        />
        {formErrors.password && !dataForm.password && (
          <p className="text-red-500 text-xs">
            Veuillez saisir votre mot de passe.
          </p>
        )}
        <button
          type="submit"
          className="mt-6 w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
        >
          Se connecter
        </button>
      </form>
      <ToastContainer onClose={() => setNotificationDisplayed(false)} />
    </>
  );
}
