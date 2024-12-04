<script lang="ts">
  import { Tabs } from 'bits-ui';

  export let tabs: string[];
  export let value: (typeof tabs)[number] = tabs[0];
</script>

<Tabs.Root {value}>
  <!-- TODO: dynamic columns -->
  <Tabs.List
    class={`grid grid-cols-2 w-full gap-[0.3rem] rounded-[9px] p-[0.2rem] text-sm font-semibold leading-[0] bg-[color:--card] shadow-inner`}
  >
    {#each tabs as tab}
      <Tabs.Trigger
        value={tab}
        class="h-[2rem] rounded-[7px] data-[state=active]:bg-[color:--background] data-[state=active]:shadow-sm"
        >{tab}</Tabs.Trigger
      >
    {/each}
  </Tabs.List>
  <div class="p-[1rem] bg-[color:--background] rounded-b-[9px]">
    <slot />
  </div>
</Tabs.Root>
