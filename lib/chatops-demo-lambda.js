exports.handler = async (event) => {
    console.info("EVENT\n" + JSON.stringify(event, null, 2))

    if (event.Error == 1) {
        throw new Error("Something went wrong!!!!")
    }
    else {
        return {
            statusCode: 200,
            body: JSON.stringify('Hello from the demo ChatBot Lambda!')
        };
    }
};
