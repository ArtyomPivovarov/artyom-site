<script setup lang="ts">
import IconLink from '~/components/ui/IconLink.vue'
import LangSelect from '~/components/ui/LangButton.vue'
import UILink from '~/components/ui/UILink.vue'
import { socialLinks } from '~/configs/links.config'

const route = useRoute()
</script>

<template>
  <header>
    <a
      class="logo"
      href="#"
    >
      <PrimeAvatar
        size="large"
        shape="circle"
        class="avatar"
        image="/images/avatar.jpg"
      />

      <span>{{ $t('Artyom Pivovarov') }}</span>
    </a>
    <nav class="menu">
      <ul>
        <li>
          <UILink
            to="#about"
            :current="route.hash === '#about'"
            >{{ $t('About me') }}</UILink
          >
        </li>
        <li>
          <UILink
            to="#projects"
            :current="route.hash === '#projects'"
            >{{ $t('Projects') }}</UILink
          >
        </li>
      </ul>
    </nav>

    <nav class="icon-links">
      <IconLink
        :href="socialLinks.github.href"
        class="icon-link"
        :icon="`pi pi-${socialLinks.github.icon}`"
        :aria-label="socialLinks.github.name"
      />

      <IconLink
        :href="socialLinks.linkedin.href"
        class="icon-link"
        :icon="`pi pi-${socialLinks.linkedin.icon}`"
        :aria-label="socialLinks.linkedin.name"
      />

      <LangSelect class="lang-select" />
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  color: white;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;

  &:active {
    color: var(--primary-color);
  }
}

.menu {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;

  ul {
    display: flex;
    gap: 2rem;
  }
}

.icon-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.lang-select {
  margin-left: 0.4rem;
}
</style>
