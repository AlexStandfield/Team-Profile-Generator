const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee();

    expect(employee.name);
    expect(employee.id);
    expect(employee.email);
    expect(employee.role);
});

test('checks if name is a string', () => {
    const employee = new Employee();

    expect(employee.getName()).toEqual(expect.any(String));
});

test('checks if id is a number', () => {
    const employee = new Employee();

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('checks if email is a string', () => {
    const employee = new Employee();

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('checks to make sure role is Employee', () => {
    const employee = new Employee();

    expect(employee.getRole()).toBe('Employee');
});