import { Layout } from "@/layouts/layout";
import { strings } from "@/constants/strings";

export default function About() {
    return (
        <Layout>
            <main className="justify-between">
                <div className="flex min-h-screen flex-col pl-8 pt-24 pr-8 pb-8">
                    <h1 className="mb-2 text-xl font-semibold">Intro</h1>
                    <h2>{strings.about}</h2>
                    <h1 className="mt-16 mb-2 text-xl font-semibold">Hobbies</h1>
                    <h2>{strings.hobbies}</h2>
                </div>
            </main>
        </Layout>
    );
}
