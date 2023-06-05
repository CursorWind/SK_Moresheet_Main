import {NextApiRequest, NextApiResponse} from "next";
import { google } from "googleapis";
import keys from "../../credentials.json";

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
    if (req.method !='POST') {
        return res.status(405).send({message: 'Only POST requests are allowed'})
    }

const body = req.body as SheetForm


try {
    const client = new google.auth.JWT(
      keys.client_email, null, keys.private_key, ['https://www.googleapis.com/auth/spreadsheets']
    );

    client.authorize(async function (err, tokens) {
      if (err) {
        return res.status(400).send(JSON.stringify({ error: true }));
      }

      const sheets = google.sheets({ version: 'v4', auth: client });

        // Define the spreadsheet ID and range
  const spreadsheetId = '1cq2Xy_McXji3leDCRRHy7paVyckxpiHqq4Bat_Kw1tY';
  const range = 'Nextjs!A6'
  console.log(range)

  // Define the new value to be set in cell A6
  const new_value = 'body.email';

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
  const response = sheets.spreadsheets.values.update(request, function (err, response) {
    if (err) {
      console.error('The API returned an error:', err);
      return;
    }

    console.log('Value added to cell A6.');
  });
      return res.status(200).json({data: response.data });
    });
  } catch (e) {
    return res.status(500).send(JSON.stringify({ error: true, message: e.message }));
  }

}