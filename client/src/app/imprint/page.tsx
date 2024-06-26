"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <>
            <Navbar headline={"Imprint"} />
            <main className="max-w-6xl mx-auto m-20 text-center">
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
                            className="flex items-center py-10 justify-center"
                            href="/"
                        >
                            <Button size={"lg"} variant={"outline"}>
                                Back
                            </Button>
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
