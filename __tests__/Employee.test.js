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
    let name = 'Alex'

    expect(employee.getName(name)).toBe('Alex');
});

test('checks if id is a number', () => {
    const employee = new Employee();
    let id = 1;

    expect(employee.getId(id)).toBe(1);
});

test('checks if email is a string', () => {
    const employee = new Employee();
    let email = 'Alex@gmail.com'

    expect(employee.getEmail(email)).toBe('Alex@gmail.com');
});

test('checks to make sure role is Employee', () => {
    const employee = new Employee();

    expect(employee.getRole()).toBe('Employee');
});