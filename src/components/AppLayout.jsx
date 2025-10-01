import { useEffect } from "react";
import staticMarkup from "../data/staticContent.html?raw";
import legacyScript from "../legacy/legacyScript.js?raw";

export function AppLayout() {
  useEffect(() => {
    const baseUrl = import.meta.env.BASE_URL || "/";
    const withTrailingSlash = baseUrl.endsWith("/")
      ? baseUrl
      : `${baseUrl}/`;
    window.__legacyBaseUrl = withTrailingSlash.startsWith("/")
      ? withTrailingSlash
      : `/${withTrailingSlash}`;

    const initializeLegacyApp = () => {
      if (window.__legacyAppInitialized) {
        return;
      }
      window.__legacyAppInitialized = true;
      const initEvent = new Event("DOMContentLoaded");
      document.dispatchEvent(initEvent);
    };

    if (!window.__legacyScriptLoaded) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.text = `${legacyScript}\n//# sourceURL=legacyScript.js`;
      document.body.appendChild(script);
      window.__legacyScriptLoaded = true;
      setTimeout(initializeLegacyApp, 0);
    } else {
      setTimeout(initializeLegacyApp, 0);
    }
  }, []);

  return (
    <div
      className="legacy-app"
      dangerouslySetInnerHTML={{ __html: staticMarkup }}
    />
  );
}
