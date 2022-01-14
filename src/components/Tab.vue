<template lang="html">
    <div>
        <ul class="tabs-conatainer centre" >
            <li v-for="(tab, index) in tabs" :key="tab.title" @click="selectTab(index)" :class='{"tab-selected": (index == selectedIndex)}'>
                {{ tab.title }}
            </li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data () {
        return {
            selectedIndex: 0,
            tabs: []
        }
    },
    created () {
        this.tabs = this.$children
    },
    activated () {
        this.selectTab(0)
    },
    mounted () {
        this.selectTab(0)
    },
    methods: {
        selectTab (i) {
            this.selectedIndex = i
            // loop over all the tabs
            this.tabs.forEach((tab, index) => {
                tab.isActive = (index === i)
            })
        }
    }
}
</script>
<style scoped>
.tabs-conatainer{
    display: flex;
    gap: 3rem;
}
.centre{
    display: flex;
    justify-content: center;
}
li{
    color: grey;
    font-size:24px;
    cursor: pointer;
}
.tab-selected{
    color: White;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid
}
</style>