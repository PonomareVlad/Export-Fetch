export const fetch = globalThis.fetch || (() => {
    throw new Error("global fetch is not available!")
});

export default fetch
