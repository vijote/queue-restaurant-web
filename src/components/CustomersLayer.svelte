<script lang="ts">
    import MovePointsGrid from "../entities/MovePointsGrid";
    import customers from "../stores/customersUI.store";
</script>

<section class="customers-layer">
    <div class="floating-container">
        <div class="floating-layer" style="z-index: 1;">
            {#each MovePointsGrid.getPointsList() as point}
                <div
                    class="move-point"
                    style={`top: ${point.y}%; left: ${point.x}%`}
                />
            {/each}
        </div>

        <div class="floating-layer" style="z-index: 2;">
            {#each $customers as customer}
                <div class="customer" style={`top: ${customer.getCurrentStep().y}%; left: ${customer.getCurrentStep().x}%; background-color:${customer.color};`} />
            {/each}
        </div>
    </div>
</section>

<style>
    .customers-layer {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    .customer {
        position: absolute;
        transform: translateY(-50%) translateX(-50%);
        height: 10%;
        width: 7.5%;
    }

    .floating-layer {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }

    .floating-container {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .move-point {
        background-color: black;
        position: absolute;
        width: 5px;
        height: 5px;
    }
</style>
