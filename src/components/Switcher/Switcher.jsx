import { Moon, Sun } from './switcher.style';
import { useTheme } from 'helpers/themeContext';

export const Switcher = () => {
  const { toogleTheme, themeMode, switchTheme } = useTheme();

  return (
    <div onClick={toogleTheme}>
      {themeMode === 'light' ? (
        <Moon size={24} onClick={() => switchTheme('dark')} />
      ) : (
        <Sun size={24} onClick={() => switchTheme('light')} />
      )}
    </div>
  );
};
