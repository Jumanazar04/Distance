const date = document.querySelector('.date');
const input = document.querySelector('.form-control');
const inputVal = document.querySelectorAll('.input-value');
const onFoot = document.querySelector('.on-foot');
const byCar = document.querySelector('.by-car');
const byTrain = document.querySelector('.by-train');
const byPlane = document.querySelector('.by-plane');
const form  = document.querySelector('.form');


form.addEventListener('submit', (e)=> {
    e.preventDefault()

    
    if(input.value >= 1000){
       inputVal.innerHTML = `Distance ${input.value/1000} km` 
    }
    if(input.value < 1000){
        inputVal.innerHTML = `Distance: ${input.value} m` 
     }
    

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
        const secondRes = Math.abs(second - minutRes)
        onFoot.innerHTML = `${round} hour ${minutRes.toFixed(0)} minute ${secondRes > 20 ? secondRes : ''}`
    }

    if (5000 > valInput ) {
        const sum = (valInput/50 / 60)
        byCar.innerHTML = `${sum.toFixed(2)} minute`
    }if (5000 <= valInput) {
        const sum = valInput/50 / 60 / 60 
        const round = Math.round(sum)
        const summ = sum.toFixed(2)
        const minut = summ - round
        const minutRes = Math.abs(minut * 60)
        const second = minutRes.toFixed(0)
        const secondRes = Math.abs(second - minutRes)
        byCar.innerHTML = `${round} hour ${minutRes.toFixed(0)} minute ${secondRes > 20 ? secondRes : ''}`
    }
    
    



    form.reset()
})