import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";

export default function App() {
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [refresh, setRefresh] = useState({
    auto: false,
    delay: 5000,
  });

  return (
    <Card>
      <Checkbox
        text={"Enabled"}
        checked={isEnabled}
        onChange={() => setIsEnabled(!isEnabled)}
      />
      <Checkbox
        text={`Auto-refresh every ${refresh.delay / 1000} seconds`}
        checked={refresh.auto}
        onChange={() => setRefresh({ ...refresh, auto: !refresh.auto })}
      />
      <Button wide={true} disabled={!isEnabled}>
        Get cat
      </Button>
    </Card>
  );
}
