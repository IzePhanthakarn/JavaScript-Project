const carBrands = [
    'Aston Martin',
    'Audi',
    'Bentley',
    'BMW',
    'BYD',
    'Chery',
    'Chevrolet',
    'Ferrari',
    'Ford',
    'GWM',
    'Haval',
    'Honda',
    'Hozon',
    'Hyundai',
    'Isuzu',
    'Jaguar',
    'Jeep',
    'Kia',
    'Lamborghini',
    'Land Rover',
    'Lexus',
    'Maserati',
    'Mazda',
    'McLaren',
    'Mercedes-Benz',
    'MG',
    'Mini',
    'Mitsubishi',
    'Nissan',
    'ORA',
    'Peugeot',
    'Porsche',
    'Rolls-Royce',
    'Ssangyong',
    'Subaru',
    'Suzuki',
    'Tata',
    'Tesla',
    'Thairung',
    'Toyota',
    'Volvo',
    'Wuling',
];
const searchElem = document.querySelector('.search');

function clearResult(){
    const ulElem = document.querySelector('.results');
    if (ulElem){
        document.body.removeChild(ulElem);
    }
}

function selectCarBrand(event){
    searchElem.value = event.target.innerText;
    clearResult();
}

function onInput(event) {
    clearResult();
    const inputText = event.target.value.toLowerCase();
    if (inputText != ""){
        const matchedCarBrands = carBrands.filter(carBrand => carBrand.toLowerCase().startsWith(inputText));
        
        const ulElem = document.createElement('ul');
        ulElem.classList.add('results');
        
        matchedCarBrands.forEach(carBrand =>{
            const liElem = document.createElement('li');
            liElem.innerText=carBrand;
            liElem.onclick = selectCarBrand;
            ulElem.appendChild(liElem);
        });
        document.body.appendChild(ulElem);
    } else if (inputText === ""){
        clearResult();
    }
}

function run() {
    searchElem.addEventListener('input', onInput)
    document.addEventListener('click', clearResult);
}

run();