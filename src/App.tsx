import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Checkbox from "./components/Checkbox";

export default function App() {
  const [isEnabled, setIsEnabled] = useState<boolean>(true);

  return (
    <Card>
      <Checkbox
        text={"Enabled"}
        checked={isEnabled}
        onChange={() => setIsEnabled(!isEnabled)}
      />
    </Card>
  );
}
