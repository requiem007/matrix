// export const showElements = function () {
//     // Характер
//     let character = document.getElementById("1").querySelector(".output").textContent;
//     if (character === "-") character = 0;
//     character = +character;
//     // console.log(character);

//     let type = String(character).length % 2;
//     type === 0 ? (type = "secondType") : (type = "firstType");
//     // console.log(type);

//     // console.log(Number(document.getElementById("8").querySelector(".output").textContent));

//     //подзаголовок
//     const subTitle = document.createElement("button");
//     subTitle.classList.add("full-desc__sub-title");
//     subTitle.textContent = `Ваш характер - ${character}`;

//     //  текст описания
//     const desc = document.createElement("div");
//     desc.classList.add("full-desc__text");
//     const text = document.createElement("p");
//     text.classList.add("desc__text");
//     text.textContent = `${fate[5].character[character].value}`;

//     // пример
//     const example = document.createElement("p");
//     example.classList.add("desc__text");
//     example.textContent = `${fate[5].character[character].example}`;

//     // Блок тип характера
//     const characterType = document.createElement("div");
//     characterType.classList.add("character__type");
//     // Заголовок
//     const characterTitle = document.createElement("h4");
//     characterTitle.classList.add("character__title");
//     characterTitle.textContent = "Тип восприятия";
//     // описание типа характера
//     const characterTypeDescription = document.createElement("p");
//     characterTypeDescription.textContent = `${fate[5].character[type]}`;

//     characterType.append(characterTitle, characterTypeDescription);
//     desc.append(text, example, characterType);

//     // Энергия

//     let energy = document.getElementById("2").querySelector(".output").textContent;
//     if (energy === "-") energy = 0;
//     energy = +energy;
//     // console.log(energy);

//     //подзаголовок
//     const energyTitle = document.createElement("button");
//     energyTitle.classList.add("full-desc__sub-title");
//     energyTitle.textContent = `Ваша энергия - ${energy}`;

//     //  контейнер с описанием
//     const descEnergy = document.createElement("div");
//     descEnergy.classList.add("full-desc__text");
//     // описание
//     const energyValue = document.createElement("p");
//     energyValue.classList.add("desc__text");
//     energyValue.textContent = `${fate[6].energy[energy].value}`;

//     const recommendationTitle = document.createElement("h4");
//     recommendationTitle.classList.add("recommendation__title");
//     recommendationTitle.textContent = "Рекомендации";
//     // описание
//     const energyRecommendation = document.createElement("p");
//     energyRecommendation.classList.add("desc__text");
//     energyRecommendation.textContent = `${fate[6].energy[energy].recommendations}`;

//     const marriageTitle = document.createElement("h4");
//     marriageTitle.classList.add("marriage__title");
//     marriageTitle.textContent = "В браке";
//     // описание
//     const energyMarriage = document.createElement("p");
//     energyMarriage.classList.add("desc__text");
//     energyMarriage.textContent = `${fate[6].energy[energy].marriage}`;

//     descEnergy.append(energyValue, recommendationTitle, energyRecommendation, marriageTitle, energyMarriage);

//     // Интерес

//     let interest = document.getElementById("3").querySelector(".output").textContent;
//     if (interest === "-") interest = 0;
//     if (interest > 33333) interest = 33333;
//     interest = +interest;
//     console.log(interest);

//     //подзаголовок
//     const interestTitle = document.createElement("button");
//     interestTitle.classList.add("full-desc__sub-title");
//     interestTitle.textContent = `Ваша интеллект - ${interest}`;

//     //  контейнер с описанием
//     const descInterest = document.createElement("div");
//     descInterest.classList.add("full-desc__text");
//     // описание
//     const interestValue = document.createElement("p");
//     interestValue.classList.add("desc__text");
//     interestValue.textContent = `${fate[7].interest[interest]}`;

//     descInterest.append(interestValue);

//     // Здоровье

//     let health = document.getElementById("4").querySelector(".output").textContent;
//     if (health === "-") health = 0;
//     // console.log(health);

//     //подзаголовок
//     const healthTitle = document.createElement("button");
//     healthTitle.classList.add("full-desc__sub-title");
//     healthTitle.textContent = `Ваше здоровье - ${health}`;

//     //  контейнер с описанием
//     const descHealth = document.createElement("div");
//     descHealth.classList.add("full-desc__text");

//     // описание
//     const healthDescription = document.createElement("p");
//     healthDescription.classList.add("desc__text");

//     if (health === 0) {
//         healthDescription.textContent = `${fate[8].health[health].value}`;

//         // создаем список
//         const list = document.createElement("ul");
//         list.classList.add("desc__list");

