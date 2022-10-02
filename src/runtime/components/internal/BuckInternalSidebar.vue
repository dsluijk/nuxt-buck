<template>
    <aside>
        <h1>Hello Admin!</h1>
        <div class="content">
            <p class="notselected">To Do.</p>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
aside {
    position: fixed;
    top: 0;
    right: 0;
    width: 400px;
    height: 100%;
    box-sizing: border-box;
    background: #f9f7f3;
    border-left: 4px solid #f7a072;
    transition: right 0.8s;

    & > .content {
        display: flex;
        padding: 0 8px;
    }
}

h1 {
    padding: 12px 8px;
    background: #f7a072;
    color: #f9f7f3;
    font-size: 1.4em;
}

.notselected {
    width: 100%;
    text-align: center;
    font-size: 0.9em;
    font-style: italic;
}
</style>
