<script setup lang="ts">
const { locale, localeCodes, setLocale } = useI18n()
</script>

<template>
  <PrimeButton
    :label="locale"
    outlined
    class="lang-button"
    aria-label="Change language"
    @click="
      setLocale(localeCodes[localeCodes.indexOf(locale) + 1] || localeCodes[0])
    "
  />
</template>

<style lang="scss">
.lang-button {
  text-transform: uppercase;
  padding: 0.5rem 0.7rem;
  border: 2px solid currentcolor;
}
</style>
