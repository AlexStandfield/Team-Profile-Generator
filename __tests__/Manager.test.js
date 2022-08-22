const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager();

    expect(manager.name);
    expect(manager.id);
    expect(manager.email);
    expect(manager.officeNumber);
    expect(manager.role);
});

test('checks getName returns name', () => {
    const manager = new Manager();
    let name = 'Alex';

    expect(manager.getName(name)).toBe('Alex');
});

test('checks getId returns id', () => {
    const manager = new Manager();
    let id = 1;

    expect(manager.getId(id)).toBe(1);
});

test('checks if getEmail returns email', () => {
    const manager = new Manager();
    let email = 'Alex@gmail.com'

    expect(manager.getEmail(email)).toBe('Alex@gmail.com');
});

test('checks if getOfficeNumber is officeNumber', () => {
    const manager = new Manager();
    let officeNumber = 1;

    expect(manager.getOfficeNumber(officeNumber)).toBe(1);
});

test('checks to make sure role is Manager', () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
});