<script lang="ts">
    import '@picocss/pico';
    import menuIcon from '../assets/icons/menu-icon.svg'
    import userIcon from '../assets/icons/user-icon.svg'
    import { goto } from '$app/navigation'

    let isModalOpen = false
    let isMenuOpen = false

    export function toggleMenu(event: any) { 
        let target = (event as PointerEvent).target as any
        isMenuOpen = !isMenuOpen // Toggle the modal state

        if (target.innerText == 'Link1') {
            goto('/app_map')
        }
    }

    function toggleModal(event: any) {
        let target = (event as PointerEvent).target as any
        isModalOpen = !isModalOpen; // Toggle the modal state

        console.log("IM HERE111")

        if (target.id == 'confirm-button') {
            console.log("IM HERE")
        }
    }
</script>

<style>
    .full-width {
        width: 100%; /* Full width of the container */
    }
</style>

<!-- Modal -->
{#if isMenuOpen}
    <div id="menu-modal" class="menu-dialog" style="position: fixed; top: 0; width: 30%; padding: 30px;
                            height: 100%; background-color: white; box-sizing: border-box;">
        <aside>
            <nav>
                <ul>
                    <li><button class="secondary full-width" on:click={toggleMenu}>Link1</button></li>
                    <li><button class="secondary full-width" on:click={toggleMenu}>Link2</button></li>
                    <li><button class="secondary full-width" on:click={toggleMenu}>Link3</button></li>
                </ul>
            </nav>
        </aside>
    </div>
{/if}