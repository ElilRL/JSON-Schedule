const filteredArray = array.filter(element => {
    return condition;
  });
  
const scheduleData = [
    {
      "name": "AP Psychology",
      "room": " A13",
      "teacher": "Mr. Torres",
      "days": ["A", "B", "C", "F"]
    },
    {
      "name": "BCC ENG 121",
      "room": "Room A121",
      "teacher": "MR. Vona",
      "days": ["A", "B", "D", "E", "F"]
    },
    {
      "name": "Criminology and Law",
      "room": "Room A106",
      "teacher": "MR. Berra",
      "days": ["A", "C", "D", "E", "G"]
    },
    {
      "name": "Honors NJIT IS219",
      "room": "Room C 104",
      "teacher": "MS. McDonald",
      "days": ["B", "C", "D", "F", "G"]
    },
    {
      "name": "Physical Ed 12",
      "room": "Room GYM Q1",
      "teacher": "MS. Agabiti",
      "days": ["A", "B", "D", "E", "G"]
    },
    {
      "name": "Statistics",
      "room": "Room B205",
      "teacher": "MS. Walkiewicz",
      "days": ["A", "B", "D", "E", "F"]
    },
    {
      "name": "Fine Art 1",
      "room": "Room B120",
      "teacher": "MS. Coon-Bogath",
      "days": ["B", "C", "E", "F"]
    }

  ];
  
  // Function to filter classes for a specific day
  function getClassesForDay(day) {
    return scheduleData.filter(classInfo => classInfo.days.includes(day));
  }
  
  // Example usage: Get classes for 'A' day
  const aDayClasses = getClassesForDay('A');
  console.log(aDayClasses);
  