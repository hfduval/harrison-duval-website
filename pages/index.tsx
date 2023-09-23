import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/layouts/layout";

export default function Home() {
    return (
        <Layout>
            <main className="justify-between">
                <div className="flex min-h-screen flex-col items-center pt-64">
                    <h1 className="mb-3 text-2xl font-semibold">
                        Welcome
                    </h1>
                    <h2 className="mb-3">
                        Click on one of the tabs to learn about me, or to see my resume!
                    </h2>
                </div>
                <div className="flex min-h-screen flex-row">
                    <Link
                        href="https://www.linkedin.com/in/harrisonfranciscoduval/"
                    >
                        <Image
                            src="/linkedin.png"
                            alt="linkedin logo"
                            height="25"
                            width="75"
                        />
                    </Link>
                </div>
            </main>
        </Layout>
    );
}
