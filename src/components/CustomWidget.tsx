import { useState } from "react";

export const CustomWidget = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languages: Record<string, string> = {
    en: "English",
    ja: "日本語",
    ko: "한국어",
  };

  return (
    <>
      <div
        className="al-languages"
        style={{
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          width: 100,
          zIndex: 10000,
        }}
      >
        <div
          onClick={() => setOpen((isOpen) => !isOpen)}
          style={{ margin: "6px" }}
        >
          {languages[selectedLanguage]}
        </div>
        <button
          className="al-switch"
          data-lang="en"
          style={{ margin: "6px", display: !isOpen ? "none" : "" }}
          onClick={() => {
            setSelectedLanguage("en");
            setOpen(false);
          }}
        >
          English
        </button>
        <button
          className="al-switch"
          data-lang="ja"
          style={{ margin: "6px", display: !isOpen ? "none" : "" }}
          onClick={() => {
            setSelectedLanguage("ja");
            setOpen(false);
          }}
        >
          日本語
        </button>
        <button
          className="al-switch"
          data-lang="ko"
          style={{ margin: "6px", display: !isOpen ? "none" : "" }}
          onClick={() => {
            setSelectedLanguage("ko");
            setOpen(false);
          }}
        >
          한국어
        </button>
      </div>
    </>
  );
};
