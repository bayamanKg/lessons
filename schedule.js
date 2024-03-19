const scheduleNumer = {
  Вторник: [
    {
      subject: "Вычислительная системы и коммуникации",
      room: "УК-10-21",
      time: "8:00",
    },
    { subject: "Моделирование бизнец процессов", room: "102", time: "9:30" },
    { subject: "Моделирование бизнец процессов", room: "103", time: "11:00" },
    { subject: "Физика", room: "104", time: "11:00" },
    { subject: "БЖД", room: "105", time: "13:00" },
    {
      subject: "Управление предпринмательскими рисками",
      room: "УК-9-308",
      time: "14:30",
    },
    // Добавьте уроки для вторника
  ],
  Среда: [
    { subject: "", room: "", time: "8:00" },
    { subject: "WEB-программирование", room: "102", time: "9:30" },
    { subject: "", room: "", time: "11:00" },
    { subject: "БЖД", room: "104", time: "12:20" },
    { subject: "", room: "", time: "13:00" },
    // Добавьте уроки для среды
  ],
  Четверг: [
    {
      subject: "Вычислительная системы и коммуникации",
      room: "101",
      time: "8:00",
    },
    {
      subject: "Вычислительная системы и коммуникации ",
      room: "102",
      time: "9:30",
    },
    { subject: "", room: "", time: "11:00" },
    { subject: "", room: "", time: "12:20" },
    { subject: "", room: "", time: "13:00" },
    // Добавьте уроки для четверга
  ],
  Пятница: [
    { subject: "WEB-программирование", room: "101", time: "8:00" },
    { subject: "Моделирование бизнец процессов", room: "102", time: "9:30" },
    { subject: "WEB-программирование", room: "103", time: "11:00" },
    { subject: "БЖД", room: "104", time: "12:20" },
    { subject: "", room: "", time: "12:00" },
    // Добавьте уроки для пятницы
  ],
};

const scheduleDenom = {
  // Аналогично для знаменателя

  Вторник: [
    { subject: "f", room: "101", time: "8:00" },
    { subject: "fк", room: "102", time: "9:00" },
    { subject: "Иностранный язык", room: "103", time: "10:00" },
    { subject: "Физика", room: "104", time: "11:00" },
    { subject: "Химия", room: "105", time: "12:00" },
    // Добавьте уроки для вторника
  ],
  Среда: [
    { subject: "Математика", room: "101", time: "8:00" },
    { subject: "Русский язык", room: "102", time: "9:00" },
    { subject: "Иностранный язык", room: "103", time: "10:00" },
    { subject: "Физика", room: "104", time: "11:00" },
    { subject: "Химия", room: "105", time: "12:00" },
    // Добавьте уроки для среды
  ],
  Четверг: [
    { subject: "Математика", room: "101", time: "8:00" },
    { subject: "Русский язык", room: "102", time: "9:00" },
    { subject: "Иностранный язык", room: "103", time: "10:00" },
    { subject: "Физика", room: "104", time: "11:00" },
    { subject: "Химия", room: "105", time: "12:00" },
    // Добавьте уроки для четверга
  ],
  Пятница: [
    { subject: "Математика", room: "101", time: "8:00" },
    { subject: "Русский язык", room: "102", time: "9:00" },
    { subject: "Иностранный язык", room: "103", time: "10:00" },
    { subject: "Физика", room: "104", time: "11:00" },
    { subject: "Химия", room: "105", time: "12:00" },
    // Добавьте уроки для пятницы
  ],
};

function updateSchedule() {
  const currentDate = new Date();
  const currentWeek = Math.ceil(currentDate.getDate() / 7);
  const schedule = currentWeek % 2 === 0 ? scheduleDenom : scheduleNumer;

  let weekType = currentWeek % 2 === 0 ? "знаменатель" : "числитель";
  document.getElementById("weekType").textContent = `${weekType}`;

  let scheduleHtml = "";

  Object.keys(schedule).forEach((day) => {
    scheduleHtml += `<tr><td class="rotate" rowspan="6"><strong>${day}</strong></td>`;
    schedule[day].forEach((lesson) => {
      scheduleHtml += `<td class="subject">${lesson.subject}</td>`;
      scheduleHtml += `<td class="room">${lesson.room}</td>`;
      scheduleHtml += `<td class="time">${lesson.time}</td></tr><tr>`;
    });
  });

  document.getElementById("schedule").innerHTML = scheduleHtml;
}

// Обновляем расписание при загрузке страницы и каждый день
window.onload = updateSchedule;
setInterval(updateSchedule, 1000 * 60 * 60 * 24); // Проверка каждый день
