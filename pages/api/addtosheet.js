import { google } from "googleapis";
import keys from "../../credentials.json";

async function addtosheet(value) {
  try {
    const client = new google.auth.JWT(
      keys.client_email,
      null,
      keys.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    await client.authorize();

    const gsapi = google.sheets({ version: "v4", auth: client });

    const opt = {
      spreadsheetId: "YOUR_SPREADSHEET_ID",
      range: "Nextjs!A1:A",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[value]],
      },
    };

    await gsapi.spreadsheets.values.append(opt);

    console.log("Value added to Google Sheet:", value);
  } catch (error) {
    console.error("Error adding value to Google Sheet:", error);
  }
}

export default addtosheet;
