# Simple Test Plan - dizid.com

**URL:** https://dizid.com/

---

## Quick Smoke Test (Do This First)

- [ ] Site loads without blank screen
- [ ] No red errors in browser console
- [ ] All homepage sections visible (Hero, Sound familiar?, What I can do for you, Why work with me, How it works, Things I've built, Who should use Dizid?, Common questions, Contact)
- [ ] Nav links scroll to correct sections
- [ ] Case studies show (LaunchPilot.marketing, Unplugged.cv, Site Improver)

---

## Manual Testing Checklist

### Navigation
- [ ] Click logo → scrolls to top
- [ ] Click "How it works" → scrolls to the process steps
- [ ] Click "My work" → scrolls to the case studies (#proof)
- [ ] Click "Contact" → scrolls to the contact form
- [ ] "Projects" link → goes to /projects
- [ ] "Get a Quote" button → goes to /hire
- [ ] Mobile (<768px): hamburger menu works
- [ ] Mobile: menu closes after clicking link

### Hero Section
- [ ] "Get a fixed-price quote" button → goes to /hire#contact-hire
- [ ] "See what I've built" button → scrolls to case studies
- [ ] Trust strip (25+ / 20+ / 2-4 / EU) displays correctly

### Offers Section (#services)
- [ ] All 3 offer cards display with correct price/timeline
- [ ] "Your first version, live" card title links to /hire/mvp-development

### Proof Section (#proof)
- [ ] 3 case study cards display (LaunchPilot, Unplugged.cv, Site Improver)
- [ ] "View live" links open in new tab (Site Improver has none — url is '#')
- [ ] "See the full portfolio" link → goes to /projects

### FAQ Section
- [ ] Accordion items expand/collapse on click

### Contact Section
- [ ] Email link opens mail client
- [ ] Social links open correct profiles
- [ ] Contact form validates required fields
- [ ] Form submits (on Netlify deployment) — uses Netlify Forms, form name "contact"

### /hire page
- [ ] Services, case studies, "Why Work With Me" and process steps display
- [ ] Contact form validates and submits — form name "hire", includes project/budget selects

### Footer
- [ ] Year shows current year
- [ ] Social icons work

---

## Responsive Check

| Width | What to Check |
|-------|---------------|
| 375px (mobile) | Single column, hamburger menu |
| 768px (tablet) | 2-column layouts |
| 1440px (desktop) | Full layout, "Working with me" promise card visible in hero |

---

## Airtable Integration

| Scenario | Expected |
|----------|----------|
| Airtable configured | /projects and the case-study data pull from Airtable |
| Airtable not configured | Falls back to hardcoded case studies in src/data/caseStudies.js and src/services/airtable.js |

---

## Deployment sanity check

- [ ] `git log -1 --format=%H` on `main` matches the commit Netlify's dashboard shows as the current production deploy
- [ ] Netlify → Site configuration → Developer settings → Branches and deploy contexts → Production branch is `main` (see CLAUDE.md "Known-fixed issue" note if this ever looks wrong again)
