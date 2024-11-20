<script>
    import { onMount } from "svelte";

    let size = 1;
    let opacity = 1;
    let horizontalLength = 1;
    let verticalLength = 1;
    let pos_x = 0;
    let pos_y = 0;

    function getRandomSize() {
        return Math.random() * 40 + 1;
    }

    function getRandomDuration() {
        return Math.random() * 2000 + 1000;
    }

    function getRandomPosition() {
        pos_x = Math.random() * 95;
        pos_y = Math.random() * 95;
    }

    function updateStar() {
        size = getRandomSize();
        const ratio = Math.random() * 0.7 + 0.3;
        horizontalLength = size;
        verticalLength = size * ratio;
        if (Math.random() > 0.5) {
            [horizontalLength, verticalLength] = [
                verticalLength,
                horizontalLength,
            ];
        }
        opacity = Math.random() * 0.5 + 0.5;
    }

    getRandomPosition();
    onMount(() => {
        updateStar();
        setInterval(updateStar, getRandomDuration());
    });
</script>

<div
    class="star"
    style="
      --horizontal: {horizontalLength}px; 
      --vertical: {verticalLength}px; 
      --opacity: {opacity};
      margin-left: {pos_x}vw;
      margin-top: {pos_y}vh;
    "
>
    <div class="line-container horizontal">
        <div class="horizontal-line"></div>
    </div>
    <div class="line-container vertical">
        <div class="vertical-line"></div>
    </div>
</div>

<style>
    .star {
        position: absolute;
        width: var(--horizontal);
        height: var(--vertical);
        opacity: var(--opacity);
        transition: all 0.5s ease-in-out;
        overflow: hidden;
    }

    .line-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .horizontal-line {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
        height: calc(var(--horizontal) * 0.2);
        background: linear-gradient(
            to right,
            transparent,
            gray 20%,
            gray 80%,
            transparent
        );
    }

    .vertical-line {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
        width: calc(var(--vertical) * 0.2);
        background: linear-gradient(
            to bottom,
            transparent,
            white 20%,
            white 80%,
            transparent
        );
    }
</style>
