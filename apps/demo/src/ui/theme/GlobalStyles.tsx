// src/theme/GlobalStyles.tsx
import { useEffect } from "react";
import { theme } from "./index";

export function GlobalStyles() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      /* Box sizing */
      *, *::before, *::after {
        box-sizing: border-box;
      }

      /* Body */
      body {
        margin: 0;
        padding: 0;
        background: linear-gradient(135deg, #f9f9f9 0%, #e2e8f0 100%);
        font-family: ${theme.fonts.body};
        color: ${theme.colors.text};
        font-size: 16px;
        line-height: 1.5;
      }

      /* Headings */
      h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-family: ${theme.fonts.heading};
      }

      /* Links */
      a {
        text-decoration: none;
        color: ${theme.colors.primary};
        transition: color 0.2s;
      }

      a:hover {
        color: ${theme.colors.primaryHover};
      }

      /* Buttons */
      button {
        font-family: ${theme.fonts.body};
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        border: none;
        border-radius: ${theme.borderRadius.medium};
        padding: ${theme.spacing.sm} ${theme.spacing.md};
        cursor: pointer;
        transition: background-color 0.2s, transform 0.2s;
      }

      button:hover {
        background-color: ${theme.colors.primaryHover};
        transform: scale(1.02);
      }

      /* Inputs */
      input, textarea, select {
        font-family: ${theme.fonts.body};
        border: 1px solid ${theme.colors.muted};
        border-radius: ${theme.borderRadius.small};
        padding: ${theme.spacing.sm};
        width: 100%;
        box-sizing: border-box;
      }

      /* Remove list styles */
      ul, ol {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      /* Page content wrapper – bruges til at centrere sider med padding og max-width */
      .page-content-wrapper {
        flex-grow: 1;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        min-height: 600px;
        display: flex;
        flex-direction: column;
      }

      /* Grid layout til kort */
      .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
        width: 100%;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
