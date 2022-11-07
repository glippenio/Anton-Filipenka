import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle"

test('should calculate perimeter', () => {
    const output = getRectanglePerimeter (2, 2);
    expect(output).toBe(8);
});

test('should calculate rectangle area', ()=> {
    const output = getRectangleArea (2, 2);
    expect(output).toBe(4);
});

test('should return the rectangle info', ()=> {
    console.log = jest.fn();
    getRectangleInfo(3, 3);
    expect(console.log.mock.calls[0][0]).toBe(`The perimeter of a rectangle is 12 and the area is 9`);
});