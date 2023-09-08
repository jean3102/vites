import { fireEvent, render, screen } from "@testing-library/react";
import Calculator from "../components/Calculator";

describe('Calculator Component', () => {
    beforeEach(() => {
      render(<Calculator/>)
    })

    test("check if render Component",() => {
      expect(screen.getByRole('table'))
    })

    test("check if sum if working", () => {
      fireEvent.click(screen.getByText('5'))
      fireEvent.click(screen.getByText('+'))
      fireEvent.click(screen.getByText('3'))
      fireEvent.click(screen.getByText('='))

      expect(screen.getByPlaceholderText('calculate')).toBe('8')
    })
});
