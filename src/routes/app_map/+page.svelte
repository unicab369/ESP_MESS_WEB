<script lang="ts">
    import { onMount } from 'svelte';
    import '@picocss/pico';
    import TopBar from '../../lib/app_topbar.svelte'
    import menuIcon from '../../assets/icons/menu-icon.svg'

    let vModel:any = {
        title: 'ESP-MESS V2.0',
        leftButton: {
            icon: menuIcon,
            action: ()=> {

            }
        },
    }
</script>


<TopBar title={vModel.title} leftButton={vModel.leftButton} rightButton={vModel.rightButton}></TopBar>
<div style="height: 90px;"></div>

<!-- Dropdown -->
<details role="list">
    <summary aria-haspopup="listbox">Dropdown</summary>
    <ul role="listbox">
        <li><a href="/action">Action</a></li>
        <li><a href="/another-action">Another action</a></li>
        <li><a href="/something-else">Something else here</a></li>
    </ul>
</details>

<!-- Select -->
<select>
    <option value="" disabled selected>Select</option>
    <option>…</option>
</select>