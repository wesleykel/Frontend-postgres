import { render, screen  } from '@testing-library/react'
//import userEvent from "@testing-library/user-event"
import Home from '../pages/index'
import '@testing-library/jest-dom'
import { UserProvider } from '@auth0/nextjs-auth0';

describe('Home', () => {
  it('renders a login text', () => {
    render(<UserProvider><Home /></UserProvider>)

    const login = screen.getByText('Login') 
    expect(login).toBeInTheDocument()
  })
});
 /* it("once Login is clicked is renders logout",  ()=>{

    render(<UserProvider><Home /></UserProvider>)

    const login = screen.getByText('Login') 

    userEvent.click(login)

    const logout =  screen.getByText("Logout")
expect(logout).toBeInTheDocument()
  })
})*/


