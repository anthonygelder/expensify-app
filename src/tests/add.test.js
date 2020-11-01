const add = (a,b) => a + b

test('should add two numbers', () => {
    const result = add(2,2)
    expect(result).toBe(4)
})


const greeting = (name) => `hello ${name}`

test('should return name in greeting', () => {
    const result = greeting('mike')
    expect(result).toBe('hello mike')
})