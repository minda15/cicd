
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-xl font-bold">
            CI/CD <span className="text-blue-500">Pipeline</span>
          </h1>

          <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium transition hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero */}
      <main className="flex min-h-[calc(100vh-81px)] items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <div className="mb-6 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            React + Vite + TypeScript
          </div>

          <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Build. Test. Deploy.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            A modern CI/CD pipeline application powered by React, Vite,
            TypeScript and GitHub Actions.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700">
              Explore Pipeline
            </button>

            <button className="rounded-lg border border-slate-700 px-6 py-3 font-medium transition hover:bg-slate-800">
              GitHub
            </button>
          </div>

          {/* Status */}
          <div className="mx-auto mt-12 grid max-w-xl grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-2xl font-bold text-green-400">✓</p>
              <p className="mt-2 text-sm text-slate-400">Build</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-2xl font-bold text-green-400">✓</p>
              <p className="mt-2 text-sm text-slate-400">Test</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-2xl font-bold text-blue-400">→</p>
              <p className="mt-2 text-sm text-slate-400">Deploy</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

