# Web Development Learning Portal — 12-Lecture HTML, CSS, and JavaScript Path

This portal expands the learning path from 8 lectures to 12 lectures.

## Structure

- Lectures 1–7: HTML and CSS only.
- Lecture 8: CSS project with a small JavaScript sneak peek:
  - onclick alert
  - onclick document.body.style.backgroundColor
- Lectures 9–12: Full JavaScript module:
  - Variables and syntax
  - DOM manipulation and events
  - Control flow and logic apps
  - Final interactive app challenge

## Included

- `index.html` — main portal homepage.
- `lessons/lesson-1.html` to `lessons/lesson-12.html` — all lessons.
- `assets/styles.css` — portal styling.
- `assets/script.js` — syntax highlighting, hover hints, checklists, and Challenge logic.
- `student-starter-files/` — starter files for All About Me, Creative Cards, and Smart To-Do List.

## Teaching Rule

HTML answers: What is on the page?  
CSS answers: How does it look?  
JavaScript answers: What happens when the user interacts?

## Planned Next Version

The next version can add the strongest instructional improvements:


## Flip Vocabulary Cards and Safety Notes

This version adds:
- Flip Vocabulary Cards to every lesson.
- Safety Notes for Children to every lesson.

The safety notes remind learners not to share private personal details, to use safe images, to ask an adult before publishing, and to run only code they understand or code provided by the teacher.


## Flip card interaction

Vocabulary is now shown as interactive flip cards:
- Front side: vocabulary word.
- Back side: child-friendly meaning.
- Cards flip on hover, click, Enter, or Space.


## Flip vocabulary layout fix

- Flip vocabulary cards now display as full-width responsive grid cards.
- Button default styling was reset so cards no longer appear narrow.


## Clean flip cards update

- Removed home-page announcement cards for Flip Vocabulary and Safety Notes.
- Vocabulary card fronts now show only the term.
- Removed "Word" and "Click to reveal" labels from vocabulary cards.


## Debugging Corner and Try This Change

This version adds:
- Debugging Corner to every lesson.
- Try This Change micro-challenges to every lesson.

Debugging Corner helps students diagnose common mistakes.
Try This Change encourages learners to experiment safely and observe results.


## Section order update

Lesson section order was updated to:
1. Guided Activity
2. Try This Change
3. Debugging Corner


## Level Up Tasks and Project Rubrics

This version adds:
- Level Up Tasks to every lesson.
- Project Rubrics to Lessons 4, 8, and 12.

Level Up Tasks support students who finish early or want extra challenges.
Project Rubrics help teachers and students review major projects consistently.


## Build Steps and Lesson Timing

This version adds:
- Build Steps to every lesson.
- Lesson Timing and Delivery Plan to every lesson.

Build Steps help students follow a clear coding workflow.
Lesson Timing helps instructors deliver each lecture in a structured classroom format.


## Header Estimated Time update

- Removed the full Lesson Timing and Delivery Plan section from lesson pages.
- Added a cleaner Estimated Time badge directly in each lesson header.
- Moved Build Steps after Guided Activity and before Try This Change.


## Instructor and Parent guide pages

This version adds:
- `pages/instructor-notes.html` — Teacher Script / Instructor Notes.
- `pages/parent-safety-guide.html` — Parent / Guardian Safety Guide.

The home page includes buttons and guide cards linking to both pages.


## Teacher Guide moved

- Teacher Guide section was removed from the home page.
- Teacher Guide content was moved into `pages/instructor-notes.html`.


## Estimated time style update

- Renamed Suggested total to Estimated time.
- Updated the header badge style to look lighter and better integrated with the lesson header.


## Smaller lecture H1 update

- Reduced the lesson page H1 size so long lecture titles feel more balanced and easier to read.

## Worksheets and favicon update

- Added `assets/favicon.svg` so browser tabs show a portal icon.
- Added printable student worksheets for all 12 lectures in the `worksheets/` folder.
- Each worksheet includes a Print / Save as PDF button.
- Lesson pages include a Worksheet button in the header.
- Home page includes a Downloadable Student Worksheets section.


## Instructor worksheets and code downloads update

- The Worksheets section was moved from the home page into the Instructor page.
- Each lesson Training Material section now includes download buttons for the lesson example files:
  - HTML
  - CSS
  - JavaScript
- Downloadable examples are stored in the `downloads/lesson-*` folders.


## Single training files download update

- Each lesson now shows one download button only.
- The button downloads one ZIP file containing the lesson HTML, CSS, and JavaScript examples together.


## Download Example placement update

- Changed the lesson download button text from "Download HTML + CSS + JS" to "Download Example".
- Moved the download panel above the HTML Example code block in each lesson.

## Lesson 1 pure HTML and head link standard update

- Lesson 1 was changed to pure HTML.
- The introductory CSS practice was moved to Lesson 2.
- Lesson 1 now includes h1, h2, and h3 examples.
- Every lesson HTML Example now includes external CSS and JavaScript links in the head:
  - `<link rel="stylesheet" href="style.css">`
  - `<script src="script.js" defer></script>`
- Downloadable lesson ZIP files were regenerated with `index.html`, `style.css`, and `script.js`.


## Profile avatar image update

- Added `assets/images/profile.png` to the portal.
- Updated Lesson 3 and Lesson 4 HTML examples to use `images/profile.png`.
- Regenerated Lesson 3 and Lesson 4 downloadable ZIP files to include `images/profile.png`.
- Updated the All About Me starter file to include the avatar image.


## Must add now elements update

Added the following foundational elements into the training materials:
- Lesson 2: `<em>`
- Lesson 3: `<figure>`, `<figcaption>`
- Lesson 4: `<nav>`
- Lesson 5: `max-width`
- Lesson 6: `<article>`
- Lesson 7: `@media`
- Lesson 11: `<form>`, `<label>`, `<input>`

Downloadable lesson example ZIP files were regenerated for the updated lessons.


## Navigation and worksheet placement update

- Lesson header buttons now appear in this order: Previous, Start Lesson, Next.
- Worksheet button was removed from the lesson header.
- Worksheet access was moved beside Download Example in each lesson Training Material section.


## Figure moved to Lesson 4 update

- Moved `<figure>` and `<figcaption>` from Lesson 3 to Lesson 4.
- Lesson 3 now uses a normal `<img>` example.
- Lesson 4 now uses `<figure>` with the profile avatar and caption.
- Regenerated downloadable examples for Lessons 3 and 4.
