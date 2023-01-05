import React, { useState } from 'react';

import { I_ChatMessage } from '../types';

const ChatInterface = () => {
  const [messages, setMessages] = useState<Array<I_ChatMessage>>([]);

  return <div></div>;
};

export default ChatInterface;
