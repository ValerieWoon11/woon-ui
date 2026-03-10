<template>
  <div>组件开发测试</div>
  <basic-button @click="onClick">测试</basic-button>
</template>

<script setup lang="ts">
import { BasicButton } from '../../src';
import { useCopyToClipboard } from '../../src/hooks';

function onClick() {
  useCopyToClipboard('测试复制到粘贴板123');
}
</script>

<style scoped>
</style>
