import { Config } from "sst/node/config";

async function getData() {
    console.log(Config.MY_ENV_VAR);

    return { props: { loaded: true } };
}
export default async function Home() {
    const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      here is my env var, inside these parens: ({Config.MY_ENV_VAR})
    </main>
  )
}
