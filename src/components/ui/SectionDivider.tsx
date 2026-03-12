export default function SectionDivider() {
  return (
    <div className="relative py-4 overflow-hidden">
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #1C1C1C 20%, #D9770620 50%, #1C1C1C 80%, transparent 100%)',
        }}
      />
    </div>
  )
}
