<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  to: RouteLocationRaw
  current?: boolean
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="link"
    :class="{ 'link--current': current }"
  >
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
.link {
  position: relative;
  padding-bottom: 0.2rem;
  color: currentcolor;
  text-decoration: none;
  transition: text-decoration 0.2s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.12rem;
    transform: scaleX(0);
    opacity: 0;
    transform-origin: center;
    background: currentcolor;
    transition-property: transform, opacity, color;
    transition-duration: 0.1s;
    transition-timing-function: ease-in-out;
  }

  &:hover {
    &::after {
      transform: scaleX(1);
      opacity: 0.8;
    }
  }

  &:focus,
  &--current {
    color: var(--primary-color);
  }
}
</style>
