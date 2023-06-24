<template>
  <TransitionRoot appear :show="props.open" as="template">
    <Dialog as="template" @close="handleClose()">
      <div class="fixed inset-0 overflow-hidden" style="z-index: 1000">
        <div class="dialog-wrapper px-12">
          <TransitionChild
            as="template"
            enter="duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
					<DialogOverlay class="fixed inset-0 bg-gray-500/70" />
          </TransitionChild>
          <TransitionChild
            as="template"
            enter="duration-300 ease-in-out"
            enter-from="opacity-0 translate-y-0 scale-95"
            enter-to="opacity-100 translate-y-0"
            leave="duration-300 ease-in-out"
            leave-from="opacity-100 translate-y-0"
            leave-to="opacity-0 translate-y-0 scale-95"
          >
            <div class="dialog z-10" :style="{ maxWidth: props.width }">
              <div
                v-if="$slots.header"
                ref="dialogHeader"
                class="dialog-header border-b border-b-gray-300 p-4"
              >
                <slot name="header" />
              </div>
              <div
                v-if="$slots.content"
                ref="dialogContent"
                class="dialog-content p-4"
                :style="{ maxHeight: contentHeight }"
              >
                <slot name="content" />
              </div>
              <div
                v-if="$slots.footer"
                ref="dialogFooter"
                class="dialog-footer border-t border-t-gray-300 p-4"
              >
                <slot name="footer" />
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import { nextTick, ref, watch } from 'vue';

// Props
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: '600px',
  },
  closeable: {
    type: Boolean,
    default: true,
  },
});

// Emit
const emit = defineEmits<{
  (event: 'close'): void;
  (event: 'update:open', isOpen: boolean): void;
}>();

// Handle close
const handleClose = () => {
  if (!props.closeable) return;
  emit('close');
};

// HTML Refs
const dialogHeader = ref<null | HTMLElement>(null);
const dialogContent = ref<null | HTMLElement>(null);
const dialogFooter = ref<null | HTMLElement>(null);

// Content height
const contentHeight = ref('calc(100% - 6rem');

// Watch open prop
watch(
  () => props.open,
  async (open) => {
    if (!open) return;

    // Let browser repaint
    await nextTick();

    // Calc header and footer heights
    const headerHeight = Math.ceil(
      dialogHeader.value?.getBoundingClientRect().height || 0
    );
    const footerHeight = Math.ceil(
      dialogFooter.value?.getBoundingClientRect().height || 0
    );

    // Set content height
    contentHeight.value = `calc(100vh - ${
      headerHeight + footerHeight
    }px - 10rem)`;
  }
);
</script>

<style scoped>
.dialog-wrapper {
  @apply flex items-center h-full w-full;
}

.dialog {
  @apply w-full mx-auto;
  @apply bg-white rounded-xl shadow-2xl overflow-hidden ring-1 ring-black ring-opacity-5;
}
.dialog-header {
  @apply block w-full;
}
.dialog-content {
  @apply block w-full overflow-y-auto overflow-x-hidden;
}
.dialog-footer {
  @apply block w-full;
}
</style>
