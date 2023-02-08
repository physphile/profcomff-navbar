<script lang="ts">
    import { NavbarItem as TNavbarItem, SingleSpaEvent, SingleSpaEventName } from './types';
    import { NavbarItem } from './components';
    import { msApps, msCalendarMonth } from 'google-icon-names';
    import { onDestroy, onMount } from 'svelte';

    let pathname = window.location.pathname;

    const navbarItems: TNavbarItem[] = [
        { title: 'Расписание', icon: msCalendarMonth, path: '/timetable' },
        { title: 'Сервисы', icon: msApps, path: '/apps' },
    ];

    const beforeMountRoutingHandler = () => {
        pathname = window.location.pathname;
    };

    onMount(() => {
        window.addEventListener(SingleSpaEventName.BeforeMountRouting, beforeMountRoutingHandler);
    });
    onDestroy(() => {
        window.removeEventListener(SingleSpaEventName.BeforeMountRouting, beforeMountRoutingHandler);
    });
</script>

<div class="navbar">
    {#each navbarItems as navbarItem, i}
        <NavbarItem
            {navbarItem}
            active={pathname === navbarItem.path}
        />
    {/each}
</div>

<style>
    .navbar {
        background: var(--color-primary);
        height: var(--navbar-height);
        display: flex;
    }
</style>
