import "./App.css";
import { useCallback, useState } from "react";
import Card from "./components/Card";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";
import Cat from "./components/Cat";
import { useQuery } from "@tanstack/react-query";
import { catsApi } from "./api/cats";
import { queryClient } from "./api/query-client";

export default function App() {
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [autoRefresh, setAutoRefresh] = useState({
    auto: false,
    delay: 5000,
  });

  const { data, error, isFetching } = useQuery({
    queryKey: ["cats", "random"],
    queryFn: (meta) => catsApi.getRandomCat(meta),
    enabled: isEnabled,
    refetchOnWindowFocus: false,
    refetchInterval: autoRefresh.auto ? autoRefresh.delay : false,
  });

  const handleClick = useCallback(
    () =>
      queryClient.invalidateQueries({
        queryKey: ["cats", "random"],
      }),
    [],
  );
  return (
    <Card>
      <Checkbox
        text={"Enabled"}
        checked={isEnabled}
        onChange={() => setIsEnabled(!isEnabled)}
      />
      <Checkbox
        text={`Auto-refresh every ${autoRefresh.delay / 1000} seconds`}
        checked={autoRefresh.auto}
        onChange={() =>
          setAutoRefresh({ ...autoRefresh, auto: !autoRefresh.auto })
        }
      />
      <Button wide={true} disabled={!isEnabled} onClick={handleClick}>
        Get cat
      </Button>
      <Cat data={data} isFetching={isFetching} error={error || undefined} />
    </Card>
  );
}
