import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Calculator from './calculator.component'

describe("Check when two numbers are given", () => {

    it("the target display shows sum when clicked on Add button", () => {


        //Arrange

        //Act
        render(
            <Calculator />
        )
        
        const inputField= screen.getAllByRole("spinbutton")
        
        fireEvent.change(inputField[0], {target : { value : 3}})
        fireEvent.change(inputField[1], {target : { value : 4}})
        fireEvent.click(screen.getByRole("button"))

        //Assert
        expect(inputField[2]).toHaveValue(7)



    })
})
