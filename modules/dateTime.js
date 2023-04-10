import { DateTime } from './luxon.js';

const dateTime = () => {
  const date = document.getElementById('dateTime');

  setInterval(() => {
    const now = DateTime.now();

    date.innerHTML = now.toLocaleString(
      DateTime.DATETIME_MED_WITH_SECONDS,
    );
  }, 1000);
};

setInterval(dateTime, 1000);

export default dateTime;