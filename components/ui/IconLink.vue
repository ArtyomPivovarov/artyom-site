<script setup lang="ts">
withDefaults(
  defineProps<{
    icon: string
    href: string
    color?: string
  }>(),
  {
    color: 'white'
  }
)
</script>

<template>
  <a
    class="icon-link"
    :href="href"
    target="_blank"
  >
    <i :class="icon" />
    <span class="text">
      <slot />
    </span>
  </a>
</template>

<style scoped>
.icon-link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.6rem;
  color: v-bind(color);
  border-radius: 50%;

  i {
    font-size: 1.5rem;
    transition: color 0.2s ease-in-out;
  }

  .text {
    border-bottom: 1px solid currentcolor;
    transition: border-bottom-color 0.2s ease-in-out;
  }

  &:hover {
    i {
      color: var(--primary-color);
    }

    .text {
      border-bottom-color: transparent;
    }
  }
}
</style>
