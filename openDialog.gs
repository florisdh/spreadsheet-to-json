function openDialog(spreadsheet, link) {
    var dialog = HtmlService.createHtmlOutputFromFile("dialog.html");
    dialog.setWidth(450);
    dialog.setHeight(100);
    SpreadsheetApp.getUi().showModalDialog(dialog, "Export all sheets as JSON");
}
