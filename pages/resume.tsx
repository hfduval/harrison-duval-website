import {Layout} from "@/layouts/layout";
import Image from "next/image";

export default function About() {
    return (
        <Layout>
            <main className="justify-between">
                <div className="flex min-h-screen flex-col items-center pt-32">
                    <Image
                        src="/resume.jpg"
                        alt="Resume"
                        width={600}
                        height={1200}
                    />
                </div>
            </main>
        </Layout>
    );
}
