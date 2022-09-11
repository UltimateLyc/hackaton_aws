const CSVToJSON = require("csvtojson");
const JSONToCSV = require ("json2csv");
const FileSystem = require ("fs");

const fileName = "./inventory.csv";
//console.log("🚀 ~ fileName", fileName)

CSVToJSON().fromFile("./inventory.csv").then(source => {
    //console.log(source);
    source.push({
        "id": "0",
        "name": "hub",
        "description": "controler",
        "stock": 1
    }); 
    const jsonText = JSON.stringify(source);
    const outputFileName = fileName.replace(".csv", ".json")
    FileSystem.writeFileSync(outputFileName, jsonText)
})
