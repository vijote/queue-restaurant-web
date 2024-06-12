<script lang="ts">
    import Customer from "../entities/Customer";
    import Product from "../entities/Product";
    import { addCustomer } from "../stores/customers.store";
    import { addCustomerUI } from "../stores/customersUI.store";
    import { goToCheckout, goToShopping } from "../stores/selectedArea.store";

    function spawnCustomer() {
        const newCustomer = Customer.new(Product.Tomato());
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
