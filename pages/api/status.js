// Serverless Function dla Vercel – GET /api/status
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ status: "Clipper Teenager MVP działa poprawnie" });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Metoda ${req.method} niedozwolona`);
  }
}
