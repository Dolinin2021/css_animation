const triggers = Array.from(
  document.querySelectorAll('[data-toggle="collapse"]')
);

const functionMap = {
  toggle: "toggle",
  show: "add",
  hide: "remove",
};

const collapse = (selector, cmd) => {
  const targets = Array.from(document.querySelectorAll(selector));
  targets.forEach((target) => {
    target.classList[functionMap[cmd]]("show");
  });
};

window.addEventListener(
  "click",
  (event) => {
    const element = event.target;
    if (triggers.includes(element)) {
      const selector = element.getAttribute("data-target");
      collapse(selector, "toggle");
    }
  },
  false
);
