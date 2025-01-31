<script setup lang="ts">
import IconLink from '~/components/ui/IconLink.vue'
import LangSelect from '~/components/ui/LangButton.vue'
// import UILink from '~/components/ui/UILink.vue'
import { socialLinks } from '~/configs/links.config'

// const route = useRoute()
// const links = [
//   {
//     href: '#work-experience',
//     label: 'Work experience'
//   },
//   {
//     href: '#projects',
//     label: 'Projects'
//   },
//   {
//     href: '#about',
//     label: 'About me'
//   },
//   {
//     href: '#contacts',
//     label: 'Contacts'
//   }
// ]
</script>

<template>
  <header>
    <div />
    <!--    <a-->
    <!--      class="logo"-->
    <!--      href="#"-->
    <!--    >-->
    <!--      <PrimeAvatar-->
    <!--        size="large"-->
    <!--        shape="circle"-->
    <!--        class="avatar"-->
    <!--        icon="pi pi-user"-->
    <!--      />-->

    <!--      <span class="font-bold">pivovarov.it</span>-->
    <!--    </a>-->
    <!--    <nav class="menu">-->
    <!--      <ul>-->
    <!--        <li-->
    <!--          v-for="link in links"-->
    <!--          :key="link.href"-->
    <!--        >-->
    <!--          <UILink-->
    <!--            :to="link.href"-->
    <!--            :current="`#${route.hash}` === link.href"-->
    <!--            >{{ $t(link.label) }}</UILink-->
    <!--          >-->
    <!--        </li>-->
    <!--      </ul>-->
    <!--    </nav>-->

    <nav class="icon-links">
      <IconLink
        v-for="link in socialLinks"
        :key="link.href"
        :href="link.href"
        class="icon-link"
        :icon="`pi pi-${link.icon}`"
        :aria-label="link.name"
      />
    </nav>

    <LangSelect class="lang-select" />
  </header>
</template>

<style scoped lang="scss">
header {
  position: fixed;
  display: flex;
  justify-content: center;
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
  position: absolute;
  right: 1rem;
  margin-left: 0.4rem;
}
</style>
