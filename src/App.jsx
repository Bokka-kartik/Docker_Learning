import { useState } from 'react'
import './App.css'

const steps = [
  { number: '01', title: 'Write the recipe', text: 'Describe the runtime, files, and port in a Dockerfile.' },
  { number: '02', title: 'Build the image', text: 'Turn your recipe into a portable image with one command.' },
  { number: '03', title: 'Run the container', text: 'Start an isolated process and open it from your browser.' },
]

const commands = [
  { label: 'Build', value: 'docker build -t stage2-app .' },
  { label: 'Run', value: 'docker run --rm -p 8080:80 stage2-app' },
]

function App() {
  const [completed, setCompleted] = useState([])
  const [copied, setCopied] = useState('')

  const toggleStep = (number) => {
    setCompleted((current) => current.includes(number) ? current.filter((step) => step !== number) : [...current, number])
  }

  const copyCommand = async (command) => {
    await navigator.clipboard.writeText(command)
    setCopied(command)
    window.setTimeout(() => setCopied(''), 1800)
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Dockyard home"><span className="brand-mark">D</span><span>dockyard<span className="brand-dot">.</span></span></a>
        <div className="status"><span className="status-dot" /> Stage 2 / local lab</div>
      </header>

      <section className="intro" id="top">
        <div className="eyebrow">A hands-on container lesson</div>
        <h1>Ship a tiny app.<br /><em>Learn the parts.</em></h1>
        <p className="intro-copy">A small React interface is ready to become your first container. Follow the path, build the image, and see exactly what each Docker instruction does.</p>
        <div className="intro-meta"><span><strong>15</strong> min lesson</span><span className="meta-rule" /><span><strong>{completed.length}/3</strong> steps complete</span></div>
      </section>

      <section className="workspace" aria-label="Docker learning workspace">
        <div className="lesson-column">
          <div className="section-heading"><div><span className="section-kicker">The path</span><h2>Three moves to running</h2></div><span className="progress-label">{Math.round((completed.length / 3) * 100)}% ready</span></div>
          <div className="steps">
            {steps.map((step) => {
              const isComplete = completed.includes(step.number)
              return <button className={`step ${isComplete ? 'is-complete' : ''}`} key={step.number} type="button" onClick={() => toggleStep(step.number)}><span className="step-number">{isComplete ? '✓' : step.number}</span><span className="step-content"><strong>{step.title}</strong><span>{step.text}</span></span><span className="step-arrow" aria-hidden="true">↗</span></button>
            })}
          </div>
          <div className="note"><span className="note-icon">i</span><p><strong>Think in layers.</strong> Your Dockerfile is a set of instructions. Each one adds a layer that can be cached and reused.</p></div>
        </div>

        <aside className="command-panel">
          <div className="panel-top"><span className="section-kicker">Your terminal</span><span className="live-pill">READY</span></div>
          <h2>Build it yourself</h2>
          <p>Run these from the <code>Stage2</code> folder when you are ready.</p>
          <div className="commands">{commands.map((item) => <div className="command-row" key={item.label}><span className="command-label">{item.label}</span><code>{item.value}</code><button type="button" className="copy-button" onClick={() => copyCommand(item.value)} aria-label={`Copy ${item.label} command`} title={`Copy ${item.label} command`}>{copied === item.value ? '✓' : 'Copy'}</button></div>)}</div>
          <div className="panel-footer"><span className="terminal-prompt">$</span> <span>localhost:8080</span><span className="pulse" /></div>
        </aside>
      </section>
      <footer className="footer"><span>Built for curious minds</span><span>React + Vite + Docker</span></footer>
    </main>
  )
}

export default App
