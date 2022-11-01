import * as React from "react";

import { toast } from "react-toastify";
import { getUser } from "../../api";
import { useNavigate } from "react-router-dom";
import { ILoginData, ILoginContext } from "../../@types/login";

interface IProps {
  children: React.ReactNode;
}

export const LoginContext = React.createContext<ILoginContext>(
  {} as ILoginContext
);

const LoginProvider: React.FC<IProps> = ({ children }) => {
  const navigate = useNavigate();

  const login = async ({ email, password }: ILoginData): Promise<void> => {
    try {
      const {
        data: [user],
      } = await getUser(email);

      if (user && user.password === password) {
        toast.success("Login realizado com sucesso!");
        localStorage.setItem(
          "@user",
          JSON.stringify({
            name: user.first_name + " " + user.last_name,
            email: user.email,
          })
        );

        navigate("/home");
      } else {
        toast.error("Login ou senha incorretos!");
      }
    } catch (error) {
      toast.error("Falha ao realizar login, tente novamente!");
    }
  };
  return (
    <LoginContext.Provider value={{ login }}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;

export const useLogin = () => React.useContext(LoginContext);
