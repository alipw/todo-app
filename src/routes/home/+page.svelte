<script>
    import Stars from "$lib/components/stars.svelte";
</script>

<div class="bg-transparent w-screen h-screen max-h-screen overflow-hidden">
    {#each Array(20) as _, index (index)}
        <Stars></Stars>
    {/each}
    <div
        class="top-0 left-0 w-full flex flex-row items-center justify-start p-2 px-10 gap-6"
    >
        <img
            src="/hantu.gif"
            alt="Character animation sheet"
            class="h-24 mx-4 my-2"
        />
        <div class="flex flex-row items-center justify-start gap-x-8">
            <div class="flex flex-col items-start justify-start gap-2">
                <p class="text-font-primary text-4xl drop-shadow-md">
                    TASKPLAYER
                </p>
            </div>
            <p class="text-white text-md">Dashboard</p>
            <p class="text-white text-md">Task</p>
            <p class="text-white text-md">shop</p>
            <p class="text-white text-md">group</p>
        </div>
    </div>

    <div class="w-full flex flex-row h-full">
        <div
            class="w-full flex flex-row items-start gap-4 mx-auto font-sans text-white text-sm relative justify-between px-20"
        >
            <div class="w-full flex flex-row justify-center relative">
                <div class="w-fit absolute z-10">
                    <img src="TitleBox_64x16.png" alt="Habits" class="w-32" />
                    <span
                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
                    >
                        Habits
                    </span>
                </div>
                <img
                    src="Spritesheet_UI_Flat 2.png"
                    alt="Habits"
                    class="h-[80vh] mt-10 object-cover absolute"
                />

                <button
                    class="bg-white text-primary px-4 py-2 rounded-md font-sans mt-20 z-10 w-[75%] border-4 border-black text-start"
                >
                    ADD A HABIT
                </button>
            </div>
            <div class="w-full flex flex-row justify-center relative">
                <div class="w-fit absolute z-10">
                    <img src="TitleBox_64x16.png" alt="Habits" class="w-32" />
                    <span
                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
                    >
                        Dailies
                    </span>
                </div>
                <img
                    src="Spritesheet_UI_Flat 3.png"
                    alt="Habits"
                    class="h-[80vh] mt-10 object-cover absolute"
                />

                <button
                    class="bg-white text-primary px-4 py-2 rounded-md font-sans mt-20 z-10 w-[75%] border-4 border-black text-start"
                >
                    ADD A DAILY
                </button>
            </div>
            <div class="w-full flex flex-row justify-center relative">
                <div class="w-fit absolute z-10">
                    <img src="TitleBox_64x16.png" alt="Habits" class="w-32" />
                    <span
                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
                    >
                        Todos
                    </span>
                </div>
                <img
                    src="Spritesheet_UI_Flat 4.png"
                    alt="Habits"
                    class="h-[80vh] mt-10 object-cover absolute"
                />

                <button
                    class="bg-white text-primary px-4 py-2 rounded-md font-sans mt-20 z-10 w-[75%] border-4 border-black text-start"
                >
                    ADD A TODO
                </button>
            </div>
        </div>
    </div>
    <!-- Cloud background image -->
    <div
        class="absolute bottom-0 w-full h-[100%] bg-cover bg-top bg-no-repeat z-[-10]"
        style="background-image: url('/Bg.png')"
    ></div>
</div>
