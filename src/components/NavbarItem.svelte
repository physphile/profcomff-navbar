<script lang="ts">
    import { navigateToUrl } from 'single-spa';
    import { MaterialSymbol } from 'svelte-material-symbols';
    import { NavbarItem } from '../types';

    export let navbarItem: NavbarItem;
    export let active: boolean;

    const { title, icon, path } = navbarItem;
</script>

<template>
    <button
        class="navbar-item"
        class:active
        on:click={() => {
            navigateToUrl(path);
        }}
    >
        <MaterialSymbol
            name={icon}
            type={'outlined'}
        />
        {title}
    </button>
</template>

<style>
    .navbar-item {
        flex: 1;
        color: var(--text-color-primary);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2px;
        border-bottom: 2px solid transparent;
    }

    .navbar-item:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    .active {
        background: rgba(255, 255, 255, 0.1);
        color: var(--color-secondary);
        border-bottom: 2px solid var(--color-secondary);
    }
</style>
