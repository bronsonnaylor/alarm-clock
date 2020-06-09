<template>
    <div>
        <button @click="$emit('snooze')" class="snooze" type="button">Snooze</button>
    </div>
</template>

<script>
export default {
    name: 'Digit',
    methods: {
        
    }
}
</script>

<style>
    .snooze {
        padding: 0.5em 1em;
        background-color: #D1D3D4;
        color: #404040;
        font-size: 3em;
        font-family: 'Fredoka One', cursive;
        text-outline: 3px black;
        border-radius: 2em;
    }
</style>