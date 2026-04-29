
// gameTiming.js
// Helper function to compute elapsed ticks based on last processed time and current time
export const computeElapsedTicks = (lastProcessedAt, currentTime, tickMs = 1000) => {
    if (!lastProcessedAt || lastProcessedAt === null) {
        return { elapsedTicks: 0, nextProcessedAt: currentTime };
    }

    if ( currentTime <= lastProcessedAt ) {
        return { elapsedTicks: 0, nextProcessedAt: lastProcessedAt + tickMs };
    }

    const elapsedTime = currentTime - lastProcessedAt;
    const elapsedTicks = Math.floor(elapsedTime / tickMs);

    return { elapsedTicks, nextProcessedAt: lastProcessedAt + elapsedTicks * tickMs };
}