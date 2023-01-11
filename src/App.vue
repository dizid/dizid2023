<template>
 <header>  
   <p>Dizid Homepage</p>
 </header>

       <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/apps">Apps</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
 <main>
  <RouterView />
</main>
<footer>
  <p>© 2023 Dizid. All rights reserved.</p>
</footer>
</template>

<style>

</style>

