const fetch = require('node-fetch');

// Exporter endpoint
const dispatchPostUri = process.env.DISPATCH_POST_URI;
const dispatchMinBatchSize = parseInt(process.env.DISPATCH_MIN_BATCH_SIZE || 1);

async function dispatch(queue, force) {
    if (queue.length !== 0 && (force || queue.length >= dispatchMinBatchSize)) {
        console.log('[telemetry-dispatcher:dispatch] Dispatching', queue.length, 'telemetry events');;
        const requestBody = JSON.stringify(queue);
        queue.splice(0); 

        if (!dispatchPostUri){
            console.log('[telemetry-dispatcher:dispatch] dispatchPostUri not found. Discarding log events from the queue');
            return;
        } 

        await fetch(dispatchPostUri, {
            method: 'POST',
            body: requestBody,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

module.exports = {
    dispatch
}
