<script lang="ts">
  import { page } from '$app/stores';
  import type { Readability } from '@mozilla/readability';

  const { url } = $page.params;
  const { data } = $$props as { data: ReturnType<Readability['parse']> };
</script>

{#await data}
  <p>Loading...</p>
{:then data}
  {#if data === null}
    <p>Failed to parse the article</p>
  {:else}
    <p>
      <a href={url}>{new URL(url).hostname}</a>
    </p>
    <h1>{data.title}</h1>
    {@html data.content}
  {/if}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
