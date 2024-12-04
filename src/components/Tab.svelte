<script lang="ts">
  import { Tabs } from 'bits-ui';

  export let value: string;
</script>

<Tabs.Content {value}>
  <slot />
</Tabs.Content>
