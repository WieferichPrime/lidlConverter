<template>
    <header>
        <div class="container">
            <nav>
                <router-link to="/profile">
                    <span>
                        Profile
                    <i class="far fa-user"></i>
                    </span>
                </router-link>
                <router-link to="/">
                    <span>
                         Converter
                        <i class="fas fa-exchange-alt"></i>
                    </span>
                </router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    header {
        padding: 10px;
        background-color: #0476D9;
    }
    nav {
        display: flex;
        justify-content: flex-end;

    }
    span {
        margin-left: 20px;
        font-size: 36px;
        color: rgba(255,255,255,0.8);
    }
    span:hover {
        color: #fff;
    }
</style>