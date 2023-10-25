import { Layout } from "@/layouts/layout";
import { strings } from "@/constants/strings";
import Image from "next/image";

export default function About() {
    return (
        <Layout>
            <main className="justify-between">
                <div className="flex min-h-screen flex-col pl-8 pt-20 pr-8 pb-8">
                    <div className="flex flex-row">
                        <Image
                            className="object-scale-down hidden lg:block pr-6"
                            src="/me.jpg"
                            alt="Me"
                            width={650}
                            height={1200}
                        />
                        <div className="flex-col">
                            <h1 className="mb-2 text-xl font-semibold">Intro</h1>
                            <h2>{strings.about}</h2>
                            <h1 className="mt-4 mb-2 text-xl font-semibold">Work Experience</h1>
                            <h2>{strings.work}</h2>
                        </div>
                    </div>
                    <h1 className="mt-4 mb-2 text-xl font-semibold">Hobbies</h1>
                    <h2>{strings.hobbies}</h2>
                </div>
            </main>
        </Layout>
    );
}
