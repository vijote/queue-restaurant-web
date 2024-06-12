<section class="shopping-area-container">
    <div class="shelf">
        <article class="product"/>
        <article class="product"/>
        <article class="product"/>
    </div>
    <div class="shelf">
        <article class="product"/>
        <article class="product"/>
        <article class="product"/>
    </div>
    <div class="shelf">
        <article class="product"/>
        <article class="product"/>
        <article class="product"/>
    </div>

    <!-- Slot for the customers layer -->
    <slot/>
</section>

<style>
    .shopping-area-container {
        background-color: rgb(229, 255, 252);
        flex: 1;
        display: flex;
        margin: 0;
        padding: 10%;
        justify-content: space-between;
        position: relative;
    }

    .shelf {
        height: 100%;
        background-color: rgb(11, 24, 47);
        width: 15%;
        display: flex;
        flex-direction: column;
        row-gap: 5%;
        align-items: flex-end;
        padding: 3% 0;
    }

    .product {
        background-color: brown;
        height: 30%;
        width: 70%;
    }
</style>