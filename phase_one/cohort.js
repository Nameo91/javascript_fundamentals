const cohort = {
  name: 'Sept 2022',
  id: 1234,
  students_names: ['Narae', 'Kate', 'Rajib', 'Hibaq', 'Pauline']
};

const printCohort = (cohort) => { 
  cohort_id = cohort.id;
  cohort_name = cohort.name;
  number_of_students = cohort.students_names.length;
  return `${cohort_id} - ${cohort_name} - ${number_of_students} students in this cohort`;
}

console.log(printCohort(cohort));