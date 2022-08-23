const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer= new Engineer();

    expect(engineer.name);
    expect(engineer.id);
    expect(engineer.email);
    expect(engineer.role);
});

test('checks if name is a string', () => {
    const engineer = new Engineer();
    let name = 'Alex'

    expect(engineer.getName(name)).toBe('Alex');
});

test('checks if id is a number', () => {
    const engineer = new Engineer();
    let id = 1;

    expect(engineer.getId(id)).toBe(1);
});

test('checks if email is a string', () => {
    const engineer = new Engineer();
    let email = 'Alex@gmail.com'

    expect(engineer.getEmail(email)).toBe('Alex@gmail.com');
});

test('checks to make sure role is Engineer', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
});

test('checks if github is a string', () => {
    const engineer = new Engineer();
    let github = 'AlexStandfield';

    expect(engineer.getGithub(github)).toBe('AlexStandfield');
})