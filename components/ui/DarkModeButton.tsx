'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

import { Button } from '@/components/ui/button';

const DarkModeButton = () => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <Button className="rounded-full w-[2.5rem] p-1" onClick={toggleTheme}>
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
};

export default DarkModeButton;
