<script setup lang="ts">
import IconLink from '~/components/ui/IconLink.vue'
import { socialLinks } from '~/configs/links.config'

const tags = [
  {
    label: 'Vue.js 3',
    slug: 'vue',
    color: '#42b883'
  },
  {
    label: 'TypeScript 5',
    slug: 'typescript',
    color: '#007ACC'
  },
  {
    label: 'Nuxt.js 3',
    slug: 'nuxt',
    color: '#42b883'
  },
  {
    label: 'Nest.js 10',
    slug: 'nestjs',
    color: '#E0234E'
  }
]
</script>

<template>
  <section class="hero">
    <div class="content">
      <PrimeAvatar
        shape="circle"
        class="avatar"
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

      <div class="skills">
        <ElButton
          v-for="tag in tags"
          :key="tag.slug"
          round
          :color="tag.color"
          class="button"
          @click="$router.push(`#${tag.slug}`)"
        >
          {{ tag.label }}
        </ElButton>
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
  width: 14rem;
  height: 14rem;
  margin-bottom: 1rem;
}

.text-content {
  text-align: center;
}

.title {
  font-size: 2rem;
  font-weight: 500;
}

.skills {
  display: flex;
  gap: 1rem;

  .button {
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--whire-color);
  }
}

.links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}
</style>
