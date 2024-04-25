"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar headline={"Imprint"} />
            <main className="max-w-6xl mx-auto m-32 text-center">
                <div className="px-8 w-full">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                        }}
                    >
                        <Link
                            className="flex items-center justify-center"
                            href="/"
                        >
                            <div className="border p-2 dark:border-white border-black rounded-full ">
                                <CloseIcon />
                            </div>
                        </Link>
                    </motion.div>

                    <div className="text-2xl">
                        <address>
                            <h2 className="mt-16">Simon Gneuß</h2>
                            <p>Birkenweg 6</p>
                            <p>09569 Oederan</p>
                            <p>Germany</p>
                        </address>
                        <br />
                        <h2>Contact</h2>
                        <p>
                            E-Mail:{" "}
                            <a href="mailto:info@simongneuss.com">
                                info@simongneuss.com
                            </a>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
