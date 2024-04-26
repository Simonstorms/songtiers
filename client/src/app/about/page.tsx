"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <>
            <Navbar headline={"About"} />
            <main className="max-w-6xl mt-20 mx-auto  ">
                <div className="px-8  ">
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

                    <h2 className="text-4xl font-bold leading-[70px]">
                        Thats me
                    </h2>
                </div>
            </main>
        </>
    );
}
