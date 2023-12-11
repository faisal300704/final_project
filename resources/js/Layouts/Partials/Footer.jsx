import React from "react";

export default function Footer() {
    return (
        <footer className="pt-4 mt-auto mb-0">
            <div className="w-full px-6 mx-auto">
                <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
                    <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                        <div className="leading-normal text-center text-sm text-slate-500 lg:text-left">
                            ©{new Date().getFullYear() + ", "}
                            made by
                            <a
                                href="https://www.instagram.com/mhdfaisaall_/?next=%2F"
                                className="font-semibold text-slate-700 ml-1"
                                target="_blank"
                            >
                              muhammad faisal
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
