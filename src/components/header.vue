<template>
<div>
  <header class="pb-6">
    <div class="bg-zhili">
      <div class="text-white container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center mb-4 md:mb-0">
          <span class="ml-3 text-xl">执理教育</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center sm:mr-10">
          <router-link class="mr-5 hover:text-gray-300" to="/">官网主页</router-link>
          <router-link class="hover:text-gray-300" to="/course">执理课程</router-link>
          <!--
          <a class="mr-5 hover:text-gray-300">执理平台</a>
          <a class="hover:text-gray-300">合作方式</a>
          -->
        </nav>
      </div>
    </div>
  </header>
</div>
</template>

<script>
export default {
  name: "header"
}
</script>