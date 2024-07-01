import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  console.info(currentUser);
  const isUserConnected = async () => {
    try {
      // Appel à l'API pour demander une connexion
      const response = await fetch(
        `http://localhost:3310/api/users/is-connected`,
        {
          credentials: "include", // envoyer / recevoir le cookie à chaque requête
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setCurrentUser(true);
      } else {
        // Log des détails de la réponse en cas d'échec
        console.info(response);
        setCurrentUser(null);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      // Appel à l'API pour demander une connexion
      const response = await fetch(`http://localhost:3310/api/users/logout`, {
        credentials: "include", // envoyer / recevoir le cookie à chaque requête
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setCurrentUser(null);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };

  useEffect(() => {
    isUserConnected();
  }, []);

  const memo = useMemo(
    () => ({ currentUser, setCurrentUser, logout }),

    [currentUser]
  );

  return <UserContext.Provider value={memo}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUserContext = () => useContext(UserContext);
