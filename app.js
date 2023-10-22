const date = document.querySelector('.date');
const input = document.querySelector('.form-control');
const inputVal = document.querySelector('.input-value');
const inputVal1 = document.querySelector('.input-value1');
const inputVal2 = document.querySelector('.input-value2');
const inputVal3 = document.querySelector('.input-value3');
const onFoot = document.querySelector('.on-foot');
const byCar = document.querySelector('.by-car');
const byTrain = document.querySelector('.by-train');
const byPlane = document.querySelector('.by-plane');
const form  = document.querySelector('.form');

prompt('Where are you go..')
alert('Ok')

function dateOne(den){
    const now = new Date()
    const day = now.getDate()
    const month = now.getMonth()
    const year = now.getFullYear()

    const monthH = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'Oktober',
        'Nowember',
        'December'
    ]
    return `${day} ${monthH[month]}, ${year}`
}

date.innerHTML = dateOne()

form.addEventListener('submit', (e)=> {
    e.preventDefault()

    function valueDis(distance){
        if(input.value >= 1000){
            distance.innerHTML = `Distance: ${(input.value/1000).toFixed(1)} km` 
        }
        if(input.value < 1000){
            distance.innerHTML = `Distance: ${input.value} m` 
        }
    }
    valueDis(inputVal)
    valueDis(inputVal1)
    valueDis(inputVal2)
    valueDis(inputVal3)
    

    const valInput = input.value
    if (5000 > valInput ) {
        const sum = (valInput/1.4 / 60)
        onFoot.innerHTML = `${sum.toFixed(2)} minute`
    }if (5000 <= valInput) {
        const sum = valInput/1.4 / 60 / 60 
        const round = Math.round(sum)
        const summ = sum.toFixed(2)
        const minut = summ - round
        const minutRes = Math.abs(minut * 60)
        const second = minutRes.toFixed(0)
        const secondRes = Math.abs(second - minutRes)*60
        if (round >= 24) {
            const res = Math.floor(round/24)
            const res1 = (round - (res * 24))
            console.log(res);
            onFoot.innerHTML = `${res} day ${res1} hour ${minutRes.toFixed(0)} minute`
        }else{
            onFoot.innerHTML = `${round} hour ${minutRes.toFixed(0)} minute `
        }
        
    }

    if (5000 > valInput ) {
        const sum = (valInput/18 / 60)
        byCar.innerHTML = `${sum.toFixed(2)} minute`
    }if (5000 <= valInput) {
        const sum = valInput/18 / 60 / 60 
        const round = sum.toFixed(0)
        const summ = sum.toFixed(2)
        const minut = summ - round
        const minutRes = Math.abs(minut * 60)
        const second = minutRes.toFixed(0)
        const secondRes = Math.abs(second - minutRes)
        byCar.innerHTML = `${round > 0 ? round + ` hour`: ''  }   ${minutRes.toFixed(0)} minute ${secondRes > 20 ? secondRes : ''}`
    }

    if (5000 > valInput ) {
        const sum = (valInput/25 / 60)
        byTrain.innerHTML = `${sum.toFixed(2)} minute`
    }if (5000 <= valInput) {
        const sum = valInput/25 / 60 / 60 
        const round = sum.toFixed(0)
        const summ = sum.toFixed(2)
        const minut = summ - round
        const minutRes = Math.abs(minut * 60)
        const second = minutRes.toFixed(0)
        const secondRes = Math.abs(second - minutRes)
        byTrain.innerHTML = `${round > 0 ? round + ` hour`: ''  }   ${minutRes.toFixed(0)} minute ${secondRes > 20 ? secondRes : ''}`
    }

    if (5000 > valInput ) {
        const sum = (valInput/125 / 60)
        byPlane.innerHTML = `${sum.toFixed(2)} minute`
    }if (5000 <= valInput) {
        const sum = valInput/125 / 60 / 60 
        const round = sum.toFixed(0)
        const summ = sum.toFixed(2)
        const minut = summ - round
        const minutRes = Math.abs(minut * 60)
        const second = minutRes.toFixed(0)
        const secondRes = Math.abs(second - minutRes)
        byPlane.innerHTML = `${round > 0 ? round + ` hour`: ''  }   ${minutRes.toFixed(0)} minute ${secondRes > 20 ? secondRes : ''}`
    }
    form.reset()
})