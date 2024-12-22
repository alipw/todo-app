<script>
    import Stars from "$lib/components/stars.svelte";
</script>

<div class="bg-primary w-screen h-screen max-h-screen overflow-hidden">
    {#each Array(20) as _, index (index)}
        <Stars></Stars>
    {/each}
    <div
        class="top-0 left-0 w-full flex flex-row items-center justify-start bg-secondary p-2 px-10 gap-6"
    >
        <img
            src="/hantu.gif"
            alt="Character animation sheet"
            class="h-24 mx-4 my-2"
        />
        <div class="flex flex-col items-start justify-start gap-2">
            <p class="text-font-primary text-4xl drop-shadow-md">TASKPLAYER</p>
            <p class="text-white text-md">Get Started</p>
        </div>
        <div class="ml-auto">
            <a href="/login">
                <button class="bg-white text-primary px-4 py-2 rounded-md">
                    Login
                </button>
            </a>
        </div>
    </div>
    <div class="w-full bg-primary h-6"></div>
    <div class="w-full bg-secondary h-2"></div>
    <div class="w-full bg-primary h-4"></div>
    <div class="w-full bg-secondary h-1"></div>

    <div class="w-full flex flex-row h-full px-40">
        <div class="w-full flex flex-col items-center gap-4">
            <!-- First row - single image -->
            <div>
                <img
                    src="/birb 1.png"
                    alt="Character animation sheet"
                    class="h-24 mx-4 my-2"
                />
            </div>
            <!-- Second row - two images with flex -->
            <div class="flex flex-row justify-center gap-8">
                <img
                    src="/sheep 1.png"
                    alt="Character animation sheet"
                    class="h-24 mx-4 my-2"
                />
                <img
                    src="/frog 1.png"
                    alt="Character animation sheet"
                    class="h-24 mx-4 my-2"
                />
            </div>
            <div class="text-white font-dynapuff text-md w-1/2 pl-20">
                TaskPlayer adalah platform yang menggabungkan RPG seru dengan
                to-do list yang produktif. Selesaikan tugas harianmu, naik
                level, dan dapatkan hadiah layaknya seorang pahlawan dalam game!
            </div>
        </div>
        <div class="w-full flex flex-col items-center gap-4 font-dynapuff">
            <h1 class="font-dynapuff text-2xl text-white mb-4">
                Sign Up For Free
            </h1>
            <div class="flex flex-col gap-4 w-full items-center gap-y-8">
                <input
                    type="text"
                    class="bg-text-input font-dynapuff p-2 rounded-md w-1/2"
                    placeholder="Username"
                />
                <input
                    type="text"
                    class="bg-text-input font-dynapuff p-2 rounded-md w-1/2"
                    placeholder="Email"
                />
                <input
                    type="text"
                    class="bg-text-input font-dynapuff p-2 rounded-md w-1/2"
                    placeholder="Password"
                />
                <input
                    type="text"
                    class="bg-text-input font-dynapuff p-2 rounded-md w-1/2"
                    placeholder="Confirm Password"
                />
                <p class="text-white text-sm font-dynapuff w-1/2">
                    Username must be 1 to 20 characters, containing only letters
                    a to z, numbers 0 to 9, hyphens, or underscores, and cannot
                    include any inappropriate terms.
                </p>
                <button
                    class="bg-white text-primary px-4 py-2 rounded-md w-1/2 font-sans"
                >
                    LETS BEGIN OUR JOURNEY!
                </button>
            </div>
        </div>
    </div>
    <!-- Cloud background image -->
    <div
        class="absolute bottom-0 w-full h-[80%] bg-cover bg-top bg-no-repeat"
        style="background-image: url('/cloud.png')"
    ></div>
</div>
