import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

// Use reliable flag icons instead of emoji to ensure consistent rendering across browsers/OS
const languages = [
  {
    code: 'en',
    label: 'EN',
    flag: (
      <span
        className="fi fi-gb"
        style={{ display: 'inline-block', width: 18, height: 12 }}
        aria-hidden="true"
      />
    )
  },
  {
    code: 'hu',
    label: 'HU',
    flag: (
      <span
        className="fi fi-hu"
        style={{ display: 'inline-block', width: 18, height: 12 }}
        aria-hidden="true"
      />
    )
  },
  {
    code: 'de',
    label: 'DE',
    flag: (
      <span
        className="fi fi-de"
        style={{ display: 'inline-block', width: 18, height: 12 }}
        aria-hidden="true"
      />
    )
  },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <div className="language-switcher-dropdown" ref={switcherRef}>
      <button
        className="language-switcher-btn"
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span style={{ marginRight: 6 }}>{currentLang.flag}</span>
        {currentLang.label}
        <span
          className={`language-switcher-arrow${open ? ' open' : ''}`}
          style={{
            marginLeft: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s'
          }}
        >
          <ChevronDown size={18} className="get-started-chevron" />
        </span>
      </button>
      <ul className={`language-switcher-list${open ? ' open' : ''}`} role="listbox">
        {languages.map(lang => (
          <li
            key={lang.code}
            className={`language-switcher-item${lang.code === i18n.language ? ' active' : ''}`}
            onClick={() => {
              i18n.changeLanguage(lang.code);
              setOpen(false);
            }}
            role="option"
            aria-selected={lang.code === i18n.language}
          >
            <span style={{ marginRight: 6 }}>{lang.flag}</span>
            {lang.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
