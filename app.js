const birthdayDate = document.getElementById("date-birthday");
const btn = document.querySelector("button");

const numberBox = document.querySelectorAll(".matrix__item");
const spanNumber = document.querySelectorAll(".span__item");

const matrixBlock = document.querySelector(".matrix__content");

const matrixDescription = document.querySelector(".description__item");
const fullMatrixDescription = document.querySelector(".matrix__full-desc");

let totalFirstNumber;
export let sumFromSumResult = [];
// let sumFromSumResult;
export let genderCode;

let sumResult;
let lastFateNumber;
let sumFromLastFateNumber;

export const fate = await fetch("/matrix.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        return data;
    });

export let familyNumber;
export let habitsNumber;
export let temperament;
export let lifeNumber;
export let targetNumber;

function formatDate(d) {
    const day = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const year = d.getFullYear();

    // array from full birthday date
    const dateArray = String(+day.concat(month, year)).split("").map(Number);
    // console.log(dateArray);

    const initialValue = 0;
    sumResult = dateArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    // console.log(sumResult);

    sumFromSumResult.push(
        String(sumResult)
            .split("")
            .map(Number)
            .reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
    );

    if (sumFromSumResult[0] === 10) {
        sumFromSumResult[0] = 1;
    }
    if (sumFromSumResult[0] > 11) {
        // console.log("Число больше 11");
        // console.log(sumFromSumResult);
        sumFromSumResult[0] = String(sumFromSumResult[0])
            .split("")
            .map(Number)
            .reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    }
    console.log(`Число судьбы ${sumFromSumResult}`);

    totalFirstNumber = String(sumResult).split("").map(Number);
    totalFirstNumber.push(...sumFromSumResult);
    // totalFirstNumber.push(sumFromSumResult);
    // console.log(totalFirstNumber);
    // console.log(totalFirstNumber.join(""));

    const fateNumber = dateArray[0] * 2;
    lastFateNumber = sumResult - fateNumber;
    // console.log(fateNumber);
    // console.log(lastFateNumber);

    sumFromLastFateNumber = String(lastFateNumber)
        .split("")
        .map(Number)
        .reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    // console.log(sumFromLastFateNumber);

    const totalSecondNumber = String(lastFateNumber).split("").map(Number);
    totalSecondNumber.push(sumFromLastFateNumber);
    // console.log(totalSecondNumber);
    genderCode = totalSecondNumber.join("");
    // console.log(totalSecondNumber.join(""));

    const fullArray = dateArray.concat(totalFirstNumber, totalSecondNumber);
    // console.log(fullArray);

    numberBox.forEach(function (element, index) {
        //массив с повторяющимися элементами
        let number = fullArray.filter((number) => number === index + 1);
        console.log(number);
        number.length > 0
            ? document.getElementById(`${index + 1}`).insertAdjacentHTML("afterbegin", `<p class='output'>${number.join("")}</p>`)
            : document.getElementById(`${index + 1}`).insertAdjacentHTML("afterbegin", `<p class='output'>-</p>`);
    });

    // считаем колонки
    lifeNumber = calculateMatrix(4).concat(calculateMatrix(5), calculateMatrix(6)).length;
    // console.log(lifeNumber);
    // console.log(lifeNumber.length);
    matrixDescription.insertAdjacentHTML("beforeend", `<p id="life" class="description__life">Быт - ${lifeNumber}</p>`);

    targetNumber = calculateMatrix(1).concat(calculateMatrix(4), calculateMatrix(7)).length;
    // console.log(target);
    // console.log(target.length);
    matrixDescription.insertAdjacentHTML("beforeend", `<p id="target" class="description__life">Целеустремленность - ${targetNumber}</p>`);

    familyNumber = calculateMatrix(2).concat(calculateMatrix(5), calculateMatrix(8)).length;
    // console.log(familyNumber);
    // console.log(familyNumber.length);
    matrixDescription.insertAdjacentHTML("beforeend", `<p id="family" class="description__life">Семья - ${familyNumber}</p>`);

    habitsNumber = calculateMatrix(3).concat(calculateMatrix(6), calculateMatrix(9)).length;
    // console.log(habits);
    // console.log(habits.length);
    matrixDescription.insertAdjacentHTML("beforeend", `<p id="habits" class="description__life">Привычки - ${habitsNumber}</p>`);

    temperament = calculateMatrix(3).concat(calculateMatrix(5), calculateMatrix(7)).length;
    // console.log(temperament);
    // console.log(temperament.length);
    matrixDescription.insertAdjacentHTML("beforeend", `<p id="temperament" class="description__life">Темперамент - ${temperament}</p>`);
}
function calculateMatrix(elementId) {
    const itemTextContent = document.getElementById(`${elementId}`).querySelector(".output").textContent.split(",");
    if (itemTextContent[0] === "" || itemTextContent[0] === "-") {
        itemTextContent.length = 0;
    }
    return itemTextContent.join("").split("");
}
function showFateNumber(fateNumber) {
    matrixDescription.insertAdjacentHTML("afterbegin", `<p id="fate__number" class="description__life">Число судьбы  ${fateNumber}</p>`);
}
function showGenderCode(genderCode) {
    matrixDescription.insertAdjacentHTML("afterbegin", `<p id="gender__code" class="description__life">Код рода  ${genderCode}</p>`);
}
function showAdditionalNumbers() {
    matrixDescription.insertAdjacentHTML(
        "afterbegin",
        `<p id="gender__code" class="description__life">Дополнительные числа - ${sumResult}, ${sumFromSumResult},${lastFateNumber},${sumFromLastFateNumber}</p>`
    );
}
function accordeon() {
    document.querySelectorAll(".full-desc__sub-title").forEach((el) => {
        el.addEventListener("click", (e) => {
            let content = el.nextElementSibling;
            if (content.style.maxHeight) {
                document.querySelectorAll(".full-desc__text").forEach((element) => {
                    element.style.maxHeight = null;
                    el.classList.remove("open");
                });
            } else {
                document.querySelectorAll(".full-desc__text").forEach((element) => {
                    element.style.maxHeight = null;
                    content.style.maxHeight = content.scrollHeight + "px";
                    element.previousElementSibling.classList.remove("open");
                    e.target.classList.add("open");
                });
            }
        });
    });
}
// контейнер для подробного описания
const bodyDiv = document.createElement("div");
bodyDiv.classList.add("full-desc__body");

