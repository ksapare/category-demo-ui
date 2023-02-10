import Header from './header.component'

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe("Header component", () => {

    it("should render correctly", () => {


        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
            )
        expect(screen.getAllByRole('link')).toMatchSnapshot()
    
    })
})