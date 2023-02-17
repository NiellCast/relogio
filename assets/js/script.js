const horario = document.querySelector("#hora-content")
const diaDaSemanaTag = document.querySelector("#dia-da-semana-content")
const diadoMesTag = document.querySelector("#dia-do-mes-content")
const mesTag = document.querySelector("#mes-content")
let relogio


function carregarDados() {
    getHorario()
    getDate()
}


function getHorario() {
    setInterval(() => {
        relogio = new Date()

        horario.innerHTML = `${relogio.getHours()}:${fixTime(relogio.getMinutes())}:${fixTime(relogio.getSeconds())}`
    }, 1000)
}


function fixTime(time) {
    if (time < 10) {
        return `0${time}`
    }

    return time
}


function getDate() {
    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    let data
    let indexDoDia
    let diaDoMes
    let indexDoMes

    setInterval(() => {
        data = new Date()
        
        indexDoDia = data.getDay()
        diaDoMes = data.getDate()
        indexDoMes = data.getMonth()

        diaDaSemanaTag.innerHTML = diasDaSemana[indexDoDia]
        diadoMesTag.innerHTML = diaDoMes
        mesTag.innerHTML = meses[indexDoMes]
    }, 1000)
}