/*const mysql = require('mysql');

// Configure the MySQL connection
const connection = mysql.createConnection({
  host: '3306',  // Change this to your MySQL host if needed
  user: 'root',       // Change this to your MySQL username
  password: '0852', // Change this to your MySQL password
  database: 'test_db', // Change this to the name of your database
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to the database.');

  // Fetch data from the 'users' table
  const sqlQuery = 'SELECT * FROM users';
  connection.query(sqlQuery, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    
    // Display the fetched data
    console.log('Fetched data:');
    console.log(results);

    // Close the database connection
    connection.end((err) => {
      if (err) {
        console.error('Error closing connection:', err);
        return;
      }
      console.log('Connection closed.');
    });
  });
});



const mysql = require('mysql');

// Create a MySQL connection pool
const connection = mysql.createConnection({
  localHost: '127.0.0.1', // Replace with the correct host if MySQL is running on a different machine
  user: 'root',
  password: '0852',
  database: 'test_db', // Replace with the name of the database you want to connect to ('test_db' in this case)
  port: 3306 // Default MySQL port is 3306
});

// Attempt to connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
    return;
  }
  console.log('Connected to the MySQL server.');

  // Perform any database operations here, such as executing queries or inserting data.



  // Close the MySQL connection when done with the database operations.
  connection.end((err) => {
    if (err) {
      console.error('Error closing database connection:', err.message);
    } else {
      console.log('Disconnected from the MySQL server.');
    }
  });
});



const mysql = require('mysql');

// Create a MySQL connection pool
const connection = mysql.createConnection({
  host: 'localhost', // Replace with the correct host if MySQL is running on a different machine
  user: 'root',
  password: '0852',
  database: 'test_db', // Replace with the name of the database you want to connect to
  port: 3306 // Default MySQL port is 3306
});

// Attempt to connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
    return;
  }
  console.log('Connected to the MySQL server.');

 


  // Perform a SELECT query to fetch data from the 'users' table
  const query = 'SELECT * FROM users';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing the query:', err.message);
    } else {
      console.log('Fetched data from the "users" table:');
      console.log(results);
    }

    // Close the MySQL connection when done with the database operations.
    connection.end((err) => {
      if (err) {
        console.error('Error closing database connection:', err.message);
      } else {
        console.log('Disconnected from the MySQL server.');
      }
    });
  });
});


const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0852',
  database: 'test_db',
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
    return;
  }
  console.log('Connected to the MySQL server.');

  const query = 'SELECT * FROM users';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing the query:', err.message);
    } else {
      console.log('Fetched data from the "users" table:');
      console.log(results);

      // Manipulate the fetched results using JavaScript
      const filteredUsers = results.filter((user) => user.age >= 28);
      console.log('Filtered users with age >= 28:');
      console.log(filteredUsers);
    }

    connection.end((err) => {
      if (err) {
        console.error('Error closing database connection:', err.message);
      } else {
        console.log('Disconnected from the MySQL server.');
      }
    }
);
  });
});






const mysql = require('mysql');

const connection = mysql.createConnection({
 
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
    return;
  }
  console.log('Connected to the MySQL server.');

  const query = 'SELECT * FROM users';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing the query:', err.message);
    } else {
      console.log('Fetched data from the "users" table:');
      console.log(results);

      // Manipulate the fetched results using JavaScript
      const filteredUsers = results.filter((user) => user.age >= 28);
      console.log('Filtered users with age >= 28:');
      console.log(filteredUsers);
    }

    connection.end((err) => {
      if (err) {
        console.error('Error closing database connection:', err.message);
      } else {
        console.log('Disconnected from the MySQL server.');
      }
    });
  });
});




const fs = require('fs');
const mysql = require('mysql');

// Read the data file
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Split the data into individual rows
  const rows = data.trim().split('\n');

  // Create a database connection
  const connection = mysql.createConnection({
   

    host: 'localhost',
    user: 'root',
    password: '0852',
    database: 'project',
    
  });

  // Connect to the database
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }

    // Loop through each row and insert the data into the database
    rows.forEach((row) => {
      const values = row.split(' ');
      const sql = `INSERT INTO results(Htno, Subcode, Subname, Internals, Grade, Credits) 
                   VALUES (?, ?, ?, ?, ?, ?)`;

      connection.query(sql, values, (err, result) => {
        if (err) {
          console.error('Error inserting data:', err);
        } else {
          console.log('Data inserted successfully:', result);
        }
      });
    });

    // Close the database connection
    connection.end();
  });
});




const data = `20U41A0101 R2031011 STRUCTURAL ANALYSIS 18 D 3
20U41A0101 R2031012 DESIGN AND DRAWING OF REINFORCED CONCRET 24 C 3
20U41A0101 R2031013 GEOTECHNICAL ENGINEERING-1 16 E 3
20U41A0101 R2031014 LAB SURVEY CAMP (FIELD WORK) 13 A+ 1.5
20U41A0101 R2031015 GEOTECHNICAL ENGINEERING LAB 12 A 1.5
20U41A0101 R2031016 SKILL ADVANCED COURSE/ SOFT SKILL COURSE 0 A 2
20U41A0101 R2031017 (AICTE SUGGESTED) PROFESSIONAL ETHICS AN 0 COMPLE 0
20U41A0101 R2031018 SUMMER INTERNSHIP 2MONTHS (MANDATORY) AF 0 A+ 1.5
20U41A0101 R2031019 COMMUNITY SERVICE PROJECT 0 A 4
20U41A0101 R203101A CONSTRUCTION TECHNOLOGY &MANAGEMENT 18 D 3
20U41A0101 R203102F RENEWABLE ENERGY SOURCES 18 D 3
20U41A0102 R2031011 STRUCTURAL ANALYSIS 18 E 3
20U41A0102 R2031012 DESIGN AND DRAWING OF REINFORCED CONCRET 26 D 3
20U41A0102 R2031013 GEOTECHNICAL ENGINEERING-1 18 D 3
20U41A0102 R2031014 LAB SURVEY CAMP (FIELD WORK) 13 A+ 1.5
20U41A0102 R2031015 GEOTECHNICAL ENGINEERING LAB 12 A 1.5
20U41A0102 R2031016 SKILL ADVANCED COURSE/ SOFT SKILL COURSE 0 A 2
20U41A0102 R2031017 (AICTE SUGGESTED) PROFESSIONAL ETHICS AN 0 COMPLE 0
20U41A0102 R2031018 SUMMER INTERNSHIP 2MONTHS (MANDATORY) AF 0 A+ 1.5
20U41A0102 R2031019 COMMUNITY SERVICE PROJECT 0 A 4`;

// Split the data into individual lines
const lines = data.trim().split('\n');

// Initialize an empty array to store the extracted attributes
const extractedData = [];

// Loop through each line and split into attributes
for (const line of lines) {
  const [Htno, Subcode, ...rest] = line.split(' ');
  const Subname = rest.slice(0, -2).join(' ');
  const [Internals, Grade, Credits] = rest.slice(-3);

  // Generate the SQL INSERT statement for the current data entry
  const sqlStatement = `INSERT INTO results (Htno, Subcode, Subname, Internals, Grade, Credits) VALUES ('${Htno}', '${Subcode}', '${Subname}', ${Internals}, '${Grade}', ${Credits});`;
  
  // Push the SQL statement to the array
  extractedData.push(sqlStatement);
}

// Print the SQL INSERT statements
console.log(extractedData.join('\n'));



const data = `20U41A0101 R2031011 STRUCTURAL ANALYSIS 18 D 3
20U41A0101 R2031012 DESIGN AND DRAWING OF REINFORCED CONCRET 24 C 3
20U41A0101 R2031013 GEOTECHNICAL ENGINEERING-1 16 E 3
20U41A0101 R2031014 LAB SURVEY CAMP (FIELD WORK) 13 A+ 1.5
20U41A0101 R2031015 GEOTECHNICAL ENGINEERING LAB 12 A 1.5
20U41A0101 R2031016 SKILL ADVANCED COURSE/ SOFT SKILL COURSE 0 A 2
20U41A0101 R2031017 (AICTE SUGGESTED) PROFESSIONAL ETHICS AN 0 COMPLE 0
20U41A0101 R2031018 SUMMER INTERNSHIP 2MONTHS (MANDATORY) AF 0 A+ 1.5
20U41A0101 R2031019 COMMUNITY SERVICE PROJECT 0 A 4
20U41A0101 R203101A CONSTRUCTION TECHNOLOGY &MANAGEMENT 18 D 3
20U41A0101 R203102F RENEWABLE ENERGY SOURCES 18 D 3
20U41A0102 R2031011 STRUCTURAL ANALYSIS 18 E 3
20U41A0102 R2031012 DESIGN AND DRAWING OF REINFORCED CONCRET 26 D 3
20U41A0102 R2031013 GEOTECHNICAL ENGINEERING-1 18 D 3
20U41A0102 R2031014 LAB SURVEY CAMP (FIELD WORK) 13 A+ 1.5
20U41A0102 R2031015 GEOTECHNICAL ENGINEERING LAB 12 A 1.5
20U41A0102 R2031016 SKILL ADVANCED COURSE/ SOFT SKILL COURSE 0 A 2
20U41A0102 R2031017 (AICTE SUGGESTED) PROFESSIONAL ETHICS AN 0 COMPLE 0
20U41A0102 R2031018 SUMMER INTERNSHIP 2MONTHS (MANDATORY) AF 0 A+ 1.5
20U41A0102 R2031019 COMMUNITY SERVICE PROJECT 0 A 4`;

// Split the data into individual lines
const lines = data.trim().split('\n');

// Initialize an empty array to store the extracted attributes
const extractedData = [];

// Loop through each line and split into attributes
for (const line of lines) {
  const [Htno, Subcode, ...rest] = line.split(' ');
  const Subname = rest.slice(0, -3).join(' ');
  const [Internals, Grade, Credits] = rest.slice(-3);

  // Generate the SQL INSERT statement for the current data entry
  const sqlStatement = `INSERT INTO results (Htno, Subcode, Subname, Internals, Grade, Credits) VALUES ('${Htno}', '${Subcode}', '${Subname}', ${Internals}, '${Grade}', ${Credits});`;
  
  // Push the SQL statement to the array
  extractedData.push(sqlStatement);
}

// Print the SQL INSERT statements
console.log(extractedData.join('\n'));



const fs = require('fs');

// Read the data file
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Split the data into individual lines
  const rows = data.trim().split('\n');

  // Process each line to construct the INSERT statements
  const insertStatements = rows.map(row => {
    const [Htno, Subcode, ...rest] = row.split(' ');
    const Subname = rest.slice(0, -3).join(' ');
    const [Internals, Grade, Credits] = rest.slice(-3);
    return `INSERT INTO results (Htno, Subcode, Subname, Internals, Grade, Credits) VALUES ('${Htno}', '${Subcode}', '${Subname}', ${Internals}, '${Grade}', ${Credits});`;
  });

  // Join the INSERT statements into a single string
  const sqlScript = insertStatements.join('\n');
  console.log(sqlScript);
});
*/



const fs = require('fs');
const mysql = require('mysql');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '0852',
  database: 'project',
});

// Read the data file
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Split the data into rows
  const rows = data.trim().split('\n');

  // Loop through each row and insert the data into the database
  for (const row of rows) {
    const values = row.split(' ');
    const htno = values[0];
    const subcode = values[1];
    const subname = values.slice(2, values.length - 3).join(' ');
    const internals = parseInt(values[values.length - 3]);
    const grade = values[values.length - 2];
    const credits = parseFloat(values[values.length - 1]);

    const sql = `INSERT INTO results (Htno, Subcode, Subname, Internals, Grade, Credits) 
                 VALUES (?, ?, ?, ?, ?, ?)`;
    
    // Execute the SQL query using the connection pool
    pool.query(sql, [htno, subcode, subname, internals, grade, credits], (err, result) => {
      if (err) {
        console.error('Error inserting data into the database:', err);
        return;
      }
      console.log('Data inserted successfully:', result);
    });
  }
});
