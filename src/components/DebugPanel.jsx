export function DebugPanel({ pet, screen, gameActive, isAlive }) {
    return (
    <details className="mt-4 rounded-lg border border-slate-300 bg-slate-50 p-3 text-xs text-slate-700">
      <summary className="cursor-pointer font-semibold">Dev Debug</summary>
      <pre className="mt-2 overflow-auto whitespace-pre-wrap break-all">
        {JSON.stringify({ screen, gameActive, isAlive, pet }, null, 2)}
      </pre>
    </details>
  )
}