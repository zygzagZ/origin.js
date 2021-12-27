<template>
  <suspense :timeout="0">
    <template #default>
      <router-view />
    </template>
    <template #fallback>
      <h2>Loading WASM</h2>
    </template>
  </suspense>
</template>

<script>
export default {}
</script>
