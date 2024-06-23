import { render, screen } from "@testing-library/react";
import { Counter } from "../Counter";
import '@testing-library/jest-dom';


describe("Counter Component Test", () => {

    test("render the textarea", () => {// first argument, render text area
        const { getByPlaceholderText } = render(<Counter />);//object will be destructured, // we get access to the entire counter component here
        const textArea = getByPlaceholderText("Type or paste your text");//testing if the text area is there or not
        expect(textArea).toBeTruthy();
    });
    
    test("render the character result", () => {
        const { getByTestId } = render(<Counter />);
        const charLength = getByTestId("charLength");
        expect(charLength.innerHTML).toBe("Character: 0");
    });

    test("render the word result", () => {
        render(<Counter />);
        const wordLength = screen.getByText("Word: 0");
        expect(wordLength).toBeTruthy();
    });
})// completely takes description of this block
