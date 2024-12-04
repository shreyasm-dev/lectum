<script lang="ts">
  import { classes } from '$lib/classes';
  import { Button } from 'bits-ui';

  export let onClick: () => void;
</script>

<Button.Root class={classes.button()} on:click={onClick}>
  <slot />
</Button.Root>
