import axios, { AxiosResponse } from "axios";

import { IUser } from "./@types/user";

const BASE_URL = "http://localhost:4000";

export const addUser = async (userData: IUser): Promise<AxiosResponse> => {
  return await axios.post(`${BASE_URL}/users`, userData);
};

export const getUser = async (email: string): Promise<AxiosResponse> => {
  return await axios.get(`${BASE_URL}/users?email=${email}`);
};
