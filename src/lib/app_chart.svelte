<script lang="ts">
    import { onMount } from 'svelte';
    import uPlot from 'uplot';
    import 'uplot/dist/uPlot.min.css'; // Import uPlot's CSS
    import { CircularBuffer } from './CircularBuffer'; // Import the CircularBuffer class

    export let title = "Chart Title";

    let chartContainer: HTMLElement;
    let chart: uPlot;

    // Initialize circular buffers for X and Y data
    const bufferSize = 50;
    const initialXValues = Array.from({ length: bufferSize }, (_, i) => i + 1);
    const initialY1Values = Array.from({ length: bufferSize }, () => Math.floor(Math.random() * 100));
    const initialY2Values = Array.from({ length: bufferSize }, () => Math.floor(Math.random() * 100));

    let xBuffer = new CircularBuffer(bufferSize, initialXValues);
    let y1Buffer = new CircularBuffer(bufferSize, initialY1Values);
    let y2Buffer = new CircularBuffer(bufferSize, initialY2Values);

    // Function to generate a new random data point
    const generateRandomPoint = () => Math.floor(Math.random() * 100);

    // Function to update the circular buffers and chart data
    const updateData = () => {
        // Add new X value (increment the last X value by 1)
        const lastX = xBuffer.toArray()[xBuffer.toArray().length - 1] || 0;
        xBuffer.push(lastX + 1);

        // Add new Y values
        y1Buffer.push(generateRandomPoint());
        y2Buffer.push(generateRandomPoint());

        // Update the chart data
        chart?.setData([
            xBuffer.toArray(),
            y1Buffer.toArray(),
            y2Buffer.toArray(),
        ]);
    };

    // Initialize the chart when the component mounts
    onMount(() => {
            // Chart options
        const options = {
            title: title,
            width: 600,
            height: 400,
            axes: [
                {
                    stroke: '#63739c',
                    grid: {
                        stroke: '#63739c'
                    },
                    ticks: {
                        stroke: '#63739c'
                    }
                },
                {
                    stroke: '#63739c',
                    grid: {
                        stroke: '#63739c',
                    },
                    ticks: {
                        stroke: '#63739c',
                    },
                }
            ],
            series: [
                { label: 'X Axis' }, // X-axis
                { label: 'Series 1', stroke: 'red' }, // Series 1
                { label: 'Series 2', stroke: 'blue' }, // Series 2
            ],
        };

        const initChart = () => {
            if (chartContainer) {
                const containerWidth = chartContainer.offsetWidth;
                options.width = containerWidth; // Set width dynamically

                chart?.destroy(); // Destroy existing chart if it exists
                chart = new uPlot(options, [
                    xBuffer.toArray(),
                    y1Buffer.toArray(),
                    y2Buffer.toArray(),
                ], chartContainer);

                updateData();
            }
        };

        // Initialize the chart on mount
        initChart();

        // Handle window resize
        const resizeObserver = new ResizeObserver(initChart);
        resizeObserver.observe(chartContainer);

        // Update chart data every second
        const interval = setInterval(() => {
            updateData()
        }, 150);

        // Clean up the chart and interval when the component is destroyed
        return () => {
            clearInterval(interval);
            chart?.destroy();
        };
    });
</script>

<style>
    .chart {
        width: 100%;
        height: 400px;
    }
</style>

<div bind:this={chartContainer} class="chart" style="width: 100%;"></div>