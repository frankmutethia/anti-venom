import { render } from "@testing-library/react";
import { Counter } from "../Counter";


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
})// completely takes description of this block
