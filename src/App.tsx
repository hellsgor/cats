import "./App.css";
import { useCallback, useState } from "react";
import Card from "./components/Card";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";
import Cat from "./components/Cat";
import { queryClient } from "./api/query-client";
import { useCatData } from "./hooks/useCatData";

export default function App() {
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [autoRefresh, setAutoRefresh] = useState({
    auto: false,
    delay: 5000,
  });

  const { data, error, isFetching } = useCatData({ isEnabled, autoRefresh });

  const handleClick = useCallback(
    () =>
      queryClient.invalidateQueries({
        queryKey: ["cats", "random"],
      }),
    [],
  );

  const handleEnabledChange = useCallback(() => {
    setIsEnabled((prev) => !prev);
  }, []);

  const handleAutoRefreshChange = useCallback(() => {
    setAutoRefresh((prev) => ({ ...prev, auto: !prev.auto }));
  }, []);

  return (
    <Card>
      <Checkbox
        text={"Enabled"}
        checked={isEnabled}
        onChange={handleEnabledChange}
      />
      <Checkbox
        text={`Auto-refresh every ${autoRefresh.delay / 1000} seconds`}
        checked={autoRefresh.auto}
        onChange={handleAutoRefreshChange}
      />
      <Button wide={true} disabled={!isEnabled} onClick={handleClick}>
        Get cat
      </Button>
      <Cat data={data} isFetching={isFetching} error={error || undefined} />
    </Card>
  );
}
