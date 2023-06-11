const birthdayDate = document.getElementById("date-birthday");
const btn = document.querySelector("button");
export const popup = document.querySelector(".popup");
const btnCloseModal = document.querySelector(".close__popup");
export const body = document.querySelector("body");
const matrixBlock = document.querySelector(".matrix__content");
export const timeout = 100;
export let unlock = true;

export const matrixDescription = document.querySelector(".description__item");
export const fullMatrixDescription = document.querySelector(".matrix__full-desc");
export const numberBox = document.querySelectorAll(".matrix__item");
export const popupContent = document.querySelector(".popup__content");
export const lockPadding = document.querySelectorAll(".lock-padding");
export const popupBody = document.querySelector(".popup__body");
export const container = document.querySelector(".content-item__description");
export const desc = document.querySelectorAll(".code");

export const bodyDiv = document.createElement("div");
bodyDiv.classList.add("full-desc__body");
export let fullArray = [];
export let dateArray = [];

import { conditions } from "./js/conditions.js";
import { data, mainDescriptionNumbers } from "./js/data.js";
import {
    popupCleaner,
    accordeon,
    showLifeDescription,
    showFamilyDescription,
    showFateNumber,
    showAdditionalNumbers,
    showTargetDescription,
    showHabitsDescription,
    showTemperament,
    showFateDescription,
    characterDescription,
    energyDescription,
    interestDescription,
    healthDescription,
    logicDescription,
    workDescription,
    luckDescription,
    dutyDescription,
    memoryDescription,
    coincidencesButton,
    cleaner,
    calculateMainMatrixNumbers,
    replaceZeroValues,
    popupClose,
} from "./js/helpers.js";

const formatDate = (d) => {
    const day = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const year = d.getFullYear();

    dateArray = String(+day.concat(month, year)).split("").map(Number);
    const initialValue = 0;
    data.sumResult = dateArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    data.sumFromSumResult.push(
        String(data.sumResult)
            .split("")
            .map(Number)
            .reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
    );
    data.totalFirstNumber = String(data.sumResult).split("").map(Number);
    data.totalFirstNumber.push(...[...data.sumFromSumResult.toString()].map(Number));
    if (data.sumFromSumResult[0] === 10) {
        data.sumFromSumResult[0] = 1;
    }
    if (data.sumFromSumResult[0] > 11) {
        data.sumFromSumResult[0] = String(data.sumFromSumResult[0])
            .split("")
            .map(Number)
            .reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    }
    mainDescriptionNumbers.fateNumber = dateArray[0] * 2;
    data.lastFateNumber = data.sumResult - mainDescriptionNumbers.fateNumber;
    data.sumFromLastFateNumber = String(data.lastFateNumber)
        .split("")
        .map(Number)
        .reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    const totalSecondNumber = String(data.lastFateNumber).split("").map(Number);
    totalSecondNumber.push(...[...data.sumFromLastFateNumber.toString()].map(Number));
    fullArray = dateArray.concat(data.totalFirstNumber, totalSecondNumber);
};
const showElements = () => {
    characterDescription();
    energyDescription();
    interestDescription();
    healthDescription();
    logicDescription();
    workDescription();
    luckDescription();
    dutyDescription();
    memoryDescription();
    coincidencesButton();
};
const showСoincidences = () => {
    document.querySelector(".coincidences__btn").addEventListener("click", function () {
        popup.classList.add("open");
        body.style.paddingRight = "17px";
        body.classList.add("lock");

        document.querySelectorAll(".output").forEach((el) => {
            el.textContent === "-" ? (el.textContent = "") : null;
        });
    });
};
document.addEventListener("click", ({ target }) => {
    if (target.matches(".popup__body")) popupClose();
});
document.addEventListener("keydown", ({ key }) => {
    if (key === "Escape") popupClose();
});

btnCloseModal.addEventListener("click", popupClose);

export const showers = () => {
    // показываем число судьбы
    showFateNumber(data.sumFromSumResult);
    // показываем дополнительные числа
    showAdditionalNumbers();
    // показываем описание числа судьбы
    showFateDescription(data.sumFromSumResult);
    // показываем описание быта
    showLifeDescription(life);
    // показываем описание цели
    showTargetDescription(target);
    // показываем описание семьи
    showFamilyDescription(family);
    // показываем описание привычек
    showHabitsDescription(habits);
    // показываем описание темперамента
    showTemperament(temp);

    showElements();

    showСoincidences();

    accordeon();

    conditions();
};

btn.addEventListener("click", function () {
    let d = new Date(birthdayDate.value);
    cleaner();
    popupCleaner();
    data.sumFromSumResult.length = 0;

    if (birthdayDate.value !== "") {
        matrixBlock.style.display = "block";
        birthdayDate.value = "";
        birthdayDate.classList.remove("error");
        formatDate(d);
        replaceZeroValues();
        calculateMainMatrixNumbers();
        showers();
    } else {
        birthdayDate.classList.add("error");
        matrixBlock.style.display = "none";
    }
});
