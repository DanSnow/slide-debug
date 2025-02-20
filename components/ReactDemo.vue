<script setup lang="ts">
import { onMounted, shallowRef } from 'vue'
import { ReactComponent } from './ReactComponent'
import { createRoot } from 'react-dom/client'
import { createElement } from 'react'

const renderRoot = shallowRef()

onMounted(() => {
  const root = createRoot(renderRoot.value)
  root.render(createElement(ReactComponent))

  return () => {
    root.unmount()
  }
})
</script>
<template>
  <div>
    <div ref="renderRoot" />
  </div>
</template>
