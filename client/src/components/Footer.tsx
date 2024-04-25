import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
    return (
        <>
            <footer className="fixed inset-x-0 z-50 bottom-0 items-center  ">
                <Separator orientation={"horizontal"} />
                <div className="flex flex-col sm:flex-row p-8 justify-between ">
                    <div className="flex space-x-4">
                        <Link href="/">Home</Link>
                        <Separator orientation="vertical" />
                        <Link href="/about">About</Link>
                        <Separator orientation="vertical" />
                        <Link href="/imprint">Imprint</Link>
                        <Separator orientation="vertical" />
                        <Link href="/privacy">Privacy Policy</Link>
                    </div>
                    <div className="text-sm pt-4">
                        Created with ❤️ by Simon Gneuss. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}
