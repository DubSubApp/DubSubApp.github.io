import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upload Video",
  description: "Upload your video and get it translated in seconds with voice translation, native-like narration, and perfect lip sync.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Upload Video"
        description="Upload your video and get it translated in seconds with voice translation, native-like narration, and perfect lip sync."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
