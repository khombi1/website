/* forms.js - Sweet Crumbs Bakery, Part 3 forms
   Used on enquiry.html and contact.html */

const BAKERY_EMAIL = "hello@sweetcrumbsbakery.co.za"; // recipient used in the mailto link
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_ID"; // replace after creating a free Formspree form

/* ---------- Validation rules: each returns true or an error message ---------- */
const rules = {
  name: (v) => /^[A-Za-z][A-Za-z\s'-]{1,49}$/.test(v.trim()) || "Enter your full name (letters only, 2-50 characters).",
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "Enter a valid email address, e.g. name@example.com.",
  phone: (v) => /^(\+27|0)[0-9]{9}$/.test(v.replace(/[\s-]/g, "")) || "Enter a valid SA number, e.g. 082 123 4567.",
  occasion: (v) => v !== "" || "Please choose an occasion.",
  topic: (v) => v !== "" || "Please choose a message type.",
  message: (v) => (v.trim().length >= 10 && v.trim().length <= 500) || "Message must be 10-500 characters.",
  guests: (v) => (Number(v) >= 1 && Number(v) <= 300) || "Enter a number of guests between 1 and 300.",
  eventDate: (v) => {
    if (!v) return "Please choose a date.";
    const d = new Date(v + "T00:00:00");
    const min = new Date(); min.setHours(0, 0, 0, 0); min.setDate(min.getDate() + 3);
    if (d < min) return "Orders need at least 3 days' notice.";
    return true;
  },
};

function showError(field, msg) {
  const span = document.getElementById(field.id + "-error");
  if (span) span.textContent = msg || "";
  field.classList.toggle("invalid", !!msg);
  field.setAttribute("aria-invalid", msg ? "true" : "false");
}

function validateForm(form) {
  let ok = true;
  form.querySelectorAll("[data-rule]").forEach((field) => {
    const result = rules[field.dataset.rule](field.value);
    showError(field, result === true ? "" : result);
    if (result !== true) ok = false;
  });
  return ok;
}

function liveValidate(form) {
  form.querySelectorAll("[data-rule]").forEach((field) => {
    field.addEventListener("blur", () => {
      const r = rules[field.dataset.rule](field.value);
      showError(field, r === true ? "" : r);
    });
  });
}

/* ---------- AJAX submission (fetch) ---------- */
async function submitAjax(data) {
  if (FORM_ENDPOINT.includes("YOUR_ID")) return { ok: true, demo: true }; // no endpoint set yet
  const res = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });
  return { ok: res.ok };
}

/* ---------- ENQUIRY: validate, process, show a response ---------- */
const basePrices = { Birthday: 350, Wedding: 1500, "Baby shower": 600, "Corporate event": 900, Other: 400 };

function buildEnquiryResponse(d) {
  const perGuest = d.occasion === "Wedding" ? 35 : 20;
  const estimate = basePrices[d.occasion] + Number(d.guests) * perGuest;
  const day = new Date(d.eventDate + "T00:00:00").getDay();
  const available = day !== 0; // bakery is open Monday to Saturday
  return available
    ? `Thanks ${d.name.split(" ")[0]}! We are available on ${d.eventDate}. Estimated cost for a ${d.occasion.toLowerCase()} for ${d.guests} guests: R${estimate} (final quote confirmed by email).`
    : `Thanks ${d.name.split(" ")[0]}. We are closed on Sundays, so ${d.eventDate} is unavailable. Please pick a date from Monday to Saturday.`;
}

function initEnquiry() {
  const form = document.getElementById("enquiryForm");
  if (!form) return;
  liveValidate(form);
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;
    const data = Object.fromEntries(new FormData(form).entries());
    const out = document.getElementById("formResponse");
    out.textContent = "Sending...";
    try {
      const r = await submitAjax(data);
      out.textContent = r.ok ? buildEnquiryResponse(data) : "Something went wrong. Please try again.";
      if (r.ok) form.reset();
    } catch (err) {
      out.textContent = "Network error. Please check your connection and try again.";
    }
  });
}

/* ---------- CONTACT: validate, compile an email, let the user send it ---------- */
function initContact() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  liveValidate(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;
    const d = Object.fromEntries(new FormData(form).entries());
    const subject = `Website message (${d.topic}) from ${d.name}`;
    const body = `Name: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone}\nType: ${d.topic}\n\nMessage:\n${d.message}`;
    document.getElementById("emailPreview").textContent = `To: ${BAKERY_EMAIL}\nSubject: ${subject}\n\n${body}`;
    const link = document.getElementById("sendEmail");
    link.href = `mailto:${BAKERY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.getElementById("emailBox").hidden = false;
  });
}

document.addEventListener("DOMContentLoaded", () => { initEnquiry(); initContact(); });