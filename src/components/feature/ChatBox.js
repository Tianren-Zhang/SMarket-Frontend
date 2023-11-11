import React, { useState } from 'react';
import axios from 'axios';

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSendMessage = async () => {
    try {
      const result = await axios.post('/chat', { message });
      setResponse(result.data.message);
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponse('Failed to get a response from the server.');
    }
  };

  return (
    <div>
      <h1>Chat with GPT</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
      />
      <button onClick={handleSendMessage}>Send</button>
      <div>
        <p>Response:</p>
        <div>{response}</div>
      </div>
    </div>
  );
};

export default ChatBox;
