import React from "react";
import AppLogo from "@/components/common/AppLogo";

const Footer = () => {
    return (
        <div className="my-10 flex items-center justify-center text-red-900">
            <div className="flex flex-col items-center gap-4 text-sm">
                <AppLogo />
                <p className="font-bold">@ {new Date().getFullYear()} Integrity Realty</p>
            </div>
        </div>
    );
};

export default Footer;