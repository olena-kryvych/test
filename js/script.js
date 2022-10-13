// btn.addEventListener("click", f_out);

// function f_out() {
//     console.log(y1.checked);
//     console.log(y2.checked);
//     console.log(y3.checked);
//     console.log(y4.checked);

//     if (y4.checked) {
//         alert("Точно! Ван Гог почав малювати вже у зрілому віці.");

//     } else if (y1.checked || y2.checked || y3.checked) {
//         alert("На жаль, ні. Художнику було 27 років.");

//     } else {
//         alert("Оберіть відповідь!");
//     }
// }


btn.addEventListener("click", f_out);
function f_out() {
    console.log(y1.checked);
    console.log(y2.checked);
    console.log(y3.checked);
    console.log(y4.checked);

    const openModal = (triggerSelector, modalDataSelector) => { // оголошуємо функцію відкриття модального вікна, яка приймає як параметри селектори кнопки та відповідного модального вікна
        const trigger = document.querySelector(triggerSelector) // шукаємо кнопку по переданому селектору
        const modal = document.querySelector(modalDataSelector) // шукаємо модальне вікно по переданому селектору
        if (!trigger || !modal) return // якщо така кнопка чи модальне вікно не знайдені, то припиняємо роботу функції
        trigger.addEventListener("click", e => { // при натисканні на кнопку
            e.preventDefault() // запобігаємо браузерним діям (якщо кнопка зроблена через тег посилання <a href=""></a>, то скасовується перехід за посиланням)
            modal.classList.add("modal_active") // відображаємо модальне вікно, додавши йому активний клас
        })
    }

    if (y4.checked) {
        openModal(".btn", '.modal[data-modal="one"]') // Запускаємо функцію та передаємо селектори для першого модального вікна
    }
    else if (y1.checked || y2.checked || y3.checked) {
        openModal(".btn", '.modal[data-modal="two"]') // Запускаем функцию и передаем селекторы для второго модального окна

    } else {
        alert("Оберіть відповідь!");
    }


    const closeModal = () => { // оголошуємо функцію закриття модального вікна
        const modals = document.querySelectorAll(".modal") // шукаємо всі модальні вікна
        if (!modals) return // якщо їх немає, то припиняємо виконання функції
        modals.forEach(el => { // якщо є, то для кожного з них
            el.addEventListener("click", e => { // при кліку
                if (e.target.closest(".modal__close")) { // якщо клік був клік на кнопці закриття
                    el.classList.remove("modal_active") // то приховуємо модальне вікно, видаляючи активний клас
                    location.reload();
                }
                if (!e.target.closest(".modal__body")) { // якщо клік був поза контентної частини модального вікна, тобто на затемнену область
                    el.classList.remove("modal_active") // то теж приховуємо модальне вікно, видаляючи активний клас
                    location.reload();
                }
            })
        })
    }
    closeModal() // викликаємо функцію закриття

}

