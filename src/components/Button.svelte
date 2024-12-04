<script lang="ts">
  import { classes } from '$lib/classes';
  import { Button } from 'bits-ui';

  export let disabled = false;
  export let onClick = () => {};
</script>

<Button.Root class={classes.button()} on:click={onClick} {disabled}>
  <slot />
</Button.Root>
