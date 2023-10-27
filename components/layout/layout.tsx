import Footer from "./footer";
import Meta from "../meta/meta";
import { Poppins } from "next/font/google";

export const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main className={font.className}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
