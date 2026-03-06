const dateHtml = document.querySelector('.date');
let dateInitial = new Date(Date.now());

function formatDateOfTheWeek(dateDayOfTheWeek) {
  switch (dateDayOfTheWeek) {
    case 0:
      return 'Domingo';
    case 1:
      return 'Segunda-Feira';
    case 2:
      return 'Terça-Feira';
    case 3:
      return 'Quarta-Feira';
    case 4:
      return 'Quinta-Feira';
    case 5:
      return 'Sexta-Feira';
    case 6:
      return 'Sábado';
    default:
      return 'Dia da semana inválido';
  }
}

function formatDateMonth(dateMonth) {
  switch (dateMonth) {
    case 1:
      return 'Janeiro';
    case 2:
      return 'Fevereiro';
    case 3:
      return 'Março';
    case 4:
      return 'Abril';
    case 5:
      return 'Maio';
    case 6:
      return 'Junho';
    case 7:
      return 'Julho';
    case 8:
      return 'Agosto';
    case 9:
      return 'Setembro';
    case 10:
      return 'Outubro';
    case 11:
      return 'Novembro';
    case 12:
      return 'Dezembro';
    default:
      return 'Mês inválido';
  }
}

function formatDate(dateDayOfTheWeek, dateDay, dateMonth, dateYear, dateHour, dateMinutes, dateSeconds) {
  const dateDayOfTheWeekFormated = formatDateOfTheWeek(dateDayOfTheWeek);
  const dateMonthFormated = formatDateMonth(dateMonth);

  return `${dateDayOfTheWeekFormated}, ${dateDay} de ${dateMonthFormated} de ${dateYear} às ${dateHour}:${dateMinutes}:${dateSeconds}`;
}

function createNewDatePlusOne(element) {
  let formatedDate;
  switch (element.getAttribute('id')) {
    case 'up-day':
      dateInitial.setDate(dateInitial.getDate() + 1);
      formatedDate = createNewDate(dateInitial);
      changeDate(formatedDate);
      break;
    case 'down-day':
      dateInitial.setDate(dateInitial.getDate() - 1);
      formatedDate = createNewDate(dateInitial);
      changeDate(formatedDate);
      break;
    case 'up-month':
      dateInitial.setMonth(dateInitial.getMonth() + 1);
      formatedDate = createNewDate(dateInitial);
      changeDate(formatedDate);
      break;
    case 'down-month':
      dateInitial.setMonth(dateInitial.getMonth() - 1);
      formatedDate = createNewDate(dateInitial);
      changeDate(formatedDate);
      break;
    case 'up-year':
      dateInitial.setFullYear(dateInitial.getFullYear() + 1);
      formatedDate = createNewDate(dateInitial);
      changeDate(formatedDate);
      break;
    case 'down-year':
      dateInitial.setFullYear(dateInitial.getFullYear() - 1);
      formatedDate = createNewDate(dateInitial);
      changeDate(formatedDate);
      break;
    case 'up-hour':
      dateInitial.setHours(dateInitial.getHours() + 1);
      formatedDate = createNewDate(dateInitial);
      changeDate(formatedDate);
      break;
    case 'down-hour':
      dateInitial.setHours(dateInitial.getHours() - 1);
      formatedDate = createNewDate(dateInitial);
      changeDate(formatedDate);
      break;
  }
}

function createNewDate(newDate) {
  const dateDayOfTheWeek = newDate.getDay();
  const dateDay = newDate.getDate();
  const dateMonth = newDate.getMonth() + 1;
  const dateYear = newDate.getFullYear();
  const dateHour = newDate.getHours();
  const dateMinutes = newDate.getMinutes();
  const dateSeconds = newDate.getSeconds();

  return formatDate(dateDayOfTheWeek, dateDay, dateMonth, dateYear, dateHour, dateMinutes, dateSeconds);
}

function changeDate(formatedDate) {
  dateHtml.textContent = formatedDate;
}

function main() {
  const buttonsHtml = document.querySelectorAll('.button');
  const formatedDate = createNewDate(dateInitial);

  changeDate(formatedDate);

  buttonsHtml.forEach(element => {
    element.addEventListener('click', () => createNewDatePlusOne(element));
  });
}

main();

// const formatter = new Intl.DateTimeFormat('pt-BR', {
//   weekday: 'long',
//   day: 'numeric',
//   month: 'long',
//   year: 'numeric',
//   hour: '2-digit',
//   minute: '2-digit',
//   second: '2-digit'
// });

// console.log(formatter.format(new Date()));
