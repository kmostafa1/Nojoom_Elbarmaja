window.PORTAL_HINTS = {"html": "Root element of an HTML page. It wraps the whole document.", "head": "Hidden information area of the page, such as title, styles, and metadata.", "title": "Sets the page title shown in the browser tab.", "body": "Contains the visible content shown in the browser.", "h1": "Main heading of the page.", "h1-h6": "HTML heading tags. h1 is most important; h6 is smallest.", "p": "Paragraph tag used for normal text.", "style": "HTML tag used to write CSS inside the page.", "section": "Semantic HTML element used to group related content.", "ul": "Unordered list. Creates bullet points.", "ol": "Ordered list. Creates numbered items.", "li": "List item used inside ul or ol.", "img": "HTML image tag. Adds a picture to the page.", "alt text": "Text that describes an image for accessibility and when an image cannot load.", "a href": "HTML link. The href attribute stores the destination URL.", "button": "Clickable HTML element. CSS styles it; JavaScript can make it do actions.", "table": "HTML element for information arranged in rows and columns.", "tr": "Table row.", "th": "Table header cell.", "td": "Table data cell.", "Complete HTML document": "A full webpage file with doctype, html, head, title, and body.", "color": "CSS property that changes text color.", "background-color": "CSS property that changes an element background color.", "font-family": "CSS property that controls the typeface.", "font-size": "CSS property that controls text size.", "font-weight": "CSS property that controls text thickness.", "line-height": "CSS property that controls space between lines of text.", "text-align": "CSS property that aligns text left, right, center, or justify.", "letter-spacing": "CSS property that controls space between letters.", "margin": "Space outside an element.", "padding": "Space inside an element between content and border.", "border": "The line around an element.", "width": "CSS property that controls horizontal size.", "border-radius": "CSS property that rounds corners.", "box-sizing": "CSS property that controls how width and height are calculated.", "content": "The text, image, or child elements inside an element box.", "card": "A reusable content block used for characters, products, or summaries.", "background": "CSS background styling, such as color, image, or gradient.", "color scheme": "A small group of colors used consistently across a design.", "typography": "The visual style of text: font, size, weight, and spacing.", "spacing": "Using margin, padding, and gap to create clean layout distance.", "display: flex": "CSS declaration that activates Flexbox layout.", "justify-content": "Flexbox property for horizontal distribution.", "align-items": "Flexbox property for vertical alignment.", "gap": "CSS property that creates spacing between items.", "flex-wrap": "Flexbox property that allows items to move to a new row.", "card-container": "A wrapper that holds multiple card elements.", "responsive layout": "A layout that adapts to different screen sizes.", "Visual identity": "A consistent look created using color, typography, spacing, and style.", "Creative cards": "Original themed cards based on characters, games, books, or items.", "Reusable classes": "CSS classes used repeatedly to keep code clean and consistent.", "Hover effects": "Style changes that happen when the mouse moves over an element.", "transition": "CSS property that makes style changes animate smoothly.", "box-shadow": "CSS property that adds shadow behind an element.", "onclick": "An HTML event attribute that runs JavaScript when an element is clicked.", "alert": "A JavaScript command that shows a popup message.", "document.body.style.backgroundColor": "JavaScript that changes the page body background color.", "JavaScript": "Programming language used to make webpages interactive.", "variable": "A named container that stores a value.", "let": "JavaScript keyword for creating a variable that can change.", "const": "JavaScript keyword for creating a variable that should not be reassigned.", "string": "Text value in JavaScript, usually inside quotes.", "number": "Numeric value in JavaScript.", "boolean": "True or false value.", "console.log": "Command that prints information to the browser console.", "script": "HTML tag used to add JavaScript to a page.", "DOM": "The webpage structure JavaScript can read and change.", "id": "A unique name for an HTML element.", "document.getElementById": "JavaScript method used to select an element by its ID.", "textContent": "JavaScript property used to change visible text.", "addEventListener": "JavaScript method that waits for an event like a click.", "click": "A user action that happens when a button or element is clicked.", "event": "Something that happens on a page, such as click, typing, or loading.", "if": "Runs code only when a condition is true.", "else if": "Checks another condition if the first one is false.", "else": "Runs code when previous conditions are false.", "comparison": "Checking values using ===, >, <, >=, or <=.", "Number": "JavaScript function that converts a value into a number.", "input.value": "The value typed inside an input field.", "counter": "An app that increases, decreases, or resets a number.", "guessing game": "A logic game where the user guesses a hidden number.", "Tic Tac Toe": "Classic X and O game using a 3 by 3 board.", "To-Do List": "An app for adding, completing, and deleting tasks.", "createElement": "JavaScript method that creates a new HTML element.", "appendChild": "JavaScript method that adds an element inside another element.", "arrays": "JavaScript lists that store multiple values.", "state": "The current data of an app, such as current player or current tasks.", "winner detection": "Logic that checks if a game has a winning condition.", "localStorage": "Browser storage that can save data even after refreshing the page."};

