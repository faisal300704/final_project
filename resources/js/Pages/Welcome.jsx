import { Link, Head } from "@inertiajs/react";
import Icons from "@/Components/Icons";

export default function Welcome(props) {
    return (
        <>
            <main className="bg-gray-100 font-montserrat min-h-screen overflow-hidden">
                <header className="h-24 sm:h-32 flex items-center">
                    <div className="container mx-auto px-6 sm:px-12 flex items-center justify-between">
                        <div className="font-black text-blue-900 text-2xl flex items-start">
                            Racing-School
                            <span className="w-3 h-3 rounded-full bg-purple-600 ml-2"></span>
                        </div>
                        <div className="flex items-center">
                            <nav className="text-purple-900 text-lg flex items-center">
                                <Link
                                    href="/"
                                    className="py-2 px-2 lg:px-8 flex hover:text-purple-700"
                                >
                                 <button className="w-full !px-4 !py-3 justify-center items-center tracking-wide !text-center text-white bg-blue-500 rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" style={{borderRadius: '17px'}}>Home</button>   
                                </Link>
                                <Link
                                    href={route("login")}
                                    className="py-2 px-2 lg:px-8 flex hover:text-purple-700"
                                >
                                    <button className="w-full !px-4 !py-3 justify-center items-center tracking-wide !text-center text-white bg-blue-500 rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" style={{borderRadius: '17px'}}>Masuk</button>   
                                </Link>
                                {/* <a href="#" className="py-2 px-8 flex hover:text-purple-700">
                                    Service
                                </a>
                                <a href="#" className="py-2 px-8 flex hover:text-purple-700">
                                    Portfolio
                                </a>
                                <a href="#" className="py-2 px-8 flex hover:text-purple-700">
                                    Contact us
                                </a> */}
                            </nav>
                            {/* <button className="flex flex-col ml-4">
                                <span className="w-6 h-1 rounded-full bg-purple-800 mb-1"></span>
                                <span className="w-6 h-1 rounded-full bg-purple-800 mb-1"></span>
                                <span className="w-6 h-1 rounded-full bg-purple-800 mb-1"></span>
                            </button> */}
                        </div>
                    </div>
                </header>
                <div className="container mx-auto px-6 sm:px-0 md:px-12 flex flex-col-reverse sm:flex-row relative ">
                    <div className="sm:w-6/12 relative z-10 bottom-0 mt-[10px]">
                        <img
                            src="/assets/images/logos/wel2.svg"
                            alt=""
                            className="h-[calc(100vh-138px)]"
                        />
                    </div>
                    <div className="sm:w-5/12 xl:w-4/12 flex flex-col items-start sm:items-end sm:text-right ml-auto mt-8 sm:mt-0 relative z-10 xl:pt-20 mb-16 sm:mb-0">
                        <h1 className="text-4xl lg:text-5xl text-blue-900 leading-none mb-4 font-black">
                            School Racing
                        </h1>
                        <p className="text-align:center mb-4 sm:mb-10 text-blue-900">
                        Pecinta Kecepatan, Mari Bergabung! Di Sekolah Racing Kami, Kami Menyulut Api Juara dalam Diri Anda."
                        Bukan Hanya Balap, Ini adalah Perjalanan Menjadi Pembalap Sejati. Temukan Potensi Anda di Sekolah Racing Kami
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
