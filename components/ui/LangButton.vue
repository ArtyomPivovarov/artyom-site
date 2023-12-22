<script setup lang="ts">
const { locale, localeCodes, setLocale } = useI18n()

const nextLocale = computed(
  () =>
    localeCodes.value[localeCodes.value.indexOf(locale.value) + 1] ||
    localeCodes.value[0]
)
</script>

<template>
  <PrimeButton
    :label="nextLocale"
    outlined
    class="lang-button"
    aria-label="Change language"
    @click="setLocale(nextLocale)"
  />
</template>

<style lang="scss">
.lang-button {
  text-transform: uppercase;
  padding: 0.5rem 0.7rem;
  border: 2px solid currentcolor;
}
</style>
