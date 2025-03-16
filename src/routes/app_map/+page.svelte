<script>
    import { onMount } from 'svelte';
    import '@picocss/pico';
</script>

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