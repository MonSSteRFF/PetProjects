import { useEffect, useState } from "react";

const useTheme = () => {
  const root = document.documentElement;

  const [theme, setTheme] = useState(root.getAttribute("theme"));

  useEffect(() => {
    root.setAttribute("theme", theme);
  }, [theme, root]);

  const changeTheme = (themeName, scheme) => {
    if (scheme !== undefined) {
      const colorsProperty = [
        { attr: "--mainBoldColor", color: scheme.mainBoldColor },
        { attr: "--textColorAll", color: scheme.textColorAll },
        { attr: "--textColorLink", color: scheme.textColorLink },
        { attr: "--textColorError", color: scheme.textColorError },
        { attr: "--backgroundColor", color: scheme.backgroundColor },
        { attr: "--primary", color: scheme.primary },
        { attr: "--secondary", color: scheme.secondary },
      ];

      localStorage.setItem(
        "customThemes",
        `{"customTheme-${themeName}": ${JSON.stringify(colorsProperty)}${
          localStorage.getItem("customThemes") !== null
            ? `,${localStorage.getItem("customThemes").slice(1)}`
            : "}"
        }`
      );

      changeTheme(themeName);
    } else {
      const colorScheme = localStorage.getItem(`customThemes`);

      if (themeName !== undefined && themeName !== "" && colorScheme !== null) {
        JSON.parse(colorScheme)[`customTheme-${themeName}`].forEach((item) => {
          root.style.setProperty(item.attr, item.color);
        });
        setTheme(themeName);
      } else {
        setTheme(theme === "light" ? "dark" : "light");
        root.setAttribute("style", "");
      }
    }
  };

  const clearCacheThemes = (themeName) => {
    if (themeName !== undefined) {
      const allThemes = localStorage.getItem("customThemes");
      if (allThemes !== null && allThemes !== undefined) {
        const parsedThemes = JSON.parse(allThemes);
        delete parsedThemes[themeName];
        return true;
      } else {
        return false;
      }
    } else {
      localStorage.removeItem("customThemes");
    }
  };

  return [changeTheme, clearCacheThemes];
};

export default useTheme;
