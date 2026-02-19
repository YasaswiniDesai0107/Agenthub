const XLSX = require('xlsx');
const path = require('path');

const EXCEL_FILE = path.resolve(__dirname, '../../agent-hub/AgentHub_Agent_Catalogue.xlsx');
const workbook = XLSX.readFile(EXCEL_FILE, { codepage: 65001 }); // UTF-8
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rawData = XLSX.utils.sheet_to_json(sheet);

console.log('=== EXCEL COLUMN HEADERS ===');
if (rawData.length > 0) {
    console.log(JSON.stringify(Object.keys(rawData[0]), null, 2));
}

console.log('\n=== FIRST ROW FULL DATA ===');
console.log(JSON.stringify(rawData[0], null, 2));

console.log('\n=== SECOND ROW (checking personas/techstack) ===');
if (rawData[1]) {
    console.log(JSON.stringify(rawData[1], null, 2));
}
