import { google } from "googleapis";



export default function handler(req, res) {
    try {
        const client = new google.auth.JWT(
            process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL, null, process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"), ['https://www.googleapis.com/auth/spreadsheets']
        );

        client.authorize(async function(err, tokens) {
            if (err) {
                return res.status(400).send(JSON.stringify({error: true}));
            }

            const gsapi = google.sheets({version:'v4', auth: client});

            //CUSTOMIZATION FROM HERE 
            const opt = {
                spreadsheetId: process.env.GOOGLE_SHEET_ID,
                range: 'Nextjs!A3:A'
            };

            let data = await gsapi.spreadsheets.values.get(opt);
            


              
            return res.status(400).send(JSON.stringify({error: false, data: data.data.values}));
        });
    } catch (e) {
        return res.status(400).send(JSON.stringify({error: true, message: e.message}));
    }
}

