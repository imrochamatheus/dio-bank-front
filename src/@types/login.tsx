export type ILoginData = {
  email: string;
  password: string;
};

export type ILoginContext = {
  login: (userData: ILoginData) => void;
};
