export const setConnectionTimeout = (request, reject, timeoutInMs = 0) => {
    if (!timeoutInMs) {
        return;
    }
    request.on("socket", (socket) => {
        if (socket.connecting) {
            const timeoutId = setTimeout(() => {
                request.destroy();
                reject(Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
                    name: "TimeoutError",
                }));
            }, timeoutInMs);
            socket.on("connect", () => {
                clearTimeout(timeoutId);
            });
        }
    });
};
