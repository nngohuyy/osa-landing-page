"use client";
import { useMemo, useState } from "react";
import { Link, Button } from "@heroui/react";
import { CustomButton } from "@components/Button";
import { OSALogo } from "@components/OSALogo";
import navigationRoutes from "@constants/navigationRoutes";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const routes = useMemo(() => Object.entries(navigationRoutes), []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const shellClass =
    "bg-white border shadow-solid border-black rounded-2xl max-w-screen-xl w-full h-14 md:h-20 mx-auto";
  const innerClass =
    "h-full w-full px-5 md:px-10 flex items-center justify-between";
  const desktopLinkClass =
    "text-[#35589F] hover:text-white hover:bg-[#35589F] px-4 py-2 rounded-full transition-colors ease-out duration-200";
  const mobilePanelClass =
    "bg-white border shadow-solid border-black rounded-3xl fixed top-24 left-5 right-5 md:left-1/2 md:right-auto md:w-full md:max-w-screen-xl md:-translate-x-1/2 z-50";
  const mobileInnerClass =
    "max-w-screen-xl mx-auto px-5 py-10 flex flex-col space-y-4 items-center";

  return (
    <div className="sticky top-5 z-50 px-5 xl:px-0">
      <nav className={shellClass}>
        <div className={innerClass}>
          <div className="flex items-center">
            <Link href="/" onClick={closeMobileMenu}>
              <OSALogo className="w-24 h-auto md:w-36"/>
            </Link>
          </div>

          <div className="hidden font-bold md:flex items-center space-x-10">
            {routes.map(([route, label]) => (
              <Link key={route} href={"/" + route} className={desktopLinkClass}>
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact-us">
              <CustomButton>Contact Us</CustomButton>
            </Link>
          </div>

          <div className="flex md:hidden">
            <Button
              className="!shadow-none border-none flex items-center justify-center"
              variant="light"
              isIconOnly
              onPress={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-panel"
            >
              <i className="pi pi-bars" style={{ fontSize: "1.25rem" }}></i>
            </Button>
          </div>
        </div>

        <div
          id="mobile-nav-panel"
          className={
            (isMobileMenuOpen ? "block " : "hidden ") + mobilePanelClass
          }
        >
          <div className={mobileInnerClass}>
            {routes.map(([route, label]) => (
              <Link
                className="text-xl"
                key={route}
                href={"/" + route}
                onClick={closeMobileMenu}
              >
                {label}
              </Link>
            ))}
            <Link href="/contact-us" onClick={closeMobileMenu}>
              <CustomButton className="mt-2 text-xl" size="lg">
                Contact Us
              </CustomButton>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
