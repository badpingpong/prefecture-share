import useSWR from "swr";
import axios from "axios";
import { useMemo } from "react";

// urlからidだけ抜き出す
const regex = /prefCode=([0-9].*)\&/;

const fetcher = (urls: string[]) => {
  const results = urls.map((url) =>
    axios
      .get(url, {
        headers: { "X-API-KEY": process.env.NEXT_PUBLIC_RESAS_API_KEY },
      })
      .then((res) => {
        const id = Number(url.match(regex)?.[1]);
        console.log("res", url, id);
        return { data: res.data, id };
      })
  );
  return Promise.all(results);
};

const baseUrl = `${process.env.NEXT_PUBLIC_RESAS_API_URL}/v1/population/composition/perYear`;

/**
 * 都道府県別の人口を返すhook
 * @param ids 都道府県IDの配列
 */
export const usePrefecturePopulationList = (ids: number[]) => {
  const urls = useMemo(
    () => ids.map((id) => `${baseUrl}?prefCode=${id}&cityCode=-`),
    [ids]
  );
  const { data, error, isLoading } = useSWR(urls, fetcher);

  return { data: data?.flat() ?? [], isLoading, error };
};
