// Check what bytes the ΓÇó sequence actually is
const testStr = 'ΓÇó';
console.log('String:', testStr);
console.log('Length:', testStr.length);
for (let i = 0; i < testStr.length; i++) {
    console.log(`  char[${i}]: '${testStr[i]}' = U+${testStr.charCodeAt(i).toString(16).toUpperCase().padStart(4, '0')}`);
}

// The actual bullet character
const bullet = '\u2022';
console.log('\nBullet •:', bullet);
console.log('Bullet codepoint: U+' + bullet.charCodeAt(0).toString(16).toUpperCase());

// Test the replacement
const fixed = testStr.replace(/\u0393\u00c7\u00f3/g, '\u2022');
console.log('\nAfter replace:', fixed);

// Also try with the actual raw bytes from the xlsx output
const XLSX = require('xlsx');
const path = require('path');
const EXCEL_FILE = path.resolve(__dirname, '../../agent-hub/AgentHub_Agent_Catalogue.xlsx');
const workbook = XLSX.readFile(EXCEL_FILE);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rawData = XLSX.utils.sheet_to_json(sheet, { defval: '' });

const goals = rawData[0]['Goals'] || '';
console.log('\n\nRaw goals from xlsx:', JSON.stringify(goals.substring(0, 50)));
console.log('Goals chars:');
for (let i = 0; i < Math.min(goals.length, 10); i++) {
    console.log(`  [${i}]: '${goals[i]}' U+${goals.charCodeAt(i).toString(16).toUpperCase().padStart(4, '0')}`);
}
