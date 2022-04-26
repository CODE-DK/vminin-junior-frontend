// ---

function giveJobToStudent(student, jobName) {
  const newStudent = {
    ...student,
    job: jobName,
  };

  console.log(`
    Поздравляем! У студента ${newStudent.fullName} 
    появилась новая работа! Теперь он ${newStudent.job}!
`);
}

const student = {
  fullName: "Максим",
  experienceInMonths: 12,
  stack: ["HTML", "CSS", "JavaScript", "React"],
};

const updatedStudent = giveJobToStudent(student, "веб-разработчик");
/*
  updatedStudent = {
      fullName: 'Максим',
      experienceInMonths: 12,
      stack: ['HTML', 'CSS', 'JavaScript', 'React'],
      job: 'веб-разработчик',
  }
  */

// ---
  