//         // создаем пункт списка
//         const item1 = document.createElement("li");
//         item1.classList.add("desc__item");
//         item1.textContent = `${fate[8].health[health].first}`;
//         // создаем пункт списка
//         const item2 = document.createElement("li");
//         item2.classList.add("desc__item");
//         item2.textContent = `${fate[8].health[health].second}`;
//         // создаем пункт списка
//         const item3 = document.createElement("li");
//         item3.classList.add("desc__item");
//         item3.textContent = `${fate[8].health[health].third}`;
//         // создаем пункт списка
//         const item4 = document.createElement("li");
//         item4.classList.add("desc__item");
//         item4.textContent = `${fate[8].health[health].fourth}`;

//         list.append(item1, item2, item3, item4);
//         descHealth.append(healthDescription, list);
//         // healthDescription.append(list);
//     } else {
//         healthDescription.textContent = `${fate[8].health[health]}`;
//         descHealth.append(healthDescription);
//     }
//     // console.log(healthDescription);
//     // console.log(fate[8].health[health].first);

//     // Логика

//     let logic = document.getElementById("5").querySelector(".output").textContent;
//     if (logic === "-") logic = 0;

//     //подзаголовок
//     const logicTitle = document.createElement("button");
//     logicTitle.classList.add("full-desc__sub-title");
//     logicTitle.textContent = `Ваша логика - ${logic}`;

//     //  контейнер с описанием
//     const logicDesc = document.createElement("div");
//     logicDesc.classList.add("full-desc__text");

//     // описание
//     const logicValue = document.createElement("p");
//     logicValue.classList.add("desc__text");
//     logicValue.textContent = `${fate[9].logics[logic]}`;

//     logicDesc.append(logicValue);

//     // Труд

//     let work = document.getElementById("6").querySelector(".output").textContent;
//     if (work === "-") work = 0;

//     //подзаголовок
//     const workTitle = document.createElement("button");
//     workTitle.classList.add("full-desc__sub-title");
//     workTitle.textContent = `Ваш труд - ${work}`;

//     if (work > 6666) work = 6666;
//     //  контейнер с описанием
//     const workDesc = document.createElement("div");
//     workDesc.classList.add("full-desc__text");

//     // описание
//     const workValue = document.createElement("p");
//     workValue.classList.add("desc__text");
//     workValue.textContent = `${fate[10].work[work]}`;

//     workDesc.append(workValue);

//     // Удача

//     let luck = document.getElementById("7").querySelector(".output").textContent;
//     if (luck === "-") luck = 0;

//     //подзаголовок
//     const luckTitle = document.createElement("button");
//     luckTitle.classList.add("full-desc__sub-title");
//     luckTitle.textContent = `Ваша удача - ${luck}`;

//     if (luck > 7777) luck = 7777;
//     //  контейнер с описанием
//     const luckDesc = document.createElement("div");
//     luckDesc.classList.add("full-desc__text");

//     // описание
//     const luckValue = document.createElement("p");
//     luckValue.classList.add("desc__text");
//     luckValue.textContent = `${fate[11].luck[luck]}`;

//     luckDesc.append(luckValue);

//     // Долг

//     let duty = document.getElementById("8").querySelector(".output").textContent;
//     if (duty === "-") duty = 0;

//     //подзаголовок
//     const dutyTitle = document.createElement("button");
//     dutyTitle.classList.add("full-desc__sub-title");
//     dutyTitle.textContent = `Ваш долг - ${duty}`;

//     if (duty > 8888) duty = 8888;
//     //  контейнер с описанием
//     const dutyDesc = document.createElement("div");
//     dutyDesc.classList.add("full-desc__text");

//     // описание
//     const dutyValue = document.createElement("p");
//     dutyValue.classList.add("desc__text");
//     dutyValue.textContent = `${fate[12].duty[duty]}`;

//     dutyDesc.append(dutyValue);

//     // Память

//     let memory = document.getElementById("9").querySelector(".output").textContent;
//     if (memory === "-") memory = 0;

//     //подзаголовок
//     const memoryTitle = document.createElement("button");
//     memoryTitle.classList.add("full-desc__sub-title");
//     memoryTitle.textContent = `Ваша память - ${memory}`;

//     if (memory > 9999) memory = 9999;
//     //  контейнер с описанием
//     const memoryDesc = document.createElement("div");
//     memoryDesc.classList.add("full-desc__text");

//     // описание
//     const memoryValue = document.createElement("p");
//     memoryValue.classList.add("desc__text");
//     memoryValue.textContent = `${fate[13].memory[memory]}`;

//     memoryDesc.append(memoryValue);

//     const coincidencesButton = document.createElement("button");
//     coincidencesButton.classList.add("coincidences__btn");
//     coincidencesButton.textContent = "Показать сочетания секторов ";

//     // сборка

//     bodyDiv.append(
//         subTitle,
//         desc,
//         energyTitle,
//         descEnergy,
//         interestTitle,
//         descInterest,
//         healthTitle,
//         descHealth,
//         logicTitle,
//         logicDesc,
//         workTitle,
//         workDesc,
//         luckTitle,
//         luckDesc,
//         dutyTitle,
//         dutyDesc,
//         memoryTitle,
//         memoryDesc,
//         coincidencesButton
//     );
// };
