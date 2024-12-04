<script lang="ts">
  import { Combobox, type CustomEventHandler } from 'bits-ui';
  import Check from 'phosphor-svelte/lib/Check';
  import Scrollable from './Scrollable.svelte';
  import Button from './Button.svelte';

  export let items: { value: string; label: string }[];
  export let value = items[0].value;
  export let placeholder = '';
  export let label = '';

  let touchedInput = false;

  $: filteredItems = value
    ? items.filter((item) => item.label.toLowerCase().includes(value.toLowerCase()))
    : items;
</script>

<Combobox.Root items={filteredItems} bind:inputValue={value} bind:touchedInput>
  <div>
    {label}
    <Combobox.Input
      class="inline-flex truncate rounded-md p-[0.5rem] border border-[color:--card] bg-[color:--background] text-sm transition-colors placeholder:text-[color:--foreground] outline-none"
      {placeholder}
      aria-label={placeholder}
    />
  </div>
  <Combobox.Content
    class="w-full rounded-xl border border-[color:--card] mt-1 p-1 shadow-md outline-none bg-[color:--background]"
  >
    <Scrollable>
      {#each filteredItems as item (item.value)}
        <Combobox.Item
          class="flex h-10 w-full select-none items-center rounded-lg p-3 text-sm outline-none data-[highlighted]:bg-[color:--card]"
          value={item.value}
          label={item.label}
        >
          {item.label}
          <Combobox.ItemIndicator class="ml-auto" asChild={false}>
            <Check weight="bold" />
          </Combobox.ItemIndicator>
        </Combobox.Item>
      {:else}
        <span class="block px-5 py-2 text-sm text-muted-foreground">No results found</span>
      {/each}
    </Scrollable>
  </Combobox.Content>
  <Combobox.HiddenInput name="value" />
</Combobox.Root>
