function App() {
  return (
    // bg-base-200 nutzt die Standard-Hintergrundfarbe von daisyUI
    <div className="p-8 flex flex-col items-center gap-6 bg-base-200 min-h-screen">
      {/* Ein pulsierender Titel in der daisyUI-Hauptfarbe */}
      <h1 className="text-4xl font-bold text-primary animate-pulse">
        daisyUI Test-Labor 🧪
      </h1>

      {/* TEST 1: Buttons mit verschiedenen daisyUI-Farbklassen */}
      <div className="flex gap-2">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-outline btn-info">Info Outline</button>
      </div>

      {/* TEST 2: Eine klassische daisyUI Card (Karte) */}
      <div className="card w-96 bg-base-100 shadow-xl border border-base-300">
        <div className="card-body">
          <h2 className="card-title text-secondary">Erfolg! 🎉</h2>
          <p>
            Wenn diese Karte Schatten hat, abgerundet ist und die Buttons oben
            bunt sind, funktioniert daisyUI perfekt.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-success">Alles Top!</button>
          </div>
        </div>
      </div>

      {/* TEST 3: Ein interaktiver daisyUI Toggle-Schalter */}
      <div className="form-control bg-base-100 p-4 rounded-xl shadow-md w-96">
        <label className="label cursor-pointer justify-between">
          <span className="label-text font-medium">
            Docker + React + daisyUI
          </span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            defaultChecked
          />
        </label>
      </div>
    </div>
  );
}

export default App;
