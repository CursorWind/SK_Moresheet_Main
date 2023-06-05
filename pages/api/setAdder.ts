import {NextApiRequest, NextApiResponse} from "next";
import { google } from "googleapis";

type SheetForm={
name: string
email: string
phone: string
message: string
}
export default async function handler(
req: NextApiRequest,
res: NextApiResponse
){
    if (req.method !=='POST') {
        return res.status(405).send({message: 'Only POST requests are allowed'})
    }

const body = req.body as SheetForm


try {
    const client = new google.auth.JWT(
        process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL, '8', process.env.GOOGLE_PRIVATE_KEY, ['https://www.googleapis.com/auth/spreadsheets']
    );

    client.authorize(async function (err, tokens) {
      if (err) {
        return res.status(400).send(JSON.stringify({ error: true }));
      }

      const sheets = google.sheets({ version: 'v4', auth: client });

        // Define the spreadsheet ID and range
  const spreadsheetId = '1cq2Xy_McXji3leDCRRHy7paVyckxpiHqq4Bat_Kw1tY';
  
  const responsev = await sheets.spreadsheets.values.get({
    spreadsheetId: '1cq2Xy_McXji3leDCRRHy7paVyckxpiHqq4Bat_Kw1tY',
    range: 'Nextjs!A3:A',
  });
  
  const length = responsev.data.values?.length || 0;
const range: string = `Nextjs!A${length+3}`;
  
  console.log(range)
  const new_value = body.email;

  // Prepare the request
  const request = {
    spreadsheetId: spreadsheetId,
    range: range,
    valueInputOption: 'RAW',
    resource: {
      values: [[new_value]],
    },
  };

  // Update cell A6 with a new value
  const response = sheets.spreadsheets.values.update(request, function (err: Error | null) {
    if (err) {
      console.error('The API returned an error:', err);
      return;
    }
  

    console.log(`Value added to cell ${range}.`);
  });
      return res.status(200).json({data: response});
    });
  } catch (e) {
    return res.status(500).send(JSON.stringify({ error: true, message: (e as Error).message }));
  }

}