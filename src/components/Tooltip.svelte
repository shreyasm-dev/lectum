<script lang="ts">
  import { Tooltip } from 'bits-ui';

  export let tooltip: string;
</script>

<Tooltip.Root openDelay={0}>
  <Tooltip.Trigger>
    <slot />
  </Tooltip.Trigger>
  <Tooltip.Content
    class="flex items-center justify-center rounded-lg border border-[color:--card] bg-[color:--background] p-[0.5rem] text-sm shadow-md outline-none"
  >
    <Tooltip.Arrow class="rounded-[2px] border-l border-t border-[color:--card]" />
    <div>
      {tooltip}
    </div>
  </Tooltip.Content>
</Tooltip.Root>
