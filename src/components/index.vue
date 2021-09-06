<template>
  <div class="">
    <header class="relative h-screen">
      <div class="bg-zhili">
        <div class="text-white container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center mb-4 md:mb-0">
            <span class="ml-3 text-xl">执理</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center sm:mr-10">
            <a class="mr-5 hover:text-gray-300">执理课程</a>
            <a class="mr-5 hover:text-gray-300">执理平台</a>
            <a class="hover:text-gray-300">合作方式</a>
          </nav>
        </div>
      </div>
      <hr>
      <div class="relative mx-3 sm:mx-auto sm:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl">
        <div class="py-10">
          <img class="w-auto h-20 items-center" src="icon.svg"/>
        </div>
        <h1 class="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
          让每个人能平等地享受高质量的计算机教育。
        </h1>
        <p class="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">
          执着理想，共创计算机教育新未来。
        </p>
        <a href="#zhili" class="w-full sm:w-auto flex-none bg-zhili hover:bg-blue-500 text-white text-sm lg:text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200">
          了解我们
        </a>
      </div>
    </header>
    <div class="relative mx-3 sm:mx-auto sm:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl">
      <section class="h-screen" id="zhili">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-purple-600 mb-8">
          <font-awesome-icon icon="address-book" size="2x" style="color: white;"/>
        </div>
        <h2 class="mb-2 sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-purple-600">
          执着，理想
        </h2>
        <h1 class="text-3xl lg:text-5xl leading-3 font-bold mb-8">
          永远热情
        </h1>
        <p class="text-gray-500 max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6">
          执理是一家专注于计算机教育的新时代创业公司，我们致力于磨平计算机教育资源中的不平等，让每个人都能平等地接受高质量的计算机教育。
          <br>
          我们拥有成熟的教学研发团队与经验丰富的一线教师，我们将全部资源投入到优质的计算机教育课程开发中，并且在落地项目中取得了优异的成绩。
        </p>

        <div class="relative py-3 sm:max-h-xl sm:mx-auto">
          <div class="relative grid grid-rows-3 grid-flow-row sm:grid-flow-col gap-4 ">
            <div class="row-span-3 relative flex flex-col justify-center ">
              <div class="absolute inset-0 bg-blue-500 shadow-2xl transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div class="relative m-4 px-4 py-10 bg-white shadow-lg rounded-3xl">
                <h1 class="text-3xl font-bold"> 您的焦虑： </h1>
                <ul>
                  <li><font-awesome-icon icon="times" size="2x" style="color: red; "/>老师不会教学。</li>
                  <li><font-awesome-icon icon="times" size="2x" style="color: red;"/>没有教学资源。</li>
                  <li><font-awesome-icon icon="times" size="2x" style="color: red;"/>没有课程体系。</li>
                  <li><font-awesome-icon icon="times" size="2x" style="color: red;"/>课程质量不高。</li>
                </ul>
              </div>
            </div>
            <div class="col-span-2 bg-pink-400">执理能帮你解决：</div>
            <div class="row-span-2 col-span-2 bg-pink-400">3</div>
          </div>
          <!--
          <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <p>An advanced online playground for Tailwind CSS, including support for things like:</p>
                  <ul class="list-disc space-y-2">
                    <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                      <p class="ml-2">
                        Customizing your
                        <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file
                      </p>
                    </li>
                    <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                      <p class="ml-2">
                        Extracting classes with
                        <code class="text-sm font-bold text-gray-900">@apply</code>
                      </p>
                    </li>
                    <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                      <p class="ml-2">Code completion with instant preview</p>
                    </li>
                  </ul>
                  <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
                </div>
                <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <p>Want to dig deeper into Tailwind?</p>
                  <p>
                    <a href="https://tailwindcss.com/docs" class="text-cyan-600 hover:text-cyan-700"> Read the docs &rarr; </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          -->
        </div>

      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>