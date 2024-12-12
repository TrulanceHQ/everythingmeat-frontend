import { Button } from "@/components/ui/button";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex flex-col space-y-4 items-center justify-center h-full">
        <h3>Everything Meat</h3>
        <div className="flex flex-row space-x-8">
          <Link href={"/signup"}>
            <Button>Sign Up</Button>
          </Link>
          <Link href={"/login"}>
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
