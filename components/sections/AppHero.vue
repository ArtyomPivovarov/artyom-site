<script setup lang="ts">
import IconLink from '~/components/ui/IconLink.vue'
import { socialLinks } from '~/configs/links.config'
</script>

<template>
  <section class="hero">
    <div class="content">
      <PrimeAvatar
        shape="circle"
        class="avatar"
        color="black"
        image="/images/avatar.jpg"
      />

      <div class="text-content">
        <h1 class="title">
          {{ $t('Artyom Pivovarov') }}
        </h1>

        <p
          class="description"
          v-html="$t(`I\'m a full-stack web developer`)"
        ></p>
      </div>

      <div class="links">
        <IconLink
          :icon="`pi pi-${socialLinks.github.icon}`"
          :href="socialLinks.github.href"
        >
          {{ socialLinks.github.name }}
        </IconLink>

        <IconLink
          :icon="`pi pi-${socialLinks.linkedin.icon}`"
          :href="socialLinks.linkedin.href"
        >
          {{ socialLinks.linkedin.name }}
        </IconLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: var(--dark-color);
  color: white;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.avatar {
  width: 10rem;
  height: 10rem;
  margin-bottom: 1rem;
}

.text-content {
  text-align: center;
}

.title {
  font-size: 2rem;
  font-weight: 500;
}

.links {
  display: flex;
  gap: 1rem;
}
</style>
