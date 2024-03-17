interface ImportMetaEnv {
  VITE_APP_TITLE: string;
  VITE_API_URL: string;
}

declare global {
  interface ImportMeta {
    env: ImportMetaEnv
  }
}

// Przypisanie wartości domyślnych
const defaultEnv: ImportMetaEnv = {
  VITE_APP_TITLE: "My Default App",
  VITE_API_URL: "https://default.example.com/api",
};

// Łączenie wartości domyślnych z rzeczywistymi zmiennymi środowiskowymi
const env: ImportMetaEnv = Object.assign({}, defaultEnv, import.meta.env);

export { env };