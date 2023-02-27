/**
 * Save your contacts in a json file in this format
 * [
 * {"name":"Jack Barker", "phone":"+1225578"},
 * {"name":"Shadynasty Williams", "phone":"+977900000000"}
 * ]
 * and this script will change your json file to a vcf file that you can import to your android device.
 * No need to store contacts on google!
 */
const fs = require("fs");

function jsonToVcf(inputFile, outputFile) {
  // Read the JSON data from the input file
  const data = fs.readFileSync(inputFile);
  const jsonData = JSON.parse(data);

  // Create the VCF file contents
  //let vcf = "BEGIN:VCARD\nVERSION:3.0\n";
  let vcf = "";
  for (let i = 0; i < jsonData.length; i++) {
    const name = jsonData[i].name;
    const phone = jsonData[i].phone;
    vcf += `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nTEL;TYPE=CELL:${phone}\nEND:VCARD\n`;
  }

  // Write the VCF data to the output file
  fs.writeFileSync(outputFile, vcf);
}

// Example usage: convert "input.json" to "output.vcf"
jsonToVcf("./address.json", "./contacts.vcf");
