import { useEffect, useState } from "react";

export default function useFetchData(
  httpClientMethod,
  defaultResult = null,
  readOnly
) {
  const [result, setResult] = useState(defaultResult);

  useEffect(
    () => {
      const getResponse = async () => {
        const data = await httpClientMethod();
        setResult(data);
      };
      getResponse();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Array.isArray(readOnly) ? readOnly : [readOnly]
  );

  return result;
}
