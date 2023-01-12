<template>
 <header>  
   <p>Dizid Homepage</p>
 </header>

       <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/apps">Projects</RouterLink>
        <RouterLink to="/about">&#10084;</RouterLink>
      </nav>
 <main>
  <RouterView />
</main>
<footer>
  <nav>
<a href="https://www.linkedin.com/in/dizid/" class="fa fa-linkedin"></a>
<a href="https://twitter.com/dizid" class="fa fa-twitter"></a>
<a href="https://github.com/dizid" class="fa fa-github"></a>
<a href="https://dev.to/dizid" class="fa fa-code"></a>
<a href="https://www.instagram.com/dizidpepper" class="fa fa-instagram"></a>
<a href="https://g.dev/dizid" class="fa fa-google"></a>
</nav>
</footer>
</template>

<style>

</style>

