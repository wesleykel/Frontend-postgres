import {screen , render} from "@testing-library/react"
import '@testing-library/jest-dom'
import NavTitle from "./navTitle"

describe("should render heading", ()=>{

it("should display correct text `The Community Chest`", ()=>{

render(<NavTitle/>)

const title = screen.getByText("TheCommunityChest")

expect(title).toBeInTheDocument()

})


})