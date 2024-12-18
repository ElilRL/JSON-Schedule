const scheduleData = [
  {
    "period": 1,
    "startTime": "7:30 a.m.",
    "endTime": "8:37 a.m.",
    "name": "AP Psychology",
    "room": "A13",
    "teacher": "Mr. Torres",
    "days": ["A", "B", "C", "F"]
  },
  {
    "period": 2,
    "startTime": "8:42 a.m.",
    "endTime": "9:49 a.m.",
    "name": "BCC ENG 121",
    "room": " A121",
    "teacher": "Mr. Vona",
    "days": ["A", "B", "D", "E", "F"]
  },
  {
    "period": 3,
    "startTime": "9:54 a.m.",
    "endTime": "11:01 a.m.",
    "name": "Criminology and Law",
    "room": " A106",
    "teacher": "Mr. Berra",
    "days": ["A", "C", "D", "E", "G"]
  },
  {
    "period": 4,
    "startTime": "11:47 a.m.",
    "endTime": "12:54 p.m.",
    "name": "Honors NJIT IS219",
    "room": " C104",
    "teacher": "Ms. McDonald",
    "days": ["B", "C", "D", "F", "G"]
  },
  {
    "period": 5,
    "startTime": "12:59 p.m.",
    "endTime": "2:06 p.m.",
    "name": "Physical Ed 12",
    "room": "GYM Q1",
    "teacher": "Ms. Agabiti",
    "days": ["A", "B", "D", "E", "G"]
  },
  {
    "period": 6,
    "startTime": "2:10 p.m.",
    "endTime": "3:17 p.m.",
    "name": "Statistics",
    "room": " B205",
    "teacher": "Ms. Walkiewicz",
    "days": ["A", "B", "D", "E", "F"]
  }
];

$(document).ready(function () {
  
  $("#submitDay").click(function () {
    const dayInput = $("#dayInput").val().toUpperCase();
    const validDays = ["A", "B", "C", "D", "E", "F", "G"];

 
    if (!validDays.includes(dayInput)) {
      alert("Please enter a valid day (A-G).");
      return;
    }

    displaySchedule(dayInput);
  });

  
  function displaySchedule(day) {
    const scheduleList = $("#scheduleList");
    scheduleList.empty();

   
    const filteredData = scheduleData.filter(item => item.days.includes(day));

    if (filteredData.length === 0) {
      scheduleList.append("<tr><td colspan='5' class='text-center'>No classes today</td></tr>");
      return;
    }

   
    filteredData.forEach(item => {
      const time = `${item.startTime} - ${item.endTime}`;
      scheduleList.append(`
        <tr>
          <td>${item.period}</td>
          <td>${time}</td>
          <td>${item.name}</td>
          <td>${item.teacher}</td>
          <td>${item.room}</td>
        </tr>
      `);
    });
  }
});