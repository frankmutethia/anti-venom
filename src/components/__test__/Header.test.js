import { Header } from '../Header.js';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

describe("Test Header Component", ()=>{
    test("heading text",()=>{
        const heading = screen.getByTestingId('heading');
        expect(heading.innerHTML).toBe('World Counter');
    });

    test("subheading the subheading text",()=>{
        render(<Header subHeading= "Free online character and world count tool."/>);
        const subheading = screen.getByTestingId('subheading');
        expect(subheading.innerHTML).toBe("Free online character and world count tool.");
    })
})
