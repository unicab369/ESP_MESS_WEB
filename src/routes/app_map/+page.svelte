<script lang="ts">
    import { onMount } from 'svelte';
    import '@picocss/pico';
    import TopBar from '../../lib/app_topbar.svelte'
    import menuIcon from '../../assets/icons/menu-icon.svg'
    import Drawer from '../../lib/app_menu.svelte'

    let drawer_menu: Drawer

    let vModel:any = {
        title: 'ESP-MESS V2.0',
        leftButton: {
            icon: menuIcon,
            action: ()=> {
                drawer_menu?.toggleMenu(null)
            }
        },
    }

    const options = [
        { id: 1, label: "1" },
        { id: 2, label: "2" },
        { id: 3, label: "3" },
        { id: 4, label: "4" },
        { id: 5, label: "5" },
    ];

    options.push(...Array.from({ length: 8 }, (_, index) => ({
      id: index + 12, // IDs from 10 to 20
      label: `${index + 12}`, // Labels like "Option 10", "Option 11", etc.
    })));

    options.push(
        { id: 21, label: "21" },
        { id: 22, label: "22" },
        { id: 23, label: "23" },
        { id: 25, label: "25" },
        { id: 26, label: "26" },
        { id: 27, label: "27" },
        { id: 32, label: "32" },
        { id: 33, label: "33" },
    )
    
    let selectedValue = ""; 

    // Function to handle dropdown selection
    function handleSelection(event: any) {
        selectedValue = event?.target?.value;
        console.log(event)
    }

</script>

<style>
    .grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }

    .input-group {
        margin-bottom: 0;
    }
</style>

<TopBar title={vModel.title} leftButton={vModel.leftButton} rightButton={vModel.rightButton}></TopBar>
<Drawer bind:this={drawer_menu}/>
<div style="height: 90px;"></div>

<!-- Dropdown -->
<!-- <details role="list">
    <summary aria-haspopup="listbox">Dropdown</summary>
    <ul role="listbox">
        <li><a href="/action">Action</a></li>
        <li><a href="/another-action">Another action</a></li>
        <li><a href="/something-else">Something else here</a></li>
    </ul>
</details> -->


<form style="margin: 25px;">
    <span style="font-size: 25px;">Output Control</span>

    <div class="grid" style="margin-top: 20px;">
        <div class="input-group">
            <select>
                <option value="" disabled selected>Select</option>
                {#each options as option}
                    <option value={option.id}>GPIO {option.label}</option>
                {/each}
            </select>
        </div>
    
    </div>
    
    <div class="grid" style="margin-top: 20px;">
        <div class="input-group">
        <label for="firstname">
            First name
            <input type="text" id="firstname" name="firstname" placeholder="First name" required>
        </label>
        </div>
    
        <div class="input-group">
        <label for="lastname">
            Last name
            <input type="text" id="lastname" name="lastname" placeholder="Last name" required>
        </label>
        </div>
    
        <div class="input-group">
        <label for="email">
            Email
            <input type="email" id="email" name="email" placeholder="Email" required>
        </label>
        </div>
    </div>

    <!-- Markup example 2: input is after label -->
    <label for="email">Email address</label>
    <input type="email" id="email" name="email" placeholder="Email address" required>
    <small>We'll never share your email with anyone else.</small>

    <!-- Button -->
    <button type="submit">Submit</button>

</form>