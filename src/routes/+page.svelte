<script>
  import Button from '$components/Button.svelte';
  import Input from '$components/Input.svelte';

  let url = '';

  $: valid = (() => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  })();
</script>

<h1 class="text-4xl font-semibold">Lēctum</h1>

<div class="font-sans border mt-[1rem] p-[1rem] rounded-lg border-[color:--card]">
  <div class="mb-[1rem]">
    <Input bind:value={url} placeholder="Enter a URL" />
  </div>
  <Button disabled={!valid} onClick={() => (window.location.href = `/${encodeURIComponent(url)}`)}
    >Go</Button
  >
</div>
