const tableBody1 = document.getElementById("table-body-1");
const tableBody2 = document.getElementById("table-body-2");

const data1 = [  ['CT1', 'PLASTIC CLEAR TOP', '1X1'],
  ['VP1', 'VEL POUCH', '2" x 2"'],
  ['VP2', 'VEL POUCH', '3x3 1/2"'],
  ['VP3', 'VEL POUCH', '4x5"'],
  ['CN2', 'COTTON NEST', '3.5X3.5'],
  ['VB1', 'VELVETEEN', '13/4X2'],
  ['VB2', 'VELVETEEN', '13/4X2'],
  ['VB3', 'VELVETEEN', '3X3 3/4'],
  ['ACH', 'ACRYLIC COIN HOLDER', '']
];

const data2 = [  ['SB', 'SCREWBACK'],
  ['KR', 'KEY RING'],
  ['TB', 'TIE BAR'],
  ['ZP', 'ZIPPER PULL'],
  ['MC', 'MONEY CLIP'],
  ['BTN', 'BOLO TIE  NYLON'],
  ['CL', 'CUFFLINKS. PR'],
  ['C18', 'CHAIN 18"'],
  ['EP', 'EARRING POSTS'],
  ['EW', 'EARRING WIRES'],
  ['SPN', 'SPOON BOXED'],
  ['STANDS', 'STAND Small11/4"'],
  ['STANDM', 'STAND   Med2"'],
  ['STANDL', 'STAND Large21/2"'],
  ['STANDPWM', 'STAND  Med2"'],
  ['CB', 'CLUTCH BACK'],
  ['BP', 'BAR PIN'],
  ['DCF', 'DELUXE CLUTCHBACK FLAT'],
  ['DCB', 'DELEUX CLUTCHBACK BALL'],
  ['M50', 'MAGNET'],
  ['KCL', '4 LINK KEY RING'],
  ['KC8', 'FIGUAR 8 KEY RING'],
  ['KRS', 'SWIVEL KEY RING']
];

for (let i = 0; i < 9; i++) {
  const row = document.createElement("tr");
  
  const col1 = document.createElement("td");
  col1.innerHTML = data1[i][0];
  row.appendChild(col1);
  
  const col2 = document.createElement("td");
  col2.innerHTML = data1[i][1];
  row.appendChild(col2);
  
  const col3 = document.createElement("td");
  col3.innerHTML = data1[i][2];
  row.appendChild(col3);
  
  tableBody1.appendChild(row);
}

for (let i = 0; i < 23; i++) {
  const row = document.createElement("tr");
  
  const col1 = document.createElement("td");
  col1.innerHTML = data2[i][0];
  row.appendChild(col1);
  
  const col2 = document.createElement("td");
  col2.innerHTML = data2[i][1];
  row.appendChild(col2);
  
  tableBody2.appendChild(row);
}
