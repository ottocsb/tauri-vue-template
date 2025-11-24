<script setup lang="ts">
defineProps<{ msg: string }>()


const { t } = useI18n()
</script>

<template>
  <div class="mt-10 flex flex-col items-center space-y-7">
    <h1 class="text-4xl">
      {{ msg }}
    </h1>

    <p>
      {{ t('edit') }}
      <code>
        components/HelloWorld.vue
      </code>
      {{ t('to test HMR') }}
    </p>

    <p>
      {{ t('test.module') }}
    </p>
    <p>
      {{ t('check out') }}
      <a
        href="https://github.com/dishait/tov-template"
        target="_blank"
      >
        tov-template </a>, {{ t('the official Tov + Vue + Vite template') }}
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
  font-size: 1.2rem;
  animation: slide-up 0.5s ease-out;
}

@keyframes slide-up {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
