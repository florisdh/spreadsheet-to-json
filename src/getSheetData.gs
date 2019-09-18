function getSheetData(spreadsheet, sheet) {
    var range = sheet.getDataRange(),
        data = range.getValues();

    if (data.length < 2) {
        return [];
    }

    // Read columns
    var columnNames = data[0];
    // TODO: Check for duplicates

    // Read rows
    var rows = [];
    for (var y = 1; y < data.length; y++) {
        var row = data[y], rowData = {};
        for (var x = 0; x < row.length; x++) {
            rowData[columnNames[x]] = row[x];
        }
        rows.push(rowData);
    }

    return rows;
}
