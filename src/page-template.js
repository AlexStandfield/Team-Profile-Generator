const generateEmployee = employeeArr => {
    console.log(employeeArr);
    return `
        <card>
            ${employeeArr.map(({name, id, email, role}) => {
                    return `
                            <header>
                                <h2>${name}</h2>
                                <h3>${role}</h3>
                            </header>
                            <section>
                                <div>
                                    <p>ID: ${id}</p>
                                </div>
                                <div>
                                    <p>Email: <a href="mailto: ${email}">${email}</a></p>
                                </div>
                            </section>
                        `
                })}   
        </card>
    `
}

const generateManager = managerArr => {
    console.log(managerArr);

    return `
        <card>
                ${managerArr.map(({name, id, email, role, officeNumber}) => {
                    return `
                        <header>
                            <h2>${name}</h2>
                            <h3>${role}</h3>
                        </header>
                        <section>
                            <div>
                                <p>ID: ${id}</p>
                            </div>
                            <div>
                                <p>Email: <a href="mailto: ${email}">${email}</a></p>
                            </div>
                            <div>
                                <p>Office Number: ${officeNumber}</p>
                            </div>
                        </section>
                    `
                })}
        </card>
    `
}

const generateEngineer = engineerArr => {
    console.log(engineerArr);
    return `
        <card>
            ${engineerArr.map(({name, id, email, role, github}) => {
                    return `
                        <header>
                            <h2>${name}</h2>
                            <h3>${role}</h3>
                        </header>
                        <section>
                            <div>
                                <p>ID: ${id}</p>
                            </div>
                            <div>
                                <p>Email: <a href="mailto: ${email}">${email}</a></p>
                            </div>
                            <div>
                                <p>Github: <a>href="https://github.com/${github}"</a>${github}</p>
                            </div>
                        </section>
                    `
                })}
        </card>
    `
}

const generateIntern = internArr => {
    console.log(internArr);
    return `
        <card>
            ${internArr.map(({name, id, email, role, school}) => {
                    return `
                        <header>
                            <h2>${name}</h2>
                            <h3>${role}</h3>
                        </header>
                        <section>
                            <div>
                                <p>ID: ${id}</p>
                            </div>
                            <div>
                                <p>Email: <a href="mailto: ${email}">${email}</a></p>
                            </div>
                            <div>
                                <p>School: ${school}</p>
                            </div>
                        </section>
                    `
                })}
        </card>
    `
}

const generatePage = templateData => {
    const employeeArr = templateData[0];
    const managerArr = templateData[1];
    const engineerArr = templateData[2];
    const internArr = templateData[3];

    return `
    <!DOCTYPE html> 
    <html lang="en"> 

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Generator</title>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <main>
            ${generateManager(managerArr)}
            ${generateEmployee(employeeArr)}
            ${generateEngineer(engineerArr)}
            ${generateIntern(internArr)}
        </main>
    </body>
    </html>
    `
}

module.exports = generatePage;