<template>
  <div id="app">
    <div class="prism">
      <div id="flashes" class="relative z-20">
      </div>
    </div>

    <main id="page-content" class="">
      <div class="prism">
        <div style="min-height: calc(100vh - 72px)" class="flex items-center justify-center overflow-x-clip">
          <div class="container mx-auto px-4 py-8">
            <div class="flex flex-col lg:flex-row items-center lg:items-start justify-center md:gap-4">
              <div class="flex flex-col md:flex-row lg:flex-col items-center lg:items-start gap-6 md:gap-8 md:max-w-2xl lg:max-w-lg">
                <video src="https://sb.kaleidousercontent.com/67418/x/9289c7b8dd/manuel_compressed.mp4" poster="https://sb.kaleidousercontent.com/67418/840x560/d749ed76de/manuel-poster.jpg" preload="auto" loop class="max-w-[320px] lg:max-w-[420px] rounded-lg shadow-md"></video>

                <div class="flex flex-col gap-4">
                  <h1 class="text-3xl font-bold text-center md:text-left">이미지에서 배경을 제거하세요</h1>
                  <p class="text-gray-700 text-center md:text-left">
                    100 % 자동 및
                    <span class="py-1 px-4 bg-yellow-200">
                      무료
                    </span>
                  </p>
                </div>
              </div>

              <div class="relative group flex flex-col gap-4 md:gap-8 max-w-md mt-8 md:mt-28">
                <div class="dropzone-enabled"></div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md">이미지 업로드</button>
                <p class="text-center mt-2">또는 파일 놓기,</p>
                <p class="text-center">이미지 붙여넣기 또는 URL</p>
                <p class="text-center">이미지가 없으신가요?다음 중 하나를 사용해 보세요:</p>
                <div class="flex justify-center mt-4">
                  <img src="https://static.remove.bg/uploader-examples/person/4_thumbnail.jpg" alt="Example image" class="mx-2 rounded-md shadow-md">
                  <img src="https://static.remove.bg/uploader-examples/animal/4_thumbnail.jpg" alt="Example image" class="mx-2 rounded-md shadow-md">
                  <img src="https://static.remove.bg/uploader-examples/car/6_thumbnail.jpg" alt="Example image" class="mx-2 rounded-md shadow-md">
                  <img src="https://static.remove.bg/uploader-examples/product/9_thumbnail.jpg" alt="Example image" class="mx-2 rounded-md shadow-md">
                </div>
              </div>
            </div>

            <div class="mt-12">
              <h2 class="text-2xl font-bold text-center mb-4">놀라운 품질</h2>
              <p class="text-center text-gray-700">인물제품동물자동차그래픽</p>
              <div class="flex justify-center mt-4">
                <img src="//sb.kaleidousercontent.com/67418/992x558/ef4cc24685/people-org.png" alt="Example image" class="mx-2 rounded-md shadow-md">
                <img src="//sb.kaleidousercontent.com/67418/992x558/7632960ff9/people.png" alt="Example image" class="mx-2 rounded-md shadow-md">
              </div>
            </div>

            <div class="mt-12">
              <h3 class="text-xl font-bold text-center mb-4">클릭 한 번으로 5초 만에 100% 자동 배경 제거</h3>
              <p class="text-center text-gray-700 mb-4">사진 배경을 수동으로 지우는 것보다 이 세상에는 재미있는 일이 수천 수만가지 있습니다.</p>
              <p class="text-center text-gray-700 mb-4">Remove.bg의 스마트 AI로 사진 편집 시간은 줄이고 더 흥미로운 일을 시작해보세요!</p>
              <div class="flex justify-center">
                <img src="https://sb.kaleidousercontent.com/67418/658x756/361846cee7/all-pages-2.png" alt="Example image" class="rounded-md shadow-md">
              </div>
            </div>

            <div class="mt-12">
              <h2 class="text-2xl font-bold text-center mb-4">클릭 한 번으로 이미지 배경을 투명하게!</h2>
              <p class="text-center text-gray-700">인물제품동물자동차그래픽</p>
              <div class="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <img src="//sb.kaleidousercontent.com/67418/604x802/ed396e87c5/people-1.jpg" alt="원본" class="mx-auto rounded-md shadow-md">
                  <p class="text-center">원본</p>
                </div>
                <div>
                  <img src="//sb.kaleidousercontent.com/67418/604x802/51d867647f/people-1-transparent2.jpg" alt="배경 제거" class="mx-auto rounded-md shadow-md">
                  <p class="text-center">배경 제거</p>
                </div>
                <div>
                  <img src="//sb.kaleidousercontent.com/67418/604x802/b8d74bcca6/people-skater-floor-fix.png" alt="새 배경 추가" class="mx-auto rounded-md shadow-md">
                  <p class="text-center">새 배경 추가</p>
                </div>
                <div>
                  <img src="//sb.kaleidousercontent.com/67418/604x802/e74824a7ae/people-endless-possibilities.jpg" alt="무한한 가능성" class="mx-auto rounded-md shadow-md">
                  <p class="text-center">무한한 가능성</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
</script>
