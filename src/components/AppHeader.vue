<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <div class="header-top">
            <div class="container">
                <div class="row">
                    <div class="col-grow main-nav">
                        <ul>
                            <li class="nav-item">
                                <router-link class="nav-link link-dark" :to="{name: 'uomo'}">Uomo</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link link-dark" :to="{name: 'donna'}">Donna</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link link-dark" :to="{name: 'bambini'}">Bambini</router-link>
                            </li>
                        </ul>
                    </div>
                    <nav class="col-30">
                        <div class="logo">
                            <h1>&-Commerce</h1>
                        </div>
                    </nav>
                    <div class="col-15 awesome">
                        <i class="fa fa-user"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-cart-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container{
    max-width: 900px;
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 10px;
}
.container-fluid {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-right: -10px;
}

.row > * {
    padding: 0 10px;
}

.col-30{
    width: 30%;
}
.col-15{
    width: 15%;
}

.col-33 {
    width: calc(100% / 3);
}

.col-100 {
    width: 100%;
}
.col-grow {
    flex-grow: 1;
}

/*header*/
.header-top{
    background-color: #ff7b00;
    .row{
        padding: 16px 0;
        line-height: 40px;
    }
}

.logo{
    font-size: 20px;
    color: white;
}

.main-nav{
    ul {
        display: flex;
        list-style: none;
        gap: 8px;
    }
    li {
        padding: 0 4px;
        a{
            text-decoration: none;
            color: #ffffff;
            font-size: 18px;
        }
        a:hover{
            border-bottom: 2px solid white;
        }
    }
}

header{
    .logo{
        flex-grow: 1;
    }
}

.header-top{
    .awesome {
        text-align: right;
        color: #ffffff;
        justify-content: flex-end;
        i{
            padding-left: 15px;
            font-size: 18px;
        }
        
    }
}



</style>