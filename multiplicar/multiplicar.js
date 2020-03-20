const fs = require('fs');

let listarTabla = (base, limite) => {


    let m = '';

    for (let i = 1; i <= limite; i++) {


        m += `${base} * ${i} = ${base * i}\n`;

    }
    console.log(m);


}
let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('no es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {


            data += `${base} * ${i} = ${base * i}\n`;

        }

        fs.writeFile(`tablas/tabla-del${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-de${base}-al${limite}.txt`)
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}