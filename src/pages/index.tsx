import Head from "next/head";
import styles from "../styles/Home.module.css";
import { usePrefectureList } from "@presentation/hooks";
import { PrefectureListSelect } from "@presentation/components/organisms/PrefectureListSelect";
import { Header } from "@presentation/components/atoms";
import { PopulationGraph } from "@presentation/components/organisms/PopulationGraph";
import { PrefecturesProvider } from "@presentation/contexts";

export default function Home() {
  const { data } = usePrefectureList();

  return (
    <>
      <Head>
        <title>Prefecture Battle</title>
        <meta
          name="description"
          content="Show populations of each prefecture"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrefecturesProvider>
        <main className={styles.main}>
          <Header />
          {data && <PrefectureListSelect prefectureList={data} />}
          <PopulationGraph />
        </main>
      </PrefecturesProvider>
    </>
  );
}
