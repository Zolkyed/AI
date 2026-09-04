---
name: ui-implementation-loop
description: Implement one UI page from design/panels.png and iteratively refine screenshots against its reference panel. Use after the page's UI-free background asset has been generated.
---

# UI Implementation Loop

Implement one page at a time and refine it against the canonical design
reference. This skill changes application code; it does not generate the design
overview or extract its background assets.

## Input

1. Read the page name from the invocation.
2. Use `design/panels.png` as the canonical reference for the page's complete
   content, layout, and visual direction.
3. Use `design/<page-name>-background.png` as the page's full-screen,
   UI-free background asset.
4. Read the current issue and its acceptance criteria when available.

If the page name, reference panel, or background asset cannot be identified,
ask for the missing input before implementing. Do not substitute a different
page or invent a missing design.

## Implement

1. Inspect the existing project structure, styling system, shared components,
   and commands before editing.
2. Identify the target platform, route or screen, viewport, content, states,
   and interactions from the issue and design panel.
3. Implement all text, forms, buttons, icons, navigation, and other controls in
   code over the supplied background asset. Do not bake UI elements into the
   background image.
4. Recreate the reference panel closely without redesigning or improvising
   unless required information is absent. Preserve established project
   conventions and reuse appropriate existing components.
5. Keep functional behavior, responsiveness, and accessibility requirements
   authoritative when they require a justified visual difference.

## Compare and Refine

1. Run the app using its existing development workflow in the appropriate
   browser or simulator at the target viewport.
2. Capture a screenshot of the implemented page.
3. Compare the complete rendered page with the same page panel in
   `design/panels.png`.
4. Identify and correct differences in layout, spacing, typography, colors,
   gradients, controls, borders, radius, shadows, icons, imagery, alignment,
   padding, hierarchy, and image cropping.
5. Capture a new screenshot and compare again after each refinement.
6. Continue until the page satisfies its visual, functional, responsive, and
   accessibility acceptance criteria. Do not stop after the first
   implementation.

Treat the design as a strict target, but do not require literal pixel equality
where browser or simulator rendering, real content, responsive behavior, or
accessibility creates a justified difference. Stop if further changes would
violate requirements or if progress requires missing user input, and report the
specific blocker or remaining differences.

## Verify and Report

Run the relevant project checks after implementation and the repository's
required completion check before declaring the page complete. Summarize the
implemented page, comparison iterations, verification results, and any
remaining justified differences. Do not commit, push, or open a pull request
unless the user requests those actions.
