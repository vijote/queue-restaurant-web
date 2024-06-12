<script lang="ts">
    import MovePointsGrid from "../entities/MovePointsGrid";
    import { addCustomer, removeCustomer } from "../stores/customers.store";
    import { addCustomerUI } from "../stores/customersUI.store";
    import { goToCheckout, goToShopping } from "../stores/selectedArea.store";

    function spawnCustomer() {
        const newCustomer = MovePointsGrid.spawnCustomer(removeCustomer);
        addCustomer(newCustomer);
        addCustomerUI(newCustomer);
    }
</script>

<section class="area-buttons-container">
    <button class="area-button" on:click={goToShopping}>Shopping</button>
    <button class="area-button" on:click={goToCheckout}>Checkout</button>
    <button on:click={spawnCustomer}>Spawn customer</button>
</section>

<style>
    .area-buttons-container {
        display: flex;
        column-gap: 0.5rem;
        justify-content: center;
        margin-bottom: 0.5rem;
    }

    .area-button {
        all: unset;
        cursor: pointer;
        background-color: blanchedalmond;
        padding: 1rem;
    }
</style>
