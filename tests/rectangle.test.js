import { getRectanglePerimeter } from "../js/rectangle"

test('should calculate perimeter', () => {
    const output = getRectanglePerimeter (2, 2);
    expect(output).toBE(8);
});