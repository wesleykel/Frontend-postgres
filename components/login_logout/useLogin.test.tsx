import {screen , render} from "@testing-library/react"
import '@testing-library/jest-dom'
import UserLogin from "./userLogin"
import { UserProvider } from '@auth0/nextjs-auth0';



describe("should render intial Login status", ()=>{

it("should display correct value `Login`", ()=>{

render(<UserProvider><UserLogin/></UserProvider>)

const loginText = screen.getByText("Login")

expect(loginText).toBeInTheDocument()
expect(loginText).toBeDefined()
})


})