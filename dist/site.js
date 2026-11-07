const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");
const compactHeader = window.matchMedia("(max-width: 900px)");

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
}

menuButton.hidden = false;
document.querySelector(".site-header").classList.add("has-menu");

menuButton.addEventListener("click", () => {
  const opening = menuButton.getAttribute("aria-expanded") === "false";
  menuButton.setAttribute("aria-expanded", String(opening));
  navigation.classList.toggle("is-open", opening);
});

navigation.addEventListener("click", (event) => {
  if (compactHeader.matches && event.target.closest("a")) {
    closeMenu();
  }
});

document.querySelector(".site-header").addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuButton.focus();
  }
});

compactHeader.addEventListener("change", closeMenu);

const enquiryForm = document.querySelector("#enquiry-form");
const enquiryPreview = document.querySelector("#enquiry-preview");

enquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const draft = new FormData(enquiryForm);

  for (const field of ["name", "email", "message"]) {
    document.querySelector("#preview-" + field).textContent = draft.get(field).trim();
  }

  enquiryForm.hidden = true;
  enquiryPreview.hidden = false;
  enquiryPreview.querySelector("h4").focus();
});

document.querySelector("#edit-enquiry").addEventListener("click", () => {
  enquiryPreview.hidden = true;
  enquiryForm.hidden = false;
  enquiryForm.elements.namedItem("name").focus();
});

enquiryForm.hidden = false;
