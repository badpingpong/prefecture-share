import useSWR from "swr";
import axios from "axios";
import { Prefecture, PrefectureListResponse } from "@domain/models";
import { PrefectureTranslator } from "@domain/repository";

const fetcher = (url: string) =>
  axios
    .get<PrefectureListResponse>(url, {
      headers: { "X-API-KEY": process.env.NEXT_PUBLIC_RESAS_API_KEY },
    })
    .then((res) => {
      return new PrefectureTranslator().translatePrefectureList(res.data);
    });

export const usePrefectureList = () => {
  const { data, error, isLoading } = useSWR<Prefecture[]>(
    `${process.env.NEXT_PUBLIC_RESAS_API_URL}/v1/prefectures`,
    fetcher
  );

  return { data, isLoading, error };
};
