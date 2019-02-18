<template>
    <div>
       <MzBanner></MzBanner>
       <MzTabs></MzTabs>
       <MzFooter></MzFooter>
    </div>
</template>

<script>
import MzBanner from '../components/MzBanner';
import MzTabs from '../components/MzTabs';
import MzFooter from '../components/MzFooter';
export default {
    components: {
        MzBanner,
        MzFooter,
        MzTabs
    }
}
</script>