const copyButtons = document.querySelectorAll("[data-copy-target]");
copyButtons.forEach(button => {
  button.addEventListener("click", async () => {
    const id = button.getAttribute("data-copy-target");
    const code = document.getElementById(id);
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code.innerText);
      const old = button.innerText;
      button.innerText = "Copied!";
      setTimeout(() => button.innerText = old, 1400);
    } catch (err) {
      alert("Copy failed. You can select the code manually.");
    }
  });
});

const lessonChecks = document.querySelectorAll("[data-checklist]");
lessonChecks.forEach(list => {
  const storageKey = "portal-js-" + list.getAttribute("data-checklist");
  const boxes = list.querySelectorAll("input[type='checkbox']");
  const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
  boxes.forEach((box, index) => {
    box.checked = saved[index] || false;
    box.addEventListener("change", () => {
      localStorage.setItem(storageKey, JSON.stringify([...boxes].map(b => b.checked)));
      updateProgress();
    });
  });
});

function updateProgress() {
  document.querySelectorAll("[data-progress-for]").forEach(bar => {
    const id = bar.getAttribute("data-progress-for");
    const list = document.querySelector(`[data-checklist="${id}"]`);
    if (!list) return;
    const boxes = [...list.querySelectorAll("input[type='checkbox']")];
    const complete = boxes.filter(b => b.checked).length;
    const pct = boxes.length ? Math.round((complete / boxes.length) * 100) : 0;
    bar.querySelector("span").style.width = pct + "%";
    const label = document.querySelector(`[data-progress-label="${id}"]`);
    if (label) label.innerText = pct + "% complete";
  });
}
updateProgress();

