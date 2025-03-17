<script lang="ts">
    import '@picocss/pico';
    import { goto } from '$app/navigation'
    
    let isMenuOpen = false

    export function toggleMenu(event: any) { 
        let target = (event as PointerEvent)?.target as any
        isMenuOpen = !isMenuOpen // Toggle the modal state

        switch (target?.innerText) {
            case 'Link1': {
                goto('/'); break;
            }
            case 'Link2': {
                goto('/app_map'); break;
            }
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