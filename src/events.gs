function onOpen() {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    spreadsheet.addMenu("Export", [
        {
            name: "All sheets to JSON",
            functionName: "openDialog"
        }
    ]);
}
