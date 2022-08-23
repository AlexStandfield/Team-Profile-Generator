const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern= new Intern();

    expect(intern.name);
    expect(intern.id);
    expect(intern.email);
    expect(intern.role);
});

test('checks if name is a string', () => {
    const intern = new Intern();
    let name = 'Alex'

    expect(intern.getName(name)).toBe('Alex');
});

test('checks if id is a number', () => {
    const intern = new Intern();
    let id = 1;

    expect(intern.getId(id)).toBe(1);
});

test('checks if email is a string', () => {
    const intern = new Intern();
    let email = 'Alex@gmail.com'

    expect(intern.getEmail(email)).toBe('Alex@gmail.com');
});

test('checks to make sure role is intern', () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
});

test('checks if github is a string', () => {
    const intern = new Intern();
    let school = 'University of Utah';

    expect(intern.getSchool(school)).toBe('University of Utah');
})