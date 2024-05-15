function onCheckboxEdit(e) {
  var source = e.source;
  var sheet = source.getActiveSheet();
  var range = e.range;
  var row = range.getRow();
 
  var targetRange = sheet.getRange(row, 1, 1, 5);
  var targetValues = targetRange.getValues();
  console.log("targetRange::", targetValues);
  var recipient = targetValues[0][2];
  var checkboxValue = targetValues[0][3];
  var body = targetValues[0][4];
  var subject = 'Daily Test News Letter from NY Times'
 

  if(column = 4 && checkboxValue == true) {
    console.log('check box marked true')

    GmailApp.sendEmail(recipient, subject, body);

  } else if (column = 4 && checkboxValue == false) {
    console.log('check box marked false')
  } else {
    console.log('No Clue')
  }
}

function sendEmail() {
  GmailApp.sendEmail('anishrajk742@gmail.com', 'Test Daily News Letter', 'authorizing');
}
