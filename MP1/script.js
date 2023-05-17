// Variabler
const tableWidth = '2.5cm';
const tableHeight = '7cm';
const tableBorder = '5px solid turquoise';
const containerMarginTop = '10%';
const containerMarginRight = '30px';

// Create the flex container element
const container = document.createElement('div');
container.id = 'flex-container';
container.classList.add('flex-container');

// Create five flex item elements using a loop
for (let i = 1; i <= 5; i++) {
  const item = document.createElement('div');
  item.classList.add('flex-item');
  item.textContent = `Rad ${i}`;
  item.style.backgroundColor = `hsl(${i * 10}, 60%, 80%)`;
  item.style.textAlign = 'center';

  // Increase font size for each item using a variable and arithmetic
  const fontSize = 10 + (i - 1) * 10;
  item.style.fontSize = `${fontSize}px`;

  // Add a gap between each item using a variable
  const marginBottom = 35;
  item.style.marginBottom = `${marginBottom}px`;

  container.appendChild(item);
}

// Add the container to the document
document.body.appendChild(container);

// Create a container for the tables using a variable
const tablesContainer = document.createElement('div');
tablesContainer.style.display = 'flex';
tablesContainer.style.justifyContent = 'center';
tablesContainer.style.border = '2px solid black'; // Rectangle border around the tables
tablesContainer.style.marginTop = '10%'; // Place the tables 10% down

// Create table 1 using a function and variable
const table1 = createTable();
tablesContainer.appendChild(table1);

// Create spacing using a variable
const spacing = document.createElement('div');
spacing.style.width = tableWidth; // Adjust the width of the spacing here
tablesContainer.appendChild(spacing);

// Create table 2 using a function and variable
const table2 = createTableWithNumbers();
tablesContainer.appendChild(table2);

// Create spacing using a variable
const spacing2 = document.createElement('div');
spacing2.style.width = tableWidth; // Adjust the width of the spacing here
tablesContainer.appendChild(spacing2);

// Create table 3 using a function and variable
const table3 = createTableWithWords();
tablesContainer.appendChild(table3);

// Add tables container to the document
document.body.appendChild(tablesContainer);

function createTable() {
  const table = document.createElement('table');
  table.style.width = tableWidth;
  table.style.height = tableHeight;
  table.style.border = tableBorder;
  table.style.borderCollapse = 'collapse';
  table.style.marginRight = '20px';
  table.style.marginTop = '15%';
  table.style.marginBottom = '15%';

  for (let i = 1; i <= 10; i++) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.textContent = i;
    cell.style.border = tableBorder;
    cell.style.textAlign = 'center';
    row.appendChild(cell);
    table.appendChild(row);

    if (i % 2 === 0) {
      row.style.backgroundColor = 'white'; // Vit bakgrundsfärg för jämna rader
      cell.style.color = 'black'; // Svart färg för texten på vit rad
    } else {
      row.style.backgroundColor = 'black'; // Svart bakgrundsfärg för udda rader
      cell.style.color = 'white'; // Vit färg för texten på svart rad
    }

    if (i === 5) {
      row.style.backgroundColor = 'turquoise'; // Turkos bakgrundsfärg för rad nummer 5
      cell.style.color = 'white'; // Vit färg för texten på turkos rad
    }
  }

  return table;
}

function createTableWithNumbers() {
  const table = document.createElement('table');
  table.style.width = tableWidth;
  table.style.height = tableHeight;
  table.style.border = tableBorder;
  table.style.borderCollapse = 'collapse';
  table.style.marginRight = '20px';
  table.style.marginTop = '15%';
  table.style.marginBottom = '15%';

  const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  for (let i = 0; i < numbers.length; i++) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.textContent = numbers[i];
    cell.style.border = tableBorder;
    cell.style.textAlign = 'center';
    row.appendChild(cell);
    table.appendChild(row);

    if (i % 2 === 0) {
      row.style.backgroundColor = 'white'; 
      cell.style.color = 'black';
    } else {
      row.style.backgroundColor = 'black'; 
      cell.style.color = 'white'; 
    }

    if (i === 2) {
      row.style.backgroundColor = 'turquoise'; 
      cell.style.color = 'white'; 
    }
  }

  return table;
}

function createTableWithWords() {
  const table = document.createElement('table');
  table.style.width = tableWidth;
  table.style.height = tableHeight;
  table.style.border = tableBorder;
  table.style.borderCollapse = 'collapse';
  table.style.marginRight = '20px';
  table.style.marginTop = '15%';
  table.style.marginBottom = '15%';

  const letters = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
  for (let i = 0; i < letters.length; i++) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.innerText = letters[i];
    cell.style.border = tableBorder;
    cell.style.textAlign = 'center';
    row.appendChild(cell);
    table.appendChild(row);

    if (i % 2 === 0) {
      row.style.backgroundColor = 'white'; 
      cell.style.color = 'black'; 
    } else {
      row.style.backgroundColor = 'black'; 
      cell.style.color = 'white'; 
    }

    if (i === 9) {
      row.style.backgroundColor = 'turquoise';
    }
  }

  return table;
}

