# Plan to Improve Dizid AI Visibility & Site Health Score

This document outlines a phased approach to systematically address the issues identified in the Foreground AI visibility report. The goal is to automate technical fixes and structure content improvements to rapidly increase the Dizid score.

## Phase 1: Technical & On-Page SEO Foundations

This phase focuses on quick, high-impact technical fixes that address the "Site Health" score directly. These changes provide a solid foundation for all other SEO and content efforts.

### 1. Add Core SEO Meta Tags & Schema to `index.html`

**Objective:** Fix missing canonical tags, Open Graph (OG) tags for social sharing, and add baseline `Organization` schema for entity recognition.

**File to Edit:** `index.html`

**Planned Changes:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dizid | Web & SaaS Development</title>
    <meta name="description" content="Dizid (Marc de Ruijter) is a senior web developer specializing in Vue.js, AI integrations, and building high-quality SaaS applications." />

    <!-- SEO & Social Tags -->
    <link rel="canonical" href="https://dizid.com" />
    <meta property="og:title" content="Dizid | Web & SaaS Development" />
    <meta property="og:description" content="Senior web developer specializing in Vue.js, AI integrations, and building high-quality SaaS applications." />
    <meta property="og:url" content="https://dizid.com" />
    <meta property="og:type" content="website" />
    <!-- <meta property="og:image" content="https://dizid.com/og-image.png" /> --> <!-- Placeholder for an OG image -->

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

    <!-- JSON-LD Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Dizid",
      "url": "https://dizid.com",
      "logo": "https://dizid.com/favicon.svg"
    }
    </script>
  </head>
  <body>
    <div id="app"></div>

    <!-- Hidden forms for Netlify Forms -->
    <form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message"></textarea>
    </form>
    <form name="hire" netlify netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <select name="project"></select>
      <select name="budget"></select>
      <textarea name="message"></textarea>
    </form>

    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

### 2. Strengthen Security Headers in `netlify.toml`

**Objective:** Address the missing security headers to improve the site's security score and best practices compliance.

**File to Edit:** `netlify.toml`

**Planned Changes:**

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    Referrer-Policy = "strict-origin-when-cross-origin"
    # NOTE: This is a safe starting point. It may need to be adjusted if new external resources (scripts, styles, etc.) are added.
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; connect-src 'self' https://api.netlify.com; img-src 'self' data:;"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains"
```

---

## Phase 2: Content & On-Page Structure

After implementing the foundational technical fixes, this phase will focus on the content and structural issues highlighted in the report.

### 1. Homepage Content and Structure Audit

**Objective:** Address on-page content requirements for better SEO and AI crawlability.

**File to Edit:** `src/views/Home.vue` (or `App.vue` if it's a single-page layout).

**Actions Required:**
-   **Ensure exactly one `<h1>` tag:** Review the main headline and ensure it's the only H1 on the page.
-   **Add at least one `<h2>` tag:** Introduce subheadings to structure the content logically.
-   **Increase word count to ≥ 300 words:** Expand on the services, philosophy, and value proposition. Add sections like "Who should use Dizid?", a brief bio, and a clear call-to-action.
-   **Add at least 3 internal links:** Once other pages exist (e.g., Hire, Playground, future content pages), link to them from the homepage body content.

### 2. Create New, Targeted Pages for AI Visibility

**Objective:** Build out topic authority and directly answer the types of queries AI assistants use for recommendations, as advised by the report.

**New Files/Components to Create:**
-   A use-case specific page: e.g., `/services/saas-mvp-development` with an H1 like "Best Web Developer for SaaS MVPs".
-   A region-specific page: e.g., `/about/developer-chiang-mai` with an H1 like "Top Software Developer in Chiang Mai".
-   A comparison page or section: Add a "Dizid vs. Agencies" section to the homepage or a dedicated page.

### 3. Implement Advanced Schema Markup

**Objective:** Add more detailed structured data to the new pages to make them even more "citable" for AI.

**Actions Required (on new pages):**
-   **`FAQPage` Schema:** On the use-case and region-specific pages, add a small FAQ section (e.g., "What is your process?", "What's your hourly rate?") and mark it up with `FAQPage` schema.
-   **`BreadcrumbList` Schema:** As the site structure grows, implement breadcrumb schema on all sub-pages to clarify their position within the site hierarchy.
