import React from 'react';
import { useTheme } from './ThemeContext';

const ItalicText = ({ children }) => {
  const { isItalic } = useTheme();

  return (
    <div className={isItalic ? 'italic' : ''}>
      {children}
    </div>
  );
};

export default ItalicText;
