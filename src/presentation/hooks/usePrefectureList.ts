import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) =>
  axios
    .get(url, {
      headers: { "X-API-KEY": process.env.NEXT_PUBLIC_RESAS_API_KEY },
    })
    .then((res) => res.data);

export const usePrefectureList = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_RESAS_API_URL}/v1/prefectures`,
    fetcher
  );

  return { data, isLoading, error };
};
