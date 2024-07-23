/* eslint-disable jsx-a11y/control-has-associated-label */
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved, import/extensions
import { UserContext } from "../../context/UserContext";
// eslint-disable-next-line import/no-unresolved, import/extensions
// import LogOut from "../logout/LogOut";
// import ModalLogOut from "../modal/ModalLogOut";
import { baseUrl } from "../../utils/const";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch(`${baseUrl}/api/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res));
        setUser({});
        navigate("/");
      })

      .catch((err) => console.info(err));
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {user.isLogged ? (
        <div className="flex gap-2 w-[200px] items-center">
          <div className="flex">
            <p>{`Bonjour ${user.data.firstname}`}</p>
          </div>
          <button type="button" className="w-10 relative" onClick={handleClick}>
            <svg
              width="14px"
              height="14px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div className="w-[250px]">
          <Link className="pt-4 md:pt-0" to="/inscription">
            S'identifier
          </Link>
          <span className="inline-block px-2 md:px-4">|</span>
          <Link to="/connexion">Se connecter</Link>
        </div>
      )}
    </>
  );
}
