import { google } from "googleapis";
import keys from "../../credentials.json";



export default function handler(req, res) {
    try {
        const client = new google.auth.JWT(
            keys.client_email, null, keys.private_key, ['https://www.googleapis.com/auth/spreadsheets']
        );

        client.authorize(async function(err, tokens) {
            if (err) {
                return res.status(400).send(JSON.stringify({error: true}));
            }

            const gsapi = google.sheets({version:'v4', auth: client});

            //CUSTOMIZATION FROM HERE 
            const opt = {
                spreadsheetId: '1cq2Xy_McXji3leDCRRHy7paVyckxpiHqq4Bat_Kw1tY',
                range: 'Nextjs!A3:A'
            };

            let data = await gsapi.spreadsheets.values.get(opt);
            
               const sheets = google.sheets({ version: 'v4', auth: client });


              
            return res.status(400).send(JSON.stringify({error: false, data: data.data.values}));
        });
    } catch (e) {
        return res.status(400).send(JSON.stringify({error: true, message: e.message}));
    }
}

