import { useSearchParams } from "react-router-dom";

type ParamsInit = { [key: string]: null };

/**
 *
 * @param params Object with keys of search parameters and null as values.
 *
 * @returns Object with keys of search parameters and their values. Also returns a setParams function which is more convenient to use than the one provided by useSearchParams.
 *
 * @summary The useSearchParams hook enables easier access to search parameters in a URL, and the setParams function simplifies updating those parameters.
 *
 * @description Allows for more easier use of useSearchParams. Developer can initiate a set of search parameters and access them more easily. It also provides a setParams function which is more convenient to use than the one provided by useSearchParams.
 *
 * @requires react-router-dom
 *
 * @author Karlo Šimić
 */
export const useDefinedSearchParams = <T extends ParamsInit>(params: T) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const paramArr = Object.keys(params).map((p) => [p, searchParams.get(p)]);

  const paramObj = Object.fromEntries(paramArr) as {
    [key in keyof T]: string | null;
  };

  const setParams = (update: {
    [key in keyof T]?: string | null;
  }): void => {
    const filteredParams = Object.fromEntries(
      Object.entries(update).filter((p) => !!p[1])
    ) as { [key: string]: string };
    setSearchParams(filteredParams);
  };

  return { setParams, ...paramObj };
};
