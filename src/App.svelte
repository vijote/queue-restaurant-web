<script lang="ts">
  import Layout from "./components/Layout.svelte";
  import type Customer from "./entities/Customer";
    import MovePointsGrid from "./entities/MovePointsGrid";
  import { onInterval } from "./lib/onInterval";
  import customers from "./stores/customers.store";
  import { updateCustomersUI } from "./stores/customersUI.store";

  let currentCustomers: Customer[];
  customers.subscribe((value) => {
    currentCustomers = value;
  });

  const updateCustomers = () => {
    console.log("new render!");

    // currentCustomers.forEach((customer) => {
    //   customer.goToNextStep();
    // });

    MovePointsGrid.getPointsList().forEach(point => {
      point.receiveNextCustomer()
    })

    updateCustomersUI(currentCustomers);
  }

  onInterval(updateCustomers, 1000);
</script>

<Layout />
