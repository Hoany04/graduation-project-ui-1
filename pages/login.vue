<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
  layout: 'blank'
})

onMounted(() => {
  document.title = t('auth.login.title')
})
</script>

<template>
  <LayoutAuth>
    <div class="grid mx-auto max-w-sm gap-6">
      <div class="grid gap-2 text-center">
        <h1 class="text-2xl font-semibold tracking-tight">
          {{ $t('auth.login.title') }}
        </h1>
        <p class="text-balance text-sm text-muted-foreground">
          {{ $t('auth.login.subtitle') }}
        </p>
      </div>
      <AuthSignIn />
    </div>
  </LayoutAuth>
</template>
