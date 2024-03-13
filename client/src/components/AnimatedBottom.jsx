import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedBottom = () => {
  const words = ['Professional',
    'Innovative',
    'Customized',
    'Responsive',
    'Dynamic',
    'Seamless',
    'Engaging',
    'Unique',
    'Impactful'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const word = words[currentWordIndex];
    if (currentLetterIndex < word.length) {
      const timeoutId = setTimeout(() => {
        setCurrentWord((prev) => prev + word[currentLetterIndex]);
        setCurrentLetterIndex((prev) => prev + 1);
      }, 100); // Adjust typing speed as needed
      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setCurrentWord('');
        setCurrentLetterIndex(0);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 750); // Adjust delay before clearing word and moving to the next one
      return () => clearTimeout(timeoutId);
    }
  }, [currentWordIndex, currentLetterIndex, words]);

  return (
    <div className="typing-animation text-center">
      <motion.span
        className="typing-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {'<>'}
        {currentWord}
        {'</>'}
      </motion.span>
    </div>
  );
};

export default AnimatedBottom;
