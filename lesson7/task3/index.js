// Best students

// in : array, array
// out: array

// logo:
// 1. Create new array result
// 2. filter arr stydents who must great
// 3. make greate strings in arr

const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  return allStudentsList
    .filter(name => !studentsForRetake.includes(name))
    .map(name => `Good job, ${name}`);
};

// examples
const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest1 = ['John', 'Mike'];
const res1 = getMessagesForBestStudents(allStudTest1, retakeStudTest1); // ===> ['Good job, Den', 'Good job, Ann']
console.log(res1);
const allStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
getMessagesForBestStudents(allStudTest2, retakeStudTest2); // ===> []
