'use client';

import React from 'react'
import { useState } from 'react';
import { BsMoonFill,BsSunFill } from "react-icons/bs";

const themes = {
  winter:'winter',
  dracula:'dracula'
}

const ThemeToggle = () => {
  const [theme,setTheme] = useState(themes.winter);
  // defines what should happens on onclick
  const toggleTheme = () => { 
    const newTheme = theme === themes.winter ? themes.dracula : themes.winter;
    document.documentElement.setAttribute('data-theme',newTheme);
    setTheme(newTheme);
  }

  return (
    <button className='btn btn-sm btn-outline' onClick={toggleTheme} > 
      { theme === 'winter' ? <BsMoonFill className='w-4 h-4 '/> : <BsSunFill className='w-4 h-4 '/> }
    </button>
  )
}

export default ThemeToggle