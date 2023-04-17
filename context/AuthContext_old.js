import { createContext, useState, useEffect, useContext, useReducer } from "react";
import { auth } from "../firebase";

class Action {
  type;
  data;
  constructor(type, data) {
    this.type = type;
    this.data = data;
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case "VIEW":
      return new Action("view", action.payload);
    case "VIEWW":
      return new Action("vieww", action.payload);
    case "EDIT":
      return new Action("edit", action.payload);
    case "CREATE":
      return new Action("create", action.payload);
    case "DELETE":
      return new Action("delete", action.payload);
    default:
      break;
  }
};

const initialContext = {
  user: null,
  setUser: (user) => { },
};

const AuthContext = createContext(initialContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialContext.user);
  const [state, dispatch] = useReducer(reducer, new Action("view", {}));
  const [development, setDevelopment] = useState("bodasdehoy");

  useEffect(() => {
    auth().onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        // Setear en localStorage token JWT
        localStorage.setItem('tokenAdminBodas', (await user?.getIdTokenResult())?.token)
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, state, dispatch, development, setDevelopment }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthContextProvider = () => useContext(AuthContext)
export { AuthProvider, AuthContextProvider };