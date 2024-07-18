import { Seq } from 'immutable';

function formatName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function printBestStudents(object) {
  const seq = Seq(object);

  const filteredStudents = seq.filter(function(value) {
    return value.score > 70;
  });

  const students = filteredStudents.toJS();

  Object.keys(students).forEach(function(key) {
    students[key].firstName = formatName(students[key].firstName);
    students[key].lastName = formatName(students[key].lastName);
  });

  console.log(students);
}

export default printBestStudents;
