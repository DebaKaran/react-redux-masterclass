import { useEffect, useState } from "react";

export default function UseEffectPlayground() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("React");

  // 1. Runs on every render
  useEffect(() => {
    console.log("🔁 Effect A (no dependency): runs on every render");
  });

  // 2. Runs once after initial render
  useEffect(() => {
    console.log("✅ Effect B ([]): runs once on mount");
  }, []);

  // 3. Runs when `count` changes
  useEffect(() => {
    console.log(`🔂 Effect C ([count]): runs when count changes to ${count}`);
  }, [count]);

  // 4. Runs when either `count` or `name` changes
  useEffect(() => {
    console.log(`🔄 Effect D ([count, name]): count=${count}, name=${name}`);
  }, [count, name]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>🧪 useEffect Playground</h2>

      <div style={{ marginBottom: "1rem" }}>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
      </div>

      <div>
        <p>Name: {name}</p>
        <button
          onClick={() => setName((n) => (n === "React" ? "NextJS" : "React"))}
        >
          Toggle Name
        </button>
      </div>
    </div>
  );
}
