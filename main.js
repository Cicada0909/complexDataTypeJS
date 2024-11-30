const person = {
    name: prompt("Введите ваше имя"),
    age: +prompt("Введите ваш возраст"),
    hasPhoto: confirm("У вас есть фото?"),
}

const passportOffice = {
    minAge: 18,
    requiresPhoto: true,
}

if (person.age >= passportOffice.minAge) {
    if (person.hasPhoto == passportOffice.requiresPhoto) {
        console.log(`${person.name}, вы можете получить паспорт`);
    } else {
        console.log(`${person.name}, принесите фото для получение паспорта`);
    }
} else {
    console.log(`${person.name} вы слишком молоды для получения паспорта.`);
}