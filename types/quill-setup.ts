import Quill from "quill";
import ImageResize from "quill-image-resize-module-react";

// Koristi fallback na default export ako je potrebno
Quill.register("modules/imageResize", ImageResize.default || ImageResize);
