---
# You can also start simply with 'default'
theme: seriph
title: Effective Debug
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

# Effective Debug

---

## 用科學方法來 Debug

<div class="text-3xl pt-8">

1. 收集資訊
2. 建立假設
3. 驗證假設

</div>

---

## 程式是什麼？

![](./assets/program.svg)

---

![](./assets/program-data-error.svg)

---

![](./assets/program-logic-error.svg)

---

## 收集資訊

<div class="text-3xl pt-8">

資料如何改變的

</div>

---

<div class="size-full flex justify-center items-center">
<div class="text-center">
<h1>DevTool</h1>
</div>
</div>

---

## Breakpoints

- Normal breakpoints
- Conditional breakpoints
- Log point

---

## How to use breakpoint to break when calling setState with a specific value

::react-demo

---

## Console Magic

- `debug()`
- `$` and `$$`
- `$0`
- `copy()`

---

## The `console.log()` and their friends

- `console.dir()`
- `console.table()`
- `console.trace()`
