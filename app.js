const clock = document.querySelector('.clock');

const runTheClock = () => {

  const d = new Date();
  
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  let date = d.getDate();
  let year = d.getFullYear();
  let ampm = 'AM';
  const month = formatMonth(d.getMonth());

  if (hours > 12) {
    hours -= 12;
    if (hours < 10)
    hours = '0' + hours;
    ampm = 'PM';
  } else if (hours === 0) {
    hours = 12;
  } else {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  const html = `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span> 
    <span>${ampm}</span><br><br>
    <span>${month}</span>
    <span>${date}</span>
    <span>${year}</span>
  `;

  clock.innerHTML = html;

};

const formatMonth = (m) => {

  let monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June', 
    'July', 'August', 'September',
    'October', 'November', 'December'
  ];

  return monthNames[m];
}
setInterval(runTheClock, 1000);
