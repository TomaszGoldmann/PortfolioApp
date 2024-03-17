import { useState, useEffect } from 'react';
import {StyledParagraph} from "@styles/GlobalStyles.ts";

const TypingMessage = () => {
  const messages = ['React', 'TypeScript', 'Node'];
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTypingForward, setIsTypingForward] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isTypingForward) {
        setCharIndex((charIndex) => charIndex + 1);
        if (charIndex >= messages[messageIndex].length) {
          setIsTypingForward(false);
        }
      } else {
        setCharIndex((charIndex) => charIndex - 1);
        if (charIndex <= 0) {
          setIsTypingForward(true);
          setMessageIndex((messageIndex) => (messageIndex + 1) % messages.length);
        }
      }
    }, 120); // Adjust speed by changing delay time

    return () => clearTimeout(timeoutId);
  }, [messageIndex, charIndex, messages, isTypingForward]);

  return <StyledParagraph>My technologies: {messages[messageIndex].substring(0, charIndex)}</StyledParagraph>;
};

export default TypingMessage;