// быт
function showLifeDescription(id) {
    let number = +id.textContent.slice(-1);
    if (number > 4) number = 4;

    //подзаголовок
    const subTitle = document.createElement("button");
    subTitle.classList.add("full-desc__sub-title");
    subTitle.textContent = `${id.textContent}`;

    //  текст описания
    const desc = document.createElement("p");
    desc.classList.add("full-desc__text");
    desc.textContent = `${fate[1].lifeNumber[number]}`;
    // console.log(desc.textContent);

    bodyDiv.append(subTitle, desc);
}
// цель
function showTargetDescription(id) {
    // let number = +id.textContent.slice(-1);
    if (targetNumber > 6) targetNumber = 6;

    //подзаголовок
    const subTitle = document.createElement("button");
    subTitle.classList.add("full-desc__sub-title");
    subTitle.textContent = `${id.textContent}`;

    //  текст описания
    const desc = document.createElement("p");
    desc.classList.add("full-desc__text");
    desc.textContent = `${fate[2].targetNumber[targetNumber]}`;
    // console.log(desc.textContent);

    bodyDiv.append(subTitle, desc);
}
// семья
function showFamilyDescription(id) {
    // console.log(familyNumber);
    // let number = +id.textContent.slice(-1);
    // if (number > 6) number = 6;
    // if (number <= 2) number = 1;

    //подзаголовок
    const subTitle = document.createElement("button");
    subTitle.classList.add("full-desc__sub-title");
    subTitle.textContent = `${id.textContent}`;

    //  текст описания
    const desc = document.createElement("p");
    desc.classList.add("full-desc__text");
    desc.textContent = `${fate[3].familyNumber[familyNumber]}`;
    // console.log(desc.textContent);

    bodyDiv.append(subTitle, desc);
}
// привычки
function showHabitsDescription(id) {
    let number = +id.textContent.slice(-1);
    if (number > 6) number = 6;
    if (number === 0) number = 1;

    //подзаголовок
    const subTitle = document.createElement("button");
    subTitle.classList.add("full-desc__sub-title");
    subTitle.textContent = `${id.textContent}`;

    //  текст описания
    const desc = document.createElement("p");
    desc.classList.add("full-desc__text");
    desc.textContent = `${fate[4].habitsNumber[number]}`;
    // console.log(desc.textContent);

    bodyDiv.append(subTitle, desc);
}
// число судьбы
function showFateDescription(fateNumber) {
    //общий контейнер
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("full-desc__item");

    //Заголовок контейнера с описанием
    const title = document.createElement("h2");
    title.classList.add("full-desc__title");
    title.textContent = "Число судьбы";

    // контейнер для подробного описания
    // const bodyDiv = document.createElement("div");
    // bodyDiv.classList.add("full-desc__body");

    //подзаголовок
    const subTitle = document.createElement("button");
    subTitle.classList.add("full-desc__sub-title");
    subTitle.textContent = `Число судьбы ${fateNumber}`;

    //подзаголовок 2
    const subTitle2 = document.createElement("button");
    subTitle2.classList.add("full-desc__sub-title");
    subTitle2.textContent = `Значение числа ${fateNumber} в судьбе человека`;

    //подзаголовок 3
    const subTitle3 = document.createElement("button");
    subTitle3.classList.add("full-desc__sub-title");
    subTitle3.textContent = `Число судьбы ${fateNumber} у мужчин`;

    //подзаголовок 4
    const subTitle4 = document.createElement("button");
    subTitle4.classList.add("full-desc__sub-title");
    subTitle4.textContent = `Число судьбы ${fateNumber} у женщин`;

    //  текст описания
    const text = document.createElement("p");
    text.classList.add("full-desc__text");
    text.textContent = `${fate[0].fateNumber[fateNumber].number}`;

    //  текст описания
    const text2 = document.createElement("p");
    text2.classList.add("full-desc__text");
    text2.textContent = `${fate[0].fateNumber[fateNumber].numberInFate}`;

    //  текст описания
    const text3 = document.createElement("p");
    text3.classList.add("full-desc__text");
    text3.textContent = `${fate[0].fateNumber[fateNumber].numberForMen}`;

    //  текст описания
    const text4 = document.createElement("p");
    text4.classList.add("full-desc__text");
    text4.textContent = `${fate[0].fateNumber[fateNumber].numberForWomen}`;

    //вставляем все в кучу

    bodyDiv.append(subTitle, text, subTitle2, text2, subTitle3, text3, subTitle4, text4);
    mainDiv.append(title, bodyDiv);

    fullMatrixDescription.append(mainDiv);

    // console.log(fate[0].fateNumber[fateNumber].number);
}
/// чистка контента
function cleaner() {
    const infoBox = document.querySelectorAll(".output");
    infoBox.forEach((element) => {
        element.textContent = "";
    });
    const description = document.querySelectorAll(".description__life");
    description.forEach((element) => {
        element.remove();
    });
    const x = document.querySelector(".matrix__full-desc");
    while (x.firstChild) {
        x.removeChild(x.firstChild);
    }
    while (bodyDiv.firstChild) {
        bodyDiv.removeChild(bodyDiv.firstChild);
    }
}
/// вставка элементов
function showElements() {
    // Характер
    let character = document.getElementById("1").querySelector(".output").textContent;
    if (character === "-") character = 0;
    character = +character;
    // console.log(character);

    let type = String(character).length % 2;
    type === 0 ? (type = "secondType") : (type = "firstType");
    // console.log(type);

    // console.log(Number(document.getElementById("8").querySelector(".output").textContent));

    //подзаголовок
    const subTitle = document.createElement("button");
    subTitle.classList.add("full-desc__sub-title");
    subTitle.textContent = `Ваш характер - ${character}`;

    //  текст описания
    const desc = document.createElement("div");
    desc.classList.add("full-desc__text");
    const text = document.createElement("p");
    text.classList.add("desc__text");
    text.textContent = `${fate[5].character[character].value}`;

    // пример
    const example = document.createElement("p");
    example.classList.add("desc__text");
    example.textContent = `${fate[5].character[character].example}`;

    // Блок тип характера
    const characterType = document.createElement("div");
    characterType.classList.add("character__type");
    // Заголовок
    const characterTitle = document.createElement("h4");
    characterTitle.classList.add("character__title");
    characterTitle.textContent = "Тип восприятия";
    // описание типа характера
    const characterTypeDescription = document.createElement("p");
    characterTypeDescription.textContent = `${fate[5].character[type]}`;

    characterType.append(characterTitle, characterTypeDescription);
    desc.append(text, example, characterType);

    // Энергия

    let energy = document.getElementById("2").querySelector(".output").textContent;
    if (energy === "-") energy = 0;
    energy = +energy;
    // console.log(energy);

    //подзаголовок
    const energyTitle = document.createElement("button");
    energyTitle.classList.add("full-desc__sub-title");
    energyTitle.textContent = `Ваша энергия - ${energy}`;

    //  контейнер с описанием
    const descEnergy = document.createElement("div");
    descEnergy.classList.add("full-desc__text");
    // описание
    const energyValue = document.createElement("p");
    energyValue.classList.add("desc__text");
    energyValue.textContent = `${fate[6].energy[energy].value}`;

    const recommendationTitle = document.createElement("h4");
    recommendationTitle.classList.add("recommendation__title");
    recommendationTitle.textContent = "Рекомендации";
    // описание
    const energyRecommendation = document.createElement("p");
    energyRecommendation.classList.add("desc__text");
    energyRecommendation.textContent = `${fate[6].energy[energy].recommendations}`;

    const marriageTitle = document.createElement("h4");
    marriageTitle.classList.add("marriage__title");
    marriageTitle.textContent = "В браке";
    // описание
    const energyMarriage = document.createElement("p");
    energyMarriage.classList.add("desc__text");
    energyMarriage.textContent = `${fate[6].energy[energy].marriage}`;

    descEnergy.append(energyValue, recommendationTitle, energyRecommendation, marriageTitle, energyMarriage);

    // Интерес

    let interest = document.getElementById("3").querySelector(".output").textContent;
    if (interest === "-") interest = 0;
    if (interest > 33333) interest = 33333;
    interest = +interest;
    // console.log(interest);

    //подзаголовок
    const interestTitle = document.createElement("button");
    interestTitle.classList.add("full-desc__sub-title");
    interestTitle.textContent = `Ваша интеллект - ${interest}`;

    //  контейнер с описанием
    const descInterest = document.createElement("div");
    descInterest.classList.add("full-desc__text");
    // описание
    const interestValue = document.createElement("p");
    interestValue.classList.add("desc__text");
    interestValue.textContent = `${fate[7].interest[interest]}`;

    descInterest.append(interestValue);

    // Здоровье

    let health = document.getElementById("4").querySelector(".output").textContent;
    if (health === "-") health = 0;
    // console.log(health);

    //подзаголовок
    const healthTitle = document.createElement("button");
    healthTitle.classList.add("full-desc__sub-title");
    healthTitle.textContent = `Ваше здоровье - ${health}`;

    //  контейнер с описанием
    const descHealth = document.createElement("div");
    descHealth.classList.add("full-desc__text");

    // описание
    const healthDescription = document.createElement("p");
    healthDescription.classList.add("desc__text");

    if (health === 0) {
        healthDescription.textContent = `${fate[8].health[health].value}`;

        // создаем список
        const list = document.createElement("ul");
        list.classList.add("desc__list");

        // создаем пункт списка
        const item1 = document.createElement("li");
        item1.classList.add("desc__item");
        item1.textContent = `${fate[8].health[health].first}`;
        // создаем пункт списка
        const item2 = document.createElement("li");
        item2.classList.add("desc__item");
        item2.textContent = `${fate[8].health[health].second}`;
        // создаем пункт списка
        const item3 = document.createElement("li");
        item3.classList.add("desc__item");
        item3.textContent = `${fate[8].health[health].third}`;
        // создаем пункт списка
        const item4 = document.createElement("li");
        item4.classList.add("desc__item");
        item4.textContent = `${fate[8].health[health].fourth}`;

        list.append(item1, item2, item3, item4);
        descHealth.append(healthDescription, list);
        // healthDescription.append(list);
    } else {
        healthDescription.textContent = `${fate[8].health[health]}`;
        descHealth.append(healthDescription);
    }
    // console.log(healthDescription);
    // console.log(fate[8].health[health].first);

    // Логика

    let logic = document.getElementById("5").querySelector(".output").textContent;
    if (logic === "-") logic = 0;

    //подзаголовок
    const logicTitle = document.createElement("button");
    logicTitle.classList.add("full-desc__sub-title");
    logicTitle.textContent = `Ваша логика - ${logic}`;

    //  контейнер с описанием
    const logicDesc = document.createElement("div");
    logicDesc.classList.add("full-desc__text");

    // описание
    const logicValue = document.createElement("p");
    logicValue.classList.add("desc__text");
    logicValue.textContent = `${fate[9].logics[logic]}`;

    logicDesc.append(logicValue);

    // Труд

    let work = document.getElementById("6").querySelector(".output").textContent;
    if (work === "-") work = 0;

    //подзаголовок
    const workTitle = document.createElement("button");
    workTitle.classList.add("full-desc__sub-title");
    workTitle.textContent = `Ваш труд - ${work}`;

    if (work > 6666) work = 6666;
    //  контейнер с описанием
    const workDesc = document.createElement("div");
    workDesc.classList.add("full-desc__text");

    // описание
    const workValue = document.createElement("p");
    workValue.classList.add("desc__text");
    workValue.textContent = `${fate[10].work[work]}`;

    workDesc.append(workValue);

    // Удача

    let luck = document.getElementById("7").querySelector(".output").textContent;
    if (luck === "-") luck = 0;

    //подзаголовок
    const luckTitle = document.createElement("button");
    luckTitle.classList.add("full-desc__sub-title");
    luckTitle.textContent = `Ваша удача - ${luck}`;

    if (luck > 7777) luck = 7777;
    //  контейнер с описанием
    const luckDesc = document.createElement("div");
    luckDesc.classList.add("full-desc__text");

    // описание
    const luckValue = document.createElement("p");
    luckValue.classList.add("desc__text");
    luckValue.textContent = `${fate[11].luck[luck]}`;

    luckDesc.append(luckValue);

    // Долг

    let duty = document.getElementById("8").querySelector(".output").textContent;
    if (duty === "-") duty = 0;

    //подзаголовок
    const dutyTitle = document.createElement("button");
    dutyTitle.classList.add("full-desc__sub-title");
    dutyTitle.textContent = `Ваш долг - ${duty}`;

    if (duty > 8888) duty = 8888;
    //  контейнер с описанием
    const dutyDesc = document.createElement("div");
    dutyDesc.classList.add("full-desc__text");

    // описание
    const dutyValue = document.createElement("p");
    dutyValue.classList.add("desc__text");
    dutyValue.textContent = `${fate[12].duty[duty]}`;

    dutyDesc.append(dutyValue);

    // Память

    let memory = document.getElementById("9").querySelector(".output").textContent;
    if (memory === "-") memory = 0;

    //подзаголовок
    const memoryTitle = document.createElement("button");
    memoryTitle.classList.add("full-desc__sub-title");
    memoryTitle.textContent = `Ваша память - ${memory}`;

    if (memory > 9999) memory = 9999;
    //  контейнер с описанием
    const memoryDesc = document.createElement("div");
    memoryDesc.classList.add("full-desc__text");

    // описание
    const memoryValue = document.createElement("p");
    memoryValue.classList.add("desc__text");
    memoryValue.textContent = `${fate[13].memory[memory]}`;

    memoryDesc.append(memoryValue);

    const coincidencesButton = document.createElement("button");
    coincidencesButton.classList.add("coincidences__btn");
    coincidencesButton.textContent = "Показать сочетания секторов ";

    // сборка

    bodyDiv.append(
        subTitle,
        desc,
        energyTitle,
        descEnergy,
        interestTitle,
        descInterest,
        healthTitle,
        descHealth,
        logicTitle,
        logicDesc,
        workTitle,
        workDesc,
        luckTitle,
        luckDesc,
        dutyTitle,
        dutyDesc,
        memoryTitle,
        memoryDesc,
        coincidencesButton
    );
}

