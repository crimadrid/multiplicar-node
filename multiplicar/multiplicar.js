const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducio ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} X ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });

    })
}

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        console.log('====================='.green);
        console.log(`==tabla de ${base}===`.green);
        console.log('====================='.green);

        if (!Number(base)) {
            reject(`El valor introducio ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducio ${limite} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} X ${i} = ${base*i}\n`;
        }


        resolve(data);
    })

}

module.exports = {
    crearArchivo,
    listarTabla
}