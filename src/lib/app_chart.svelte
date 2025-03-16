<script lang="ts">
    import { onMount } from 'svelte';
    import uPlot from 'uplot';
    import 'uplot/dist/uPlot.min.css'; // Import uPlot's CSS

    export let title = "Chart Title"

    let chartContainer: HTMLElement;
    let chart: uPlot;

    // Sample data
    const data = [
        new Int16Array([1, 2, 3, 4, 5]), // X values (timestamps or categories)
        new Int16Array([10, 20, 30, 40, 50]), // Y values (series 1)
        new Int16Array([15, 25, 35, 45, 55]), // Y values (series 2)
    ];

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

    // Initialize the chart when the component mounts
    onMount(() => {
        const initChart = () => {
            if (chartContainer) {
                const containerWidth = chartContainer.offsetWidth
                options.width = containerWidth; // Set width dynamically

                if (chart) {
                    chart.destroy(); // Destroy existing chart if it exists
                }

                chart = new uPlot(options, data, chartContainer)
            }
        };

        // Initialize the chart on mount
        initChart()

        // Handle window resize
        const resizeObserver = new ResizeObserver(initChart)
        resizeObserver.observe(chartContainer);

        // Clean up the chart when the component is destroyed
        return () => chart.destroy()
    });
</script>

<style>
    .chart {
        width: 100%;
        height: 400px;
    }
</style>

<div bind:this={chartContainer} class="chart" style="width: 100%;"></div>