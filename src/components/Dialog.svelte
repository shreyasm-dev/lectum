<script lang="ts">
  import { classes } from '$lib/classes';
  import { Dialog } from 'bits-ui';

  export let label: string;
  export let title: string | null = null;
</script>

<Dialog.Root>
  <Dialog.Trigger class={classes.button()}>{label}</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
    ></Dialog.Overlay>
    <Dialog.Content
      class="bg-[color:--background] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-lg p-4 max-w-[90vw] max-h-[90vh] min-w-[500px] overflow-y-auto"
    >
      <div>
        {#if title}
          <Dialog.Title class="text-2xl font-semibold mb-[1rem]">{title}</Dialog.Title>
        {/if}
        <slot />
      </div>
      <Dialog.Close class={`${classes.button()} mt-[1rem] mr-[1rem]`}>Close</Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
