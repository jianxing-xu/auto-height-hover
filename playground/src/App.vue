<script setup lang="ts">
import { isDebug } from '~/composables'
</script>

<template>
  <main
    font-sans text="center gray-700 dark:gray-200" relative
    :class="{ debug: isDebug }"
  >
    <RouterView v-slot="{ Component }">
      <transition name="page-fade">
        <component
          :is="Component"
          absolute left-0 right-0 top-25
        />
      </transition>
    </RouterView>
  </main>
</template>
