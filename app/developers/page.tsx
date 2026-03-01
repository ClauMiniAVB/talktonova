export default function Developers() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-section mx-auto px-6 py-16">
        <h1 className="text-4xl font-semibold mb-8">Developer Documentation</h1>
        <p className="text-secondary text-lg mb-8">
          Technical documentation for building on the Unified Dynamics Framework is coming soon.
        </p>
        <div className="space-y-6 text-lg text-secondary">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Security</h2>
            <p>Relational auditing that finds structural vulnerabilities, not just known patterns.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Compute</h2>
            <p>Optimization based on thermodynamic coherence, not just local tuning.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Agents</h2>
            <p>Multi-agent coordination through shared relational state.</p>
          </section>
        </div>
      </div>
    </main>
  )
}