<script lang="ts">
    import '@picocss/pico';

    export let title: string;
    export let leftButton: { icon: string, action: () => void };
    export let rightButton: { icon: string, action: () => void };
</script>


<style>
    .fixed_header {
        position: fixed;
        height: 60px;
        width: 100%;
        top: 0;
    }
</style>

<nav class="fixed_header" style="background-color: #663399; margin-bottom: 20px">
    <ul>
        <li><button on:click={leftButton?.action} 
            style="width: 50px; height: 50px; margin: 0 30px; background-color: transparent;">
            <img src={leftButton?.icon} alt="Menu Icon">
        </button></li>
    </ul>
    <ul>
        <h>{ title }</h>
    </ul>
    <ul>
        <li><button on:click={rightButton?.action}
            style="width: 50px; height: 50px; margin: 0 30px; background-color: transparent;">
            {#if rightButton}
                <img src={rightButton?.icon} alt="User Icon">
            {/if}
        </button></li>
    </ul>
</nav>
