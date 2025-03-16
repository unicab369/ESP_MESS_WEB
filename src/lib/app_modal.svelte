<script lang="ts">
    import { onMount } from 'svelte';
    import Drawer from '../lib/app_menu.svelte'
    
    export let menu: Drawer | undefined

    let isModalOpen = false

    export function toggleModal(event: any) {
        let target = (event as PointerEvent).target as any
        isModalOpen = !isModalOpen; // Toggle the modal state

        console.log("IM HERE111")

        if (target.id == 'confirm-button') {
            console.log("IM HERE")
        }
    }

</script>

<!-- Modal -->
<dialog id="modal-example" open={isModalOpen}>
    <article>
        <a href="#close"
            aria-label="Close" class="close" data-target="modal-example"
            on:click={toggleModal}>
        </a>
        <h3>Confirm your action!</h3>
        <p>
            Cras sit amet maximus risus. 
            Pellentesque sodales odio sit amet augue finibus pellentesque. 
            Nullam finibus risus non semper euismod.
        </p>
        <footer>
        <a href="#cancel" id='cancel-button'
            role="button" class="secondary" data-target="modal-example"
            on:click={toggleModal}>
            Cancel
        </a>
        <a href="#confirm" id='confirm-button'
            role="button" data-target="modal-example"
            on:click={toggleModal}>
            Confirm
        </a>
        </footer>
    </article>
</dialog>