function escapeForHighlight(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function highlightHtmlCode(source) {
  let escaped = escapeForHighlight(source);
  escaped = escaped.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="code-line-comment">$1</span>');
  escaped = escaped.replace(/(&lt;\/?)([a-zA-Z0-9-]+)([\s\S]*?)(&gt;)/g, function(match, open, tagName, attrs, close) {
    const highlightedAttrs = attrs.replace(/([a-zA-Z-:]+)(=)(&quot;.*?&quot;|'.*?'|[^"'`\s&]+)?/g, function(attrMatch, attrName, eq, attrValue) {
      return '<span class="code-attr">' + attrName + '</span><span class="code-punctuation">' + eq + '</span>' +
        (attrValue ? '<span class="code-string">' + attrValue + '</span>' : '');
    });
    return '<span class="code-tag">' + open + '</span>' +
      '<span class="code-tag-name">' + tagName + '</span>' +
      highlightedAttrs +
      '<span class="code-tag">' + close + '</span>';
  });
  return escaped;
}

function highlightCssCode(source) {
  let escaped = escapeForHighlight(source);
  escaped = escaped.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="code-line-comment">$1</span>');
  escaped = escaped.replace(/([.#]?[a-zA-Z0-9_*,-][^{]*)(\{)/g, function(match, selector, brace) {
    return '<span class="code-selector">' + selector.trim() + '</span> <span class="code-punctuation">' + brace + '</span>';
  });
  escaped = escaped.replace(/([a-zA-Z-]+)(\s*:)([^;{}]+)(;?)/g, function(match, prop, colon, value, semicolon) {
    let highlightedValue = value
      .replace(/(#[0-9a-fA-F]{3,8})/g, '<span class="code-value">$1</span>')
      .replace(/\b(\d+(?:\.\d+)?)(px|rem|em|%|vh|vw|s|ms)?\b/g, '<span class="code-number">$1$2</span>')
      .replace(/\b(linear-gradient|rgba|rgb|var|solid|none|center|white|black|Arial|sans-serif|border-box|flex|wrap|green|orange|blue|purple|gray)\b/g, '<span class="code-value">$1</span>');
    return '<span class="code-property">' + prop + '</span><span class="code-punctuation">' + colon + '</span>' +
      highlightedValue + '<span class="code-punctuation">' + semicolon + '</span>';
  });
  escaped = escaped.replace(/(\})/g, '<span class="code-punctuation">$1</span>');
  return escaped;
}

function highlightJsCode(source) {
  let escaped = escapeForHighlight(source);
  escaped = escaped.replace(/(\/\/.*)/g, '<span class="code-line-comment">$1</span>');
  escaped = escaped.replace(/("[^"]*"|'[^']*')/g, '<span class="code-string">$1</span>');
  escaped = escaped.replace(/\b(let|const|function|if|else|return|true|false|document|Number|alert)\b/g, '<span class="code-keyword">$1</span>');
  escaped = escaped.replace(/\b(getElementById|addEventListener|console|log|createElement|appendChild|classList|toggle)\b/g, '<span class="code-property">$1</span>');
  escaped = escaped.replace(/\b(\d+)\b/g, '<span class="code-number">$1</span>');
  return escaped;
}

function applySyntaxHighlighting() {
  document.querySelectorAll("pre code").forEach(code => {
    if (code.classList.contains("syntax-highlighted")) return;
    const title = code.closest(".code-block")?.querySelector(".code-title span")?.innerText.toLowerCase() || "";
    const raw = code.innerText;
    if (title.includes("html")) {
      code.innerHTML = highlightHtmlCode(raw);
    } else if (title.includes("css")) {
      code.innerHTML = highlightCssCode(raw);
    } else if (title.includes("javascript")) {
      code.innerHTML = highlightJsCode(raw);
    }
    code.classList.add("syntax-highlighted");
  });
}
applySyntaxHighlighting();

const encouragementMessages = [
  "Excellent work! You understood the concept clearly. Keep going — you are building real developer skills!",
  "Great job! That is exactly right. Your HTML, CSS, and JavaScript thinking is getting stronger!",
  "Amazing! Correct answer. You are learning like a real front-end developer!",
  "Well done! You solved the challenge. Try explaining why the answer is correct to a classmate!",
  "Fantastic! You got it right. Keep practicing and your code confidence will grow fast!"
];

document.querySelectorAll("[data-quiz]").forEach(parent => {
  const result = parent.querySelector(".quiz-result");

  let actions = parent.querySelector(".challenge-actions");
  if (!actions) {
    actions = document.createElement("div");
    actions.className = "challenge-actions";
    actions.style.display = "none";

    const tryAgain = document.createElement("button");
    tryAgain.type = "button";
    tryAgain.className = "challenge-action-btn";
    tryAgain.innerText = "Try again";

    const showAnswer = document.createElement("button");
    showAnswer.type = "button";
    showAnswer.className = "challenge-action-btn secondary";
    showAnswer.innerText = "Correct answer";

    actions.appendChild(tryAgain);
    actions.appendChild(showAnswer);
    parent.appendChild(actions);

    tryAgain.addEventListener("click", () => {
      const options = parent.querySelectorAll(".quiz-option");
      options.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove("wrong", "correct");
      });
      if (result) {
        result.innerText = "No problem — try again. Look carefully at the lesson hints before choosing.";
        result.className = "quiz-result try-again";
      }
      actions.style.display = "none";
    });

    showAnswer.addEventListener("click", () => {
      const options = parent.querySelectorAll(".quiz-option");
      options.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove("wrong", "correct");
        if (btn.getAttribute("data-quiz-answer") === "true") {
          btn.classList.add("correct");
        }
      });
      if (result) {
        result.innerText = "The highlighted answer is correct. Review the lesson example, then try to explain why this answer works.";
        result.className = "quiz-result";
      }
      actions.style.display = "none";
    });
  }

  parent.querySelectorAll(".quiz-option").forEach(option => {
    option.addEventListener("click", () => {
      const options = parent.querySelectorAll(".quiz-option");
      const correct = option.getAttribute("data-quiz-answer") === "true";

      if (correct) {
        options.forEach(btn => {
          btn.disabled = true;
          btn.classList.remove("wrong", "correct");
        });
        option.classList.add("correct");
        if (result) {
          const msg = encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)];
          result.innerText = msg;
          result.className = "quiz-result success";
        }
        actions.style.display = "none";
      } else {
        options.forEach(btn => {
          btn.disabled = true;
          btn.classList.remove("correct");
        });
        option.classList.add("wrong");
        if (result) {
          result.innerText = "Good attempt! This answer is not correct yet. Choose what you want to do next.";
          result.className = "quiz-result try-again";
        }
        actions.style.display = "flex";
      }
    });
  });
});



document.querySelectorAll(".vocab-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });

  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.classList.toggle("is-flipped");
    }
  });
});


// Must add elements hints update: <em>, <figure>, <figcaption>, <nav>, <article>, <form>, <label>, <input>, @media, max-width are now included in lessons.
