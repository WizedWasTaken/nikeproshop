<template>
    <div id="hamburgerMenu">
        <router-link to="/">Forside</router-link>
        <router-link to="/history">Historien om nike</router-link>
    <router-link to="/about">Om nike pro shop</router-link>
    <router-link to="/contact">kontakt os</router-link>
    </div>
</template>

<style lang="scss">
$background-color: #ffa500;

#hamburgerMenu {
    background-color: $background-color;
    height: calc(93vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 2rem;

    a {
        margin: 0;
        text-transform: uppercase;
        padding: 0.7rem 0px;
        color: white;
        text-decoration: none;
    }
}
</style>