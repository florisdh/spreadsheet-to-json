function openDialog(spreadsheet, link) {
    var dialog = HtmlService.createHtmlOutputFromFile("dialog.html");
    SpreadsheetApp.getUi().showModalDialog(dialog, "Export all sheets as JSON");
}
