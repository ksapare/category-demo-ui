import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import App from "./App"
import HomePage from './pages/homepage/homepage.component';

jest.mock('./pages/homepage/homepage.component')


describe("In App.js", () => {

  test("test that root routing works", () => {

    //Arrange
    HomePage.mockImplementation( () => <div>Mocked Home Component</div>)

    //Act
    render(
    <MemoryRouter initialEntries={[{ pathname : "/"}]}>
      <App />
    </MemoryRouter>
    )

    //Assert
    expect(screen.getByText("Mocked Home Component")).toBeVisible

  })
})