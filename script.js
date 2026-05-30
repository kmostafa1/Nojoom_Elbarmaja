
:root {
  --bg: #f5f7fb;
  --panel: #ffffff;
  --ink: #172033;
  --muted: #667085;
  --primary: #4f46e5;
  --primary-dark: #312e81;
  --secondary: #06b6d4;
  --accent: #f59e0b;
  --border: #e4e7ec;
  --code-bg: #0f1020;
  --success: #16a34a;
  --danger: #dc2626;
  --shadow: 0 14px 35px rgba(15, 23, 42, 0.08);
  --radius: 22px;
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--ink);
  background:
    radial-gradient(circle at top left, rgba(79,70,229,0.12), transparent 28rem),
    radial-gradient(circle at top right, rgba(6,182,212,0.10), transparent 24rem),
    var(--bg);
  line-height: 1.6;
}

a { color: inherit; }

.site-header {
  padding: 48px 24px 36px;
  color: white;
  background: linear-gradient(135deg, #312e81, #4f46e5 58%, #06b6d4);
}

.header-inner {
  width: min(1180px, 100%);
  margin: 0 auto;
}

.badge {
  display: inline-flex;
  padding: 7px 12px;
  border: 1px solid rgba(255,255,255,0.34);
  border-radius: 999px;
  font-size: 13px;
  background: rgba(255,255,255,0.14);
  backdrop-filter: blur(6px);
}

.site-header h1,
.lesson-hero h1 {
  max-width: 920px;
  margin: 18px 0 12px;
  font-size: clamp(28px, 4.2vw, 46px);
  line-height: 1.08;
}

.site-header p,
.lesson-hero p {
  max-width: 820px;
  margin: 0;
  font-size: 18px;
  opacity: 0.94;
}

.header-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.lesson-hero .header-actions { justify-content: center; }


.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 42px;
  padding: 10px 16px;
  border: 0;
  border-radius: 14px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover { transform: translateY(-2px); }

.btn-primary {
  color: #312e81;
  background: #ffffff;
}

.btn-secondary {
  color: white;
  background: rgba(255,255,255,0.16);
  border: 1px solid rgba(255,255,255,0.32);
}

.btn-dark {
  color: white;
  background: var(--primary-dark);
}

.layout {
  width: min(1180px, calc(100% - 32px));
  margin: 28px auto 70px;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  align-items: start;
}

.sidebar {
  position: sticky;
  top: 18px;
  padding: 18px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: rgba(255,255,255,0.88);
  box-shadow: var(--shadow);
  max-height: calc(100vh - 36px);
  overflow: auto;
}

.sidebar h2 {
  margin: 0 0 12px;
  font-size: 18px;
}

.nav-list {
  display: grid;
  gap: 8px;
}

.nav-list a {
  display: block;
  padding: 10px 12px;
  border-radius: 13px;
  color: var(--muted);
  text-decoration: none;
  font-size: 14px;
}

.nav-list a:hover,
.nav-list a.active {
  color: var(--primary-dark);
  background: #eef2ff;
}

.main-content { min-width: 0; }

.panel,
.lesson-section {
  margin-bottom: 24px;
  padding: 26px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: rgba(255,255,255,0.92);
  box-shadow: var(--shadow);
}

.panel h2,
.panel h3,
.lesson-section h2,
.lesson-section h3 { line-height: 1.2; }

.panel h2,
.lesson-section h2 {
  margin-top: 0;
  font-size: 28px;
}

.grid {
  display: grid;
  gap: 18px;
}

.grid.two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid.three { grid-template-columns: repeat(3, minmax(0, 1fr)); }

.stat-card,
.lesson-card,
.check-card {
  padding: 18px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: white;
}

.stat-card strong {
  display: block;
  font-size: 28px;
  color: var(--primary);
}

.lesson-card h3 { margin: 0 0 8px; }

.lesson-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0;
}

.pill {
  display: inline-flex;
  padding: 5px 9px;
  border-radius: 999px;
  background: #eef2ff;
  color: var(--primary-dark);
  font-size: 12px;
  font-weight: 700;
}

.pill.js {
  color: #78350f;
  background: #fef3c7;
}

.pill.hintable {
  position: relative;
  cursor: help;
  border: 1px solid rgba(79, 70, 229, 0.18);
}

.pill.hintable::after {
  content: attr(data-hint);
  position: absolute;
  left: 50%;
  bottom: calc(100% + 10px);
  transform: translateX(-50%) translateY(4px);
  min-width: 220px;
  max-width: 320px;
  padding: 10px 12px;
  border-radius: 12px;
  background: #111827;
  color: #ffffff;
  font-size: 13px;
  line-height: 1.45;
  font-weight: 500;
  text-align: left;
  white-space: normal;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.25);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.18s ease, transform 0.18s ease;
  z-index: 20;
}

