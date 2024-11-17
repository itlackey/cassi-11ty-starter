---
title: "Form Input Styling"
shortDescription: "Styling for input fields, textareas, buttons, and selects to maintain consistent form aesthetics across all forms."
tags: ["cassi","CSS", "Styles", "Selectors"]
selectors:
    - 'input'
    - 'textarea'
    - 'button'
    - 'select'
---

## Form Input Styling

The CSS ruleset provided styles input fields (`input`), textareas (`textarea`), buttons (`button`), and select elements (`select`) to maintain consistency in form appearance. It sets these elements to inherit the font settings and uses variable properties for color, background, border, border-radius, and padding.

## Usage

Here's how to use this rule in your HTML:

```html
<input type="text" class="" placeholder="Enter text">
<textarea class=""></textarea>
<button class="">Submit</button>
<select class="">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

## Example

<div class="example-container">
    <input type="text" class="" placeholder="Example input">
    <textarea class=""></textarea>
    <button class="">Example button</button>
    <select class="">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
</div>

## Developer Notes

- Ensure that `--text-color`, `--form-background`, and `--border-color` variables are defined in your CSS for them to be applied correctly.
- Customize border-radius, padding, font-size, and other properties as needed to match the design requirements of your project.

## CSS Declarations

```css
input,
textarea,
button,
select {
  font: inherit;
  color: var(--text-color);
  background: var(--form-background);
  border: 1px solid var(--border-color);
  border-radius: 0.375rem;
  padding: 0.5rem;
}
```
