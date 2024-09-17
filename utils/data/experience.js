const getMonthName = (monthIndex) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[monthIndex];
};

export const experiences = [
  {
    id: 1,
    title: "Software Engineer I",
    company: "Partner IT Solutions",
    duration: `(${getMonthName(new Date().getMonth())} 2024 - Present)`, // Updated to use month name
  },
  {
    id: 2,
    title: "FullStack Developer",
    company: "Stealth design",
    duration: "(Sep 2023 - Mar 2024)",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Freespace (Workplace fabric)",
    duration: "(Jul 2021 - jul 2023)",
  },
  {
    id: 4,
    title: "Jr.Software Engineer (Internship)",
    company: "Digikull",
    duration: "(oct 2020 - jun 2021)",
  },
  //
];
