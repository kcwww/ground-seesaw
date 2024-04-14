'use client';

import React, { useState, useEffect } from 'react';

const MainBanner = () => {
  const fullText = 'GROUND SEESAW ONE STEP AFTER';
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < fullText.length) {
      const timeout = setTimeout(() => {
        setText(text + fullText.charAt(count));
        setCount(count + 1);
      }, 100); // 100 밀리초 간격으로 글자를 추가

      return () => clearTimeout(timeout);
    }
  }, [text, count, fullText]);

  return (
    <div className="w-full justify-center items-center flex text-2xl p-4">
      {text}
      {fullText.length === text.length ? null : (
        <span className="blinking-cursor text-md">|</span>
      )}
    </div>
  );
};

export default MainBanner;
