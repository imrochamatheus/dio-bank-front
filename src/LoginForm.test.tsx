import { render, fireEvent, screen } from "@testing-library/react";
import LoginForm from "./components/loginForm";

test("Test submitFunction", () => {
  render(<LoginForm />);

  global.alert = jest.fn();

  fireEvent.click(screen.getByText("Entrar"));

  expect(global.alert).toBeCalledWith("Seja bem vindo!");
});
