import { Mail, MapPin } from "lucide-react";
import nusacitra from "../assets/nusacitra.png";

export default function Navbar() {
  return (
    <header className="w-full bg-zinc-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          <div className="w-1/2 flex items-center gap-4 bg-slate-200">
            <img src={nusacitra} alt="Nusa Citra" className="h-10" />
          </div>

          <div className="flex flex-col items-end gap-2 bg-slate-300">
            {/* Top Info */}
            <div className="flex items-center gap-8 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>CENTRAL JAKARTA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>NSCITRA@HOTMAIL.COM</span>
              </div>
            </div>

            {/* Menu */}
            <nav className="flex items-center gap-8 text-md font-bold">
              {[
                "HOME",
                "PROJECTS",
                "SERVICES",
                "ABOUT US",
                "PAGES",
                "CONTACTS",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition hover:text-red-500"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
