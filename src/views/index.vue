<template>
  <div >
    <section class="h-full min-h-screen" id="head">
      <div class="mx-auto sm:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl">
        <div class="py-4">
          <img class="w-auto h-20 items-center" src="icon.svg"/>
        </div>
        <h1 class="text-4xl sm:text-6xl lg:text-7xl text-left leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
          让每个人能平等地享受高质量的计算机教育。
        </h1>
        <p class="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">
          执着理想，共创计算机教育新未来。
        </p>
        <div class="h-auto">
          <a href="#zhili" class="py-3 px-6 bg-zhili text-white text-sm lg:text-lg font-semibold border border-transparent rounded-xl">
            了解我们
          </a>
        </div>
      </div>
    </section>
    <section class="h-full min-h-screen" id="zhili">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-green-600 mb-8">
        <font-awesome-icon icon="address-book" size="2x" style="color: white;"/>
      </div>
      <h2 class="mb-2 sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-green-600">
        「执着，理想」
      </h2>
      <h1 class="text-3xl lg:text-5xl font-bold mb-8">
        永远热情
      </h1>
      <p class="text-gray-500 max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6">
        执理是一家专注于计算机教育的新时代创业公司，我们致力于磨平计算机教育资源中的不平等，让每个人都能平等地接受高质量的计算机教育。
        <br>
        我们拥有成熟的教学研发团队与经验丰富的一线教师，我们将全部资源投入到优质的计算机教育课程开发中，并且在落地项目中取得了优异的成绩。
      </p>

      <div class="py-3">
        <div class="grid sm:grid-flow-col gap-4">

          <div class="">
            <div class="relative h-full bg-gray-200 rounded-3xl">
              <h1 class="p-4 text-2xl sm:text-3xl text-center font-bold text-black"> 您的焦虑： </h1>
              <div class="p-4 grid grid-flow-col grid-rows-4 grid-cols-1 sm:gap-4">
                <div class="bg-white m-2 sm:text-2xl text-center font-semisolid">
                  <font-awesome-icon icon="times" style="color: red; "/>老师不会教学
                </div>
                <div class="bg-white m-2 sm:text-2xl text-center font-semisolid">
                  <font-awesome-icon icon="times" style="color: red;"/>没有教学资源
                </div>
                <div class="bg-white m-2 sm:text-2xl text-center font-semisolid">
                  <font-awesome-icon icon="times" style="color: red;"/>没有课程体系
                </div>
                <div class="bg-white m-2 sm:text-2xl text-center font-semisolid">
                  <font-awesome-icon icon="times" style="color: red;"/>课程质量不高
                </div>
              </div>
            </div>
          </div>

          <div class="sm:col-span-2">
            <div class="bg-gradient-to-tr from-green-500 to-green-600 relative shadow-lg rounded-3xl">
              <h1 class="p-4 text-2xl sm:text-3xl align-middle font-bold text-white"> 执理帮您解决： </h1>
              <div class="p-4 grid grid-flow-col grid-rows-4 grid-cols-1 gap-4">
                <div class="bg-white p-2 rounded-xl shadow-md sm:text-2xl font-semibold">
                  <font-awesome-icon icon="check-square" style="color: green; "/>&nbsp;执理拥有一线的专业教师
                </div>
                <div class="bg-white p-2 rounded-xl shadow-md sm:text-2xl font-semibold">
                  <font-awesome-icon icon="check-square" style="color: green;"/>&nbsp;执理积累了大量的教学资源
                </div>
                <div class="bg-white p-2 rounded-xl shadow-md sm:text-2xl font-semibold">
                  <font-awesome-icon icon="check-square" style="color: green;"/>&nbsp;执理根据名师积累的经验，开发出了一套成熟课程体系
                </div>
                <div class="bg-white p-2 rounded-xl shadow-md sm:text-2xl font-semibold">
                  <font-awesome-icon icon="check-square" style="color: green;"/>&nbsp;执理名师&nbsp;+&nbsp;执理资源&nbsp;+&nbsp;执理课程体系&nbsp;=&nbsp;完美的教学效果
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="h-full" id="FKIR">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-pink-600 mb-8">
        <font-awesome-icon icon="graduation-cap" size="2x" style="color: white;"/>
      </div>
      <h2 class="mb-2 sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-pink-600">
        「专业，亲和」
      </h2>
      <h1 class="text-3xl lg:text-5xl font-bold mb-8">
        原来这个知识点，没那么难啊！！！
      </h1>
      <p class="text-gray-500 max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6">
        执理一直在思考，究竟怎么样的一节课，才能被称作"一节优质的课程"。
        <br>
        结合执理教研组多年线下教学经验，我们认为一节好的课程应该充满了知识性，让学生感到满足，能引起学生的兴趣，并且有合理的节奏把内容组织起来。
        <br>
        我们将其总结为"FKIR理论"。
      </p>

      <router-link to="/course" class="py-3 px-6 bg-pink-600 text-white text-sm lg:text-lg font-semibold border border-transparent rounded-xl">
        了解执理课程
      </router-link>

      <div class="min-h-full flex flex-col justify-center py-6">
        <div class="relative py-3 sm:max-w-full sm:mx-auto">
          <div class="absolute inset-0 shadow-xl bg-gradient-to-l from-gray-300 to-gray-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div class="absolute inset-0 shadow-xl bg-gradient-to-l from-blue-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-3 sm:rounded-3xl"></div>
          <div class="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 m-8 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-xl" id="F">
              <h1 class="text-black text-center font-extrabold text-2xl md:text-4xl pb-3">Fulfillment</h1>
              <h2 class="text-gray-700 text-center font-bold text-xl md:text-3xl pb-2">成就感</h2>
              <p>
                一堂课程应该能让学生感受到自己学到了东西，自己攻克了难关。有了满满的成就感，自然而然会有往下继续学习的动力。
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-xl" id="K">
              <h1 class="text-black text-center font-extrabold text-2xl md:text-4xl pb-3">Knowledge</h1>
              <h2 class="text-gray-700 text-center font-bold text-xl md:text-3xl pb-2">知识性</h2>
              <p>
                一堂课程有着充足的知识量，老师在上课的过程中有内容进行更深一步的讲解，学生能感受到课程的实在，教学就会更好的开展下去。
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-xl" id="I">
              <h1 class="text-black text-center font-extrabold text-2xl md:text-4xl pb-3">Interest</h1>
              <h2 class="text-gray-700 text-center font-bold text-xl md:text-3xl pb-2">趣味性</h2>
              <p>
                一堂课程的内容不应该是乏味枯燥的，应该是生动活泼的、引人入胜的。所以要从描述下手，要从事例下手。学生才会愿意听。
              </p>

            </div>

            <div class="bg-white p-6 rounded-lg shadow-xl" id="R">
              <h1 class="text-black text-center font-extrabold text-2xl md:text-4xl pb-3">Rhythm</h1>
              <h2 class="text-gray-700 text-center font-bold text-xl md:text-3xl pb-2">节奏感</h2>
              <p>
                一堂课程的内容编排应该是循序渐进，内容的分布应该是均匀。课程有了合理的节奏，学生才能在整堂课中跟紧老师。
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>

    <section class="h-full min-h-screen sm:pt-10" id="team">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-500 mb-8">
        <font-awesome-icon icon="users" size="2x" style="color: white;"/>
      </div>
      <h2 class="mb-2 sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-black">
        「年轻，活力」
      </h2>
      <h1 class="text-3xl lg:text-5xl font-bold mb-8">
        执理的团队
      </h1>
      <p class="text-gray-500 max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6">
        执理团队的成员全部是各类算法竞赛的参与者，有了丰富的参赛经验，我们更能设计出优质的对口课程。
      </p>
      <h2 class="text-xl lg:text-3xl font-bold mb-3 text-blue-500">
        1.执理主创人员
      </h2>
      <div class="grid w-full grid-cols-1 gap-10 md:grid-cols-3 mb-8">
        <div v-for="(member) in mainMember" v-bind:key="member.id" class="bg-white p-6 rounded-lg shadow-lg">
          <h1 class="text-2xl font-bold mb-2 text-gray-800">{{ member.name }}</h1>
          <h2 class="text-1xl font-medium mb-1 text-black">{{ member.position }}</h2>
          <p class="text-gray-600">{{ member.awards }}</p>
        </div>
      </div>
      <h2 class="text-xl lg:text-3xl font-bold mb-3 text-blue-500">
        2.执理教研团队
      </h2>

      <div class="grid w-full grid-cols-1 gap-3 sm:grid-cols-3 mb-8">
        <div v-for="(member) in teacherMember" v-bind:key="member.id" class="bg-white m-5 p-4 rounded-lg shadow-lg">
          <h1 class="text-xl font-bold mb-2 text-gray-800">{{ member.name }}</h1>
          <h2 class="text-lg font-light mb-3 text-black">{{ member.school }}</h2>
          <p class="text-gray-600">{{ member.awards }}</p>
        </div>
      </div>
    </section>

    <section class="h-full" id="partners">
      <div class="container p-4 mx-auto text-center">
        <h2 class="text-4xl font-bold">执理的合作伙伴</h2>
      </div>
      <div class="container flex flex-wrap justify-center mx-auto text-coolGray-600">
        <div v-for="(item) in partners" v-bind:key="item.id" class="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <div v-if="item.url !== null">
            <img class="fill-current max-h-16" :src="item.url" />
          </div>
          <div v-else>
            <h1 class="text-black font-bold text-2xl text-current">
              {{ item.txt }}
            </h1>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "index",
  data: function (){
    return {
      mainMember :[
        {
          id: 1,
          name: "闫鑫",
          position: "CEO,联合创始人",
          awards: "曾获得CCPC铜奖，HBCPC金奖，GBLT铜奖，NOIP提高组一等奖等众多信息学竞赛奖项。拥有4年各阶段竞赛教学经历，竞赛教学经验丰富，学生获得省级一等奖二等奖若干。"
        },
        {
          id: 2,
          name:"陈嘉钰",
          position: "CTO,联合创始人",
          awards: "曾获得NOI银奖等众多信息学竞赛奖项。拥有3年各阶段竞赛教学经历，竞赛教学经验丰富，学生获得省级一等奖二等奖若干。"
        },
        {
          id: 3,
          name: "卢翼",
          position: "教学负责人,联合创始人",
          awards: "曾获得ICPC区域赛银奖，蓝桥杯全国二等奖，JSCPC金奖，NOIP提高组一等奖等众多信息学竞赛奖项。拥有4年各阶段竞赛教学经历，竞赛教学经验丰富，学生获得省级一等奖二等奖若干。"
        },
      ],
      teacherMember: [
        {
          id: 1,
          name: "刘老师",
          school: "华中师范大学",
          awards: "曾获ICPC EC-Final银牌，ICPC金牌等竞赛奖项。"
        },
        {
          id: 2,
          name: "朱老师",
          school: "武汉大学",
          awards: "曾获ICPC金牌，银牌，NOI铜牌，APIO银牌等竞赛奖项。"
        },
        {
          id: 3,
          name: "刘老师",
          school: "东北大学",
          awards: "曾获ICPC银牌，NOI铜牌等竞赛奖项。"
        },
        {
          id: 4,
          name: "吴老师",
          school: "东北大学",
          awards: "曾获NOI银牌，CCPC铜牌等竞赛奖项。"
        },
        {
          id: 5,
          name: "孙老师",
          school: "西安电子科技大学",
          awards: "曾获得NOI铜牌、APIO铜奖等竞赛奖项。"
        },
        {
          id: 6,
          name: "董老师",
          school: "北京邮电大学",
          awards: "曾获得NOI铜牌、CTSC铜牌、WC铜牌等竞赛奖项。",
        },
        {
          id: 7,
          name: "杨老师",
          school: "北京邮电大学",
          awards: "曾获得NOI铜牌等竞赛奖项。"
        },
        {
          id: 8,
          name: "金老师",
          school: "北京航空航天大学",
          awards: "金牌讲师，学生曾获得NOI铜牌、银牌不等。"
        },
      ],
      partners: [
        {
          id : 1,
          url : "img/luogu.png"
        },
        {
          id : 2,
          url : "img/qingsong.png"
        },
        {
          id : 3,
          url : "img/mathar.png"
        },
        {
          id : 4,
          url : "img/saikr.png"
        },
        {
          id : 5,
          url : "img/yxd.png"
        },
        {
          id : 6,
          url : "img/jikechenxing.png",
          txt : "极客晨星"
        },
        {
          id : 7,
          url : "img/benbu2.jpeg",
          txt : "蚌埠二中"
        },
        {
          id : 8,
          url : "img/fuzhou32.jpeg",
          txt : "福州32中"
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>