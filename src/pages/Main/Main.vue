<template>
    <div class="main">
        <Converter></Converter>
        <ChartList></ChartList>
    </div>
</template>

<script>
import Converter from "@/components/Converter/Converter";
import ChartList from "@/components/ChartList/ChartList";
export default {
    name: "Main",
    components: {Converter, ChartList}
}
</script>

<style scoped>
    .main {
        min-height: 800px;
    }
</style>