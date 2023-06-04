import { GoogleSpreadsheet } from 'google-spreadsheet';


const doc = new GoogleSpreadsheet('1cq2Xy_McXji3leDCRRHy7paVyckxpiHqq4Bat_Kw1tY');

export async function connectGoogleSpreadsheet() {
  // Load the credentials from the JSON file
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  });

  // Load the document properties and worksheets
  await doc.loadInfo();
}

export default doc;
