<script>
    import Stars from "$lib/components/stars.svelte";

</script>
<div class="bg-primary w-screen h-screen">
    {#each Array(20) as _, index (index)}
    <Stars></Stars>
    {/each}
</div>