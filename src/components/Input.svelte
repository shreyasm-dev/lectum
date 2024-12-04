<script lang="ts">
  export let value: string;
  export let placeholder = '';
</script>

<input
  class="inline-flex truncate rounded-md p-[0.5rem] border border-[color:--card] bg-[color:--background] text-sm transition-colors placeholder:text-[color:--foreground] outline-none"
  {placeholder}
  aria-label={placeholder}
  bind:value
/>
