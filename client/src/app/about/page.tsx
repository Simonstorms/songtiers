"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

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

                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-4xl font-bold leading-[70px]">
                            Yup, that's me.
                        </h2>
                        <h3 className="sm:text-xl   py-5">
                            ou're probably wondering how I ended up in this
                            situation
                        </h3>
                        <p className={"leading-[70px]"}>Check it out</p>
                        <ArrowDown size={50} />
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                        >
                            <Link href={"https://www.simongneuss.com/"}>
                                <Image
                                    src={"/mac.png"}
                                    alt={"Apple Emoji of me"}
                                    height={150}
                                    width={150}
                                />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </main>
        </>
    );
}
