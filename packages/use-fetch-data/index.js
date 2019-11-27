import { useEffect, useState } from "react";

export default function useFetchData(
  httpClientMethod,
  defaultResult = null,
  readOnly
) {
  const [result, setResult] = useState(defaultResult);

  useEffect(
    () => {
      httpClientMethod().then(data => setResult(data));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Array.isArray(readOnly) ? readOnly : [readOnly]
  );

  return result;
}
