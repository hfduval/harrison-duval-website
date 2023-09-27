import { Layout } from "@/layouts/layout";
import SocialButtons from "@/components/SocialButtons";

export default function Home() {
    return (
        <Layout>
            <main className="justify-between">
                <div className="flex min-h-screen flex-col items-center pt-96">
                    <h1 className="mb-3 text-2xl font-semibold">
                        Welcome,
                    </h1>
                    <h2>
                        this is my personal website.
                    </h2>
                    <SocialButtons />
                </div>
            </main>
        </Layout>
    );
}
