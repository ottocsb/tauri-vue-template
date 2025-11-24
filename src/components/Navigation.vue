<script setup lang="ts">
import { getRoutes } from '@/plugins/router'

const { te, t } = useI18n()

const routes = getRoutes()
  .filter(r => !r.path.includes('notFound'))
  .map((r) => {
    let { path, name } = r
    if (path === safeResolve('/'))
      return { path, name: 'home' }

    if (!name)
      name = path

    return { path, name: name.toString().slice(1).replaceAll('/', ' · ') }
  })

const $route = useRoute()
</script>

<template>
  <nav
    aria-label="Site Nav"
    class="mx-auto p-4 flex h-80px max-w-3xl items-center justify-between"
  >
    <ul class="text-sm font-medium flex gap-2 items-center">
      <li v-for="r of routes" :key="r.path" class="hidden !block">
        <RouterLink
          class="px-3 py-2 rounded-lg hover:text-blue-700"
          :class="$route.path === r.path ? 'text-blue-700' : ''"
          :to="r.path"
        >
          {{ te(r.name) ? t(r.name) : r.name }}
        </RouterLink>
      </li>
      <li
        class="hidden !block"
      >
        <Dropdown />
      </li>
    </ul>
  </nav>
</template>
