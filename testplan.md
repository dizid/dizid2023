# Simple Test Plan - dizid Portfolio

**URL:** https://dizid.github.io/dizid2023/

---

## Quick Smoke Test (Do This First)

- [ ] Site loads without blank screen
- [ ] No red errors in browser console
- [ ] All 5 sections visible (Hero, About, Projects, Skills, Contact)
- [ ] Nav links scroll to correct sections
- [ ] Projects show (4 cards from Airtable or fallback)

---

## Manual Testing Checklist

### Navigation
- [ ] Click logo → scrolls to top
- [ ] Click About/Projects/Skills/Contact → smooth scroll
- [ ] Mobile (<768px): hamburger menu works
- [ ] Mobile: menu closes after clicking link

### Hero Section
- [ ] "View Projects" button → scrolls to projects
- [ ] "Get in Touch" button → scrolls to contact
- [ ] Social icons open correct URLs in new tab

### Projects Section
- [ ] 4 project cards display
- [ ] Card hover effect works (lifts up)
- [ ] GitHub/Live links open in new tab
- [ ] "View All Projects" link works

### Contact Section
- [ ] Email link opens mail client
- [ ] Social links open correct profiles
- [ ] Contact form validates required fields
- [ ] Form submits (on Netlify deployment)

### Footer
- [ ] Year shows current year
- [ ] Social icons work

---

## Responsive Check

| Width | What to Check |
|-------|---------------|
| 375px (mobile) | Single column, hamburger menu |
| 768px (tablet) | 2-column layouts |
| 1440px (desktop) | Full layout, code window visible |

---

## Airtable Integration

| Scenario | Expected |
|----------|----------|
| No .env.local | Fallback projects show |
| Valid credentials | Airtable projects load |
| Invalid API key | Fallback projects + console error |

---

## Before Deploy

```bash
npm run build    # Should complete without errors
npm run preview  # Check production build locally
```

---

## Quick Link Check

- [ ] github.com/dizid
- [ ] linkedin.com/in/dizid
- [ ] twitter.com/dizid
- [ ] playground.dizid.com
- [ ] dev@dizid.com (mailto)