.pill.hintable::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: calc(100% + 4px);
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #111827;
  opacity: 0;
  transition: opacity 0.18s ease;
  z-index: 21;
}

.pill.hintable:hover::after,
.pill.hintable:focus::after,
.pill.hintable:hover::before,
.pill.hintable:focus::before { opacity: 1; }

.pill.hintable:hover::after,
.pill.hintable:focus::after { transform: translateX(-50%) translateY(0); }

.hint-note {
  margin-top: 12px;
  color: var(--muted);
  font-size: 14px;
}

.lesson-card a { text-decoration: none; }

.outline-table {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 16px;
}

.outline-table th,
.outline-table td {
  padding: 12px;
  border-bottom: 1px solid var(--border);
  text-align: left;
  vertical-align: top;
}

.outline-table th {
  background: #eef2ff;
  color: var(--primary-dark);
}

.outline-table tr:last-child td { border-bottom: 0; }

.lesson-hero {
  padding: 34px 24px;
  color: white;
  background: linear-gradient(135deg, #111827, #312e81 58%, #0891b2);
}

.lesson-hero .header-inner { width: min(1050px, 100%); }

.breadcrumb {
  margin-bottom: 12px;
  font-size: 14px;
  opacity: 0.9;
}

.breadcrumb a { color: white; }

.lesson-layout {
  width: min(1050px, calc(100% - 32px));
  margin: 28px auto 70px;
}

ul.clean { padding-left: 20px; }

.focus-box {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 16px;
}

.focus-box div {
  padding: 14px;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: #f8fafc;
}

.code-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
}

.code-block {
  position: relative;
  margin: 16px 0;
  border-radius: 18px;
  overflow: hidden;
  background: #0f1020;
  color: #e5e7eb;
  border: 1px solid #24263a;
}

.code-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  color: #cbd5e1;
  background: #090a16;
  font-size: 13px;
}

.copy-btn {
  padding: 7px 10px;
  border: 1px solid #334155;
  border-radius: 10px;
  color: #e5e7eb;
  background: #1f2937;
  cursor: pointer;
}

pre {
  margin: 0;
  padding: 18px;
  overflow-x: auto;
  background: #0f1020;
}

code {
  font-family: Consolas, Monaco, "Courier New", monospace;
  font-size: 14px;
}

