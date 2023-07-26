




const mysql = require('mysql');
const readline = require('readline');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '0852',
  database: 'project',
});

// Function to calculate the result for a student
function calculateResult(studentData) {
  let totalCredits = 0;
  let totalWeightedGrade = 0;

  for (const subject of studentData) {
    const grade = subject.Grade;
    const credits = subject.Credits;

    let gradeValue = 0;
    switch (grade) {
      case 'A+':
        gradeValue = 10;
        break;
      case 'A':
        gradeValue = 9;
        break;
      case 'B':
        gradeValue = 8;
        break;
      case 'C':
        gradeValue = 7;
        break;
      case 'D':
        gradeValue = 6;
        break;
      case 'E':
        gradeValue = 5;
        break;
      default:
        gradeValue = 0;
    }

    totalCredits += credits;
    totalWeightedGrade += gradeValue * credits;
  }

  const result = totalWeightedGrade / totalCredits;
  return result;
}

// Function to fetch data for a student by roll number
function fetchStudentData(rollNumber) {
  const sql = 'SELECT * FROM results WHERE Htno = ?';

  // Execute the SQL query using the connection pool
  pool.query(sql, [rollNumber], (err, results) => {
    if (err) {
      console.error('Error fetching data from the database:', err);
      return;
    }

    // Calculate the result using the fetched data
    const result = calculateResult(results);

    // Print the result
    console.log('Result:', result);
  });
}

// Create a readline interface to get user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user to enter the roll number
rl.question('Enter the roll number of the student: ', (rollNumber) => {
  // Call the fetchStudentData function with the entered roll number
  fetchStudentData(rollNumber);

  // Close the readline interface
  rl.close();
});
