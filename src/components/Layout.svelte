<script lang="ts">
    import selectedArea from "../stores/selectedArea.store";
    import { Areas } from "../lib/types";
    import AreaSwitch from "./AreaSwitch.svelte";
    import CheckoutArea from "./CheckoutArea.svelte";
    import CustomersLayer from "./CustomersLayer.svelte";
    import ExteriorArea from "./ExteriorArea.svelte";
    import ShoppingArea from "./ShoppingArea.svelte";

    const areaDictionary = {
        [Areas.Shopping]: ShoppingArea,
        [Areas.Checkout]: CheckoutArea,
        [Areas.Exterior]: ExteriorArea,
    };

    let currentArea: Areas;

    selectedArea.subscribe((value) => {
        currentArea = value;
    });
</script>

<main class="main-container">
    <AreaSwitch />

    <svelte:component this={areaDictionary[currentArea]}>
        <CustomersLayer />
    </svelte:component>
</main>

<style>
    :global(*) {
        box-sizing: border-box;
    }

    :global(html) {
        height: 100%;
    }

    :global(body) {
        background-color: rgb(232, 203, 218);
        margin: 0;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .main-container {
        padding-top: 0.5rem;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    :global(#app) {
        height: 100%;
    }
</style>
