const generateEmployee = employeeArr => {
    console.log(employeeArr);
    return `
        ${employeeArr.map(({name, id, email, role}) => {
            return `
                <card class="team-member">
                    <div class="team-member-head">
                        <h2>${name}</h2>
                        <h3>${role}</h3>
                    </div>
                    <section>
                        <div>
                            <p>ID: ${id}</p>
                        </div>
                        <div>
                            <p>Email: <a href="mailto: ${email}">${email}</a></p>
                        </div>
                    </section>
                </card>
            `
        }).join('')}
    `
}

const generateManager = managerArr => {
    console.log(managerArr);

    return `
        ${managerArr.map(({name, id, email, role, officeNumber}) => {
            return `
                <card class="team-member">
                    <div class="team-member-head">
                        <h2>${name}</h2>
                        <h3>${role}</h3>
                    </div>
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
                </card>
            `
        }).join('')}
    `
}

const generateEngineer = engineerArr => {
    console.log(engineerArr);
    return `
        ${engineerArr.map(({name, id, email, role, github}) => {
            return `
                <card class="team-member">
                    <div class="team-member-head">
                        <h2>${name}</h2>
                        <h3>${role}</h3>
                    </div>
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
                </card>
            `
        }).join('')}
    `
}

const generateIntern = internArr => {
    console.log(internArr);
    return `
        ${internArr.map(({name, id, email, role, school}) => {
            return `
                <card class="team-member">
                    <div class="team-member-head">
                        <h2>${name}</h2>
                        <h3>${role}</h3>
                    </div>
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
                </card>
            `
        }).join('')}
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
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Generator</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>

    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <main class="row flex-wrap">
            ${generateManager(managerArr)}
            ${generateEmployee(employeeArr)}
            ${generateEngineer(engineerArr)}
            ${generateIntern(internArr)}
        </main>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}

module.exports = generatePage;