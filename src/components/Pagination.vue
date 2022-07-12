<template>
    <nav class="pagination">
        <span class="page-stats">{{pagination.from}} - {{pagination.to}} of {{pagination.total}} | </span>
        <a v-if="pagination.prevPage" @click="$emit('prev')" class="button is-small pagination-previous">
            Prev
        </a>
        <a class="button is-small pagination-previous" v-else disabled>
            Prev
        </a>

        <a v-if="pagination.nextPage" @click="$emit('next')" class="button is-small pagination-next">
            Next
        </a>
        <a class="button is-small pagination-next" v-else disabled>
            Next
        </a>
    </nav>
</template>

<script>
    export default {
        name: "Pagination",
        props: ['pagination'],
    }
</script>

<style lang="scss" scoped>
    nav.pagination {
        text-align: center;
        margin: 2rem 0;
        font-size: 1.4rem;
        a {
            cursor: pointer;
            display: inline-block;
            padding: .1rem .8rem;
            background-color: black;
            color: #fff;
            margin: 0 .5rem;
            &:hover {
                background-color: rgb(22, 21, 21);
                transition: 300ms ease-in;
            }
        }
    }
</style>