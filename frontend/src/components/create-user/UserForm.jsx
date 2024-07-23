import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// eslint-disable-next-line import/no-unresolved
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Layout from "../layouts/Layout";
import { baseUrl } from "../../utils/const";
import "react-toastify/dist/ReactToastify.css";

export default function UserForm() {
  // Utilisation du hook useNavigate pour la navigation
  const navigate = useNavigate();
  // Déclaration des états pour les données du formulaire et les erreurs
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    birthday: "",
    email: "",
    password: "",
    phone_mobile: "",
    phone_fix: "",
    isMember: false,
    isAdmin: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [notificationDisplayed, setNotificationDisplayed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // useEffect pour réinitialiser les erreurs lorsque la notification n'est pas visible
  useEffect(() => {
    if (!notificationDisplayed) {
      // Réinitialiser les erreurs lorsque la notification n'est pas visible
      setFormErrors({});
    }
  }, [notificationDisplayed]);

  // Fonction de gestion du changement des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: false });
  };

  // Fonction pour afficher la notification
  const showToastMessage = (message, type = "error") => {
    if (!notificationDisplayed) {
      if (type === "error") {
        toast.error(message, { position: "top-right" });
      } else if (type === "success") {
        toast.success(message, { position: "top-right" });
      }
      setNotificationDisplayed(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      "firstname",
      "lastname",
      "birthday",
      "email",
      "password",
      "phone_mobile",
      "phone_fix",
    ];
    const errors = {};
    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        errors[field] = true;
      }
    });

    // (?=.*\d) nombres décimaux de [0 à 9], (?=.*[a-z]) doit contenir au moins une lettre minuscule,
    // (?=.*[A-Z]) au moins une majuscule, {8,} et au moins 8 caractères.
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      errors.password = true;
    }
    // doit contenir exactement 10 chiffres
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(formData.phone_mobile)) {
      errors.phone_mobile = true;
    }
    // doit contenir exactement 10 chiffres
    const fixRegex = /^\d{10}$/;
    if (!fixRegex.test(formData.phone_fix)) {
      errors.phone_fix = true;
    }

    // Affichage des erreurs s'il y en a avec toastify
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      showToastMessage("Veuillez remplir tous les champs.");
      return;
    }

    fetch(`${baseUrl}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((userData) => {
        const { insertId } = userData;
        fetch(`${baseUrl}/api/cart`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: insertId.insertId }),
        })
          .then(() => {
            showToastMessage("Votre compte a bien été créé", "success");
            setTimeout(() => {
              navigate("/connexion");
            }, 3000);
          })
          .catch((err) =>
            console.error("Erreur lors de la création du panier :", err)
          );
      })
      .catch((err) =>
        console.error("Erreur lors de la création de l'utilisateur :", err)
      );
  };

  // Cette fonction est appelée lorsque l'utilisateur clique ou se déplace dans un champ de saisie
  const handleInputFocus = (fieldName) => {
    setFormErrors({ ...formErrors, [fieldName]: false });
    setNotificationDisplayed(false);
  };

  // Inversion de l'état pour afficher/masquer le mot de passe
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layout>
      <main>
        <h2 className="mt-12 text-3xl font-bold mb-4 text-center text-black">
          Faisons de toi un membre Nike
        </h2>
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-md">
            <form
              className="bg-white rounded-lg border border-gray-300 p-8 grid gap-4"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="firstname">Prénom</label>
                  <input
                    className={`mt-1 border ${
                      formErrors.firstname
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md pl-2 placeholder-gray-400 focus:outline-none h-12 w-full`}
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    onFocus={() => handleInputFocus("firstname")}
                    placeholder="Prénom"
                  />
                  {formErrors.firstname && (
                    <p className="text-red-500 text-xs">Obligatoire*</p>
                  )}
                </div>
                <div className="col-span-2">
                  <label htmlFor="lastname">Nom</label>
                  <input
                    className={`mt-1 border ${
                      formErrors.lastname ? "border-red-500" : "border-gray-300"
                    } rounded-md pl-2 placeholder-gray-400 focus:outline-none h-12 w-full`}
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    onFocus={() => handleInputFocus("lastname")}
                    placeholder="Nom"
                  />
                  {formErrors.lastname && (
                    <p className="text-red-500 text-xs">Obligatoire*</p>
                  )}
                </div>
                <div className="col-span-2">
                  <input
                    className={`mt-1 block w-full border ${
                      formErrors.birthday ? "border-red-500" : "border-gray-300"
                    } rounded-md pl-2 placeholder-gray-400 focus:outline-none h-12`}
                    type="date"
                    id="birthday"
                    name="birthday"
                    value={formData.birthday}
                    onChange={handleChange}
                    onFocus={() => handleInputFocus("birthday")}
                    placeholder="Date de naissance"
                  />
                  {formErrors.birthday && (
                    <p className="text-red-500 text-xs">Obligatoire*</p>
                  )}
                </div>
                <div className="col-span-2">
                  <input
                    className={`mt-1 block w-full border ${
                      formErrors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md pl-2 placeholder-gray-400 focus:outline-none h-12`}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleInputFocus("email")}
                    placeholder="Email"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-xs">Obligatoire*</p>
                  )}
                </div>
                <div className="col-span-2 relative">
                  <input
                    className={`mt-1 block w-full border ${
                      formErrors.password && formData.password.length < 8
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md pl-2 placeholder-gray-400 focus:outline-none h-12`}
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => handleInputFocus("password")}
                    autoComplete="current-password" // Ajout de l'attribut d'autocomplétion
                    placeholder="Mot de passe"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                  {formErrors.password && formData.password.length < 8 && (
                    <p className="text-red-500 text-xs mt-1">
                      8 caractères minimum. Majuscules, minuscules et un chiffre
                    </p>
                  )}
                </div>
                <div className="col-span-2">
                  <input
                    className={`mt-1 block w-full border ${
                      formErrors.phone_mobile
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md pl-2 placeholder-gray-400 focus:outline-none h-12`}
                    type="tel"
                    id="phone_mobile"
                    name="phone_mobile"
                    value={formData.phone_mobile}
                    onChange={handleChange}
                    onFocus={() => handleInputFocus("phone_mobile")}
                    placeholder="Téléphone mobile"
                  />
                  {formErrors.phone_mobile && (
                    <p className="text-red-500 text-xs">
                      Obligatoire*. 10 chiffres minimum/maximum
                    </p>
                  )}
                </div>
                <div className="col-span-2">
                  <input
                    className={`mt-1 block w-full border ${
                      formErrors.phone_fix
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md pl-2 placeholder-gray-400 focus:outline-none h-12`}
                    type="tel"
                    id="phone_fix"
                    name="phone_fix"
                    value={formData.phone_fix}
                    onChange={handleChange}
                    onFocus={() => handleInputFocus("phone_fix")}
                    placeholder="Téléphone fixe"
                  />
                  {formErrors.phone_fix && (
                    <p className="text-red-500 text-xs">
                      Obligatoire*. 10 chiffres minimum/maximum
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
              >
                Créer Compte
              </button>
            </form>
          </div>
        </div>
      </main>
      <ToastContainer onClose={() => setNotificationDisplayed(false)} />
    </Layout>
  );
}
