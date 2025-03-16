<script lang="ts">
    import '@picocss/pico';
    import menuIcon from '../assets/icons/menu-icon.svg'
    import userIcon from '../assets/icons/user-icon.svg'
    import Drawer from '../lib/app_menu.svelte'

    export let menu: Drawer | undefined
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
        <li><button on:click={menu?.toggleMenu} 
            style="width: 50px; height: 50px; margin: 0 30px; background-color: transparent;">
            <img src={menuIcon} alt="Menu Icon">
        </button></li>
    </ul>
    <ul>
        <h>ESP-MESS V2.0</h>
    </ul>
    <ul>
        <li><button style="width: 50px; height: 50px; margin: 0 30px; background-color: transparent;">
            <img src={userIcon} alt="User Icon">
        </button></li>
    </ul>
</nav>
