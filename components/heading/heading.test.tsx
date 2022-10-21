import {screen , render} from "@testing-library/react"
import '@testing-library/jest-dom'
import Heading from "./heading"

describe("should render heading", ()=>{

it("should display correct title of ` The Community Chest`", ()=>{

render(<Heading/>)

const title = screen.getByText("The Community Chest")
const title2 = screen.getByText("Food Bank and Community Hub")
expect(title).toBeInTheDocument()
expect(title2).toBeInTheDocument()
})


})