code.syntax-highlighted { color: #d6deeb; }
.code-line-comment { color: #7f849c; }
.code-tag, .code-selector { color: #7dd3fc; }
.code-tag-name, .code-property { color: #38bdf8; }
.code-attr, .code-pseudo { color: #facc15; }
.code-string, .code-value { color: #f9a8d4; }
.code-number { color: #fbbf24; }
.code-keyword { color: #c084fc; }
.code-punctuation { color: #94a3b8; }

.project-card {
  padding: 20px;
  border-radius: 20px;
  background: linear-gradient(135deg, #ffffff, #f8fafc);
  border: 1px solid var(--border);
}

.preview-zone {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
  padding: 24px;
  border: 2px dashed #c7d2fe;
  border-radius: 20px;
  background: #f8fafc;
}

.demo-card {
  width: 210px;
  padding: 18px;
  border-radius: 18px;
  background: white;
  border: 1px solid var(--border);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
  text-align: center;
  transition: transform 0.25s ease;
}

.demo-card:hover { transform: translateY(-6px); }
.demo-icon { font-size: 44px; }

.footer {
  padding: 26px;
  color: var(--muted);
  text-align: center;
}

.progress {
  height: 10px;
  background: #e5e7eb;
  border-radius: 999px;
  overflow: hidden;
}

.progress span {
  display: block;
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  transition: width 0.3s ease;
}

.quiz-option {
  display: block;
  width: 100%;
  margin: 8px 0;
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: white;
  text-align: left;
  cursor: pointer;
}

.quiz-option.correct,
.quiz-option.correct:disabled {
  border-color: var(--success);
  background: #dcfce7;
  color: #166534;
  opacity: 1;
}

.quiz-option.wrong,
.quiz-option.wrong:disabled {
  border-color: var(--danger);
  background: #fee2e2;
  color: #991b1b;
  opacity: 1;
}

.challenge-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
}

.challenge-action-btn {
  padding: 10px 14px;
  border: 0;
  border-radius: 12px;
  color: white;
  background: var(--primary-dark);
  font-weight: 700;
  cursor: pointer;
}

.challenge-action-btn.secondary {
  color: var(--primary-dark);
  background: #eef2ff;
  border: 1px solid #c7d2fe;
}

.quiz-result.success {
  padding: 12px 14px;
  border-radius: 14px;
  background: #dcfce7;
  color: #166534;
  font-weight: 700;
}

.quiz-result.try-again {
  padding: 12px 14px;
  border-radius: 14px;
  background: #fff7ed;
  color: #9a3412;
  font-weight: 700;
}

@media (max-width: 900px) {
  .layout { grid-template-columns: 1fr; }
  .sidebar { position: static; max-height: none; }
  .grid.two, .grid.three, .focus-box { grid-template-columns: 1fr; }
}

@media print {
  .sidebar, .header-actions, .copy-btn { display: none; }
  body { background: white; }
  .layout, .lesson-layout {
    width: 100%;
    margin: 0;
    display: block;
  }
  .panel, .lesson-section {
    box-shadow: none;
    break-inside: avoid;
  }
}





/* Fixed flip vocabulary card layout */
.vocab-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  gap: 18px;
  align-items: stretch;
}

.vocab-card {
  display: block;
  width: 100%;
  min-height: 150px;
  perspective: 900px;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
  appearance: none;
  -webkit-appearance: none;
}

.vocab-card-inner {
  position: relative;
  display: block;
  width: 100%;
  min-height: 150px;
  transform-style: preserve-3d;
  transition: transform 0.55s ease;
}

.vocab-card.is-flipped .vocab-card-inner,
.vocab-card:hover .vocab-card-inner,
.vocab-card:focus .vocab-card-inner {
  transform: rotateY(180deg);
}

.vocab-card-front,
.vocab-card-back {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 150px;
  width: 100%;
  padding: 22px;
  border: 1px solid var(--border);
  border-radius: 18px;
  backface-visibility: hidden;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
  overflow-wrap: anywhere;
}

.vocab-card-front {
  background: linear-gradient(135deg, #eef2ff, #ffffff);
  color: var(--primary-dark);
}

.vocab-card-back {
  background: linear-gradient(135deg, #312e81, #4f46e5);
  color: #ffffff;
  transform: rotateY(180deg);
}

.vocab-card strong {
  display: block;
  margin-bottom: 8px;
  font-size: 22px;
  line-height: 1.2;
}

.vocab-card span {
  font-size: 15px;
  line-height: 1.5;
}

.vocab-card-front small {
  color: var(--muted);
  font-weight: 700;
  margin-bottom: 6px;
}

.vocab-card-back small {
  color: rgba(255,255,255,0.75);
  font-weight: 700;
  margin-bottom: 6px;
}

.vocab-card:focus {
  outline: 3px solid #93c5fd;
  outline-offset: 4px;
  border-radius: 20px;
}

@media (max-width: 900px) {
  .vocab-grid {
    grid-template-columns: 1fr;
  }
}

/* Child safety notes */
.safety-note {
  padding: 18px;
  border: 1px solid #fde68a;
  border-radius: 18px;
  background: #fffbeb;
  color: #78350f;
}

.safety-note h3 {
  margin-top: 0;
  color: #92400e;
}

.safety-note ul {
  margin-bottom: 0;
}


/* Clean vocabulary card front: show only the term */
.vocab-card-front {
  align-items: center;
  text-align: center;
}

.vocab-card-front strong {
  margin-bottom: 0;
  font-size: 26px;
}

.vocab-card-back {
  text-align: left;
}


/* Debugging Corner and Try This Change sections */
.debug-corner {
  padding: 18px;
  border: 1px solid #fecaca;
  border-radius: 18px;
  background: #fff1f2;
  color: #7f1d1d;
}

.debug-corner h3 {
  margin-top: 0;
  color: #991b1b;
}

.try-change {
  padding: 18px;
  border: 1px solid #bfdbfe;
  border-radius: 18px;
  background: #eff6ff;
  color: #1e3a8a;
}

.try-change h3 {
  margin-top: 0;
  color: #1d4ed8;
}

.debug-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
}

.debug-table th,
.debug-table td {
  padding: 11px;
  border-bottom: 1px solid #fee2e2;
  text-align: left;
  vertical-align: top;
}

.debug-table th {
  background: #fecaca;
  color: #7f1d1d;
}

.debug-table tr:last-child td {
  border-bottom: 0;
}

.try-list {
  margin-bottom: 0;
}

.try-list li {
  margin: 7px 0;
}


/* Level Up tasks and project rubrics */
.level-up {
  padding: 18px;
  border: 1px solid #c4b5fd;
  border-radius: 18px;
  background: #f5f3ff;
  color: #3b0764;
}

.level-up h3 {
  margin-top: 0;
  color: #6d28d9;
}

.level-up-list {
  margin-bottom: 0;
}

.level-up-list li {
  margin: 7px 0;
}

.rubric-box {
  padding: 18px;
  border: 1px solid #bbf7d0;
  border-radius: 18px;
  background: #f0fdf4;
  color: #14532d;
}

.rubric-box h3 {
  margin-top: 0;
  color: #166534;
}

.rubric-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
}

.rubric-table th,
.rubric-table td {
  padding: 11px;
  border-bottom: 1px solid #dcfce7;
  text-align: left;
  vertical-align: top;
}

.rubric-table th {
  background: #bbf7d0;
  color: #14532d;
}

.rubric-table tr:last-child td {
  border-bottom: 0;
}


/* Build Steps and Lesson Timing Plan */
.build-steps {
  padding: 18px;
  border: 1px solid #ddd6fe;
  border-radius: 18px;
  background: #faf5ff;
  color: #3b0764;
}

.build-steps h3 {
  margin-top: 0;
  color: #6d28d9;
}

.build-steps ol {
  margin-bottom: 0;
  padding-left: 22px;
}

.build-steps li {
  margin: 8px 0;
}

.timing-plan {
  padding: 18px;
  border: 1px solid #bae6fd;
  border-radius: 18px;
  background: #f0f9ff;
  color: #0c4a6e;
}

.timing-plan h3 {
  margin-top: 0;
  color: #0369a1;
}

.timing-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
}

.timing-table th,
.timing-table td {
  padding: 11px;
  border-bottom: 1px solid #e0f2fe;
  text-align: left;
  vertical-align: top;
}

.timing-table th {
  background: #bae6fd;
  color: #0c4a6e;
}

.timing-table tr:last-child td {
  border-bottom: 0;
}

.timing-total {
  margin-top: 12px;
  font-weight: 700;
}


/* Guide pages: Instructor and Parent */
.guide-layout {
  width: min(1100px, calc(100% - 32px));
  margin: 28px auto 70px;
}

.guide-section {
  margin-bottom: 24px;
  padding: 26px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: rgba(255,255,255,0.94);
  box-shadow: var(--shadow);
}

.guide-section h2 {
  margin-top: 0;
  font-size: 28px;
}

.guide-card-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.guide-card {
  padding: 18px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: white;
}

.guide-card h3 {
  margin-top: 0;
  color: var(--primary-dark);
}

.script-box {
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #c7d2fe;
  background: #eef2ff;
  margin: 12px 0;
}

.parent-warning {
  padding: 18px;
  border-radius: 18px;
  border: 1px solid #fde68a;
  background: #fffbeb;
  color: #78350f;
}

.guide-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
  background: white;
  border-radius: 14px;
  overflow: hidden;
}

.guide-table th,
.guide-table td {
  padding: 12px;
  border-bottom: 1px solid var(--border);
  text-align: left;
  vertical-align: top;
}

.guide-table th {
  background: #eef2ff;
  color: var(--primary-dark);
}

.guide-table tr:last-child td {
  border-bottom: 0;
}

@media (max-width: 900px) {
  .guide-card-grid {
    grid-template-columns: 1fr;
  }
}


/* Header estimated time badge */
.lesson-title-row {
  display: flex;
  align-items: flex-end;
  gap: 18px;
  flex-wrap: wrap;
}

.lesson-title-row h1 {
  margin-bottom: 0;
}

.suggested-total-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  padding: 9px 13px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.28);
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(8px);
  font-size: 14px;
  white-space: nowrap;
}

.suggested-total-badge .time-label {
  color: rgba(255, 255, 255, 0.78);
  font-weight: 700;
}

.suggested-total-badge strong {
  color: #ffffff;
  font-size: 15px;
}

@media (max-width: 900px) {
  .lesson-title-row {
    display: block;
  }

  .suggested-total-badge {
    margin-top: 14px;
    margin-bottom: 4px;
  }
}


/* Smaller lecture title for long lesson names */
.lesson-hero h1 {
  max-width: 980px;
}


/* Training material download buttons */
.download-panel {
  margin-top: 18px;
  padding: 16px;
  border: 1px solid #dbeafe;
  border-radius: 16px;
  background: #eff6ff;
}

.download-panel h3 {
  margin-top: 0;
  color: #1d4ed8;
}

.download-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 13px;
  border-radius: 12px;
  background: #1d4ed8;
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
}

.download-btn.secondary {
  background: #312e81;
}

.download-btn.js {
  background: #92400e;
}


/* Single training files download button */
.download-actions .download-btn {
  min-width: 220px;
}


/* Download Example panel placement update */
.download-panel {
  margin: 18px 0;
}


/* Navigation and worksheet download update */
.lesson-hero .header-actions {
  justify-content: center;
}

.worksheet-download {
  background: #0f766e;
}
