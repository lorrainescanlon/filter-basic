  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

const paul = people.filter(p => p.name === 'Paul');
console.log(paul);

// One thing to note here is that the filter method always returns an array, even if ts just an array 
// with one element. If I want to access the object itself I could simply ammend [0] to the end
// to get the first and only element in the resulting array.
const paul2 = people.filter(p => p.name === 'Paul')[0];
console.log(paul2);




// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// return list of students that have at least 5 yrs experience in at least one skill
//This filter will return an array of only those skills in which  the student has at least five years of experience.  
//In the case of Ariel, it will just return an empty  array, since none of her skills pass that test.  
//This is a key thing to realize, since  now, all I need to do to return a true  
//or false result for the original filter is return  whether strongSkills.length is greater than zero.  

//long way to do it
const candidates =students.filter(student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
  return strongSkills.length > 0;
});

console.log(candidates);

//short or simplified version, split filter and filter function. 
// write callback function first and pass it into the filter method.
const has5yearsExp = skill => skill.yrsExperience >=5;
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
const candidates2 = students.filter(hasStrongSkills);

//return names only array using map method
let names = candidates2.map(candidate =>[candidate.name]);

console.log(candidates2);
console.log(names);
