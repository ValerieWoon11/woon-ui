<template>
  <div>
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      <div>
        <slot name="default"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'BasicContainer' });
</script>

<style>

</style>
