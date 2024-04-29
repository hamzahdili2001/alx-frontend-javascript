export default function getStudentsByLocation(students, city, grades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = grades.find((grade) => grade.studentId === student.id);
      const grade = studentGrade ? studentGrade.grade : 'N/A';

      return { ...student, grade };
    });
}
