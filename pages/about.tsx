import { Layout } from "@/layouts/layout";
import { strings } from "@/constants/strings";

export default function About() {
    return (
        <Layout>
            <main className="justify-between">
                <div className="flex min-h-screen flex-col pl-8 pt-24">
                    <h2>{strings.about}</h2>
                </div>
            </main>
        </Layout>
    );
}
