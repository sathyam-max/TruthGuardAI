import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 50, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  const phrases = [
    "Fake News?",
    "Forwarded message?",
    "Viral headline?",
    "Let's check."
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setDisplayedText(
        isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1)
      );

      setTypingSpeed(isDeleting ? speed / 2 : speed);

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, phrases, speed, delay, typingSpeed]);

  return (
    <span className="typewriter-text" style={{ 
      borderRight: '2px solid var(--neon-blue)',
      paddingRight: '5px',
      fontFamily: 'monospace',
      fontSize: '1.2em',
      color: 'var(--neon-blue)'
    }}>
      {displayedText}
    </span>
  );
};

export default Typewriter;
