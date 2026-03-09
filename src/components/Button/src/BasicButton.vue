<template>
  <a-button v-bind="getBindValue" :class="getButtonClass" @click="props.onClick">
    <template #icon v-if="props.preIcon">
      <slot name="icon">
        <i :class="['.btn-pre-icon', props.preIcon]"/>
      </slot>
    </template>
    <template #default>
      <slot></slot>
      <i v-if="props.postIcon" :class="['.btn-post-icon', props.postIcon]"/>
    </template>
  </a-button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { unref, computed } from 'vue';
import { Button as AButton } from 'ant-design-vue';
import { useAttrs } from '/@/hooks/core/useAttrs';

type buttonColor = 'primary' | 'success' | 'warning' | 'error' | 'info' | '';

defineOptions({ name: 'basic-button' });
const props = defineProps({
  color: { type: String as PropType<buttonColor> },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  preIcon: { type: String },
  postIcon: { type: String },
  onClick: { type: Function, default: null }
});
const attrs = useAttrs({ excludeDefaultKeys: false }) as any;

const getButtonClass = computed(() => {
  const { color, disabled } = props;
  return [{
    [`woon-btn-${color}`]: !!color,
    [`is-disabled`]: disabled
  }];
});
const getBindValue = computed(() => ({ ...unref(attrs), ...props }));
</script>

<style scoped>

</style>
