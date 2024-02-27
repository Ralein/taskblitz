// components/Chatbot.tsx

import React, { useState, ChangeEvent, FormEvent } from 'react';

const Chatbot: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSendMessage = async (e: FormEvent) => {
        e.preventDefault();

        // Send the input to the serverless function for Python script execution
        const response = await fetch('/api/execute-script', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input: inputValue }),
        });

        if (response.ok) {
            // No need to handle the response, as it's just an acknowledgment
            console.log('Script executed successfully.');
        } else {
            console.error('Error occurred while executing the script.');
        }

        setInputValue('');
    };

    return (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded shadow-md">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={handleInputChange}
                    className="flex-1 border rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Send
                </button>
            </form>
        </div>
    );
};

export default Chatbot;
