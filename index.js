// Объявляем все переменные
const mileageInput = document.querySelector('#mileage-input');
const mileageRange = document.querySelector('#mileage-range');
const inputs = document.querySelectorAll('input');

const radioFuel = document.querySelectorAll('input[name="fuel"]');
const radioAge = document.querySelectorAll('input[name="age"]');
const radioHorsepower = document.querySelectorAll('input[name="horsepower"]');

const seat = document.querySelector('input[name="seat"]');
const carplay = document.querySelector('input[name="carplay"]');
const door = document.querySelector('input[name="door"]');

const basePrice = 10;
const totalPriceElement = document.querySelector('#total-price');

// Связываем инпут с ползунком
mileageRange.addEventListener('input', function () {
	mileageInput.value = mileageRange.value;
});

mileageInput.addEventListener('input', function () {
	mileageRange.value = mileageInput.value;
});

// Основная функция
let calculate = () => {
	let totalPrice = 2000000 - basePrice * parseInt(mileageInput.value); 

	for (const radio of radioFuel) {
		if (radio.checked) {
			totalPrice = totalPrice * parseFloat(radio.value); 
		}
	}

	for (const radio of radioAge) {
		if (radio.checked) {
			totalPrice = totalPrice * parseFloat(radio.value); 
		}
	}

	for (const radio of radioHorsepower) {
		if (radio.checked) {
			totalPrice = totalPrice * parseFloat(radio.value); 
		}
	}

	if (seat.checked) {
        totalPrice = totalPrice + parseFloat(seat.value);
	}

	if (carplay.checked) {
		totalPrice = totalPrice + parseFloat(carplay.value); 
	}

	if (door.checked) {
		totalPrice = totalPrice + parseFloat(door.value); 
	}

    // Красивый формат для цены
	const formatter = new Intl.NumberFormat('ru');
	totalPriceElement.innerText = formatter.format(totalPrice);
}

calculate();

// Функция выполняется кадлый раз, когда меняется любой из инпутов
for (const input of inputs) {
	input.addEventListener('input', function () {
		calculate();
	});
}