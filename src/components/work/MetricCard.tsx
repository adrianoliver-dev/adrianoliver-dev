interface MetricCardProps {
  value: string
  label: string
  sublabel?: string
}

export default function MetricCard({ value, label, sublabel }: MetricCardProps) {
  return (
    <div className="flex flex-col gap-1 p-4 rounded-xl border border-border bg-surface">
      <p className="font-mono text-2xl text-accent font-medium">{value}</p>
      <p className="font-mono text-xs text-text-primary">{label}</p>
      {sublabel && <p className="font-mono text-xs text-text-secondary">{sublabel}</p>}
    </div>
  )
}
