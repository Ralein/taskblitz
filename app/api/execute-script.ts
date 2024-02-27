// pages/api/execute-script.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { spawnSync } from 'child_process';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { input } = req.body;

        try {
            // Replace 'your_script.py' with the actual name of your Python script
            spawnSync('python3', ['your_script.py', input]);

            // Send an acknowledgment without exposing the details
            res.status(200).json({ message: 'Script executed successfully.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error occurred while executing the script.' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
