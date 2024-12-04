<script>
  import 'modern-normalize';
  import '../app.scss';
  import { style } from '$lib/styles';
  import { browser } from '$app/environment';
  import Dialog from '$components/Dialog.svelte';
  import Tabs from '$components/Tabs.svelte';
  import Tab from '$components/Tab.svelte';
  import Combobox from '$components/Combobox.svelte';
  import { colors } from '$lib/constants';
  import Button from '$components/Button.svelte';
  import Separator from '$components/Separator.svelte';
  import Tooltip from '$components/Tooltip.svelte';
  import Input from '$components/Input.svelte';

  let theme = style.default;

  if (browser) {
    style.reload();
    theme = style.get();
  }
</script>

<header class="print:hidden">
  <Dialog label="Settings">
    <Tabs tabs={['Reading', 'Other']}>
      <Tab value="Reading">
        <div class="space-y-[0.5rem]">
          <div class="mb-[1rem] space-x-[0.5rem]">
            <Button onClick={() => style.set(theme)}>Apply</Button>
            <Button onClick={() => style.reset()}>Reset to default</Button>
          </div>

          <Separator />

          <div class="space-y-[0.5rem]">
            <Tooltip tooltip="Enter a named color or a hex code">
              <span class="text-sm font-semibold">Colors</span>
            </Tooltip>

            <Combobox
              items={colors.map((color) => ({ value: color.replaceAll(' ', ''), label: color }))}
              bind:value={theme.colors.background}
              placeholder="Select or enter a color"
              label="Background:"
            />

            <Combobox
              items={colors.map((color) => ({ value: color.replaceAll(' ', ''), label: color }))}
              bind:value={theme.colors.foreground}
              placeholder="Select or enter a color"
              label="Foreground:"
            />

            <Combobox
              items={colors.map((color) => ({ value: color.replaceAll(' ', ''), label: color }))}
              bind:value={theme.colors.card}
              placeholder="Select or enter a color"
              label="Secondary:"
            />
          </div>

          <Separator />

          <div class="space-y-[0.5rem]">
            <span class="text-sm font-semibold">Typography</span>

            <div>
              <Input bind:value={theme.reader.font.family} placeholder="Enter a font family" />
            </div>

            <Combobox
              items={[10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 40]
                .map((s) => `${s}px`)
                .map((size) => ({ value: size, label: size }))}
              bind:value={theme.reader.font.size}
              placeholder="Select a font size"
            />
          </div>
        </div></Tab
      >
      <Tab value="Other"></Tab>
    </Tabs>
  </Dialog>
</header>
<main>
  <slot />
</main>
