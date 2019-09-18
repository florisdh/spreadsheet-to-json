function generateOutput() {
    // Get active document
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    if (!spreadsheet) {
        throw new Error("No active spreadsheet found!");
    }

    // Get sheets
    var sheets = spreadsheet.getSheets();
    // TODO: Check for duplicate names

    // Get sheet data
    var final = {};
    sheets.forEach(function(sheet) {
        final[sheet.getName()] = getSheetData(spreadsheet, sheet);
    });

    return JSON.stringify(final);
}
