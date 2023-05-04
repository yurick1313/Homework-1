// Теореритчні питання

/*Змінна var - на даний час не використовується бо вона застаріла.
		Змінну let - можна змінювати.
		Змінну const - не можна змінювати.*/

		// Задача

		/*Реализовать простую программу на Javascript, которая будет взаимодействовать с пользователем с помощью модальных окон браузера - alert, prompt, confirm. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

		Технические требования:
		Считать с помощью модельного окна браузера данные пользователя: имя и возраст.
		Если возраст меньше 18 лет - показать на экране сообщение: You are not allowed to visit this website.
		Если возраст от 18 до 22 лет (включительно) - показать окно со следующим сообщением: Are you sure you want to continue? и кнопками Ok, Cancel. Если пользователь нажал Ok, показать на экране сообщение: Welcome,  + имя 	пользователя. Если пользователь нажал Cancel, показать на экране сообщение: You are not allowed to visit this website.
		Если возраст больше 22 лет - показать на экране сообщение: Welcome,  + имя пользователя.*/

		const name = prompt("Вкажіть своє ім'я");
		const age = prompt('Вкажіть ваш вік');

		if (age < 18) {
			alert('Вхід на сайт ЗАБОРОНЕНО !');
		} else if (age > 22) {
			alert(`Ласкаво просимо ${name} !`);
		} else if (age >= 18 && age <=22) {
			const qwestion = confirm('Ви впевнені що хочете продовжити ?');
		 if (qwestion) {
			alert(`Ласкаво просимо ! ${name}`);
		} else {
			alert(`${name}, до наступної зустрічі !`);
		}
	}