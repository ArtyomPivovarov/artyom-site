<script setup lang="ts">
import IconLink from '~/components/ui/IconLink.vue'
import { socialLinks } from '~/configs/links.config'
import { getWorkExperience } from '~/utils/date.utils'

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
          v-html="$t(`Fullstack web developer`)"
        ></p>
      </div>

      <div class="skills">
        <ElButton
          v-for="tag in tags"
          :key="tag.slug"
          round
          :color="tag.color"
          class="button"
          plain
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

      <h2 class="work-experience">
        <span class="title">
          {{ $t('Work experience') }}
        </span>

        <span class="value">
          <span
            v-once
            class="title"
          >
            {{ getWorkExperience() }}
          </span>
          <span class="years">
            {{ $t('years') }}
          </span>
        </span>
      </h2>
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
  width: 12rem;
  height: 12rem;
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
    border-width: 2px;
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--white-color);
    background-color: transparent;
  }
}

.links {
  display: flex;
  gap: 1rem;
}

.work-experience {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  .title {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .value {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
    padding: 1rem;
    border: 3px solid var(--white-color);
    border-radius: 5rem;
    aspect-ratio: 1;
    font-weight: 700;
    font-size: 1.2rem;

    .title {
      font-size: 4rem;
      line-height: 1;
      font-weight: 700;
      color: var(--primary-color);
    }
  }
}
</style>