///
const popup = document.querySelector(".popup");
const btnCloseModal = document.querySelector(".close__popup");
export const popupContent = document.querySelector(".popup__content");
export const lockPadding = document.querySelectorAll(".lock-padding");
export const popupBody = document.querySelector(".popup__body");

export const container = document.querySelector(".content-item__description");

import { conditions } from "./js/conditions.js";

function showСoincidences() {
    document.querySelector(".coincidences__btn").addEventListener("click", function () {
        popup.classList.add("open");

        // container.innerHTML = "";
        // document.querySelectorAll(".code").forEach((item) => item.removeChild(firstChild));

        document.querySelectorAll(".output").forEach((el) => {
            el.textContent === "-" ? (el.textContent = "") : null;
            // console.log(el);
        });
    });
}

btnCloseModal.addEventListener("click", popupClose);
function popupClose() {
    popup.classList.remove("open");
}

btn.addEventListener("click", function () {
    let d = new Date(birthdayDate.value);

    cleaner();

    sumFromSumResult.length = 0;
    // sumFromSumResult = 0;

    if (birthdayDate.value !== "") {
        //включаем видимость блока
        matrixBlock.style.display = "block";
        // чистим контент в инпуте
        birthdayDate.value = "";
        // удаляем класс ошибки
        birthdayDate.classList.remove("error");
        formatDate(d);
        // показываем число судьбы
        showFateNumber(sumFromSumResult);
        // показываем дополнительные числа
        showAdditionalNumbers();
        // показываем описание числа судьбы
        showFateDescription(sumFromSumResult);
        // показываем описание быта
        showLifeDescription(life);
        // показываем описание цели
        showTargetDescription(target);
        // показываем описание семьи
        showFamilyDescription(family);
        // показываем описание привычек
        showHabitsDescription(habits);

        showElements();
        accordeon();
        showСoincidences();
        conditions();
    } else {
        // удаляем класс ошибки
        birthdayDate.classList.add("error");
        // скрываем блок
        matrixBlock.style.display = "none";
    }
});
