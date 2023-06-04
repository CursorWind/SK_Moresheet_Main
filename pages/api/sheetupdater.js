import addtosheet from "./addtosheet";

export default function handler(req, res) {
  try {
    const { value } = req.body;

    addtosheet(value);

    return res.status(200).json({ success: true });
  } catch (e) {
    return res.status(400).json({ error: true, message: e.message });
  }
}
