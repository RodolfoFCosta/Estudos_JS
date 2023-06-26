
// // const tresHora = 60 * 60 * 3 * 1000;
// // const umDia = 60 * 60 * 24 * 1000;
// // const data = new Date(0 + tresHora + umDia);
// // console.log(data.toString());

// const data = new Date('2019-04-20 20:20:59');
// // Data atual do sistema operacional

// console.log('Dia', data.getDate());
// console.log('Mes', data.getMonth());
// console.log('ano', data.getFullYear());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia Semana', data.getDay());
// console.log(data.toString());


function addZero(num) {
    return num >= 10 ? num : `0${num}`
}


function formataData(data) {
    const dia = addZero(data.getDate());
    const mes = addZero(data.getMonth() + 1);
    const ano = addZero(data.getFullYear());
    const hora = addZero(data.getHours());
    const min = addZero(data.getMinutes());
    const seg = addZero(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBR = formataData(data);
console.log(dataBR)