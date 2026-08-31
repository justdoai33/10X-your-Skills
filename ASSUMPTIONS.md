# Assumptions and Decisions

This document records every place the requirements spec was unclear or silent, what was decided, and what would have been needed to decide better.

## 1. Timezone Selection Format

**What was unclear:** The spec requires a timezone select field but doesn't specify the format (offset-based, IANA names, etc.)

**Decision:** Implemented UTC offset-based selection (UTC-12 through UTC+12) with common timezone abbreviations in parentheses (PST, EST, GMT, CET, IST)

**What would help:** Clarification on whether IANA timezone database names (America/New_York) or offset-based selection is preferred, and whether to include all IANA timezones or a curated list

## 2. Role Ranking Interaction Method

**What was unclear:** The spec requires "a genuinely usable ranking interaction" with keyboard operability but doesn't specify the exact UX pattern

**Decision:** Implemented a click-to-select system where users click to add/remove roles from their ranking, then use up/down arrow buttons to reorder. This avoids drag-and-drop complexity while remaining fully keyboard accessible.

**What would help:** Whether drag-and-drop is expected/required, or if button-based reordering is acceptable. User testing data on which pattern works better for this audience.

## 3. Form State Persistence Timing

**What was unclear:** How often to persist form state (on every keystroke, on blur, on interval)

**Decision:** Persist on every change using React's useEffect. This ensures maximum safety against accidental navigation but may have minor performance implications.

**What would help:** Performance requirements or preferences around localStorage write frequency

## 4. Submission Error Recovery UX

**What was unclear:** What a "recoverable error" should look like and how to preserve answers

**Decision:** Show error message at top of form, highlight invalid fields with red borders, preserve all form data, and focus the first error field for quick correction.

**What would help:** Specific error scenarios to test against (network failure, timeout, server rejection, etc.)

## 5. Character Counter Behavior

**What was unclear:** Whether character counters should show live counts or only appear when approaching limits

**Decision:** Always show character count with format "X/Max" to give users continuous feedback about their progress toward minimum/maximum

**What would help:** UX testing on whether persistent counters help or distract from the writing task

## 6. Header/Footer Navigation Links

**What was unclear:** Which section links to include in navigation beyond "Facts", "Roles", and "FAQ"

**Decision:** Header includes Facts, Roles, FAQ, and Apply. Footer adds Engineering and Marketing track links for users who want to jump directly to those sections.

**What would help:** Priority order for sections, whether all sections should be linkable or only key ones

## 7. Visual Emphasis of Differentiators

**What was unclear:** How to "emphasize 3, 4, 5 and 7 visually" for engineering track items

**Decision:** Added bold font weight and red left border to emphasized items (making them stand out while maintaining readability)

**What would help:** Specific visual treatment guidance (highlight color, border, badge, etc.)

## 8. Engineer Role Card Layout

**What was unclear:** How to present the two engineering seats (capability vs reliability) within a single role card

**Decision:** Present both seats within one card, separated by clear headings, to show they're variants of the same role rather than separate roles

**What would help:** Whether these should be separate cards, tabs within a card, or the current unified presentation

## 9. "Apply Now" CTA Placement

**What was unclear:** Where exactly the two "Apply now" CTAs should appear

**Decision:** Placed in hero section (after introducing the program) and in the "About picking" section (after explaining role selection), which bookend the persuasive content

**What would help:** Specific placement guidance or whether more than two CTAs would be beneficial

## 10. Monospace Typography Application

**What was unclear:** Whether monospace should apply to absolutely everything or just body text

**Decision:** Applied monospace (IBM Plex Mono) to all text including headings, body, UI elements, and form fields for maximum consistency with the brutalist technical aesthetic

**What would help:** Whether there are exceptions where a sans-serif might be more functional (e.g., very long paragraphs)

## 11. Reduced Motion Implementation

**What was unclear:** Which animations to disable under prefers-reduced-motion

**Decision:** Applied comprehensive CSS rule to reduce all animations and transitions to near-instant (0.01ms) when user prefers reduced motion

**What would help:** Specific animations/transitions that should remain (if any) for functional feedback

## 12. Accessible Role Ranking Announcements

**What was unclear:** How to ensure screen reader users understand the ranking mechanism

**Decision:** Used semantic HTML (role="list", role="listitem") and aria-labels on reorder buttons to describe actions clearly ("Move [Role] up/down")

**What would help:** Real screen reader user testing to validate the implementation

## 13. Form Submission Confirmation Copy

**What was unclear:** What to say on successful submission beyond showing a confirmation state

**Decision:** Wrote direct, honest copy matching the site's tone: "If we move forward, you'll hear from us. If you don't hear back, that's the answer."

**What would help:** Approval of tone (whether this is too blunt or appropriately direct)

## 14. Mobile Navigation Breakpoint

**What was unclear:** At what viewport width to switch from full navigation to mobile treatment

**Decision:** Kept full horizontal navigation at all sizes since there are only 4 items. The layout reflows naturally on small screens without requiring a hamburger menu.

**What would help:** Whether a hamburger menu is expected on mobile or the simple horizontal list is acceptable

## 15. Color Contrast for Red on White

**What was unclear:** Whether pure #FF0000 red meets the 4.5:1 contrast requirement against white

**Decision:** Used #FF0000 (contrast ratio ~3.99:1) for accent elements and interactive components where they're not critical body text. For emphasized items, used it as border color with black text maintaining 21:1 ratio.

**What would help:** Whether to use a darker red (#CC0000, ratio 5.5:1) for better contrast, or if the current usage (non-text elements and accents) is acceptable

## 16. Favicon and Browser Tab Treatment

**What was unclear:** Whether to create a custom favicon or use Next.js default

**Decision:** Left the Next.js default favicon in place since visual assets weren't specified and fabricating a logo would violate the "no fabrications" rule

**What would help:** Whether a simple text-based favicon or the default is preferred

## 17. Facts Panel Bullet Character

**What was unclear:** What visual treatment for the facts list items

**Decision:** Used ▪ (black square) character in red for visual consistency with the brutalist aesthetic while maintaining list semantics

**What would help:** Whether custom list markers or semantic ordered/unordered lists with default styling are preferred

## 18. Email Validation Strictness

**What was unclear:** How strict email validation should be (simple format check vs RFC-compliant)

**Decision:** Used basic regex (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`) that catches obvious errors without rejecting valid edge cases

**What would help:** Whether to use more strict validation or accept any string with @ and a domain

## 19. TypeScript Strictness

**What was unclear:** TypeScript configuration and type safety level

**Decision:** Used Next.js default TypeScript config with full interface definitions for form data and content structures

**What would help:** Whether stricter TypeScript settings or more lenient configuration is preferred

## 20. Build Output Directory Structure

**What was unclear:** Whether to customize the Next.js output directory or use defaults

**Decision:** Used Next.js default `out/` directory for static export with standard structure

**What would help:** If a specific output structure or custom directory is needed for deployment
