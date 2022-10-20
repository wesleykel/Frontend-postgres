import {screen , render} from "@testing-library/react"
import '@testing-library/jest-dom'
import Heading from "./heading"

describe("should render heading", ()=>{

it("should display correct title of ` The Shop`", ()=>{

render(<Heading/>)

const title = screen.getByText("The Shop")
expect(title).toBeInTheDocument()
})


})