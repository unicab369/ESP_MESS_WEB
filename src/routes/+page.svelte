<script lang="ts">
    import { onMount } from 'svelte';
    import Chart from '../lib/app_chart.svelte'
    import Drawer from '../lib/app_menu.svelte'
    import TopBar from '../lib/app_topbar.svelte'
    import Popup from '../lib/app_modal.svelte'
    
    import '@picocss/pico';
    import menuIcon from '../assets/icons/menu-icon.svg'
    import userIcon from '../assets/icons/user-icon.svg'
	import { goto } from '$app/navigation'

    let drawer_menu: Drawer
    let chart: Chart
    let popup: Popup

    let webSocket: WebSocket | undefined = undefined
    let receivedMessages: string[] = []
    let response = '';

    let isConnected = false; // Tracks connection status

    let vModel:any = {
        title: 'ESP-MESS V2.0',
        leftButton: {
            icon: menuIcon,
            action: ()=> {
                drawer_menu?.toggleMenu(null)
            }
        },
        rightButton: {
            icon: userIcon,
            action: ()=> {

            }
        }
    }

    // Initialize WebSocket connection
    function connectWebSocket() {
        // webSocket = new WebSocket('ws://10.0.0.52:3333');

        // webSocket.onopen = () => {
        //     console.log('WebSocket connection established');
        //     isConnected = true;
        // };

        // webSocket.onmessage = (event) => {
        //     response = event.data; // Update the response variable
        //     console.log('Received:', event.data);
        // };

        // webSocket.onerror = (error) => {
        //     console.error('WebSocket error:', error);
        //     isConnected = false;
        // };

        // webSocket.onclose = () => {
        //     console.log('WebSocket connection closed');
        //     isConnected = false;

        //     // // Attempt to reconnect after a delay
        //     // setTimeout(() => {
        //     //     console.log('Reconnecting...');
        //     //     connectWebSocket();
        //     // }, 3000); // Reconnect after 3 seconds
        // }

        // Update chart data every second
        const interval = setInterval(() => {
            sendPostRequest()
        }, 200);
    }

    onMount(connectWebSocket)

    // Send a message to the WebSocket server
    function sendMessage() {
        if (webSocket && webSocket.readyState === WebSocket.OPEN) {
            webSocket.send('HELO FROM SVELTE'); // Send the message
        } else {
            console.error('WebSocket is not connected');
        }
    }

    async function sendPostRequest() {
        const data = `name=aaaa&value=bbbb`;

        try {
            const res = await fetch("http://10.0.0.52/device", {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain" // Plain text content type
                },
                body: data // Send the constructed string
            });

            const result = await res.text(); // Read the response as text
            const jsonResp = JSON.parse(result); // Parse the JSON string

            if (jsonResp.data && jsonResp.len) {
                chart.updateData(jsonResp.data, jsonResp.len)
            }
            // console.log(jsonResp);
        } catch (error) {
            response = "Error: " + (error as Error).message;
            console.log(response)
        }
    }

</script>

<style>


</style>

<!-- <main class="container"> -->
<TopBar title={vModel.title} leftButton={vModel.leftButton} rightButton={vModel.rightButton}></TopBar>
<Drawer bind:this={drawer_menu}/>

<main style="margin: 25px;">
    <div style="height: 90px;"></div>
    <button on:click={popup.toggleModal}>Click me</button>
    
    <button on:click={sendMessage}>Click me</button>

    <button on:click={sendPostRequest}>Click me</button>

    <p>Connection status: {isConnected ? 'Connected' : 'Disconnected'}</p>

    <fieldset>
        <legend>Language preferences:</legend>
        <label>
            <input type="checkbox" name="english" checked />
            English
        </label>
        <label>
            <input type="checkbox" name="french" checked />
            French
        </label>
        <label>
            <input type="checkbox" name="mandarin" />
            Mandarin
        </label>
        <label>
            <input type="checkbox" name="thai" />
            Thai
        </label>
        <label aria-disabled="true">
            <input type="checkbox" name="dothraki" disabled />
            Dothraki
        </label>
    </fieldset>
    
    <Chart bind:this={chart} title="My Sensor Data"/>    
</main>

<Popup menu={drawer_menu} bind:this={popup}></Popup>
