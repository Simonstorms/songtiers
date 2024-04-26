import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
    return (
        <>
            <footer className="sm:fixed sm:inset-x-0 z-50 sm:bottom-0 items-center  ">
                <Separator orientation={"horizontal"} />
                <div className="flex flex-col sm:flex-row p-8 justify-between ">
                    <div className="flex space-x-6">
                        <Link
                            href="/"
                            className="underline-offset-4 hover:underline"
                        >
                            Home
                        </Link>
                        <Separator orientation="vertical" />
                        <Link
                            href="/about"
                            className="underline-offset-4 hover:underline"
                        >
                            About
                        </Link>
                        <Separator orientation="vertical" />
                        <Link
                            href="/imprint"
                            className="underline-offset-4 hover:underline"
                        >
                            Imprint
                        </Link>
                        <Separator orientation="vertical" />
                        <Link
                            href="/policy"
                            className="underline-offset-4 hover:underline"
                        >
                            Privacy <p className="hidden md:inline">Policy</p>
                        </Link>
                    </div>
                    <div className="text-sm pt-4">
                        Created with ❤️ by Simon Gneuss.
                    </div>
                </div>
            </footer>
        </>
    );
}
