<template>
    <header class="header">
        <nav class="nav">
            <router-link to="/" class="link">Main page</router-link>
            <router-link to="/signup" class="link">Signup</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent",
};
</script>

<style scoped>
.header {
    width: 100%;
    height: 15%;
    background-color: rgb(31, 163, 163);
    padding-bottom: 15px;
    padding-top: 15px;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
}
.nav {
    display: flex;
    gap: 20px;
}
.link {
    color: black;
    position: relative;
    text-decoration: none;
    font-size: medium;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
}
.link::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0;
    height: 2px;
    background-color: black;
    transition: width 0.25s ease-in-out;
}
.link:hover::after{
    width: 100%;
}

</style>