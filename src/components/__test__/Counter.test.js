import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "../Counter";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";


describe("Counter Component Test", () => {

    // test("render the textarea", () => {// first argument, render text area
    //     const { getByPlaceholderText } = render(<Counter />);//object will be destructured, // we get access to the entire counter component here
    //     const textArea = getByPlaceholderText("Type or paste your text");//testing if the text area is there or not
    //     expect(textArea).toBeTruthy();
    // });
    
    // test("render the character result", () => {
    //     const { getByTestId } = render(<Counter />);
    //     const charLength = getByTestId("charLength");
    //     expect(charLength.innerHTML).toBe("Character: 0");
    // });

    // test("render the word result", () => {
    //     render(<Counter />);
    //     const wordLength = screen.getByText("Word: 0");
    //     expect(wordLength).toBeTruthy();
    // });

    test("change textarea and update results", () => {
    render(<Counter/>);
    const textArea= screen.getByTestId("textArea");
    const clearBtn= screen.getAllByTestId("clearBtn");
    const charLength= screen.getByTestId("charLength");
    const wordLength= screen.getByTestId("wordLength");

    userEvent.type(textArea, "Frankie");
    expect(charLength.innerHTML).toBe("Character: 7");
    expect(wordLength.innerHTML).toBe("Word: 1");

    fireEvent.click("clearBtn[0]");
    expect(charLength.innerHTML).toBe("Character: 0");
    expect(wordLength.innerHTML).toBe("Word: 0");
    });

});// completely takes description of this block
