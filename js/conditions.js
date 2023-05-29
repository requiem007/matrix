import { fate } from "../app.js";
import { popupBody } from "../app.js";
import { lockPadding } from "../app.js";
import { popupContent } from "../app.js";
import { container } from "../app.js";

import { familyNumber, habitsNumber, temperament, lifeNumber, targetNumber, sumFromSumResult, genderCode } from "../app.js";

function paster(codeText, way) {
    // const code = document.createElement("p");
    // code.classList.add("content-item__code");
    // code.textContent = `${codeText}`;

    // const code = createParagraph(codeText);

    const description = document.createElement("p");
    description.classList.add("content-item__code-text");
    description.textContent = `${way};`;

    container.append(createParagraph(codeText), description);
}
function createSubTitle(way) {
    const subTitle = document.createElement("h5");
    subTitle.classList.add("content-item__sub-title");
    subTitle.textContent = `${way}`;
    return subTitle;
}
function createParagraph(codeText) {
    const paragraph = document.createElement("p");
    paragraph.classList.add("content-item__code");
    paragraph.textContent = `${codeText}`;
    return paragraph;
}
function createDescription(way) {
    const description = document.createElement("p");
    description.classList.add("content-item__code-text");
    description.textContent = `${way}`;
    return description;
}

export const conditions = function () {
    let character = document.getElementById("1").querySelector(".output").textContent;
    if (character === "-") character = 0;
    let energy = document.getElementById("2").querySelector(".output").textContent;
    if (energy === "-") energy = 0;
    let interest = document.getElementById("3").querySelector(".output").textContent;
    if (interest === "-") interest = 0;
    if (interest > 33333) interest = 33333;
    let health = document.getElementById("4").querySelector(".output").textContent;
    if (health === "-") health = 0;
    let logic = document.getElementById("5").querySelector(".output").textContent;
    if (logic === "-") logic = 0;
    let work = document.getElementById("6").querySelector(".output").textContent;
    if (work === "-") work = 0;
    if (work > 6666) work = 6666;
    let luck = document.getElementById("7").querySelector(".output").textContent;
    if (luck === "-") luck = 0;
    if (luck > 7777) luck = 7777;
    let duty = document.getElementById("8").querySelector(".output").textContent;
    if (duty === "-") duty = 0;
    if (duty > 8888) duty = 8888;
    let memory = document.getElementById("9").querySelector(".output").textContent;
    if (memory === "-") memory = 0;
    if (memory > 9999) memory = 9999;

    let combinations = fate[14].combinations;

    if (character.length == 3 && health.length >= 1 && duty.length <= 1) {
        // if (health.length === 0) health = 0;
        let codeText = `Характер ${character} + Здоровье ${health} + Долг${duty}`;
        paster(codeText, combinations[1]["111+4/44/444++8/0"]);
    }

    if (character.length > 0 && character.length < 6 && health.length > 0 && health.length < 4 && duty.length > 1 && duty.length < 4) {
        let codeText = `Характер ${character} + Здоровье ${health} + Долг ${duty}`;
        paster(codeText, combinations[1]["1/11/111/1111/11111+4/44/444+88/888"]);
    }

    if (character.length > 1 && character.length < 4 && energy.length > 2 && interest.length > 1 && interest.length < 4) {
        let codeText = `Характер ${character} + Энергия ${energy} + $ Интерес{interest}`;
        paster(codeText, combinations[2]["11/111+22/222++33/333"]);
    }

    if (character.length > 2 && energy.length > 1 && energy.length < 4 && health.length > 0 && health.length < 4 && interest.length < 2 && duty.length < 2) {
        let codeText = `Характер ${character} + Энергия ${energy} + Интерес ${interest} + Здоровье ${health} + Долг ${duty}`;
        paster(codeText, combinations[2]["111/11111/111111++22/222+4/44/444+3/0+8/0"]);
    }

    if (character.length > 0 && character.length < 3 && duty.length < 2) {
        let codeText = `Характер ${character} + Долг ${duty}`;
        paster(codeText, combinations[2]["1/11+8/0"]);
    }

    if (character.length > 3 && character.length < 5 && duty.length < 2) {
        let codeText = `Характер ${character} + долг ${duty}`;
        paster(codeText, combinations[2]["1111/111111+8/0"]);
    }
    if (energy.length > 1 && energy.length < 5 && health.length > 1 && health.length < 5) {
        let codeText = `Энергия ${energy} + Здоровье ${health}`;
        paster(codeText, combinations[3]["22/222/2222+44/444/4444"]);
    }
    if (energy.length > 1 && energy.length < 5 && health.length > 0 && health.length < 4 && interest < 2 && (duty.length < 2) & (memory.length > 1) && memory.length < 4) {
        let codeText = `Энергия ${energy} + Здоровье ${health} + Интерес ${interest} + Долг ${duty} + Память ${memory}`;
        paster(codeText, combinations[3]["22/222/2222+4/44/444+3/0+8/0+99/999"]);
    }
    if (energy.length == 1 && health.length == 1) {
        let codeText = `Энергия ${energy} + Здоровье ${health}`;
        paster(codeText, combinations[3]["2+4"]);
    }
    if (energy.length < 2 && health.length > 1 && health.length < 5) {
        let codeText = `Энергия ${energy} + Здоровье ${health}`;
        paster(codeText, combinations[3]["2/0+44/444/4444"]);
    }
    if ((energy.length == 2) & (health.length == 1)) {
        let codeText = `Энергия ${energy} + Здоровье ${health}`;
        paster(codeText, combinations[3]["22+4"]);
    }
    if (energy.length > 0 && energy.length < 5 && health.length == 0) {
        let codeText = `Энергия ${energy} + Здоровье ${health}`;
        paster(codeText, combinations[3]["2/222/2222+0(4)"]);
    }
    if (energy.length == 2 && health.length == 0) {
        let codeText = `Энергия ${energy} + Здоровье${health}`;
        paster(codeText, combinations[3]["2/222/2222+0(4)"]);
    }
    if (energy.length > 1 && energy.length < 5 && duty.length > 1 && duty.length < 4) {
        let codeText = `Энергия ${energy} + Долг${duty}`;
        paster(codeText, combinations[4]["22/222/2222+88/888"]);
    }

    if (energy.length > 1 && energy.length < 5 && duty.length > 1 && duty.length < 4 && health.length > 0 && health.length < 4 && interest < 2) {
        let codeText = `Энергия ${energy} + Интерес${interest} + Здоровье${health} + Долг${duty}`;
        paster(codeText, combinations[4]["22/222/2222+88/888+4/44/444+3/0"]);
    }

    if (energy.length < 2 && duty.length > 1 && duty.length < 4) {
        let codeText = `Энергия ${energy} + Долг ${duty}`;
        paster(codeText, combinations[4]["2/0+88/888"]);
    }
    if (energy.length < 2 && duty.length < 2) {
        let codeText = `Энергия ${energy} + Долг ${duty}`;
        paster(codeText, combinations[4]["2/0+8/0"]);
    }
    if (energy.length < 2 && duty.length > 1 && duty.length < 4 && interest < 2) {
        let codeText = `Энергия ${energy} + Долг ${duty} + Интерес${interest}`;
        paster(codeText, combinations[4]["2/0+88/888+3/0"]);
    }
    if (energy.length < 2 && duty.length > 1 && duty.length < 4 && familyNumber == 3) {
        let codeText = `Энергия ${energy} + Долг ${duty} + Семья ${familyNumber}`;
        paster(codeText, combinations[4]["2/0+88/888+familyNumber3"]);
    }
    if (energy.length < 2 && duty.length > 1 && duty.length < 4 && interest.length > 1 && interest.length < 4) {
        let codeText = `Энергия ${energy} + Долг ${duty} + Интерес ${interest}`;
        paster(codeText, combinations[4]["2/0+88/888+33/333"]);
    }
    if (energy.length > 1 && energy.length < 5 && duty.length < 2) {
        let codeText = `Энергия ${energy} + Долг ${duty}`;
        paster(codeText, combinations[4]["22/222/2222+8/0"]);
    }
    if (energy.length > 1 && energy.length < 5 && duty.length > 1 && duty.length < 4 && work.length > 0 && work.length < 4) {
        let codeText = `Энергия ${energy} + Долг ${duty} + Труд ${work}`;
        paster(codeText, combinations[4]["22/222/2222+88/888+6/66/666"]);
    }
    if (energy.length > 1 && duty.length > 1 && duty.length < 4) {
        let codeText = `Энергия ${energy} + Долг ${duty}`;
        paster(codeText, combinations[4]["22/222++88/888"]);
    }
    if (energy.length < 2 && interest.length < 2) {
        let codeText = `Энергия ${energy} + Интерес ${interest}`;
        paster(codeText, combinations[5]["2/0+3/0"]);
    }
    if (energy.length < 2 && interest.length > 1 && interest.length < 4) {
        let codeText = `Энергия ${energy} + Интерес ${interest}`;
        paster(codeText, combinations[5]["2/0+33/333"]);
    }
    if (energy.length > 1 && energy.length < 5 && interest.length > 1 && interest.length < 4) {
        let codeText = `Энергия ${energy} + Интерес ${interest}`;
        paster(codeText, combinations[5]["22/222/2222+33/333"]);
    }
    if (energy.length > 1 && energy.length < 5 && interest.length < 2) {
        let codeText = `Энергия ${energy} + Интерес ${interest}`;
        paster(codeText, combinations[5]["22/222/2222+3/0"]);
    }
    if (energy.length < 2 && work.length > 0 && work.length < 3) {
        let codeText = `Энергия ${energy} + Труд ${work}`;
        paster(codeText, combinations[6]["2/0+6/66"]);
    }
    if (energy.length > 1 && energy.length < 5 && work.length > 0 && work.length < 3) {
        let codeText = `Энергия ${energy} + Труд ${work}`;
        paster(codeText, combinations[6]["22/222/2222+6/66"]);
    }
    if (energy.length > 1 && energy.length < 5 && luck.length > 0 && luck.length < 4 && interest.length > 1 ** interest.length < 4 && targetNumber > 3 && targetNumber < 7) {
        let codeText = `Энергия ${energy} + Удача ${luck} + Интерес ${interest} + Цель ${targetNumber}`;
        paster(codeText, combinations[7]["22/222/2222+7/77/777+33+333+targetNumber4/5/6"]);
    }
    if (energy.length < 2 && logic.length > 0 && logic.length < 4) {
        let codeText = `Энергия ${energy} + Логика ${logic}`;
        paster(codeText, combinations[8]["2/0+5/55/555"]);
    }
    if (energy.length > 1 && energy.length < 5 && logic.length > 0 && logic.length < 4 && interest < 2) {
        let codeText = `Энергия ${energy} + Логика ${logic} + Интерес ${interest}`;
        paster(codeText, combinations[8]["22/222/2222+5/55/555+3/0"]);
    }
    if (energy.length > 1 && energy.length < 5 && logic.length > 0 && logic.length < 4 && interest > 1 && interest.length < 4) {
        let codeText = `Энергия ${energy} + Логика ${logic} + Интерес ${interest}`;
        paster(codeText, combinations[8]["22/222/2222+5/55+555+33+333"]);
    }

    if (energy.length < 2 && targetNumber > 0 && targetNumber < 4) {
        let codeText = `Энергия ${energy} + Цель ${targetNumber}`;
        paster(codeText, combinations[9]["2/0+targetNumber1/2/3"]);
    }
    if (energy.length < 2 && targetNumber > 3 && targetNumber < 6) {
        let codeText = `Энергия ${energy} + Цель ${targetNumber}`;
        paster(codeText, combinations[9]["2/0+targetNumber4/5"]);
    }
    if (energy.length < 2 && targetNumber > 5 && targetNumber < 9) {
        let codeText = `Энергия ${energy} + Цель ${targetNumber}`;
        paster(codeText, combinations[9]["2/0+targetNumber6/7/8"]);
    }

    if (energy.length < 2 && habitsNumber > 3 && habitsNumber < 4) {
        let codeText = `Энергия ${energy} + Привычки ${habitsNumber}`;
        paster(codeText, combinations[10]["2/0+habitsNumber1/2/3"]);
    }
    if (energy.length < 2 && habitsNumber > 3 && habitsNumber < 6) {
        let codeText = `Энергия ${energy} + Привычки ${habitsNumber}`;
        paster(codeText, combinations[10]["2/0+habitsNumber4/5"]);
    }
    if (energy.length < 2 && habitsNumber > 5) {
        let codeText = `Энергия ${energy} + Привычки ${habitsNumber}`;
        paster(codeText, combinations[10]["2/0+habitsNumber6/7/8/9"]);
    }

    if (energy.length < 2 && temperament < 3) {
        let codeText = `Энергия ${energy} + Темперамент ${temperament}`;
        paster(codeText, combinations[11]["2/0+temperament1/2/0"]);
    }
    if (energy.length > 1 && energy.length < 5 && interest.length > 1 && interest.length < 4 && temperament > 2) {
        let codeText = `Энергия ${energy} + Интерес ${interest} + Темперамент ${temperament}`;
        paster(codeText, combinations[11]["22/222/2222+33/333+temperament3/4/5/6"]);
    }
    if (energy.length > 1 && energy.length < 5 && temperament < 3) {
        let codeText = `Энергия ${energy} + Темперамент ${temperament}`;
        paster(codeText, combinations[11]["222/2222/22222+temperament1/2/0"]);
    }

    if (energy.length > 1 && energy.length < 5 && interest.length > 1 && interest.length < 4 && duty.length > 1 && duty.length < 4) {
        let codeText = `Энергия ${energy} + Интерес ${interest} + Долг ${duty}`;
        paster(codeText, combinations[12]["33/333+22/222/2222+88/888"]);
    }
    if (energy.length < 2 && interest.length < 2 && duty.length < 2) {
        let codeText = `Энергия ${energy} + Интерес ${interest} + Долг ${duty}`;
        paster(codeText, combinations[12]["3/0+2/0+8/0"]);
    }
    if (energy.length > 1 && energy.length < 5 && interest.length < 2 && duty.length < 2) {
        let codeText = `Энергия ${energy} + Интерес ${interest} + Долг ${duty}`;
        paster(codeText, combinations[12]["3/0+22/222/2222+8/0"]);
    }
    if (interest.length > 1 && interest.length < 4 && memory.length > 1 && memory.length < 4) {
        let codeText = `Интерес ${interest} + Память ${memory}`;
        paster(codeText, combinations[12]["33/333+99+999"]);
    }

    if (interest.length > 1 && interest.length < 4 && luck.length > 0 && luck.length < 4) {
        let codeText = `Интерес ${interest} + Удача ${luck}`;
        paster(codeText, combinations[13]["33/333+7/77/777"]);
    }
    if (interest.length < 2 && luck.length > 0 && luck.length < 4) {
        let codeText = `Интерес ${interest} + Удача ${luck}`;
        paster(codeText, combinations[13]["3/0+7/77/777"]);
    }
    if (interest.length < 2 && temperament < 3) {
        let codeText = `Интерес ${interest} + Темперамент ${temperament}`;
        paster(codeText, combinations[13]["3/0+temperament1/2/0"]);
    }

    if (health.length > 1 && health.length < 5 && energy.length > 0 && energy.length < 4) {
        let codeText = `Энергия ${energy} + Здоровье ${health}`;
        paster(codeText, combinations[14]["44/444/4444+2/22/222"]);
    }
    if (health.length > 1 && health.length < 5 && energy.length > 2 && energy.length < 5) {
        let codeText = `Энергия ${energy} + Здоровье ${health}`;
        paster(codeText, combinations[14]["44/444/4444+222/2222"]);
    }

    if (health.length > 0 && health.length < 4 && memory.length > 1 && memory.length < 4 && duty.length < 2 && interest.length < 2) {
        let codeText = `Здоровье ${health} + Память ${memory} + Долг ${duty} + Интерес ${interest}`;
        paster(codeText, combinations[15]["4/44/444+99/999+8/0+3/0"]);
    }
    if (health.length > 1 && health.length < 4 && duty.length < 2 && interest.length < 2) {
        let codeText = `Здоровье ${health} + Долг ${duty} + Интерес ${interest}`;
        paster(codeText, combinations[15]["44/444+8/0+3/0"]);
    }
    if (health.length > 0 && health.length < 4 && memory.length < 2 && duty.length > 1 && duty.length < 4 && interest.length > 1 && interest.length < 4) {
        let codeText = `Здоровье ${health} + Долг ${duty} + Интерес ${interest} + Память ${memory}`;
        paster(codeText, combinations[15]["4/44/444++9/0+88/888+33/333"]);
    }
    if (health.length > 0 && health.length < 4 && duty.length < 2 && familyNumber < 3) {
        let codeText = `Здоровье ${health} + Долг ${duty} + Семья ${familyNumber}`;
        paster(codeText, combinations[15]["4/44/444+8/0+familyNumber1/2/0"]);
    }
    if (health.length > 0 && health.length < 4 && work.length > 0 && work.length < 4 && familyNumber > 0 && familyNumber < 4 && duty.length < 2 && sumFromSumResult == 4 && sumFromSumResult == 6) {
        let codeText = `Здоровье ${health} + Долг ${duty} + Семья ${familyNumber} + Труд ${work} + Число судьбы ${sumFromSumResult}`;
        paster(codeText, combinations[15]["4/44/444+6/66/666+familyNumber1/2/3+8/0+fateNumber4/6"]);
    }
    if (health.length > 1 && health.length < 4 && logic.length > 0 && logic.length < 5) {
        let codeText = `Здоровье ${health} + Логика ${logic}`;
        paster(codeText, combinations[16]["44/444/444+5/55/555/5555"]);
    }
    if (logic.length == 0 && memory.length < 2) {
        let codeText = `Память ${memory} + Логика ${logic}`;
        paster(codeText, combinations[17]["logic0+9/0"]);
    }
    if (logic.length > 0 && logic.length < 4 && interest.length > 0 && interest.length < 4 && memory.length > 1 && memory.length < 5) {
        let codeText = `Память ${memory} + Логика ${logic} + Интерес ${interest}`;
        paster(codeText, combinations[17]["5/55/555+3/33/333+99/999/9999"]);
    }

    if (logic.length > 0 && logic.length < 4 && duty.length > 1 && duty.length < 4 && interest.length < 2) {
        let codeText = `Долг ${duty} + Логика ${logic} + Интерес ${interest}`;
        paster(codeText, combinations[18]["5/55/555+88/888+3/0"]);
    }
    if (logic.length > 1 && logic.length < 5 && duty.length < 2 && interest.length < 2) {
        let codeText = `Долг ${duty} + Логика ${logic} + Интерес ${interest}`;
        paster(codeText, combinations[18]["55/555/5555+8/0+3/0"]);
    }

    if (logic.length > 0 && logic.length < 4 && luck.length > 0 && luck.length < 4 && duty.length < 2) {
        let codeText = `Долг ${duty} + Логика ${logic} + Удача ${luck}`;
        paster(codeText, combinations[19]["5/55/555+7/77/777+8/0"]);
    }

    if (logic.length > 0 && logic.length < 4 && logic.length != 2 && lifeNumber > 1 && lifeNumber < 5) {
        let codeText = `Логика ${logic} + Быт ${lifeNumber}`;
        paster(codeText, combinations[20]["5/555+lifeNumber2/3/4"]);
    }
    ///
    if (work.length > 0 && work.length < 4 && energy.length > 1 && energy.length < 5 && duty.length > 1 && duty.length < 4) {
        let codeText = `Энергия ${energy} + Долг ${duty} + Труд ${work}`;
        paster(codeText, combinations[21]["6/66/666+22/222/2222+88/888"]);
    }
    if (work.length > 0 && work.length < 4 && energy.length > 1 && energy.length < 5 && duty.length > 1 && duty.length < 4 && familyNumber > 3 && familyNumber < 8) {
        let codeText = `Энергия ${energy} + Долг ${duty} + Труд ${work}  + Семья ${familyNumber}`;
        paster(codeText, combinations[21]["6/66/666+22/222/2222+88/888+familyNumber4/5/6/7"]);
    }
    ///
    if (work.length > 0 && work.length < 4 && interest.length > 1 && interest.length < 4 && logic.length == 0) {
        let codeText = `Логика ${logic} + Труд ${work} + Интерес ${interest}`;
        paster(codeText, combinations[22]["6/66/666+33/333+logic0"]);
    }
    if (work.length > 0 && work.length < 4 && interest.length > 0 && interest.length < 4 && temperament > 2 && temperament < 7) {
        let codeText = `Труд ${work} + Интерес ${interest}  + Темперамент ${temperament}`;
        paster(codeText, combinations[22]["6/66/666+3/33+333+temperament3/4/5/6"]);
    }
    ///
    if (work.length > 1 && work.length < 5 && luck.length > 0 && luck.length < 4) {
        let codeText = `Труд ${work} + Удача ${luck}`;
        paster(codeText, combinations[23]["66/666/6666+7/77/777"]);
    }
    ///
    if (work.length > 0 && work.length < 4 && energy.length > 2 && energy.length < 5) {
        let codeText = `Труд ${work} + Энергия ${energy}`;
        paster(codeText, combinations[24]["6/66/666+22/222/2222"]);
    }
    ///
    if (work.length > 0 && work.length < 4 && lifeNumber < 4) {
        let codeText = `Труд ${work} + Быт ${lifeNumber}`;
        paster(codeText, combinations[25]["6/66/666+lifeNumber1/2/3/0"]);
    }
    if (work.length > 2 && work.length < 5 && lifeNumber > 3 && lifeNumber < 7) {
        let codeText = `Труд ${work} + Быт ${lifeNumber}`;
        paster(codeText, combinations[25]["666/6666+lifeNumber4/5/6"]);
    }
    ///
    if (work.length > 0 && work.length < 4 && health.length > 0 && health.length < 4 && familyNumber > 0 && familyNumber < 4) {
        let codeText = `Труд ${work} + Здоровье ${health} + Семья ${familyNumber}`;
        paster(codeText, combinations[26]["6/66/666+4/44/444+familyNumber1/2/3"]);
    }
    if (work.length > 0 && work.length < 4 && health.length > 0 && health.length < 4 && familyNumber > 3 && familyNumber < 6) {
        let codeText = `Труд ${work} + Здоровье ${health} + Семья ${familyNumber}`;
        paster(codeText, combinations[26]["6/66/666+4/44/444+familyNumber4/5"]);
    }
    if (character.length > 0 && character.length < 5 && character.length !== 3 && work.length > 0 && work.length < 4 && familyNumber > 0 && familyNumber < 4) {
        let codeText = `Труд ${work} + Характер ${character} + Семья ${familyNumber}`;
        paster(codeText, combinations[26]["1/11/1111+6/66/666+familyNumber1/2/3"]);
    }
    if (character.length > 2 && character.length < 5 && work.length > 0 && work.length < 4 && familyNumber > 4 && familyNumber < 7) {
        let codeText = `Труд ${work} + Характер ${character} + Семья ${familyNumber}`;
        paster(codeText, combinations[26]["111/1111+6/66/666+familyNumber5/6"]);
    }
    ///
    if (luck.length > 0 && luck.length < 4 && familyNumber < 3) {
        let codeText = `Удача ${luck} + Семья ${familyNumber}`;
        paster(codeText, combinations[27]["7/77/777+familyNumber1/2/0"]);
    }
    if (luck.length > 0 && luck.length < 4 && interest.length < 2) {
        let codeText = `Удача ${luck} + Интерес ${interest}`;
        paster(codeText, combinations[27]["7/77/777+3/0"]);
    }
    if (luck.length > 0 && luck.length < 4 && interest.length > 1 && interest.length < 4 && lifeNumber < 2) {
        let codeText = `Удача ${luck} + Интерес ${interest} + Быт ${lifeNumber}`;
        paster(codeText, combinations[27]["7/77/777+lifeNumber1/0+33/333"]);
    }
    ///
    if (luck.length > 0 && luck.length < 4 && energy.length > 1 && energy.length < 5 && interest.length > 1 && interest.length < 4 && lifeNumber > 2 && lifeNumber < 6) {
        let codeText = `Удача ${luck} + Энергия ${energy} + Интерес ${interest} + Быт ${lifeNumber}`;
        paster(codeText, combinations[28]["7/77/777+22/222/2222+33/333+lifeNumber3/4/5"]);
    }
    if (luck.length > 0 && luck.length < 4 && energy.length < 2 && interest.length < 2) {
        let codeText = `Удача ${luck} + Энергия ${energy} + Интерес ${interest}`;
        paster(codeText, combinations[28]["7/77/777+2/0+3/0"]);
    }
    if (luck.length > 0 && luck.length < 4 && energy.length > 1 && energy.length < 5 && work.length > 0 && work.length < 4 && duty.length < 2 && logic.length > 0 && logic.length < 4) {
        let codeText = `Удача ${luck} + Энергия ${energy} + Труд ${work} + Долг ${duty} + Логика ${logic}`;
        paster(codeText, combinations[28]["7/77/777+22/222/2222+6/66+666+8/0+5/55/555"]);
    }
    ///
    if (luck.length > 0 && luck.length < 4 && interest.length < 2) {
        let codeText = `Удача ${luck} + Интерес ${interest}`;
        paster(codeText, combinations[29]["7/77/777+3/0"]);
    }
    if (luck.length > 0 && luck.length < 4 && interest.length > 1 && interest.length < 4 && logic.length < 1 && memory.length > 1 && memory.length < 5) {
        let codeText = `Удача ${luck} + Интерес ${interest} + Логика ${logic} + Память ${memory}`;
        paster(codeText, combinations[29]["7/77/777+33/333+logic0+99/999/9999"]);
    }
    if (luck.length > 0 && luck.length < 4 && interest.length < 2 && logic.length > 0 && logic.length < 4) {
        let codeText = `Удача ${luck} + Интерес ${interest} + Логика ${logic}`;
        paster(codeText, combinations[29]["7/77/777+3/0+5/55/555"]);
    }
    ///
    if (luck.length > 0 && luck.length < 4 && lifeNumber > 2 && lifeNumber < 6) {
        let codeText = `Удача ${luck} + Быт ${lifeNumber}`;
        paster(codeText, combinations[30]["7/77/777+lifeNumber3/4/5"]);
    }
    if (luck.length > 0 && luck.length < 4 && lifeNumber > 1 && lifeNumber < 5 && memory.length == 5) {
        let codeText = `Удача ${luck} + Быт ${lifeNumber} + Память ${memory}`;
        paster(codeText, combinations[30]["7/77/777+lifeNumber2/3/4+99999"]);
    }
    if (luck.length > 0 && luck.length < 4 && lifeNumber > 0 && lifeNumber < 3 && logic.length > 0 && logic.length < 4) {
        let codeText = `Удача ${luck} + Быт ${lifeNumber} + Логика ${logic}`;
        paster(codeText, combinations[30]["7/77/777+lifeNumber1/2+5/55/555"]);
    }
    ///
    if (luck.length > 0 && luck.length < 4 && duty.length < 2 && logic.length > 0 && logic.length < 4) {
        let codeText = `Удача ${luck} + Долг ${duty} + Логика ${logic}`;
        paster(codeText, combinations[31]["7/77/777+5/55/555+8/0"]);
    }
    if (luck.length > 0 && luck.length < 4 && familyNumber < 4) {
        let codeText = `Удача ${luck} + Семья ${familyNumber}`;
        paster(codeText, combinations[32]["7/77/777+familyNumber1/2/3/0"]);
    }
    ///
    if (luck.length > 0 && luck.length < 4 && temperament > 0 && temperament < 7) {
        let codeText = `Удача ${luck} + Темперамент ${temperament}`;
        paster(codeText, combinations[33]["7/77/777+temperament1/2/3/4/5/6"]);
    }
    ///
    if (luck.length > 0 && luck.length < 4 && (sumFromSumResult == 3 || sumFromSumResult == 7 || sumFromSumResult == 9)) {
        let codeText = `Удача ${luck} + Число судьбы ${sumFromSumResult}`;
        paster(codeText, combinations[34]["7/77/777+fateNumber7/9/3"]);
    }
    if (
        luck.length > 0 &&
        luck.length < 4 &&
        lifeNumber > 0 &&
        lifeNumber < 4 &&
        familyNumber < 3 &&
        familyNumber > 4 &&
        temperament < 2 &&
        temperament > 4 &&
        (sumFromSumResult == 5 || sumFromSumResult == 7 || sumFromSumResult == 9)
    ) {
        let codeText = `Удача ${luck} + Быт ${lifeNumber} + Семья ${familyNumber} + Темперамент ${temperament} + Число судьбы ${sumFromSumResult}`;
        paster(codeText, combinations[34]["7/77/777+lifeNumber1/2/3+familyNumber1/2/0/5/6/7/8/9+temperament1/0/5/6/7+fateNumber9/7/5"]);
    }
    ///
    if (duty.length > 1 && duty.length < 4 && energy.length > 1 && energy.length < 5 && health.length > 0 && health.length < 5 ** health.length !== 3 && interest.length < 2) {
        let codeText = `Долг ${duty} + Энергия ${energy} + Здоровье ${health} + Интерес ${interest}`;
        paster(codeText, combinations[35]["88/888+22/222/2222+4/44/4444+3/0"]);
    }
    if (duty.length > 1 && duty.length < 4 && energy.length < 3 && interest.length > 1 && interest.length < 4 && memory.length > 1 && memory.length < 4) {
        let codeText = `Долг ${duty} + Энергия ${energy} + Память ${memory} + Интерес ${interest}`;
        paster(codeText, combinations[35]["88/888+2/22/0+33/333+99/999"]);
    }
    ///
    if (duty.length > 1 && duty.length < 4 && energy.length < 2) {
        let codeText = `Долг ${duty} + Энергия ${energy}`;
        paster(codeText, combinations[36]["88/888+2/0"]);
    }
    if (duty.length < 2 && energy.length > 1 && energy.length < 5) {
        let codeText = `Долг ${duty} + Энергия ${energy}`;
        paster(codeText, combinations[36]["8/0+22/222/2222"]);
    }
    if (duty.length < 2 && energy.length < 2 && familyNumber < 3) {
        let codeText = `Долг ${duty} + Энергия ${energy} + Семья ${familyNumber}`;
        paster(codeText, combinations[36]["8/0+2/0+familyNumber1/2/0"]);
    }
    if (duty.length > 1 && duty.length < 4 && energy.length > 1 && energy.length < 5 && familyNumber > 3 && familyNumber < 7) {
        let codeText = `Долг ${duty} + Энергия ${energy} + Семья ${familyNumber}`;
        paster(codeText, combinations[36]["88/888+22/222/2222+6/66+familyNumber4/5/6"]);
    }
    ///
    if (duty.length == 1 && familyNumber < 3) {
        let codeText = `Долг ${duty} + Семья ${familyNumber}`;
        paster(codeText, combinations[37]["8+familyNumber1/2/0"]);
    }
    if (duty.length == 1 && familyNumber > 3 && familyNumber < 7) {
        let codeText = `Долг ${duty} + Семья ${familyNumber}`;
        paster(codeText, combinations[37]["8+familyNumber4/5/6"]);
    }
    if (duty.length > 1 && duty.length < 4 && familyNumber == 3) {
        let codeText = `Долг ${duty} + Семья ${familyNumber}`;
        paster(codeText, combinations[37]["88/888+familyNumber3"]);
    }
    if (duty.length > 1 && duty.length < 4 && familyNumber == 4) {
        let codeText = `Долг ${duty} + Семья ${familyNumber}`;
        paster(codeText, combinations[37]["88/888+familyNumber4"]);
    }
    ///
    if (duty.length < 2 && interest.length < 2 && logic.length > 0 && logic.length < 3 && lifeNumber > 2 && lifeNumber < 7) {
        let codeText = `Долг ${duty} + Логика ${logic} + Интерес ${interest} + Быт ${lifeNumber}`;
        paster(codeText, combinations[38]["8/0+3/0+lifeNumber3/4/5/6+5/55"]);
    }
    if (duty.length > 1 && duty.length < 4 && lifeNumber < 3) {
        let codeText = `Долг ${duty} + Быт ${lifeNumber}`;
        paster(codeText, combinations[38]["88/888+lifeNumber1/2/0"]);
    }
    if (duty.length > 1 && duty.length < 4 && lifeNumber > 2 && lifeNumber < 6) {
        let codeText = `Долг ${duty} + Быт ${lifeNumber}`;
        paster(codeText, combinations[38]["88/888+lifeNumber3/4/5"]);
    }
    ///
    if (duty.length > 1 && duty.length < 4 && logic.length > 0 && logic.length < 3 && interest.length < 2) {
        let codeText = `Долг ${duty} + логика ${logic} + Интерес ${interest}`;
        paster(codeText, combinations[39]["88/888+5/55+3/0"]);
    }
    ///
    if (duty.length > 1 && duty.length < 4 && interest.length < 2) {
        let codeText = `Долг ${duty} + Интерес ${interest}`;
        paster(codeText, combinations[40]["88/888+3/0"]);
    }
    if (duty.length < 2 && interest.length < 2) {
        let codeText = `Долг ${duty} + Интерес ${interest}`;
        paster(codeText, combinations[40]["8/0+3/0"]);
    }
    if (duty.length > 1 && duty.length < 4 && interest.length > 1 && interest.length < 4) {
        let codeText = `Долг ${duty} + Интерес ${interest}`;
        paster(codeText, combinations[40]["88/888+33/333"]);
    }
    if (duty.length < 2 && interest.length > 1 && interest.length < 4) {
        let codeText = `Долг ${duty} + Интерес ${interest}`;
        paster(codeText, combinations[40]["8/0+33/333"]);
    }
    ///
    if (duty.length < 2 && memory.length > 1 && memory.length < 4) {
        let codeText = `Долг ${duty} + Память ${memory}`;
        paster(codeText, combinations[41]["8/0+99/999"]);
    }
    if (duty.length > 1 && duty.length < 4 && memory.length < 2) {
        let codeText = `Долг ${duty} + Память ${memory}`;
        paster(codeText, combinations[41]["88/888+9/0"]);
    }
    if (duty.length > 1 && duty.length < 4 && memory.length > 1 && memory.length < 4) {
        let codeText = `Долг ${duty} + Память ${memory}`;
        paster(codeText, combinations[41]["88/888+99/999"]);
    }
    ///
    if (energy.length > 1 && energy.length < 5 && memory.length > 1 && memory.length < 4) {
        let codeText = `Энергия ${energy} + Память ${memory}`;
        paster(codeText, combinations[42]["22/222/2222+99/999"]);
    }
    if (energy.length > 1 && energy.length < 5 && memory.length < 2 && logic.length == 0) {
        let codeText = `Энергия ${energy} + Память ${memory} + Логика ${logic}`;
        paster(codeText, combinations[42]["22/222/2222+9/0+logic0"]);
    }
    if (memory.length < 2 && temperament < 3) {
        let codeText = `Память ${memory} + Темперамент ${temperament}`;
        paster(codeText, combinations[42]["9/0+temperament1/2/0"]);
    }
    ///
    if (memory.length > 1 && memory.length < 5 && health.length > 0 && health.length < 4 && interest.length < 2 && duty.length < 2) {
        let codeText = `Память ${memory} + Здоровье ${health} + Интерес ${interest} + Долг ${duty}`;
        paster(codeText, combinations[43]["99/999/9999+4/44/444+3/0+8/0"]);
    }
    ///
    if (memory.length < 2 && logic.length < 2) {
        let codeText = `Память ${memory} + Логика ${logic}`;
        paster(codeText, combinations[44]["9/0+5/0"]);
    }
    if (memory.length > 1 && memory.length < 5 && logic.length > 0 && logic.length < 4) {
        let codeText = `Память ${memory} + Логика ${logic}`;
        paster(codeText, combinations[44]["5/55/555+99/999/9999"]);
    }
    if (memory.length > 1 && memory.length < 4 && logic.length > 0 && logic.length < 4 && health.length > 0 && health.length < 4) {
        let codeText = `Память ${memory} + Логика ${logic}+ Здоровье ${health}`;
        paster(codeText, combinations[44]["5/55/555+99/999+4/44/444"]);
    }
    ///
    if (memory.length > 1 && memory.length < 4 && interest.length < 2) {
        let codeText = `Память ${memory} + Интерес ${interest}`;
        paster(codeText, combinations[45]["99/999+3/0"]);
    }
    if (memory.length > 1 && memory.length < 4 && interest.length > 1 && interest.length < 4) {
        let codeText = `Память ${memory} + Интерес ${interest}`;
        paster(codeText, combinations[45]["99/999+33/333"]);
    }
    ///
    if (memory.length < 2 && duty.length < 2 && logic.length == 0) {
        let codeText = `Память ${memory} + Долг ${duty} + Логика ${logic}`;
        paster(codeText, combinations[46]["9/0+8/0+logic0"]);
    }
    if (memory.length > 1 && memory.length < 4 && logic.length > 0 && logic.length < 3 && duty.length > 0 && duty.length < 4) {
        let codeText = `Память ${memory} + Долг ${duty} + Логика ${logic}`;
        paster(codeText, combinations[46]["99/999+5/55+8/88/888"]);
    }
    ///
    if (temperament < 3 && interest.length < 2) {
        let codeText = `Темперамент ${temperament} + Интерес ${interest}`;
        paster(codeText, combinations[47]["temperament1/2/0+3/0"]);
    }
    if (temperament < 3 && familyNumber > 0 && familyNumber < 4) {
        let codeText = `Темперамент ${temperament} + Семья ${familyNumber}`;
        paster(codeText, combinations[47]["temperament1/2/0+familyNumber1/2/3"]);
    }
    if (temperament < 3 && energy.length > 1 && energy.length < 5) {
        let codeText = `Темперамент ${temperament} + Энергия ${energy}`;
        paster(codeText, combinations[47]["temperament1/2/0+22/222/2222"]);
    }
    if (temperament > 2 && temperament < 9 && familyNumber < 3) {
        let codeText = `Темперамент ${temperament} + Семья ${familyNumber}`;
        paster(codeText, combinations[47]["temperament3/4/5/6/7/8+familyNumber1/2/0"]);
    }
    if (temperament > 3 && temperament < 9 && logic.length > 1 && logic.length < 5 && luck.length > 0 && luck.length) {
        let codeText = `Темперамент ${temperament} + Логика ${logic} + Удача ${luck}`;
        paster(codeText, combinations[47]["temperament4/5/6/7/8+55/555/5555+7/77/777"]);
    }
    ///
    if (lifeNumber < 3 && duty.length > 1 && duty.length < 4) {
        let codeText = `Быт ${lifeNumber} + Долг ${duty}`;
        paster(codeText, combinations[48]["lifeNumber1/2/0+88/888"]);
    }
    if (lifeNumber > 1 && duty.length > 1 && duty.length < 4) {
        let codeText = `Быт ${lifeNumber} + Долг ${duty}`;
        paster(codeText, combinations[48]["lifeNumber2/3/4/5+88/888"]);
    }
    if (lifeNumber > 2 && lifeNumber < 5 && logic.length > 1 && logic.length < 4) {
        let codeText = `Быт ${lifeNumber} + Логика ${logic}`;
        paster(codeText, combinations[48]["lifeNumber3/4/5+55/555"]);
    }
    ///
    if (sumFromSumResult == 1 && character.length > 3 && character.length < 7) {
        let codeText = `Число судьбы ${sumFromSumResult} + Характер ${character}`;
        paster(codeText, combinations[49]["fateNumber1+1111/11111/111111"]);
    }
    if (sumFromSumResult == 1 && energy.length > 1 && energy.length < 5 && work.length > 0 && work.length < 3 && duty.length > 1 && duty.length < 4) {
        let codeText = `Число судьбы ${sumFromSumResult} + Энергия ${energy} + Труд ${work} + Долг ${duty}`;
        paster(codeText, combinations[49]["fateNumber1+22/222/2222+6/66+88/888"]);
    }
    if (sumFromSumResult > 1 && sumFromSumResult < 4 && luck.length > 0 && luck.length < 3 && logic.length > 0 && logic.length < 3) {
        let codeText = `Число судьбы ${sumFromSumResult} + Удача ${luck} + Логика ${logic}`;
        paster(codeText, combinations[49]["fateNumber2/3+7/77+5/55"]);
    }
    if (sumFromSumResult == 4 && energy.length > 1 && energy.length < 5 && work.length > 0 && work.length < 3) {
        let codeText = `Число судьбы ${sumFromSumResult} + Энергия ${energy} + Труд ${work}`;
        paster(codeText, combinations[49]["fateNumber4+22/222/2222+6/66"]);
    }
    if (sumFromSumResult == 4 && health.length > 0 && health.length < 4 && work.length > 0 && work.length < 4) {
        let codeText = `Число судьбы ${sumFromSumResult} + Здоровье ${health} + Труд ${work}`;
        paster(codeText, combinations[49]["fateNumber4+4/44/444+6/66/666"]);
    }
    if (sumFromSumResult == 5 && energy.length == 3 && logic.length > 0 && logic.length < 4) {
        let codeText = `Число судьбы ${sumFromSumResult} + Энергия ${energy} + Логика ${logic}`;
        paster(codeText, combinations[49]["fateNumber5+222+5/55/555"]);
    }
    if (sumFromSumResult == 5 && interest.length < 2) {
        let codeText = `Число судьбы ${sumFromSumResult} + Интерес ${interest}`;
        paster(codeText, combinations[49]["fateNumber5+3/0"]);
    }
    if (sumFromSumResult == 6 && interest.length < 2) {
        let codeText = `Число судьбы ${sumFromSumResult} + Интерес ${interest}`;
        paster(codeText, combinations[49]["fateNumber6+3/0"]);
    }
    if (sumFromSumResult == 7 && luck.length > 0 && luck.length < 4 && work.length > 0 && work.length < 4) {
        let codeText = `Число судьбы ${sumFromSumResult} + Удача ${luck} + Труд ${work}`;
        paster(codeText, combinations[49]["fateNumber7+7/77/777+6/66/666"]);
    }
    if (sumFromSumResult == 8 && lifeNumber > 2 && lifeNumber < 6 && work.length > 0 && work.length < 4) {
        let codeText = `Число судьбы ${sumFromSumResult} + Быт ${lifeNumber} + Труд ${work}`;
        paster(codeText, combinations[49]["fateNumber8+lifeNumber3/4/5+6/66/666"]);
    }
    if (sumFromSumResult == 9 && familyNumber > 4 && familyNumber < 8 && logic.length > 1 && logic.length < 4) {
        let codeText = `Число судьбы ${sumFromSumResult} + Семья ${familyNumber} + Логика ${logic}`;
        paster(codeText, combinations[49]["fateNumber9+familyNumber5/6/7+55/555"]);
    }
    if (
        sumFromSumResult == 9 &&
        luck.length > 0 &&
        luck.length < 4 &&
        lifeNumber < 3 &&
        familyNumber > 0 &&
        familyNumber < 4 &&
        familyNumber > 5 &&
        familyNumber < 8 &&
        temperament > 4 &&
        temperament < 8
    ) {
        let codeText = `Число судьбы ${sumFromSumResult} + Удача ${luck} + Быт ${lifeNumber} + Семья ${familyNumber} + Темперамент ${temperament}`;
        paster(codeText, combinations[49]["fateNumber9+7/77/777+lifeNumber1/2/0+familyNumber1/2/3/6/7+temperament5/6/7"]);
    }
    ///
    if (health.length > 1) {
        let codeText = `Здоровье ${health}`;
        paster(codeText, combinations[50]["health44/444/4444+"]);
    }
    if (energy.length > 1 && energy.length < 5 && work.length > 1 && work.length < 4 && interest.length < 2) {
        let codeText = `Энергия ${energy} + Труд ${work}  + Интерес ${interest}`;
        paster(codeText, combinations[50]["22/222/2222+88/888+3/0"]);
    }
    if (memory.length > 1 && memory.length < 6) {
        let codeText = `Память ${memory}`;
        paster(codeText, combinations[50]["99/999/9999/99999"]);
    }
    if (logic.length > 1 && logic.length < 5) {
        let codeText = `Логика ${logic}`;
        paster(codeText, combinations[50]["55/555/5555"]);
    }
    ///
    if (luck.length > 0 && luck.length < 4 && lifeNumber < 3 && interest.length > 1 && interest.length < 4) {
        let codeText = `Удача ${luck} + Быт ${lifeNumber}  + Интерес ${interest}`;
        paster(codeText, combinations[51]["7/77/777+lifeNumber1/2/0+33/333"]);
    }
    if (luck.length > 0 && luck.length < 4 && lifeNumber < 3 && interest.length > 1 && interest.length < 4 && familyNumber < 3) {
        let codeText = `Удача ${luck} + Быт ${lifeNumber}  + Интерес ${interest} + Семья ${familyNumber}`;
        paster(codeText, combinations[51]["7/77/777+lifeNumber1/2/0+33/333+familyNumber1/2/0"]);
    }
    ///вывод кода альфа-самки
    const alphaFemaleCode = document.querySelector(".alpha-female__code");
    if (temperament > 2 && temperament < 8) {
        alphaFemaleCode.classList.add("show");
        let codeText = `Темперамент ${temperament}`;
        alphaFemaleCode.append(createParagraph(codeText), createDescription(combinations["alphaFemaleCode"]["temperament3/4/5/6/7"]));
    }
    if (interest.length > 1 && interest.length < 5) {
        alphaFemaleCode.classList.add("show");
        let codeText = `Интерес ${interest}`;
        alphaFemaleCode.append(createParagraph(codeText), createDescription(combinations["alphaFemaleCode"]["33/333/3333"]));
    }
    if (interest.length > 1 && interest.length < 5 && logic.length < 2 && memory.length > 1 && memory.length < 4 && temperament > 2 && temperament < 8) {
        alphaFemaleCode.classList.add("show");
        let codeText = `Темперамент ${temperament} + Интерес ${interest} + Логика ${logic} + Память ${memory}`;
        alphaFemaleCode.append(createParagraph(codeText), createDescription(combinations["alphaFemaleCode"]["33/333/3333+5/0+99/999+temperament3/4/5/6/7"]));
    }
    ///вывод кода бета-самки
    const betaFemaleCode = document.querySelector(".beta-female__code");
    if (character.length > 3 && character.length < 8 && duty.length > 1 && duty.length < 4 && temperament < 3) {
        betaFemaleCode.classList.add("show");

        let codeText = `Характер ${character} + Долг ${duty} + Темперамент ${temperament}`;
        betaFemaleCode.append(createParagraph(codeText), createDescription(combinations["betaFemaleCode"]["1111/11111/111111/1111111+88/888+temperament1/2/0"]));

        const personalTouch = Object.values(combinations["betaFemaleCode"]["personalTouch"]);
        betaFemaleCode.append(createParagraph("Характерные черты бета-самки:"));
        personalTouch.forEach((item) => betaFemaleCode.append(createDescription(item)));

        betaFemaleCode.append(createParagraph("Совет:"), createDescription(combinations["betaFemaleCode"]["advice"]));
    }
    /// вывод кода альфа-самца
    const alphaMaleCode = document.querySelector(".alpha-male__code");
    if (character.length > 3 && character.length < 7 && duty.length == 1) {
        alphaMaleCode.classList.add("show");

        let codeText = `Долг ${duty} + Характер ${character}`;
        alphaMaleCode.append(createParagraph(codeText), createDescription(combinations["alphaMale"]["88/888||1111/11111/111111+8"]));
    }
    if (duty.length > 1 && duty.length < 4) {
        alphaMaleCode.classList.add("show");

        let codeText = `Долг ${duty}`;
        alphaMaleCode.append(createParagraph(codeText), createDescription(combinations["alphaMale"]["88/888||1111/11111/111111+8"]));
    }
    if (interest.length > 1 && interest.length < 4) {
        alphaMaleCode.classList.add("show");

        let codeText = `Интерес ${interest}`;
        alphaMaleCode.append(createParagraph(codeText), createDescription(combinations["alphaMale"]["33/333"]));
    }
    if (lifeNumber > 2 && lifeNumber < 5) {
        alphaMaleCode.classList.add("show");

        let codeText = `Быт ${lifeNumber}`;
        alphaMaleCode.append(createParagraph(codeText), createDescription(combinations["alphaMale"]["lifeNumber3/4"]));
    }
    if (character.length > 2 && character.length < 7) {
        alphaMaleCode.classList.add("show");

        let codeText = `Характер ${character}`;
        alphaMaleCode.append(createParagraph(codeText), createDescription(combinations["alphaMale"]["111/1111/11111/111111"]));
    }
    /// код миллионера

    const millionaireCode = document.querySelector(".millionaire__code");
    if (lifeNumber > 2 && lifeNumber < 6 && work.length > 0 && work.length < 3 && duty.length < 2 && health.length > 0 && health.length < 3) {
        millionaireCode.classList.add("show");

        let codeText = `Быт ${lifeNumber} + Труд ${work} + Долг ${duty} + Здоровье ${health}`;
        millionaireCode.append(createParagraph(codeText), createDescription(combinations["millionaireCode"]["lifeNumber3/4/5+6/66+8/0+4/44"]));

        const mistakes = Object.values(combinations["millionaireCode"]["mistakes"]);
        millionaireCode.append(createParagraph("Характерные ошибки людей с таким кодом:"));
        mistakes.forEach((item) => millionaireCode.append(createDescription(item)));
        console.log(health.length);
    }

    /// код маминого сынка
    const motherSon = document.querySelector(".mother-son__code");
    if (duty.length > 3 && duty.length < 6 && familyNumber > 5 && familyNumber < 10) {
        motherSon.classList.add("show");

        let codeText = `Семья ${familyNumber} + Долг ${duty}`;
        motherSon.append(createParagraph(codeText), createDescription(combinations["mothersSon"]["8888/88888+familyNumber6/7/8/9"]));
    }
    if (duty.length < 2 && character.length > 0 && character.length < 3 && familyNumber < 3 && lifeNumber < 2) {
        motherSon.classList.add("show");

        let codeText = `Семья ${familyNumber} + Долг ${duty} + Характер ${character} + Быт ${lifeNumber}`;
        motherSon.append(createParagraph(codeText), createDescription(combinations["mothersSon"]["8/0+1/11+familyNumber1/2/0+lifeNumber1/0"]));
    }
    ///  код жадины
    const meanie = document.querySelector(".meanie__code");
    meanie.append(createSubTitle(combinations["meanie"]["title"]));

    if (logic.length > 0 && lifeNumber > 0 && lifeNumber < 7 && familyNumber > 3 && familyNumber < 8) {
        meanie.classList.add("show");
        let codeText = `Логика ${logic} + Быт ${lifeNumber} + Семья ${familyNumber}`;
        meanie.append(createParagraph(codeText));
    }
    if (interest.length < 2 && logic.length > 0 && logic.length < 3 && lifeNumber == 2) {
        meanie.classList.add("show");
        let codeText = `Логика ${logic} + Быт ${lifeNumber} + Интерес ${interest}`;
        meanie.append(createParagraph(codeText));
    }
    if (interest.length < 2 && logic.length > 0 && logic.length < 3 && temperament < 3) {
        meanie.classList.add("show");
        let codeText = `Логика ${logic} + Быт ${lifeNumber} + Темперамент ${temperament}`;
        meanie.append(createParagraph(codeText));
    }
    meanie.append(createDescription(combinations["meanie"]["value"]));

    /// код игрока
    const gambler = document.querySelector(".gambler__code");
    gambler.append(createSubTitle(combinations["gambler"]["title"]));

    if (interest.length > 1 && interest.length < 4 && lifeNumber < 3 && logic.length > 0 && logic.length < 3 && luck.length > 0 && luck.length < 4) {
        gambler.classList.add("show");
        let codeText = `Интерес ${interest} + Быт ${lifeNumber} + Логика ${logic} + Удача ${luck}`;
        gambler.append(createParagraph(codeText));
    }
    if (luck.length > 0 && luck.length < 4 && lifeNumber > 2 && lifeNumber < 6) {
        gambler.classList.add("show");
        let codeText = `Быт ${lifeNumber} + Удача ${luck}`;
        gambler.append(createParagraph(codeText));
    }
    gambler.append(createDescription(combinations["gambler"]["value"]));

    /// код зануды
    const nerd = document.querySelector(".nerd__code");
    nerd.append(createSubTitle(combinations["nerd"]["title"]));

    if (duty.length > 1 && duty.length < 4 && energy.length > 2 && familyNumber > 4 && familyNumber < 9 && work.length > 0 && work.length < 4) {
        nerd.classList.add("show");
        let codeText = `Долг ${duty} + Семья ${familyNumber} + Энергия ${energy} + Труд ${work}`;
        nerd.append(createParagraph(codeText));
    }
    if (energy.length > 1 && interest.length < 2 && logic.length > 0 && logic.length < 4) {
        nerd.classList.add("show");
        let codeText = `Энергия ${energy} + Интерес ${interest} + Логика ${logic}`;
        nerd.append(createParagraph(codeText));
    }
    nerd.append(createDescription(combinations["nerd"]["value"]));

    /// код альфонса
    const gigolo = document.querySelector(".gigolo__code");
    gigolo.append(createSubTitle(combinations["gigolo"]["title"]));

    if (lifeNumber < 3 && duty.length < 2) {
        gigolo.classList.add("show");

        let codeText = `Быт ${lifeNumber} + Долг ${duty}`;
        gigolo.append(createParagraph(codeText), createDescription(combinations["gigolo"]["codes"]["lifeNumber1/2/0+8/0"]));
    }
    if (luck.length > 0 && luck.length < 4 && logic.length > 0 && logic.length < 4) {
        gigolo.classList.add("show");

        let codeText = `Удача ${luck} + Логика ${logic}`;
        gigolo.append(createParagraph(codeText), createDescription(combinations["gigolo"]["codes"]["7/77/777+5/55/555"]));
    }
    if (luck.length > 0 && luck.length < 4 && work.length > 0 && work.length < 4 && temperament > 3 && temperament < 7) {
        gigolo.classList.add("show");

        let codeText = `Удача ${luck} + Труд ${work} + Темперамент ${temperament}`;
        gigolo.append(createParagraph(codeText), createDescription(combinations["gigolo"]["codes"]["temperament4/5/6+7/77/777+6/66/666"]));
    }

    /// код домашнего тирана
    const tyrant = document.querySelector(".tyrant__code");
    tyrant.append(createSubTitle(combinations["homeTyrant"]["title"]));

    if (health.length > 1 && health.length < 5 && memory.length > 1 && memory.length < 5 && temperament < 3) {
        tyrant.classList.add("show");

        let codeText = `Здоровье ${health} + Память ${memory} + Темперамент ${temperament}`;
        tyrant.append(createParagraph(codeText), createDescription(combinations["homeTyrant"]["44/444/4444+99/999/9999+temperament1/2/0"]));
    }
    if (familyNumber > 5 && familyNumber < 10 && logic.length > 1 && logic.length < 5) {
        tyrant.classList.add("show");

        let codeText = `Семья ${familyNumber} + Логика ${logic}`;
        tyrant.append(createParagraph(codeText), createDescription(combinations["homeTyrant"]["familyNumber6/7/8/9+55/555/5555"]));
    }

    /// код маньяка
    const maniac = document.querySelector(".maniac__code");
    maniac.append(createSubTitle(combinations["maniac"]["title"]));
    if (logic.length > 2) {
        maniac.classList.add("show");

        let codeText = `Логика ${logic}`;
        maniac.append(createParagraph(codeText), createDescription(combinations["maniac"]["55/555/5555+"]));
    }
    if (health.length > 1 && health.length < 5) {
        maniac.classList.add("show");

        let codeText = `Здоровье ${health}`;
        maniac.append(createParagraph(codeText), createDescription(combinations["maniac"]["44/444/4444"]));
    }
};
