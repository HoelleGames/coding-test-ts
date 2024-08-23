/**
 * 
 * Task 4 - Timed Network Request Cancellation
 *
 * Objective:
 * Implement a function that sends a network request and automatically cancels it
 * if it doesn't complete within a specified timeout period. 
 */

/**
 * @param url - The URL to fetch
 * @param timeoutMs - The timeout duration in milliseconds
 * @returns A Promise that resolves with the response data or rejects with an error
 */
async function timedFetch(url: string, timeoutMs: number): Promise<any> {
  const response = await fetch(url);
  return await response.json();
}

// -------------------------------------------------------------------------------------------------
// Test the timedFetch function
// -------------------------------------------------------------------------------------------------

async function testTimedFetch() {
    console.log('Testing timedFetch function (5s timeout)...');
    const successfulResult = await timedFetch('https://httpbin.org/delay/3', 5000);
    console.log('Successful Result:', successfulResult);

    console.log('Testing timedFetch function (3s timeout)...');
    const timeoutResult = await timedFetch('https://httpbin.org/delay/3', 1000);
    console.log('Timeout Result:', timeoutResult);
}

testTimedFetch();
