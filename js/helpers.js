import { mainDescriptionNumbers, data } from "./data.js";
import { desc, bodyDiv, matrixDescription, fullMatrixDescription, container, numberBox, fullArray } from "../app.js";
import { fate } from "./service.js";

export const accordeon = () => {
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
};
export const popupCleaner = () => {
    desc.forEach((item) => item.querySelectorAll("p").forEach((item) => (item.textContent = "")));
    desc.forEach((item) => item.querySelectorAll("h5").forEach((item) => (item.textContent = "")));
    desc.forEach((item) => item.querySelectorAll(".content-item__code-text").forEach((item) => item.classList.add("del")));
};
export const calculateMatrix = (elementId) => {
    const itemTextContent = document.getElementById(`${elementId}`).querySelector(".output").textContent.split(",");
    if (itemTextContent[0] === "" || itemTextContent[0] === "-") {
        itemTextContent.length = 0;
    }
    return itemTextContent.join("").split("");
};
export const showFateNumber = (fateNumber) => {
    matrixDescription.insertAdjacentHTML("afterbegin", `<p id="fate__number" class="description__life">Число судьбы - ${data.sumFromSumResult}</p>`);
};
export const showAdditionalNumbers = () => {
    matrixDescription.insertAdjacentHTML(
        "afterbegin",
        `<p id="gender__code" class="description__life">Дополнительные числа - ${data.sumResult}, ${data.sumFromSumResult}, ${data.lastFateNumber}, ${data.sumFromLastFateNumber}</p>`
    );
};
export const showLifeDescription = (id) => {
    let number = +id.textContent.slice(-1);
    if (mainDescriptionNumbers.lifeNumber > 4) number = 4;

    const subTitle = document.createElement("button");
    subTitle.classList.add("full-desc__sub-title");
    subTitle.textContent = `${id.textContent}`;

    const desc = document.createElement("p");
    desc.classList.add("full-desc__text");
    desc.textContent = `${fate[1].lifeNumber[number]}`;

    bodyDiv.append(subTitle, desc);
};
export const showFamilyDescription = (id) => {
    let number = +id.textContent.slice(-1);
    if (mainDescriptionNumbers.familyNumber < 3) number = 1;

    const subTitle = document.createElement("button");
    subTitle.classList.add("full-desc__sub-title");
    subTitle.textContent = `${id.textContent}`;

    const desc = document.createElement("p");
    desc.classList.add("full-desc__text");
    desc.textContent = `${fate[3].familyNumber[number]}`;

    bodyDiv.append(subTitle, desc);
};
export const showTargetDescription = (id) => {
    let number = +id.textContent.slice(-1);
    if (mainDescriptionNumbers.targetNumber > 6) number = 6;

    const subTitle = document.createElement("button");
    subTitle.classList.add("full-desc__sub-title");
    subTitle.textContent = `${id.textContent}`;

    const desc = document.createElement("p");
    desc.classList.add("full-desc__text");
    desc.textContent = `${fate[2].targetNumber[number]}`;

    bodyDiv.append(subTitle, desc);
};
export const showHabitsDescription = (id) => {
    let number = +id.textContent.slice(-1);
    if (mainDescriptionNumbers.habitsNumber > 6) number = 6;
    if (mainDescriptionNumbers.habitsNumber === 0) number = 1;

    const subTitle = document.createElement("button");
    subTitle.classList.add("full-desc__sub-title");
    subTitle.textContent = `${id.textContent}`;

    const desc = document.createElement("p");
    desc.classList.add("full-desc__text");
    desc.textContent = `${fate[4].habitsNumber[number]}`;

    bodyDiv.append(subTitle, desc);
};
export const showTemperament = (id) => {
    let number = +id.textContent.slice(-1);
    if (mainDescriptionNumbers.temperament < 2) number = 0;
    if (mainDescriptionNumbers.temperament > 3 && mainDescriptionNumbers.temperament < 6) number = 4;
    if (mainDescriptionNumbers.temperament > 5) number = 6;

    const subTitle = document.createElement("button");
    subTitle.classList.add("full-desc__sub-title");
    subTitle.textContent = `${id.textContent}`;

    const desc = document.createElement("p");
    desc.classList.add("full-desc__text");
    desc.textContent = `${fate[15].temperament[number]}`;

    bodyDiv.append(subTitle, desc);
};
export const showFateDescription = (fateNumber) => {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("full-desc__item");

    const title = document.createElement("h2");
    title.classList.add("full-desc__title");
    title.textContent = "Число судьбы";

    const subTitle = document.createElement("button");
    subTitle.classList.add("full-desc__sub-title");
    subTitle.textContent = `Число судьбы ${fateNumber}`;

    const subTitle2 = document.createElement("button");
    subTitle2.classList.add("full-desc__sub-title");
    subTitle2.textContent = `Значение числа ${fateNumber} в судьбе человека`;

    const subTitle3 = document.createElement("button");
    subTitle3.classList.add("full-desc__sub-title");
    subTitle3.textContent = `Число судьбы ${fateNumber} у мужчин`;
    const subTitle4 = document.createElement("button");
    subTitle4.classList.add("full-desc__sub-title");
    subTitle4.textContent = `Число судьбы ${fateNumber} у женщин`;

    const text = document.createElement("p");
    text.classList.add("full-desc__text");
    text.textContent = `${fate[0].fateNumber[fateNumber].number}`;

    const text2 = document.createElement("p");
    text2.classList.add("full-desc__text");
    text2.textContent = `${fate[0].fateNumber[fateNumber].numberInFate}`;

    const text3 = document.createElement("p");
    text3.classList.add("full-desc__text");
    text3.textContent = `${fate[0].fateNumber[fateNumber].numberForMen}`;

    const text4 = document.createElement("p");
    text4.classList.add("full-desc__text");
    text4.textContent = `${fate[0].fateNumber[fateNumber].numberForWomen}`;

    bodyDiv.append(subTitle, text, subTitle2, text2, subTitle3, text3, subTitle4, text4);
    mainDiv.append(title, bodyDiv);

    fullMatrixDescription.append(mainDiv);
};
export const characterDescription = () => {
    let character = document.getElementById("1").querySelector(".output").textContent;
    if (character === "-") character = 0;
    character = +character;

    let type = String(character).length % 2;
    type === 0 ? (type = "secondType") : (type = "firstType");

    const subTitle = document.createElement("button");
    subTitle.classList.add("full-desc__sub-title");
    subTitle.textContent = `Характер - ${character}`;

    const desc = document.createElement("div");
    desc.classList.add("full-desc__text");
    const text = document.createElement("p");
    text.classList.add("desc__text");
    text.textContent = `${fate[5].character[character].value}`;

    const example = document.createElement("p");
    example.classList.add("desc__text");
    example.textContent = `${fate[5].character[character].example}`;

    const characterType = document.createElement("div");
    characterType.classList.add("character__type");
    // Заголовок
    const characterTitle = document.createElement("h4");
    characterTitle.classList.add("character__title");
    characterTitle.textContent = "Тип восприятия";

    const characterTypeDescription = document.createElement("p");
    characterTypeDescription.textContent = `${fate[5].character[type]}`;

    characterType.append(characterTitle, characterTypeDescription);
    desc.append(text, example, characterType);
    bodyDiv.append(subTitle, desc);
};
export const energyDescription = () => {
    let energy = document.getElementById("2").querySelector(".output").textContent;
    if (energy === "-") energy = 0;
    energy = +energy;
    const energyTitle = document.createElement("button");
    energyTitle.classList.add("full-desc__sub-title");
    energyTitle.textContent = `Энергия - ${energy}`;

    const descEnergy = document.createElement("div");
    descEnergy.classList.add("full-desc__text");

    const energyValue = document.createElement("p");
    energyValue.classList.add("desc__text");
    energyValue.textContent = `${fate[6].energy[energy].value}`;

    const recommendationTitle = document.createElement("h4");
    recommendationTitle.classList.add("recommendation__title");
    recommendationTitle.textContent = "Рекомендации";

    const energyRecommendation = document.createElement("p");
    energyRecommendation.classList.add("desc__text");
    energyRecommendation.textContent = `${fate[6].energy[energy].recommendations}`;

    const marriageTitle = document.createElement("h4");
    marriageTitle.classList.add("marriage__title");
    marriageTitle.textContent = "В браке";

    const energyMarriage = document.createElement("p");
    energyMarriage.classList.add("desc__text");
    energyMarriage.textContent = `${fate[6].energy[energy].marriage}`;

    descEnergy.append(energyValue, recommendationTitle, energyRecommendation, marriageTitle, energyMarriage);
    bodyDiv.append(energyTitle, descEnergy);
};
export const interestDescription = () => {
    let interest = document.getElementById("3").querySelector(".output").textContent;
    if (interest === "-") interest = 0;
    if (interest > 33333) interest = 33333;
    interest = +interest;

    const interestTitle = document.createElement("button");
    interestTitle.classList.add("full-desc__sub-title");
    interestTitle.textContent = `Интеллект - ${interest}`;

    const descInterest = document.createElement("div");
    descInterest.classList.add("full-desc__text");

    const interestValue = document.createElement("p");
    interestValue.classList.add("desc__text");
    interestValue.textContent = `${fate[7].interest[interest]}`;

    descInterest.append(interestValue);
    bodyDiv.append(interestTitle, descInterest);
};
export const healthDescription = () => {
    let health = document.getElementById("4").querySelector(".output").textContent;
    if (health === "-") health = 0;
    const healthTitle = document.createElement("button");
    healthTitle.classList.add("full-desc__sub-title");
    healthTitle.textContent = `Здоровье - ${health}`;
    const descHealth = document.createElement("div");
    descHealth.classList.add("full-desc__text");
    const healthDescription = document.createElement("p");
    healthDescription.classList.add("desc__text");

    if (health === 0) {
        healthDescription.textContent = `${fate[8].health[health].value}`;

        const list = document.createElement("ul");
        list.classList.add("desc__list");

        const item1 = document.createElement("li");
        item1.classList.add("desc__item");
        item1.textContent = `${fate[8].health[health].first}`;

        const item2 = document.createElement("li");
        item2.classList.add("desc__item");
        item2.textContent = `${fate[8].health[health].second}`;

        const item3 = document.createElement("li");
        item3.classList.add("desc__item");
        item3.textContent = `${fate[8].health[health].third}`;

        const item4 = document.createElement("li");
        item4.classList.add("desc__item");
        item4.textContent = `${fate[8].health[health].fourth}`;

        list.append(item1, item2, item3, item4);
        descHealth.append(healthDescription, list);
    } else {
        healthDescription.textContent = `${fate[8].health[health]}`;
        descHealth.append(healthDescription);
    }
    bodyDiv.append(healthTitle, descHealth);
};
export const logicDescription = () => {
    let logic = document.getElementById("5").querySelector(".output").textContent;
    if (logic === "-") logic = 0;

    const logicTitle = document.createElement("button");
    logicTitle.classList.add("full-desc__sub-title");
    logicTitle.textContent = `Логика - ${logic}`;

    const logicDesc = document.createElement("div");
    logicDesc.classList.add("full-desc__text");

    const logicValue = document.createElement("p");
    logicValue.classList.add("desc__text");
    logicValue.textContent = `${fate[9].logics[logic]}`;

    logicDesc.append(logicValue);
    bodyDiv.append(logicTitle, logicDesc);
};
export const workDescription = () => {
    let work = document.getElementById("6").querySelector(".output").textContent;
    if (work === "-") work = 0;
    if (work > 6666) work = 6666;

    const workTitle = document.createElement("button");
    workTitle.classList.add("full-desc__sub-title");
    workTitle.textContent = `Труд - ${work}`;

    const workDesc = document.createElement("div");
    workDesc.classList.add("full-desc__text");

    const workValue = document.createElement("p");
    workValue.classList.add("desc__text");
    workValue.textContent = `${fate[10].work[work]}`;

    workDesc.append(workValue);
    bodyDiv.append(workTitle, workDesc);
};
export const luckDescription = () => {
    let luck = document.getElementById("7").querySelector(".output").textContent;
    if (luck === "-") luck = 0;
    if (luck > 7777) luck = 7777;

    const luckTitle = document.createElement("button");
    luckTitle.classList.add("full-desc__sub-title");
    luckTitle.textContent = `Удача - ${luck}`;

    const luckDesc = document.createElement("div");
    luckDesc.classList.add("full-desc__text");

    const luckValue = document.createElement("p");
    luckValue.classList.add("desc__text");
    luckValue.textContent = `${fate[11].luck[luck]}`;

    luckDesc.append(luckValue);
    bodyDiv.append(luckTitle, luckDesc);
};
export const dutyDescription = (id) => {
    let duty = document.getElementById("8").querySelector(".output").textContent;
    let number = duty;
    if (duty === "-") number = 0;
    if (duty === "-") duty = 0;
    if (duty > 8888) number = 8888;

    const dutyTitle = document.createElement("button");
    dutyTitle.classList.add("full-desc__sub-title");
    dutyTitle.textContent = `Долг - ${duty}`;

    const dutyDesc = document.createElement("div");
    dutyDesc.classList.add("full-desc__text");

    const dutyValue = document.createElement("p");
    dutyValue.classList.add("desc__text");
    dutyValue.textContent = `${fate[12].duty[number]}`;

    dutyDesc.append(dutyValue);
    bodyDiv.append(dutyTitle, dutyDesc);
};
export const memoryDescription = () => {
    let memory = document.getElementById("9").querySelector(".output").textContent;
    if (memory === "-") memory = 0;
    if (memory > 9999) memory = 9999;

    const memoryTitle = document.createElement("button");
    memoryTitle.classList.add("full-desc__sub-title");
    memoryTitle.textContent = `Память - ${memory}`;

    const memoryDesc = document.createElement("div");
    memoryDesc.classList.add("full-desc__text");

    const memoryValue = document.createElement("p");
    memoryValue.classList.add("desc__text");
    memoryValue.textContent = `${fate[13].memory[memory]}`;

    memoryDesc.append(memoryValue);
    bodyDiv.append(memoryTitle, memoryDesc);
};
export const coincidencesButton = () => {
    const coincidencesButton = document.createElement("button");
    coincidencesButton.classList.add("coincidences__btn");
    coincidencesButton.textContent = "Показать сочетания секторов ";

    bodyDiv.append(coincidencesButton);
};
export const cleaner = () => {
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
    container.innerHTML = "";
};
export const calculateMainMatrixNumbers = () => {
    mainDescriptionNumbers.lifeNumber = calculateMatrix(4).concat(calculateMatrix(5), calculateMatrix(6)).length;
    matrixDescription.insertAdjacentHTML("beforeend", `<p id="life" class="description__life">Быт - ${mainDescriptionNumbers.lifeNumber}</p>`);

    mainDescriptionNumbers.targetNumber = calculateMatrix(1).concat(calculateMatrix(4), calculateMatrix(7)).length;
    matrixDescription.insertAdjacentHTML("beforeend", `<p id="target" class="description__life">Целеустремленность - ${mainDescriptionNumbers.targetNumber}</p>`);

    mainDescriptionNumbers.familyNumber = calculateMatrix(2).concat(calculateMatrix(5), calculateMatrix(8)).length;
    matrixDescription.insertAdjacentHTML("beforeend", `<p id="family" class="description__life">Семья - ${mainDescriptionNumbers.familyNumber}</p>`);

    mainDescriptionNumbers.habitsNumber = calculateMatrix(3).concat(calculateMatrix(6), calculateMatrix(9)).length;
    matrixDescription.insertAdjacentHTML("beforeend", `<p id="habits" class="description__life">Привычки - ${mainDescriptionNumbers.habitsNumber}</p>`);

    mainDescriptionNumbers.temperament = calculateMatrix(3).concat(calculateMatrix(5), calculateMatrix(7)).length;
    matrixDescription.insertAdjacentHTML("beforeend", `<p id="temp" class="description__life">Темперамент - ${mainDescriptionNumbers.temperament}</p>`);
};
export const replaceZeroValues = () => {
    numberBox.forEach(function (element, index) {
        //массив с повторяющимися элементами
        let number = fullArray.filter((number) => number === index + 1);
        number.length > 0
            ? document.getElementById(`${index + 1}`).insertAdjacentHTML("afterbegin", `<p class='output'>${number.join("")}</p>`)
            : document.getElementById(`${index + 1}`).insertAdjacentHTML("afterbegin", `<p class='output'>-</p>`);
    });
};
