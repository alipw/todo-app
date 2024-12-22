<script>
    import { goto } from "$app/navigation";
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
            <p class="text-white text-md">Welcome Back!</p>
        </div>
    </div>
    <div class="w-full bg-primary h-6"></div>
    <div class="w-full bg-secondary h-2"></div>
    <div class="w-full bg-primary h-4"></div>
    <div class="w-full bg-secondary h-1"></div>

    <div class="w-full flex flex-row h-full">
        <div
            class="w-1/2 flex flex-col items-center gap-4 font-dynapuff mx-auto"
        >
            <h1 class="font-dynapuff text-2xl text-white mb-4">
                Login to Your Account
            </h1>
            <div class="flex flex-col gap-4 w-full items-center gap-y-8">
                <input
                    type="text"
                    class="bg-text-input font-dynapuff p-2 rounded-md w-1/2"
                    placeholder="Username or Email"
                />
                <input
                    type="password"
                    class="bg-text-input font-dynapuff p-2 rounded-md w-1/2"
                    placeholder="Password"
                />
                <button
                    class="bg-white text-primary px-4 py-2 rounded-md font-sans w-1/2"
                    on:click={() => goto("/home")}
                >
                    Login
                </button>
                <p class="text-white text-sm font-dynapuff">
                    Don't have an account? <a href="/" class="underline"
                        >Register here</a
                    >
                </p>
            </div>
        </div>
    </div>
    <!-- Cloud background image -->
    <div
        class="absolute bottom-0 w-full h-[80%] bg-cover bg-top bg-no-repeat pointer-events-none"
        style="background-image: url('/cloud.png')"
    ></div>
</div>
